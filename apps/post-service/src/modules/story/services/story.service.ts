import {
  Injectable,
  NotFoundException,
  ForbiddenException,
  BadRequestException,
  Logger,
} from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreateStoryDto, StoryTypeDto, StoryVisibilityDto } from '../dto/story.dto';

let UserPrismaClient: any;
let AuthPrismaClient: any;
let SocialPrismaClient: any;

try {
  UserPrismaClient = require('../../../../../user-service/src/prisma/client').PrismaClient;
} catch {}
try {
  AuthPrismaClient = require('../../../../../auth-service/src/prisma/client').PrismaClient;
} catch {}
try {
  SocialPrismaClient = require('../../../../../social-graph-service/src/prisma/client').PrismaClient;
} catch {}

@Injectable()
export class StoryService {
  private readonly logger = new Logger(StoryService.name);
  private userPrisma?: any;
  private authPrisma?: any;
  private socialPrisma?: any;

  constructor(private readonly prisma: PrismaService) {}

  private getUserPrisma(): any {
    if (!this.userPrisma && UserPrismaClient) {
      this.userPrisma = new UserPrismaClient({
        datasources: { db: { url: process.env.USER_DATABASE_URL } },
      });
    }
    return this.userPrisma;
  }

  private getAuthPrisma(): any {
    if (!this.authPrisma && AuthPrismaClient) {
      this.authPrisma = new AuthPrismaClient({
        datasources: { db: { url: process.env.AUTH_DATABASE_URL } },
      });
    }
    return this.authPrisma;
  }

  private getSocialPrisma(): any {
    if (!this.socialPrisma && SocialPrismaClient) {
      this.socialPrisma = new SocialPrismaClient({
        datasources: { db: { url: process.env.SOCIAL_DATABASE_URL } },
      });
    }
    return this.socialPrisma;
  }

  // ================= PROFILE RESOLUTION HELPER =================
  async resolveProfiles(userIds: string[]): Promise<Record<string, { displayName: string; avatarUrl: string | null }>> {
    const map: Record<string, { displayName: string; avatarUrl: string | null }> = {};
    if (!userIds || userIds.length === 0) return map;

    const uniqueIds = Array.from(new Set(userIds));

    try {
      const uPrisma = this.getUserPrisma();
      if (uPrisma) {
        const profiles = await uPrisma.userProfile.findMany({
          where: { userId: { in: uniqueIds } },
          select: { userId: true, displayName: true, username: true, avatarUrl: true },
        });
        for (const p of profiles) {
          map[p.userId] = {
            displayName: p.displayName || p.username || 'Người dùng MXH-K',
            avatarUrl: p.avatarUrl || null,
          };
        }
      }
    } catch (err) {
      this.logger.warn(`Error resolving profiles from user_db: ${err}`);
    }

    const missingIds = uniqueIds.filter((id) => !map[id]);
    if (missingIds.length > 0) {
      try {
        const aPrisma = this.getAuthPrisma();
        if (aPrisma) {
          const authUsers = await aPrisma.user.findMany({
            where: { id: { in: missingIds } },
            select: { id: true, email: true },
          });
          for (const u of authUsers) {
            map[u.id] = {
              displayName: u.email.split('@')[0],
              avatarUrl: null,
            };
          }
        }
      } catch (err) {
        this.logger.warn(`Error resolving profiles from auth_db: ${err}`);
      }
    }

    for (const id of uniqueIds) {
      if (!map[id]) {
        map[id] = { displayName: `Người dùng ${id.substring(0, 6)}`, avatarUrl: null };
      }
    }

    return map;
  }

