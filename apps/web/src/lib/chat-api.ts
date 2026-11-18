import { apiClient } from './api-client';

export interface PeerUser {
  id: string;
  displayName: string;
  username: string;
  avatarUrl: string | null;
  isOnline: boolean;
}

export interface Conversation {
  id: string;
  type: 'DIRECT' | 'GROUP';
  title?: string;
  avatar?: string | null;
  peerUser: PeerUser;
  lastMessageText?: string | null;
  lastMessageAt?: string | null;
  lastSenderId?: string | null;
  unreadCount: number;
  createdAt: string;
  updatedAt: string;
}

export interface MessageAttachment {
  id: string;
  fileName: string;
  fileKey?: string;
  mimeType: string;
  size: number;
  url: string;
}

export interface Message {
  id: string;
  conversationId: string;
  senderId: string;
  sender: {
    id: string;
    displayName: string;
    avatarUrl: string | null;
  };
  clientMessageId?: string;
  content: string;
  type: 'TEXT' | 'IMAGE' | 'VIDEO' | 'FILE' | 'SYSTEM';
  status: 'SENT' | 'DELIVERED' | 'READ';
  replyToMessageId?: string | null;
  recalled: boolean;
  recalledAt?: string | null;
  attachments?: MessageAttachment[];
  createdAt: string;
  updatedAt: string;
}

export const chatApi = {
  // 1. Get user's conversation list
  getConversations: async (): Promise<Conversation[]> => {
    return apiClient.get('/api/conversations');
  },

  // 2. Get unread messages count
  getUnreadCount: async (): Promise<{ unreadCount: number }> => {
    return apiClient.get('/api/conversations/unread-count');
  },

  // 3. Create or get 1-1 direct conversation
  getOrCreateDirectConversation: async (targetUserId: string): Promise<Conversation> => {
    return apiClient.post('/api/conversations/direct', { targetUserId });
  },

  // 4. Get conversation by ID
  getConversationById: async (id: string): Promise<Conversation> => {
    return apiClient.get(`/api/conversations/${id}`);
  },

  // 5. Get message history
  getMessages: async (conversationId: string, cursor?: string, limit = 50): Promise<Message[]> => {
    const params = new URLSearchParams();
    if (cursor) params.append('cursor', cursor);
    if (limit) params.append('limit', limit.toString());
    const qs = params.toString();
    return apiClient.get(`/api/conversations/${conversationId}/messages${qs ? `?${qs}` : ''}`);
  },

  // 6. Send message (HTTP fallback)
  sendMessage: async (
    conversationId: string,
    content: string,
    attachments?: any[],
    clientMessageId?: string,
  ): Promise<Message> => {
    return apiClient.post(`/api/conversations/${conversationId}/messages`, {
      content,
      attachments,
      clientMessageId,
      type: attachments && attachments.length > 0 ? 'IMAGE' : 'TEXT',
    });
  },

  // 7. Mark conversation read
  markAsRead: async (conversationId: string): Promise<{ success: boolean; lastReadAt: string }> => {
    return apiClient.post(`/api/conversations/${conversationId}/read`, {});
  },

  // 8. Recall message
  recallMessage: async (messageId: string): Promise<any> => {
    return apiClient.delete(`/api/messages/${messageId}/recall`);
  },

  // 9. Delete message for me
  deleteMessageForMe: async (messageId: string): Promise<any> => {
    return apiClient.delete(`/api/messages/${messageId}`);
  },
};
