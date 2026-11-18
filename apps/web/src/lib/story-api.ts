import { apiClient } from './api-client';

export interface StoryItem {
  id: string;
  authorId: string;
  authorName: string;
  authorAvatar: string | null;
  type: 'IMAGE' | 'VIDEO' | 'TEXT';
  content: string | null;
  backgroundColor: string | null;
  fontStyle: string | null;
  visibility: 'PUBLIC' | 'FRIENDS' | 'FRIENDS_EXCEPT' | 'CLOSE_FRIENDS' | 'ONLY_ME' | 'CUSTOM';
  mediaUrl: string | null;
  createdAt: string;
  expiresAt: string;
  isViewed: boolean;
  viewCount: number;
  myReaction: string | null;
}

export interface StoryGroup {
  authorId: string;
  authorName: string;
  authorAvatar: string | null;
  isSelf: boolean;
  hasUnviewed: boolean;
  lastStoryAt: string;
  stories: StoryItem[];
}

export interface StoryViewerItem {
  id: string;
  name: string;
  avatar: string | null;
  viewedAt: string;
  reaction: string | null;
}

export interface CreateStoryPayload {
  type: 'IMAGE' | 'VIDEO' | 'TEXT';
  content?: string;
  mediaUrl?: string;
  backgroundColor?: string;
  fontStyle?: string;
  visibility?: 'PUBLIC' | 'FRIENDS' | 'FRIENDS_EXCEPT' | 'CLOSE_FRIENDS' | 'ONLY_ME' | 'CUSTOM';
  targetUserIds?: string[];
}

export const storyApi = {
  getStoryFeed: async (): Promise<{ groups: StoryGroup[]; totalActiveStories: number }> => {
    return (await apiClient.get('/api/stories/feed')) as any;
  },

  createStory: async (payload: CreateStoryPayload): Promise<StoryItem> => {
    return (await apiClient.post('/api/stories', payload)) as any;
  },

  getStoryById: async (storyId: string): Promise<StoryItem> => {
    return (await apiClient.get(`/api/stories/${storyId}`)) as any;
  },

  markStoryViewed: async (storyId: string): Promise<{ success: boolean; viewCount: number }> => {
    return (await apiClient.post(`/api/stories/${storyId}/view`)) as any;
  },

  getStoryViewers: async (
    storyId: string,
  ): Promise<{ storyId: string; totalViews: number; viewers: StoryViewerItem[] }> => {
    return (await apiClient.get(`/api/stories/${storyId}/viewers`)) as any;
  },

  reactToStory: async (
    storyId: string,
    reactionType: string,
  ): Promise<{ success: boolean; reactionType: string }> => {
    return (await apiClient.post(`/api/stories/${storyId}/reactions`, { reactionType })) as any;
  },

  deleteStory: async (storyId: string): Promise<{ success: boolean; message: string }> => {
    return (await apiClient.delete(`/api/stories/${storyId}`)) as any;
  },

  getCloseFriends: async (): Promise<Array<{ friendId: string; name: string; avatar: string | null }>> => {
    return (await apiClient.get('/api/stories/close-friends')) as any;
  },

  addCloseFriend: async (friendId: string): Promise<{ success: boolean }> => {
    return (await apiClient.post(`/api/stories/close-friends/${friendId}`)) as any;
  },

  removeCloseFriend: async (friendId: string): Promise<{ success: boolean }> => {
    return (await apiClient.delete(`/api/stories/close-friends/${friendId}`)) as any;
  },

  uploadMedia: async (file: File): Promise<{ url: string; mediaType: 'IMAGE' | 'VIDEO' }> => {
    const formData = new FormData();
    formData.append('file', file);
    const res: any = await apiClient.post('/api/media/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return {
      url: res.url,
      mediaType: file.type.startsWith('video/') ? 'VIDEO' : 'IMAGE',
    };
  },
};