  // ================= SOCIAL GRAPH HELPERS =================
  private async getFriendIds(userId: string): Promise<Set<string>> {
    const friendSet = new Set<string>();
    if (!userId) return friendSet;

    try {
      const sPrisma = this.getSocialPrisma();
      if (sPrisma) {
        const friendships = await sPrisma.friendship.findMany({
          where: {
            OR: [{ userAId: userId }, { userBId: userId }],
          },
          select: { userAId: true, userBId: true },
        });
        for (const f of friendships) {
          friendSet.add(f.userAId === userId ? f.userBId : f.userAId);
        }
      }
    } catch (err) {
      this.logger.warn(`Error querying friendships: ${err}`);
    }
    return friendSet;
  }

  private async getBlockedUserIds(userId: string): Promise<Set<string>> {
    const blockSet = new Set<string>();
    if (!userId) return blockSet;

    try {
      const sPrisma = this.getSocialPrisma();
      if (sPrisma) {
        const blocks = await sPrisma.block.findMany({
          where: {
            OR: [{ blockerId: userId }, { blockedId: userId }],
          },
          select: { blockerId: true, blockedId: true },
        });
        for (const b of blocks) {
          blockSet.add(b.blockerId === userId ? b.blockedId : b.blockerId);
        }
      }
    } catch {}
    return blockSet;
  }

  private async getCloseFriendIds(authorId: string): Promise<Set<string>> {
    const set = new Set<string>();
    try {
      const list = await (this.prisma as any).closeFriend.findMany({
        where: { userId: authorId },
        select: { friendId: true },
      });
      for (const item of list) {
        set.add(item.friendId);
      }
    } catch {}
    return set;
  }

  // ================= 1. CREATE STORY =================
  async createStory(authorId: string, dto: CreateStoryDto) {
    if (!authorId) {
      throw new BadRequestException('Mã người dùng không hợp lệ');
    }

    if (dto.type === StoryTypeDto.TEXT) {
      if (!dto.content || dto.content.trim().length === 0) {
        throw new BadRequestException('Nội dung tin dạng văn bản không được để trống');
      }
    } else {
      if (!dto.mediaUrl) {
        throw new BadRequestException('Vui lòng cung cấp hình ảnh hoặc video cho tin');
      }
    }

    const now = new Date();
    const expiresAt = new Date(now.getTime() + 24 * 60 * 60 * 1000); // 24 hours exact

    const createdStory = await (this.prisma as any).story.create({
      data: {
        authorId,
        type: dto.type,
        content: dto.content?.trim() || null,
        backgroundColor: dto.backgroundColor || null,
        fontStyle: dto.fontStyle || null,
        visibility: dto.visibility || StoryVisibilityDto.PUBLIC,
        createdAt: now,
        updatedAt: now,
        expiresAt,
        media: dto.mediaUrl
          ? {
              create: {
                mediaType: dto.type === StoryTypeDto.VIDEO ? 'VIDEO' : 'IMAGE',
                url: dto.mediaUrl,
              },
            }
          : undefined,
        audiences:
          dto.targetUserIds && dto.targetUserIds.length > 0
            ? {
                createMany: {
                  data: dto.targetUserIds.map((uid) => ({
                    userId: uid,
                    type:
                      dto.visibility === StoryVisibilityDto.FRIENDS_EXCEPT ? 'EXCLUDED' : 'ALLOWED',
                  })),
                  skipDuplicates: true,
                },
              }
            : undefined,
      },
      include: {
        media: true,
        audiences: true,
      },
    });

    const profiles = await this.resolveProfiles([authorId]);
    const author = profiles[authorId] || { displayName: 'Người dùng MXH-K', avatarUrl: null };

    return {
      id: createdStory.id,
      authorId: createdStory.authorId,
      authorName: author.displayName,
      authorAvatar: author.avatarUrl,
      type: createdStory.type,
      content: createdStory.content,
      backgroundColor: createdStory.backgroundColor,
      fontStyle: createdStory.fontStyle,
      visibility: createdStory.visibility,
      mediaUrl: createdStory.media?.[0]?.url || null,
      createdAt: createdStory.createdAt,
      expiresAt: createdStory.expiresAt,
      viewCount: 0,
      isViewed: false,
    };
  }

