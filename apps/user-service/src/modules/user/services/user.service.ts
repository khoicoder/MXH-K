import { Injectable, NotFoundException, Logger } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { UpdateProfileDto, UpdateSettingsDto } from '../dto/user.dto';

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);

  constructor(private readonly prisma: PrismaService) {}

  async getOrCreateProfile(userId: string, defaultUsername?: string) {
    let profile = await this.prisma.userProfile.findUnique({
      where: { userId },
      include: { settings: true },
    });

    if (!profile) {
      const username = defaultUsername || `user_${userId.substring(0, 8)}`;
      profile = await this.prisma.userProfile.create({
        data: {
          userId,
          username,
          displayName: username,
          settings: {
            create: {},
          },
        },
        include: { settings: true },
      });
      this.logger.log(`Initialized default profile for user: ${userId}`);
    }

    return profile;
  }

  async getProfile(userId: string) {
    const profile = await this.prisma.userProfile.findUnique({
      where: { userId },
      include: { settings: true },
    });

    if (!profile) {
      throw new NotFoundException(`User profile not found for ID: ${userId}`);
    }

    return profile;
  }

  async updateProfile(userId: string, dto: UpdateProfileDto) {
    // Ensure profile exists first
    await this.getOrCreateProfile(userId);

    const updated = await this.prisma.userProfile.update({
      where: { userId },
      data: {
        displayName: dto.displayName,
        avatarUrl: dto.avatarUrl,
        coverUrl: dto.coverUrl,
        bio: dto.bio,
        gender: dto.gender,
        birthdate: dto.birthdate ? new Date(dto.birthdate) : undefined,
      },
      include: { settings: true },
    });

    return updated;
  }

  async updateSettings(userId: string, dto: UpdateSettingsDto) {
    await this.getOrCreateProfile(userId);

    const updated = await this.prisma.userSettings.upsert({
      where: { userId },
      update: {
        postVisibilityDefault: dto.postVisibilityDefault,
        allowFriendRequests: dto.allowFriendRequests,
        isPrivateAccount: dto.isPrivateAccount,
      },
      create: {
        userId,
        postVisibilityDefault: dto.postVisibilityDefault || 'PUBLIC',
        allowFriendRequests: dto.allowFriendRequests ?? true,
        isPrivateAccount: dto.isPrivateAccount ?? false,
      },
    });

    return updated;
  }

  async getBatchUsers(userIds: string[]) {
    if (!userIds || userIds.length === 0) return [];
    return this.prisma.userProfile.findMany({
      where: { userId: { in: userIds } },
      select: {
        userId: true,
        username: true,
        displayName: true,
        avatarUrl: true,
      },
    });
  }
}
