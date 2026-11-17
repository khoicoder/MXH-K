import {
  Injectable,
  BadRequestException,
  ConflictException,
  NotFoundException,
  ForbiddenException,
  Logger,
} from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { RelationshipStatusDto } from '../dto/social.dto';
import { NotificationService } from '../../../../../notification-service/src/modules/notification/services/notification.service';

@Injectable()
export class SocialGraphService {
  private readonly logger = new Logger(SocialGraphService.name);

  constructor(private readonly prisma: PrismaService) {}

  private sortPair(id1: string, id2: string): [string, string] {
    return id1 < id2 ? [id1, id2] : [id2, id1];
  }

  // ================= FRIENDSHIP =================

  async sendFriendRequest(senderId: string, receiverId: string) {
    if (senderId === receiverId) {
      throw new BadRequestException('Cannot send friend request to yourself');
    }

    // Check block rules
    const isBlocked = await this.isBlockActive(senderId, receiverId);
    if (isBlocked) {
      throw new ForbiddenException('Cannot interact with this user due to privacy/blocking rules');
    }

    // Check if already friends
    const [userAId, userBId] = this.sortPair(senderId, receiverId);
    const existingFriendship = await this.prisma.friendship.findUnique({
      where: { userAId_userBId: { userAId, userBId } },
    });
    if (existingFriendship) {
      throw new ConflictException('Users are already friends');
    }

    // Check existing pending requests
    const existingReq = await this.prisma.friendRequest.findFirst({
      where: {
        OR: [
          { senderId, receiverId, status: 'PENDING' },
          { senderId: receiverId, receiverId: senderId, status: 'PENDING' },
        ],
      },
    });

    if (existingReq) {
      if (existingReq.senderId === senderId) {
        throw new ConflictException('Friend request already sent');
      } else {
        // Reverse request exists -> Automatically accept!
        return this.acceptFriendRequest(existingReq.id, senderId);
      }
    }

    const created = await this.prisma.friendRequest.create({
      data: {
        senderId,
        receiverId,
        status: 'PENDING',
      },
    });

    try {
      await NotificationService.dispatchNotification({
        recipientId: receiverId,
        actorId: senderId,
        type: 'FRIEND_REQ',
        targetType: 'USER',
        targetId: senderId,
        summary: 'đã gửi cho bạn một lời mời kết bạn.',
      });
    } catch {}

    return created;
  }

  async acceptFriendRequest(requestId: string, currentUserId: string) {
    const request = await this.prisma.friendRequest.findUnique({
      where: { id: requestId },
    });

    if (!request) throw new NotFoundException('Friend request not found');
    if (request.receiverId !== currentUserId) {
      throw new ForbiddenException('Not authorized to accept this friend request');
    }
    if (request.status !== 'PENDING') {
      throw new BadRequestException(`Request is already ${request.status.toLowerCase()}`);
    }

    const [userAId, userBId] = this.sortPair(request.senderId, request.receiverId);

    // Transaction: mark accepted and establish friendship
    const result = await this.prisma.$transaction(async (tx) => {
      await tx.friendRequest.update({
        where: { id: requestId },
        data: { status: 'ACCEPTED' },
      });

      const friendship = await tx.friendship.upsert({
        where: { userAId_userBId: { userAId, userBId } },
        create: { userAId, userBId },
        update: {},
      });

      return friendship;
    });

    try {
      await NotificationService.dispatchNotification({
        recipientId: request.senderId,
        actorId: currentUserId,
        type: 'FRIEND_ACCEPT',
        targetType: 'USER',
        targetId: currentUserId,
        summary: 'đã chấp nhận lời mời kết bạn của bạn.',
      });
    } catch {}

    return result;
  }

  async rejectFriendRequest(requestId: string, currentUserId: string) {
    const request = await this.prisma.friendRequest.findUnique({
      where: { id: requestId },
    });

    if (!request) throw new NotFoundException('Friend request not found');
    if (request.receiverId !== currentUserId) {
      throw new ForbiddenException('Not authorized to reject this friend request');
    }

    return this.prisma.friendRequest.update({
      where: { id: requestId },
      data: { status: 'REJECTED' },
    });
  }

  async cancelFriendRequest(requestId: string, currentUserId: string) {
    const request = await this.prisma.friendRequest.findUnique({
      where: { id: requestId },
    });

    if (!request) throw new NotFoundException('Friend request not found');
    if (request.senderId !== currentUserId) {
      throw new ForbiddenException('Not authorized to cancel this friend request');
    }

    return this.prisma.friendRequest.update({
      where: { id: requestId },
      data: { status: 'CANCELLED' },
    });
  }

  async removeFriend(currentUserId: string, targetUserId: string) {
    const [userAId, userBId] = this.sortPair(currentUserId, targetUserId);
    await this.prisma.friendship.deleteMany({
      where: { userAId, userBId },
    });
    return { success: true, message: 'Friend removed' };
  }