  // ================= 2. GET STORY FEED =================
  async getStoryFeed(viewerId?: string) {
    const now = new Date();

    // 1. Fetch all active stories from post_db
    const stories = await (this.prisma as any).story.findMany({
      where: {
        deletedAt: null,
        expiresAt: { gt: now },
      },
      include: {
        media: true,
        audiences: true,
        views: viewerId
          ? {
              where: { viewerId },
              select: { id: true, viewedAt: true },
            }
          : false,
        reactions: viewerId
          ? {
              where: { userId: viewerId },
              select: { reactionType: true },
            }
          : false,
        _count: {
          select: { views: true },
        },
      },
      orderBy: { createdAt: 'desc' },
    });

    if (stories.length === 0) {
      return { groups: [], totalActiveStories: 0 };
    }

    // 2. Fetch Social Graph contexts for viewer
    let friendIds = new Set<string>();
    let blockedIds = new Set<string>();

    if (viewerId) {
      [friendIds, blockedIds] = await Promise.all([
        this.getFriendIds(viewerId),
        this.getBlockedUserIds(viewerId),
      ]);
    }

    // Cache author close friends to avoid repeated DB hits
    const authorCloseFriendsMap = new Map<string, Set<string>>();

    // 3. Filter stories based on privacy rules
    const visibleStories: any[] = [];

    for (const story of stories) {
      const isAuthor = viewerId && story.authorId === viewerId;

      // Author can always see their own stories
      if (isAuthor) {
        visibleStories.push(story);
        continue;
      }

      // If author is blocked by viewer or viewer blocked by author
      if (viewerId && blockedIds.has(story.authorId)) {
        continue;
      }

      // Privacy checks:
      if (story.visibility === StoryVisibilityDto.ONLY_ME) {
        continue; // Only author allowed
      }

      if (story.visibility === StoryVisibilityDto.PUBLIC) {
        visibleStories.push(story);
        continue;
      }

      if (!viewerId) {
        continue; // Unauthenticated guest can only view PUBLIC stories
      }

      const isFriend = friendIds.has(story.authorId);

      if (story.visibility === StoryVisibilityDto.FRIENDS) {
        if (isFriend) visibleStories.push(story);
        continue;
      }

      if (story.visibility === StoryVisibilityDto.FRIENDS_EXCEPT) {
        if (!isFriend) continue;
        const isExcluded = story.audiences?.some(
          (a: any) => a.type === 'EXCLUDED' && a.userId === viewerId,
        );
        if (!isExcluded) {
          visibleStories.push(story);
        }
        continue;
      }

      if (story.visibility === StoryVisibilityDto.CLOSE_FRIENDS) {
        let closeFriends = authorCloseFriendsMap.get(story.authorId);
        if (!closeFriends) {
          closeFriends = await this.getCloseFriendIds(story.authorId);
          authorCloseFriendsMap.set(story.authorId, closeFriends);
        }
        if (closeFriends.has(viewerId)) {
          visibleStories.push(story);
        }
        continue;
      }

      if (story.visibility === StoryVisibilityDto.CUSTOM) {
        const isAllowed = story.audiences?.some(
          (a: any) => a.type === 'ALLOWED' && a.userId === viewerId,
        );
        if (isAllowed) {
          visibleStories.push(story);
        }
        continue;
      }
    }

    // 4. Resolve author profiles
    const authorIds = Array.from(new Set(visibleStories.map((s) => s.authorId)));
    const profiles = await this.resolveProfiles(authorIds);

    // 5. Group stories by author
    const groupsMap = new Map<string, any>();

    for (const story of visibleStories) {
      const author = profiles[story.authorId] || {
        displayName: 'Người dùng MXH-K',
        avatarUrl: null,
      };
      const isViewed = viewerId ? (story.views && story.views.length > 0) : false;
      const myReaction = viewerId && story.reactions?.[0]?.reactionType ? story.reactions[0].reactionType : null;

      const formattedStory = {
        id: story.id,
        authorId: story.authorId,
        authorName: author.displayName,
        authorAvatar: author.avatarUrl,
        type: story.type,
        content: story.content,
        backgroundColor: story.backgroundColor,
        fontStyle: story.fontStyle,
        visibility: story.visibility,
        mediaUrl: story.media?.[0]?.url || null,
        createdAt: story.createdAt,
        expiresAt: story.expiresAt,
        viewCount: story._count?.views || 0,
        isViewed,
        myReaction,
      };

      if (!groupsMap.has(story.authorId)) {
        groupsMap.set(story.authorId, {
          authorId: story.authorId,
          authorName: author.displayName,
          authorAvatar: author.avatarUrl,
          isSelf: viewerId ? story.authorId === viewerId : false,
          hasUnviewed: false,
          lastStoryAt: story.createdAt,
          stories: [],
        });
      }

      const group = groupsMap.get(story.authorId);
      group.stories.push(formattedStory);
      if (!isViewed && (!viewerId || story.authorId !== viewerId)) {
        group.hasUnviewed = true;
      }
      if (new Date(story.createdAt) > new Date(group.lastStoryAt)) {
        group.lastStoryAt = story.createdAt;
      }
    }

    // 6. Sort groups: Own group first -> unviewed groups -> viewed groups
    const groups = Array.from(groupsMap.values());
    groups.sort((a, b) => {
      if (a.isSelf) return -1;
      if (b.isSelf) return 1;
      if (a.hasUnviewed && !b.hasUnviewed) return -1;
      if (!a.hasUnviewed && b.hasUnviewed) return 1;
      return new Date(b.lastStoryAt).getTime() - new Date(a.lastStoryAt).getTime();
    });

    // Ensure stories inside each group are in chronological order (oldest to newest for viewing)
    for (const g of groups) {
      g.stories.sort(
        (s1: any, s2: any) => new Date(s1.createdAt).getTime() - new Date(s2.createdAt).getTime(),
      );
    }

    return {
      groups,
      totalActiveStories: visibleStories.length,
    };
  }

