'use client';

import { create } from 'zustand';
import { io, Socket } from 'socket.io-client';
import { Conversation, Message, chatApi } from '../lib/chat-api';

interface ChatState {
  socket: Socket | null;
  conversations: Conversation[];
  activeConversationId: string | null;
  messages: Record<string, Message[]>; // conversationId -> Message[]
  isTyping: Record<string, boolean>; // conversationId -> boolean
  onlineUsers: Record<string, boolean>; // userId -> boolean
  unreadTotal: number;
  isLoadingConversations: boolean;
  isLoadingMessages: boolean;

  // Actions
  initSocket: (userId: string, token?: string) => void;
  disconnectSocket: () => void;
  fetchConversations: () => Promise<void>;
  fetchUnreadCount: () => Promise<void>;
  setActiveConversation: (conversationId: string | null) => Promise<void>;
  loadMessages: (conversationId: string) => Promise<void>;
  sendMessage: (conversationId: string, content: string, attachments?: any[]) => Promise<void>;
  markAsRead: (conversationId: string) => Promise<void>;
  sendTyping: (conversationId: string, typing: boolean) => void;
  recallMessage: (messageId: string, conversationId: string) => Promise<void>;
}

export const useChatStore = create<ChatState>((set, get) => ({
  socket: null,
  conversations: [],
  activeConversationId: null,
  messages: {},
  isTyping: {},
  onlineUsers: {},
  unreadTotal: 0,
  isLoadingConversations: false,
  isLoadingMessages: false,

  initSocket: (userId: string, token?: string) => {
    const currentSocket = get().socket;
    if (currentSocket && currentSocket.connected) return;

    const socketBase = typeof window !== 'undefined' ? window.location.origin : 'http://localhost:4000';
    const socket = io(`${socketBase}/chat`, {
      auth: { token, userId },
      query: { userId },
      transports: ['websocket', 'polling'],
      reconnectionAttempts: 5,
    });

    socket.on('connect', () => {
      // Re-join active conversation if one is selected
      const activeId = get().activeConversationId;
      if (activeId) {
        socket.emit('conversation:join', { conversationId: activeId });
      }
    });

    // Realtime new message
    socket.on('message:new', (msg: Message) => {
      const { activeConversationId, messages, conversations } = get();

      // 1. Append message to cache
      const convMessages = messages[msg.conversationId] || [];
      const exists = convMessages.some((m) => m.id === msg.id || (msg.clientMessageId && m.clientMessageId === msg.clientMessageId));
      let updatedMessages = convMessages;
      if (!exists) {
        updatedMessages = [...convMessages, msg];
      } else {
        updatedMessages = convMessages.map((m) =>
          (m.id === msg.id || (msg.clientMessageId && m.clientMessageId === msg.clientMessageId)) ? msg : m
        );
      }

      // 2. Update conversation list & unread counts
      const isActive = activeConversationId === msg.conversationId;
      const isMine = msg.senderId === userId;

      let foundConv = false;
      const updatedConversations = conversations.map((c) => {
        if (c.id === msg.conversationId) {
          foundConv = true;
          return {
            ...c,
            lastMessageText: msg.content || (msg.attachments?.length ? 'Đã gửi một ảnh' : ''),
            lastMessageAt: msg.createdAt,
            lastSenderId: msg.senderId,
            unreadCount: isActive || isMine ? 0 : c.unreadCount + 1,
          };
        }
        return c;
      });

      // Put latest conversation at the top
      updatedConversations.sort((a, b) => {
        const timeA = new Date(a.lastMessageAt || a.updatedAt).getTime();
        const timeB = new Date(b.lastMessageAt || b.updatedAt).getTime();
        return timeB - timeA;
      });

      set({
        messages: { ...messages, [msg.conversationId]: updatedMessages },
        conversations: updatedConversations,
      });

      // If active conversation, automatically mark read
      if (isActive && !isMine) {
        get().markAsRead(msg.conversationId);
      } else if (!isActive && !isMine) {
        set((state) => ({ unreadTotal: state.unreadTotal + 1 }));
      }

      // If conversation wasn't in list yet, refresh
      if (!foundConv) {
        get().fetchConversations();
      }
    });

    // Realtime read receipts
    socket.on('message:read', (data: { conversationId: string; readerId: string; readAt: string }) => {
      const { messages } = get();
      const convMessages = messages[data.conversationId];
      if (convMessages) {
        const updated = convMessages.map((m) => ({
          ...m,
          status: 'READ' as const,
        }));
        set({
          messages: { ...messages, [data.conversationId]: updated },
        });
      }
    });

    // Realtime message recall
    socket.on('message:recalled', (data: { conversationId: string; messageId: string }) => {
      const { messages } = get();
      const convMessages = messages[data.conversationId];
      if (convMessages) {
        const updated = convMessages.map((m) =>
          m.id === data.messageId
            ? { ...m, recalled: true, content: 'Tin nhắn đã được thu hồi' }
            : m
        );
        set({
          messages: { ...messages, [data.conversationId]: updated },
        });
      }
    });

    // Typing start
    socket.on('typing:start', (data: { conversationId: string; userId: string }) => {
      if (data.userId !== userId) {
        set((state) => ({
          isTyping: { ...state.isTyping, [data.conversationId]: true },
        }));
      }
    });

    // Typing stop
    socket.on('typing:stop', (data: { conversationId: string; userId: string }) => {
      if (data.userId !== userId) {
        set((state) => ({
          isTyping: { ...state.isTyping, [data.conversationId]: false },
        }));
      }
    });

    // Presence update
    socket.on('presence:update', (data: { userId: string; isOnline: boolean }) => {
      set((state) => {
        const updatedOnline = { ...state.onlineUsers, [data.userId]: data.isOnline };
        const updatedConvs = state.conversations.map((c) => {
          if (c.peerUser && c.peerUser.id === data.userId) {
            return {
              ...c,
              peerUser: { ...c.peerUser, isOnline: data.isOnline },
            };
          }
          return c;
        });
        return {
          onlineUsers: updatedOnline,
          conversations: updatedConvs,
        };
      });
    });

    set({ socket });
  },

  disconnectSocket: () => {
    const socket = get().socket;
    if (socket) {
      socket.disconnect();
      set({ socket: null });
    }
  },

  fetchConversations: async () => {
    try {
      set({ isLoadingConversations: true });
      const convs = await chatApi.getConversations();
      const unreadTotal = convs.reduce((acc, c) => acc + (c.unreadCount || 0), 0);
      set({ conversations: convs, unreadTotal, isLoadingConversations: false });
    } catch (err) {
      set({ isLoadingConversations: false });
    }
  },

  fetchUnreadCount: async () => {
    try {
      const res = await chatApi.getUnreadCount();
      if (typeof res?.unreadCount === 'number') {
        set({ unreadTotal: res.unreadCount });
      }
    } catch (err) {}
  },

  setActiveConversation: async (conversationId: string | null) => {
    const { socket, activeConversationId } = get();

    // Leave old room
    if (socket && activeConversationId && activeConversationId !== conversationId) {
      socket.emit('conversation:leave', { conversationId: activeConversationId });
    }

    set({ activeConversationId: conversationId });

    if (conversationId) {
      // Join new room
      if (socket) {
        socket.emit('conversation:join', { conversationId });
      }

      // Mark read in backend and reset local unread count
      get().markAsRead(conversationId);

      // Load messages
      await get().loadMessages(conversationId);
    }
  },

  loadMessages: async (conversationId: string) => {
    try {
      set({ isLoadingMessages: true });
      const msgs = await chatApi.getMessages(conversationId);
      set((state) => ({
        messages: { ...state.messages, [conversationId]: msgs },
        isLoadingMessages: false,
      }));
    } catch (err) {
      set({ isLoadingMessages: false });
    }
  },

  sendMessage: async (conversationId: string, content: string, attachments?: any[]) => {
    const { socket, messages, conversations } = get();
    const clientMessageId = 'client_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7);

    // Optimistic message
    const tempMsg: Message = {
      id: clientMessageId,
      conversationId,
      senderId: 'me',
      sender: { id: 'me', displayName: 'Tôi', avatarUrl: null },
      clientMessageId,
      content,
      type: attachments && attachments.length ? 'IMAGE' : 'TEXT',
      status: 'SENT',
      recalled: false,
      attachments: attachments || [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const currentMsgs = messages[conversationId] || [];
    set({
      messages: { ...messages, [conversationId]: [...currentMsgs, tempMsg] },
    });

    try {
      if (socket && socket.connected) {
        socket.emit(
          'message:send',
          {
            conversationId,
            clientMessageId,
            content,
            attachments,
            type: attachments && attachments.length ? 'IMAGE' : 'TEXT',
          },
          (res: any) => {
            if (res && res.status === 'ok') {
              // Replace optimistic with real message
              const freshMsgs = (get().messages[conversationId] || []).map((m) =>
                m.clientMessageId === clientMessageId ? res.data : m
              );
              set({
                messages: { ...get().messages, [conversationId]: freshMsgs },
              });
            }
          }
        );
      } else {
        // HTTP Fallback
        const sent = await chatApi.sendMessage(conversationId, content, attachments, clientMessageId);
        const freshMsgs = (get().messages[conversationId] || []).map((m) =>
          m.clientMessageId === clientMessageId ? sent : m
        );
        set({
          messages: { ...get().messages, [conversationId]: freshMsgs },
        });
      }
    } catch (err) {
      console.error('Failed to send message:', err);
    }
  },

  markAsRead: async (conversationId: string) => {
    try {
      const { socket, conversations } = get();

      // Emit read event on socket
      if (socket && socket.connected) {
        socket.emit('message:read', { conversationId });
      } else {
        await chatApi.markAsRead(conversationId);
      }

      // Update local conversation unread count
      const updatedConvs = conversations.map((c) =>
        c.id === conversationId ? { ...c, unreadCount: 0 } : c
      );
      const unreadTotal = updatedConvs.reduce((acc, c) => acc + (c.unreadCount || 0), 0);

      set({ conversations: updatedConvs, unreadTotal });
    } catch (err) {}
  },

  sendTyping: (conversationId: string, typing: boolean) => {
    const socket = get().socket;
    if (socket && socket.connected) {
      socket.emit(typing ? 'typing:start' : 'typing:stop', { conversationId });
    }
  },

  recallMessage: async (messageId: string, conversationId: string) => {
    try {
      await chatApi.recallMessage(messageId);
      const { messages } = get();
      const current = messages[conversationId] || [];
      const updated = current.map((m) =>
        m.id === messageId ? { ...m, recalled: true, content: 'Tin nhắn đã được thu hồi' } : m
      );
      set({
        messages: { ...messages, [conversationId]: updated },
      });
    } catch (err) {
      console.error('Failed to recall message:', err);
    }
  },
}));