  async getFriendsList(userId: string) {
    const friendships = await this.prisma.friendship.findMany({
      where: {
        OR: [{ userAId: userId }, { userBId: userId }],
      },
    });

    const friendIds = friendships.map((f) => (f.userAId === userId ? f.userBId : f.userAId));
    if (friendIds.length === 0) return [];

    try {
      const UserPrisma = require('../../../../../user-service/src/prisma/client').PrismaClient;
      const userClient = new UserPrisma({ datasources: { db: { url: process.env.USER_DATABASE_URL } } });
      const profiles = await userClient.userProfile.findMany({
        where: { userId: { in: friendIds } },
        select: { userId: true, displayName: true, username: true, avatarUrl: true, bio: true },
      });
      await userClient.$disconnect();
      return profiles.map((p: any) => ({
        id: p.userId,
        name: p.displayName || p.username,
        username: p.username,
        avatar: p.avatarUrl || null,
        bio: p.bio || '',
      }));
    } catch {
      return friendIds.map((id) => ({ id, name: `User ${id.substring(0, 6)}`, avatar: null }));
    }
  }

  async getPendingRequests(userId: string) {
    const [received, sent] = await Promise.all([
      this.prisma.friendRequest.findMany({
        where: { receiverId: userId, status: 'PENDING' },
        orderBy: { createdAt: 'desc' },
      }),
      this.prisma.friendRequest.findMany({
        where: { senderId: userId, status: 'PENDING' },
        orderBy: { createdAt: 'desc' },
      }),
    ]);

    const userIds = Array.from(new Set([
      ...received.map((r) => r.senderId),
      ...sent.map((r) => r.receiverId),
    ])) as string[];

    let profileMap: Record<string, any> = {};
    if (userIds.length > 0) {
      try {
        const UserPrisma = require('../../../../../user-service/src/prisma/client').PrismaClient;
        const userClient = new UserPrisma({ datasources: { db: { url: process.env.USER_DATABASE_URL } } });
        const profiles = await userClient.userProfile.findMany({
          where: { userId: { in: userIds } },
          select: { userId: true, displayName: true, username: true, avatarUrl: true },
        });
        profileMap = Object.fromEntries(profiles.map((p: any) => [p.userId, p]));
        await userClient.$disconnect();
      } catch {}
    }

    const enrichedReceived = received.map((r) => {
      const prof = profileMap[r.senderId];
      return {
        id: r.id,
        senderId: r.senderId,
        senderName: prof?.displayName || prof?.username || 'Người dùng MXH-K',
        avatar: prof?.avatarUrl || null,
        createdAt: r.createdAt,
      };
    });

    const enrichedSent = sent.map((r) => {
      const prof = profileMap[r.receiverId];
      return {
        id: r.id,
        receiverId: r.receiverId,
        receiverName: prof?.displayName || prof?.username || 'Người dùng MXH-K',
        avatar: prof?.avatarUrl || null,
        createdAt: r.createdAt,
      };
    });

    return { received: enrichedReceived, sent: enrichedSent };
  }

  async getFriendSuggestions(userId: string, limit = 10) {
    // 1. Get friend IDs
    const friendships = await this.prisma.friendship.findMany({
      where: {
        OR: [{ userAId: userId }, { userBId: userId }],
      },
    });
    const friendIds = friendships.map((f) => (f.userAId === userId ? f.userBId : f.userAId));

    // 2. Get pending request target IDs
    const pending = await this.prisma.friendRequest.findMany({
      where: {
        OR: [
          { senderId: userId, status: 'PENDING' },
          { receiverId: userId, status: 'PENDING' },
        ],
      },
    });
    const pendingUserIds = pending.map((p) => (p.senderId === userId ? p.receiverId : p.senderId));

    // 3. Exclude self, friends, pending
    const excludeIds = Array.from(new Set([userId, ...friendIds, ...pendingUserIds])) as string[];

    try {
      const UserPrisma = require('../../../../../user-service/src/prisma/client').PrismaClient;
      const userClient = new UserPrisma({ datasources: { db: { url: process.env.USER_DATABASE_URL } } });
      const candidates = await userClient.userProfile.findMany({
        where: {
          userId: { notIn: excludeIds },
        },
        take: limit,
        select: { userId: true, displayName: true, username: true, avatarUrl: true, bio: true },
      });
      await userClient.$disconnect();

      return candidates.map((c: any) => ({
        id: c.userId,
        name: c.displayName || c.username,
        username: c.username,
        avatar: c.avatarUrl || null,
        bio: c.bio || '',
      }));
    } catch (err: any) {
      this.logger.warn(`Could not load friend suggestions: ${err.message}`);
      return [];
    }
  }

  // ================= FOLLOW =================