  // ================= 3. GET STORY BY ID =================
  async getStoryById(storyId: string, viewerId?: string) {
    const story = await (this.prisma as any).story.findUnique({
      where: { id: storyId },
      include: {
        media: true,
        audiences: true,
        views: viewerId
          ? {
              where: { viewerId },
              select: { id: true, viewedAt: true },
            }
          : false,
        reactions: viewerId
          ? {
              where: { userId: viewerId },
              select: { reactionType: true },
            }
          : false,
        _count: {
          select: { views: true },
        },
      },
    });

    if (!story || story.deletedAt || new Date(story.expiresAt) <= new Date()) {
      throw new NotFoundException('Tin không tồn tại hoặc đã hết hạn 24 giờ');
    }

    // Check permissions
    const isAuthor = viewerId && story.authorId === viewerId;
    if (!isAuthor) {
      if (story.visibility === StoryVisibilityDto.ONLY_ME) {
        throw new ForbiddenException('Tin này được đặt ở chế độ Chỉ mình tôi');
      }

      if (viewerId) {
        const [friendIds, blockedIds] = await Promise.all([
          this.getFriendIds(viewerId),
          this.getBlockedUserIds(viewerId),
        ]);

        if (blockedIds.has(story.authorId)) {
          throw new ForbiddenException('Bạn không thể xem tin của người dùng này');
        }

        const isFriend = friendIds.has(story.authorId);

        if (story.visibility === StoryVisibilityDto.FRIENDS && !isFriend) {
          throw new ForbiddenException('Chỉ bạn bè của tác giả mới được xem tin này');
        }

        if (story.visibility === StoryVisibilityDto.FRIENDS_EXCEPT) {
          if (!isFriend) throw new ForbiddenException('Tin này chỉ dành cho bạn bè');
          const isExcluded = story.audiences?.some(
            (a: any) => a.type === 'EXCLUDED' && a.userId === viewerId,
          );
          if (isExcluded) throw new ForbiddenException('Bạn không nằm trong danh sách được xem tin này');
        }

        if (story.visibility === StoryVisibilityDto.CLOSE_FRIENDS) {
          const closeFriends = await this.getCloseFriendIds(story.authorId);
          if (!closeFriends.has(viewerId)) {
            throw new ForbiddenException('Chỉ Bạn thân mới có thể xem tin này');
          }
        }

        if (story.visibility === StoryVisibilityDto.CUSTOM) {
          const isAllowed = story.audiences?.some(
            (a: any) => a.type === 'ALLOWED' && a.userId === viewerId,
          );
          if (!isAllowed) {
            throw new ForbiddenException('Bạn không có quyền xem tin này');
          }
        }
      } else if (story.visibility !== StoryVisibilityDto.PUBLIC) {
        throw new ForbiddenException('Vui lòng đăng nhập để xem tin này');
      }
    }

    const profiles = await this.resolveProfiles([story.authorId]);
    const author = profiles[story.authorId] || { displayName: 'Người dùng MXH-K', avatarUrl: null };

    return {
      id: story.id,
      authorId: story.authorId,
      authorName: author.displayName,
      authorAvatar: author.avatarUrl,
      type: story.type,
      content: story.content,
      backgroundColor: story.backgroundColor,
      fontStyle: story.fontStyle,
      visibility: story.visibility,
      mediaUrl: story.media?.[0]?.url || null,
      createdAt: story.createdAt,
      expiresAt: story.expiresAt,
      viewCount: story._count?.views || 0,
      isViewed: viewerId ? (story.views && story.views.length > 0) : false,
      myReaction: viewerId && story.reactions?.[0]?.reactionType ? story.reactions[0].reactionType : null,
    };
  }

