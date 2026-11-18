'use client';

import React, { useState, useEffect, useRef, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import {
  Search,
  Send,
  Image as ImageIcon,
  Smile,
  ThumbsUp,
  MoreVertical,
  Phone,
  Video,
  Info,
  ArrowLeft,
  Check,
  CheckCheck,
  Clock,
  Trash2,
  Undo2,
  MessageCircle,
  Circle,
} from 'lucide-react';
import { useAuthStore } from '../../../stores/auth.store';
import { useChatStore } from '../../../stores/chat.store';
import { Conversation, Message, chatApi } from '../../../lib/chat-api';
import { apiClient } from '../../../lib/api-client';

function MessagesContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { user } = useAuthStore();
  const {
    conversations,
    activeConversationId,
    messages,
    isTyping,
    onlineUsers,
    initSocket,
    fetchConversations,
    setActiveConversation,
    sendMessage,
    sendTyping,
    recallMessage,
  } = useChatStore();

  const [inputText, setInputText] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedImages, setSelectedImages] = useState<{ file: File; preview: string }[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [activeMessageMenu, setActiveMessageMenu] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const targetUserIdParam = searchParams.get('userId');

  // 1. Initialize socket connection
  useEffect(() => {
    if (user?.id) {
      const token = typeof window !== 'undefined' ? localStorage.getItem('accessToken') || undefined : undefined;
      initSocket(user.id, token);
      fetchConversations();
    }
  }, [user?.id, initSocket, fetchConversations]);

  // 2. Handle URL ?userId= parameter (e.g. from right-panel or user profile)
  useEffect(() => {
    if (targetUserIdParam && user?.id && targetUserIdParam !== user.id) {
      chatApi.getOrCreateDirectConversation(targetUserIdParam)
        .then((conv) => {
          fetchConversations().then(() => {
            setActiveConversation(conv.id);
          });
        })
        .catch((err) => console.error('Failed to init direct conversation:', err));
    }
  }, [targetUserIdParam, user?.id]);

  // 3. Auto-scroll to bottom on new messages
  const activeMessages = activeConversationId ? messages[activeConversationId] || [] : [];
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [activeMessages.length, isTyping[activeConversationId || '']]);

  // Find currently active conversation
  const activeConv = conversations.find((c) => c.id === activeConversationId);

  // Handle typing debounce
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
    if (!activeConversationId) return;

    sendTyping(activeConversationId, true);
    if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
    typingTimeoutRef.current = setTimeout(() => {
      sendTyping(activeConversationId, false);
    }, 2000);
  };

  // Handle image file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) return;
    const files = Array.from(e.target.files);
    const newItems = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setSelectedImages((prev) => [...prev, ...newItems]);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const removeSelectedImage = (index: number) => {
    setSelectedImages((prev) => prev.filter((_, i) => i !== index));
  };

  // Handle send message
  const handleSend = async (customText?: string) => {
    const textToSend = customText !== undefined ? customText : inputText.trim();
    if ((!textToSend && selectedImages.length === 0) || !activeConversationId) return;

    if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
    sendTyping(activeConversationId, false);

    setInputText('');

    let attachments: any[] = [];
    if (selectedImages.length > 0) {
      setIsUploading(true);
      try {
        for (const item of selectedImages) {
          const formData = new FormData();
          formData.append('file', item.file);
          const uploadRes: any = await apiClient.post('/api/media/upload', formData);
          attachments.push({
            fileName: uploadRes.originalName || item.file.name,
            fileKey: uploadRes.filename,
            mimeType: uploadRes.mimeType || item.file.type,
            size: uploadRes.size || item.file.size,
            url: uploadRes.url,
          });
        }
      } catch (err) {
        console.error('Image upload failed:', err);
      } finally {
        setIsUploading(false);
        setSelectedImages([]);
      }
    }

    await sendMessage(activeConversationId, textToSend, attachments);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Filter conversations by search
  const filteredConversations = conversations.filter((c) =>
    (c.title || c.peerUser?.displayName || '').toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex h-[calc(100vh-56px)] bg-[#f0f2f5] dark:bg-[#18191a] text-slate-900 dark:text-slate-100 overflow-hidden select-none">
      {/* ================= LEFT COLUMN: CONVERSATION LIST ================= */}
      <div
        className={`w-full md:w-[360px] lg:w-[400px] bg-white dark:bg-[#242526] border-r border-slate-200/80 dark:border-neutral-800 flex flex-col shrink-0 ${
          activeConversationId ? 'hidden md:flex' : 'flex'
        }`}
      >
        {/* Header */}
        <div className="p-3.5 pb-2 border-b border-slate-100 dark:border-neutral-800 flex items-center justify-between">
          <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">Đoạn chat</h1>
          <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
            <button
              onClick={() => fetchConversations()}
              title="Làm mới"
              className="p-2 hover:bg-slate-100 dark:hover:bg-[#3a3b3c] rounded-full transition-colors cursor-pointer"
            >
              <Clock className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="px-3.5 py-2">
          <div className="flex items-center gap-2 px-3 py-2 bg-slate-100 dark:bg-[#3a3b3c] rounded-full text-sm text-slate-600 dark:text-slate-300">
            <Search className="w-4 h-4 text-slate-400 shrink-0" />
            <input
              type="text"
              placeholder="Tìm kiếm trên Messenger..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent border-none outline-none w-full text-xs placeholder:text-slate-400"
            />
          </div>
        </div>

        {/* Conversations Scroll Area */}
        <div className="flex-1 overflow-y-auto px-2 space-y-0.5">
          {filteredConversations.length === 0 ? (
            <div className="py-16 text-center text-slate-400 dark:text-slate-500">
              <MessageCircle className="w-12 h-12 mx-auto mb-2 stroke-[1.2px] opacity-40" />
              <p className="text-sm font-medium">Chưa có cuộc trò chuyện nào</p>
              <p className="text-xs text-slate-400 mt-1">Kết bạn và bắt đầu nhắn tin với mọi người</p>
            </div>
          ) : (
            filteredConversations.map((conv) => {
              const isActive = conv.id === activeConversationId;
              const isUserOnline = conv.peerUser ? onlineUsers[conv.peerUser.id] ?? conv.peerUser.isOnline : false;
              const hasUnread = conv.unreadCount > 0;

              return (
                <div
                  key={conv.id}
                  onClick={() => setActiveConversation(conv.id)}
                  className={`flex items-center gap-3 p-2.5 rounded-xl cursor-pointer transition-all duration-150 ${
                    isActive
                      ? 'bg-blue-50 dark:bg-[#2d88ff]/15 text-blue-600 dark:text-blue-400 font-medium'
                      : 'hover:bg-slate-100 dark:hover:bg-[#3a3b3c]/60'
                  }`}
                >
                  {/* Avatar & Online dot */}
                  <div className="relative shrink-0">
                    <img
                      src={
                        conv.avatar ||
                        conv.peerUser?.avatarUrl ||
                        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80'
                      }
                      alt={conv.title || conv.peerUser?.displayName}
                      className="w-12 h-12 rounded-full object-cover shadow-sm"
                    />
                    {isUserOnline && (
                      <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white dark:border-[#242526] rounded-full" />
                    )}
                  </div>

                  {/* Conv details */}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between mb-0.5">
                      <p
                        className={`text-sm truncate ${
                          hasUnread ? 'font-bold text-slate-900 dark:text-white' : 'font-semibold text-slate-800 dark:text-slate-200'
                        }`}
                      >
                        {conv.title || conv.peerUser?.displayName || 'Người dùng'}
                      </p>
                      {conv.lastMessageAt && (
                        <span className="text-[10px] text-slate-400 shrink-0 ml-1">
                          {new Date(conv.lastMessageAt).toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between">
                      <p
                        className={`text-xs truncate ${
                          hasUnread
                            ? 'font-semibold text-slate-900 dark:text-white'
                            : 'text-slate-500 dark:text-slate-400'
                        }`}
                      >
                        {conv.lastSenderId === user?.id && 'Bạn: '}
                        {conv.lastMessageText || 'Đã bắt đầu cuộc trò chuyện'}
                      </p>
                      {hasUnread && (
                        <span className="ml-2 w-5 h-5 rounded-full bg-[#1877f2] text-white text-[10px] font-bold flex items-center justify-center shrink-0">
                          {conv.unreadCount}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* ================= RIGHT COLUMN: ACTIVE CHAT ================= */}
      <div
        className={`flex-1 flex flex-col h-full bg-white dark:bg-[#18191a] relative ${
          !activeConversationId ? 'hidden md:flex' : 'flex'
        }`}
      >
        {activeConv ? (
          <>
            {/* 1. Chat Header */}
            <div className="h-16 px-4 bg-white dark:bg-[#242526] border-b border-slate-200/80 dark:border-neutral-800 flex items-center justify-between shrink-0 shadow-sm z-10">
              <div className="flex items-center gap-3">
                {/* Mobile Back Button */}
                <button
                  onClick={() => setActiveConversation(null)}
                  className="md:hidden p-2 -ml-1 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-[#3a3b3c] rounded-full transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>

                <div className="relative shrink-0">
                  <img
                    src={
                      activeConv.avatar ||
                      activeConv.peerUser?.avatarUrl ||
                      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80'
                    }
                    alt={activeConv.peerUser?.displayName}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  {(onlineUsers[activeConv.peerUser?.id] ?? activeConv.peerUser?.isOnline) && (
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-white dark:border-[#242526] rounded-full" />
                  )}
                </div>

                <div>
                  <h2 className="text-sm font-bold text-slate-900 dark:text-white leading-tight">
                    {activeConv.title || activeConv.peerUser?.displayName}
                  </h2>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    {(onlineUsers[activeConv.peerUser?.id] ?? activeConv.peerUser?.isOnline) ? (
                      <span className="text-emerald-500 font-medium">Đang hoạt động</span>
                    ) : (
                      'Ngoại tuyến'
                    )}
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-1 text-[#1877f2] dark:text-[#2d88ff]">
                <button className="p-2 hover:bg-slate-100 dark:hover:bg-[#3a3b3c] rounded-full transition-colors cursor-pointer">
                  <Phone className="w-5 h-5" />
                </button>
                <button className="p-2 hover:bg-slate-100 dark:hover:bg-[#3a3b3c] rounded-full transition-colors cursor-pointer">
                  <Video className="w-5 h-5" />
                </button>
                <button className="p-2 hover:bg-slate-100 dark:hover:bg-[#3a3b3c] rounded-full transition-colors cursor-pointer text-slate-500 dark:text-slate-400">
                  <Info className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* 2. Messages Thread */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#f0f2f5]/60 dark:bg-[#18191a]">
              {/* Introduction profile banner */}
              <div className="py-6 text-center">
                <img
                  src={
                    activeConv.avatar ||
                    activeConv.peerUser?.avatarUrl ||
                    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80'
                  }
                  alt={activeConv.peerUser?.displayName}
                  className="w-20 h-20 rounded-full object-cover mx-auto mb-3 shadow-md border-2 border-white dark:border-[#242526]"
                />
                <h3 className="font-bold text-base text-slate-900 dark:text-white">
                  {activeConv.title || activeConv.peerUser?.displayName}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Các bạn đã kết nối trên MXH-K Messenger
                </p>
              </div>

              {/* Message bubbles */}
              {activeMessages.map((msg, index) => {
                const isMine = msg.senderId === user?.id || msg.senderId === 'me';
                const isRecalled = msg.recalled;
                const showAvatar = !isMine && (index === activeMessages.length - 1 || activeMessages[index + 1]?.senderId !== msg.senderId);

                return (
                  <div
                    key={msg.id || msg.clientMessageId || index}
                    className={`flex items-end gap-2 group relative ${isMine ? 'justify-end' : 'justify-start'}`}
                  >
                    {!isMine && (
                      <div className="w-7 shrink-0">
                        {showAvatar && (
                          <img
                            src={
                              msg.sender?.avatarUrl ||
                              activeConv.peerUser?.avatarUrl ||
                              'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&auto=format&fit=crop&q=80'
                            }
                            alt=""
                            className="w-7 h-7 rounded-full object-cover mb-0.5"
                          />
                        )}
                      </div>
                    )}

                    {/* Bubble Container */}
                    <div className="relative max-w-[75%] sm:max-w-[65%] space-y-1">
                      {/* Attachments if any */}
                      {msg.attachments && msg.attachments.length > 0 && !isRecalled && (
                        <div className="rounded-2xl overflow-hidden shadow-sm space-y-1 mb-1">
                          {msg.attachments.map((att, i) => (
                            <img
                              key={i}
                              src={att.url}
                              alt={att.fileName}
                              className="max-h-72 w-auto object-cover rounded-xl cursor-pointer hover:opacity-95 transition-opacity"
                              onClick={() => window.open(att.url, '_blank')}
                            />
                          ))}
                        </div>
                      )}

                      {/* Text Bubble */}
                      {(msg.content || isRecalled) && (
                        <div
                          className={`px-3.5 py-2 rounded-2xl text-sm leading-relaxed break-words shadow-sm transition-all ${
                            isRecalled
                              ? 'bg-slate-200/60 dark:bg-neutral-800 text-slate-500 dark:text-slate-400 italic border border-slate-300/40 dark:border-neutral-700'
                              : isMine
                              ? 'bg-[#0084ff] text-white rounded-br-xs'
                              : 'bg-white dark:bg-[#3a3b3c] text-slate-900 dark:text-white rounded-bl-xs border border-slate-100 dark:border-neutral-700/50'
                          }`}
                        >
                          {msg.content}
                        </div>
                      )}

                      {/* Timestamp & Status for mine */}
                      <div
                        className={`flex items-center gap-1 text-[10px] text-slate-400 dark:text-slate-500 ${
                          isMine ? 'justify-end' : 'justify-start pl-1'
                        }`}
                      >
                        <span>
                          {new Date(msg.createdAt).toLocaleTimeString('vi-VN', {
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </span>
                        {isMine && !isRecalled && (
                          <span>
                            {msg.status === 'READ' ? (
                              <CheckCheck className="w-3 h-3 text-[#0084ff]" />
                            ) : (
                              <Check className="w-3 h-3" />
                            )}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Message Actions Menu (on hover) */}
                    {isMine && !isRecalled && (
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 text-slate-400">
                        <button
                          onClick={() => recallMessage(msg.id, activeConv.id)}
                          title="Thu hồi tin nhắn"
                          className="p-1 hover:bg-slate-200 dark:hover:bg-[#3a3b3c] rounded-full transition-colors cursor-pointer text-rose-500"
                        >
                          <Undo2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Typing indicator bubble */}
              {isTyping[activeConv.id] && (
                <div className="flex items-end gap-2">
                  <img
                    src={
                      activeConv.peerUser?.avatarUrl ||
                      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&auto=format&fit=crop&q=80'
                    }
                    alt=""
                    className="w-7 h-7 rounded-full object-cover mb-0.5"
                  />
                  <div className="px-4 py-2.5 rounded-2xl bg-white dark:bg-[#3a3b3c] border border-slate-100 dark:border-neutral-700/50 flex items-center gap-1.5 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" />
                    <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce [animation-delay:0.2s]" />
                    <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* 3. Image Previews before sending */}
            {selectedImages.length > 0 && (
              <div className="px-4 py-2 bg-slate-50 dark:bg-[#242526] border-t border-slate-200/60 dark:border-neutral-800 flex items-center gap-2 overflow-x-auto">
                {selectedImages.map((img, i) => (
                  <div key={i} className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-slate-300 dark:border-neutral-700">
                    <img src={img.preview} alt="" className="w-full h-full object-cover" />
                    <button
                      onClick={() => removeSelectedImage(i)}
                      className="absolute top-1 right-1 w-5 h-5 rounded-full bg-black/60 text-white flex items-center justify-center text-xs hover:bg-black/80"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* 4. Chat Input Bar */}
            <div className="p-3 bg-white dark:bg-[#242526] border-t border-slate-200/80 dark:border-neutral-800 flex items-center gap-2 shrink-0">
              {/* Hidden file input */}
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/*"
                multiple
                className="hidden"
              />

              <button
                onClick={() => fileInputRef.current?.click()}
                disabled={isUploading}
                title="Đính kèm hình ảnh"
                className="p-2 text-[#0084ff] hover:bg-blue-50 dark:hover:bg-[#3a3b3c] rounded-full transition-colors cursor-pointer"
              >
                <ImageIcon className="w-5 h-5" />
              </button>

              {/* Text Input */}
              <div className="flex-1 flex items-center bg-slate-100 dark:bg-[#3a3b3c] rounded-full px-4 py-2 focus-within:ring-2 focus-within:ring-[#0084ff]/40 transition-all">
                <input
                  type="text"
                  placeholder="Nhập tin nhắn..."
                  value={inputText}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyPress}
                  disabled={isUploading}
                  className="bg-transparent border-none outline-none w-full text-sm placeholder:text-slate-400 text-slate-900 dark:text-white"
                />
                <button
                  type="button"
                  className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors ml-2"
                >
                  <Smile className="w-5 h-5" />
                </button>
              </div>

              {/* Send or ThumbsUp button */}
              {inputText.trim() || selectedImages.length > 0 ? (
                <button
                  onClick={() => handleSend()}
                  disabled={isUploading}
                  className="p-2.5 bg-[#0084ff] hover:bg-blue-600 text-white rounded-full transition-all cursor-pointer shadow-sm active:scale-95 disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={() => handleSend('👍')}
                  className="p-2 text-[#0084ff] hover:bg-blue-50 dark:hover:bg-[#3a3b3c] rounded-full transition-colors cursor-pointer active:scale-90"
                >
                  <ThumbsUp className="w-5 h-5" />
                </button>
              )}
            </div>
          </>
        ) : (
          /* Empty State when no conversation is active */
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center text-slate-400 dark:text-slate-500">
            <div className="w-20 h-20 rounded-full bg-blue-50 dark:bg-[#3a3b3c]/50 text-[#0084ff] flex items-center justify-center mb-4 shadow-sm">
              <MessageCircle className="w-10 h-10 stroke-[1.5px]" />
            </div>
            <h2 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-1">
              Đoạn chat của bạn
            </h2>
            <p className="text-xs text-slate-400 max-w-sm mb-6">
              Gửi tin nhắn riêng tư hoặc ảnh cho bạn bè và người thân trên mạng xã hội MXH-K.
            </p>
            <p className="text-xs text-[#0084ff] font-medium bg-blue-50 dark:bg-blue-950/40 px-3.5 py-1.5 rounded-full">
              Chọn một cuộc hội thoại từ danh sách bên trái để bắt đầu
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function MessagesPage() {
  return (
    <Suspense
      fallback={
        <div className="h-[calc(100vh-56px)] flex items-center justify-center bg-[#f0f2f5] dark:bg-[#18191a]">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#0084ff]" />
        </div>
      }
    >
      <MessagesContent />
    </Suspense>
  );
}