  async followUser(followerId: string, followingId: string) {
    if (followerId === followingId) {
      throw new BadRequestException('Cannot follow yourself');
    }

    const isBlocked = await this.isBlockActive(followerId, followingId);
    if (isBlocked) {
      throw new ForbiddenException('Cannot follow this user due to privacy/blocking rules');
    }

    return this.prisma.follow.upsert({
      where: {
        followerId_followingId: { followerId, followingId },
      },
      create: { followerId, followingId },
      update: {},
    });
  }

  async unfollowUser(followerId: string, followingId: string) {
    await this.prisma.follow.deleteMany({
      where: { followerId, followingId },
    });
    return { success: true, message: 'Unfollowed successfully' };
  }

  async getFollowers(userId: string) {
    const records = await this.prisma.follow.findMany({
      where: { followingId: userId },
      select: { followerId: true, createdAt: true },
      orderBy: { createdAt: 'desc' },
    });
    return records.map((r) => r.followerId);
  }

  async getFollowing(userId: string) {
    const records = await this.prisma.follow.findMany({
      where: { followerId: userId },
      select: { followingId: true, createdAt: true },
      orderBy: { createdAt: 'desc' },
    });
    return records.map((r) => r.followingId);
  }

  // ================= BLOCK =================

  async blockUser(blockerId: string, blockedId: string) {
    if (blockerId === blockedId) {
      throw new BadRequestException('Cannot block yourself');
    }

    const [userAId, userBId] = this.sortPair(blockerId, blockedId);

    return this.prisma.$transaction(async (tx) => {
      // 1. Create block
      const block = await tx.block.upsert({
        where: { blockerId_blockedId: { blockerId, blockedId } },
        create: { blockerId, blockedId },
        update: {},
      });

      // 2. Break friendship if existed
      await tx.friendship.deleteMany({
        where: { userAId, userBId },
      });

      // 3. Remove mutual follows
      await tx.follow.deleteMany({
        where: {
          OR: [
            { followerId: blockerId, followingId: blockedId },
            { followerId: blockedId, followingId: blockerId },
          ],
        },
      });

      // 4. Cancel any pending friend requests between them
      await tx.friendRequest.updateMany({
        where: {
          OR: [
            { senderId: blockerId, receiverId: blockedId, status: 'PENDING' },
            { senderId: blockedId, receiverId: blockerId, status: 'PENDING' },
          ],
        },
        data: { status: 'CANCELLED' },
      });

      return block;
    });
  }

  async unblockUser(blockerId: string, blockedId: string) {
    await this.prisma.block.deleteMany({
      where: { blockerId, blockedId },
    });
    return { success: true, message: 'User unblocked' };
  }

  async getBlockedUsers(userId: string) {
    const records = await this.prisma.block.findMany({
      where: { blockerId: userId },
      select: { blockedId: true, createdAt: true },
    });
    return records.map((r) => r.blockedId);
  }

  // ================= RELATIONSHIP EVALUATOR =================

  async isBlockActive(user1: string, user2: string): Promise<boolean> {
    const block = await this.prisma.block.findFirst({
      where: {
        OR: [
          { blockerId: user1, blockedId: user2 },
          { blockerId: user2, blockedId: user1 },
        ],
      },
    });
    return !!block;
  }

  async getRelationship(currentUserId: string, targetUserId: string): Promise<RelationshipStatusDto> {
    const [userAId, userBId] = this.sortPair(currentUserId, targetUserId);

    const [friendship, following, followedBy, blockedByMe, blockedByThem, pendingReq] = await Promise.all([
      this.prisma.friendship.findUnique({
        where: { userAId_userBId: { userAId, userBId } },
      }),
      this.prisma.follow.findUnique({
        where: { followerId_followingId: { followerId: currentUserId, followingId: targetUserId } },
      }),
      this.prisma.follow.findUnique({
        where: { followerId_followingId: { followerId: targetUserId, followingId: currentUserId } },
      }),
      this.prisma.block.findUnique({
        where: { blockerId_blockedId: { blockerId: currentUserId, blockedId: targetUserId } },
      }),
      this.prisma.block.findUnique({
        where: { blockerId_blockedId: { blockerId: targetUserId, blockedId: currentUserId } },
      }),
      this.prisma.friendRequest.findFirst({
        where: {
          OR: [
            { senderId: currentUserId, receiverId: targetUserId, status: 'PENDING' },
            { senderId: targetUserId, receiverId: currentUserId, status: 'PENDING' },
          ],
        },
      }),
    ]);

    let friendRequestStatus: 'PENDING_SENT' | 'PENDING_RECEIVED' | 'NONE' = 'NONE';
    if (pendingReq) {
      friendRequestStatus = pendingReq.senderId === currentUserId ? 'PENDING_SENT' : 'PENDING_RECEIVED';
    }

    return {
      targetUserId,
      isFriend: !!friendship,
      isFollowing: !!following,
      isFollowedBy: !!followedBy,
      isBlockedByMe: !!blockedByMe,
      isBlockedByThem: !!blockedByThem,
      friendRequestStatus,
      requestId: pendingReq?.id,
    };
  }
}