  // ================= 4. MARK STORY VIEWED =================
  async markStoryViewed(storyId: string, viewerId: string) {
    if (!viewerId) {
      throw new BadRequestException('Mã người xem không hợp lệ');
    }

    // Verify story exists and active
    const story = await (this.prisma as any).story.findUnique({
      where: { id: storyId },
      select: { id: true, authorId: true, expiresAt: true, deletedAt: true },
    });

    if (!story || story.deletedAt || new Date(story.expiresAt) <= new Date()) {
      throw new NotFoundException('Tin không tồn tại hoặc đã hết hạn');
    }

    const now = new Date();

    // Upsert view
    await (this.prisma as any).storyView.upsert({
      where: {
        storyId_viewerId: { storyId, viewerId },
      },
      create: {
        storyId,
        viewerId,
        viewedAt: now,
      },
      update: {
        viewedAt: now,
      },
    });

    const totalViews = await (this.prisma as any).storyView.count({
      where: { storyId },
    });

    return { success: true, viewCount: totalViews };
  }

  // ================= 5. GET STORY VIEWERS =================
  async getStoryViewers(storyId: string, authorId: string) {
    const story = await (this.prisma as any).story.findUnique({
      where: { id: storyId },
      select: { id: true, authorId: true },
    });

    if (!story) {
      throw new NotFoundException('Tin không tồn tại');
    }

    if (story.authorId !== authorId) {
      throw new ForbiddenException('Chỉ chủ sở hữu tin mới có quyền xem danh sách người đã xem');
    }

    const views = await (this.prisma as any).storyView.findMany({
      where: { storyId },
      orderBy: { viewedAt: 'desc' },
    });

    if (views.length === 0) {
      return { storyId, totalViews: 0, viewers: [] };
    }

    const viewerIds = views.map((v: any) => v.viewerId);
    const profiles = await this.resolveProfiles(viewerIds);

    // Get any reactions from viewers for this story
    const reactions = await (this.prisma as any).storyReaction.findMany({
      where: { storyId, userId: { in: viewerIds } },
    });
    const reactionMap = new Map<string, string>();
    for (const r of reactions) {
      reactionMap.set(r.userId, r.reactionType);
    }

    const viewers = views.map((v: any) => {
      const p = profiles[v.viewerId] || { displayName: `Người dùng ${v.viewerId.substring(0, 6)}`, avatarUrl: null };
      return {
        id: v.viewerId,
        name: p.displayName,
        avatar: p.avatarUrl,
        viewedAt: v.viewedAt,
        reaction: reactionMap.get(v.viewerId) || null,
      };
    });

    return {
      storyId,
      totalViews: viewers.length,
      viewers,
    };
  }

  // ================= 6. DELETE STORY =================
  async deleteStory(storyId: string, authorId: string) {
    const story = await (this.prisma as any).story.findUnique({
      where: { id: storyId },
      select: { id: true, authorId: true },
    });

    if (!story) {
      throw new NotFoundException('Tin không tồn tại');
    }

    if (story.authorId !== authorId) {
      throw new ForbiddenException('Bạn không có quyền xóa tin của người khác');
    }

    // Soft delete to preserve audit history and prevent active queries
    await (this.prisma as any).story.update({
      where: { id: storyId },
      data: { deletedAt: new Date() },
    });

    return { success: true, message: 'Đã xóa tin thành công' };
  }

  // ================= 7. REACT TO STORY =================
  async reactToStory(storyId: string, userId: string, reactionType: string) {
    if (!userId) {
      throw new BadRequestException('Mã người dùng không hợp lệ');
    }

    const validReactions = ['LIKE', 'LOVE', 'HAHA', 'WOW', 'SAD', 'ANGRY'];
    const rType = reactionType.toUpperCase();
    if (!validReactions.includes(rType)) {
      throw new BadRequestException(`Cảm xúc không hợp lệ. Chỉ chấp nhận: ${validReactions.join(', ')}`);
    }

    // Verify story
    await this.getStoryById(storyId, userId);

    await (this.prisma as any).storyReaction.upsert({
      where: {
        storyId_userId: { storyId, userId },
      },
      create: {
        storyId,
        userId,
        reactionType: rType,
      },
      update: {
        reactionType: rType,
      },
    });

    return { success: true, reactionType: rType };
  }

  // ================= 8. CLOSE FRIENDS MANAGEMENT =================
  async getCloseFriends(userId: string) {
    const list = await (this.prisma as any).closeFriend.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });

    const friendIds = list.map((item: any) => item.friendId);
    const profiles = await this.resolveProfiles(friendIds);

    return list.map((item: any) => ({
      friendId: item.friendId,
      name: profiles[item.friendId]?.displayName || 'Người dùng',
      avatar: profiles[item.friendId]?.avatarUrl || null,
      addedAt: item.createdAt,
    }));
  }

  async addCloseFriend(userId: string, friendId: string) {
    if (userId === friendId) {
      throw new BadRequestException('Không thể thêm chính mình vào danh sách bạn thân');
    }

    await (this.prisma as any).closeFriend.upsert({
      where: {
        userId_friendId: { userId, friendId },
      },
      create: {
        userId,
        friendId,
      },
      update: {},
    });

    return { success: true, message: 'Đã thêm vào danh sách Bạn thân' };
  }

  async removeCloseFriend(userId: string, friendId: string) {
    await (this.prisma as any).closeFriend.deleteMany({
      where: { userId, friendId },
    });

    return { success: true, message: 'Đã xóa khỏi danh sách Bạn thân' };
  }

  // ================= 9. GET USER ACTIVE STORIES =================
  async getUserActiveStories(targetUserId: string, viewerId?: string) {
    const feed = await this.getStoryFeed(viewerId);
    const targetGroup = feed.groups.find((g: any) => g.authorId === targetUserId);
    return targetGroup ? targetGroup.stories : [];
  }
}
