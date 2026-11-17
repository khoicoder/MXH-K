'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { io } from 'socket.io-client';
import { Bell, CheckCheck, Sparkles, Loader2 } from 'lucide-react';
import { apiClient } from '../../../lib/api-client';
import { useAuthStore } from '../../../stores/auth.store';

export default function NotificationsPage() {
  const router = useRouter();
  const { user } = useAuthStore();
  const [filter, setFilter] = useState<'all' | 'unread'>('all');
  const [notifications, setNotifications] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Helper to format relative Vietnamese time
  const formatTime = (dateStr: string) => {
    try {
      const diff = Date.now() - new Date(dateStr).getTime();
      const minutes = Math.floor(diff / (1000 * 60));
      if (minutes < 1) return 'vừa xong';
      if (minutes < 60) return `${minutes} phút trước`;
      const hours = Math.floor(minutes / 60);
      if (hours < 24) return `${hours} giờ trước`;
      const days = Math.floor(hours / 24);
      return `${days} ngày trước`;
    } catch {
      return 'gần đây';
    }
  };

  const fetchNotifications = async () => {
    try {
      const res: any = await apiClient.get('/api/notifications?limit=50');
      const items = res?.items || res?.data?.items || [];
      setNotifications(items);
    } catch (e) {
      console.error('Failed to load notifications', e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchNotifications();

    if (!user?.id) return;

    // Real-time socket listener
    const socketBase = typeof window !== 'undefined' ? window.location.origin : 'http://localhost:4000';
    const socket = io(`${socketBase}/notifications`, {
      query: { userId: user.id },
      transports: ['polling', 'websocket'],
    });

    socket.on('new_notification', (newNotif: any) => {
      setNotifications((prev) => [newNotif, ...prev.filter((n) => n.id !== newNotif.id)]);
    });

    // Fallback polling every 5s
    const timer = setInterval(() => {
      fetchNotifications();
    }, 5000);

    return () => {
      socket.disconnect();
      clearInterval(timer);
    };
  }, [user?.id]);

  const handleMarkAllRead = async () => {
    try {
      await apiClient.patch('/api/notifications/read-all');
      setNotifications((prev) => prev.map((n) => ({ ...n, isRead: true })));
    } catch (e) {
      console.error('Failed to mark all as read', e);
    }
  };

  const handleItemClick = async (notif: any) => {
    if (!notif.isRead) {
      try {
        await apiClient.patch(`/api/notifications/${notif.id}/read`);
        setNotifications((prev) =>
          prev.map((n) => (n.id === notif.id ? { ...n, isRead: true } : n))
        );
      } catch {}
    }

    if (notif.type === 'FRIEND_REQ' || notif.type === 'FRIEND_ACCEPT') {
      router.push('/friends');
    } else if (notif.targetType === 'POST') {
      router.push('/');
    }
  };

  const filteredNotifs =
    filter === 'unread' ? notifications.filter((n) => !n.isRead) : notifications;

  return (
    <div className="bg-white dark:bg-[#242526] rounded-2xl shadow-sm border border-slate-200/80 dark:border-neutral-800 p-4 space-y-4 select-none">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-neutral-800">
        <div>
          <h1 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Bell className="w-5 h-5 text-[#1877f2]" />
            <span>Thông báo</span>
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Cập nhật tương tác, bình luận và lời mời kết bạn theo thời gian thực
          </p>
        </div>

        <button
          onClick={handleMarkAllRead}
          className="text-xs text-[#1877f2] dark:text-[#2d88ff] hover:underline flex items-center gap-1 font-bold cursor-pointer"
        >
          <CheckCheck className="w-4 h-4" />
          <span>Đánh dấu tất cả là đã đọc</span>
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2">
        <button
          onClick={() => setFilter('all')}
          className={`px-3 py-1.5 rounded-full text-xs font-bold transition-colors cursor-pointer ${
            filter === 'all'
              ? 'bg-[#e7f3ff] text-[#1877f2] dark:bg-blue-950/60 dark:text-blue-400'
              : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-[#3a3b3c]'
          }`}
        >
          Tất cả ({notifications.length})
        </button>
        <button
          onClick={() => setFilter('unread')}
          className={`px-3 py-1.5 rounded-full text-xs font-bold transition-colors cursor-pointer ${
            filter === 'unread'
              ? 'bg-[#e7f3ff] text-[#1877f2] dark:bg-blue-950/60 dark:text-blue-400'
              : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-[#3a3b3c]'
          }`}
        >
          Chưa đọc ({notifications.filter((n) => !n.isRead).length})
        </button>
      </div>

      {/* Notification List */}
      <div className="space-y-1">
        {isLoading ? (
          <div className="py-12 flex flex-col items-center justify-center text-slate-400 gap-2">
            <Loader2 className="w-6 h-6 animate-spin text-[#1877f2]" />
            <span className="text-xs">Đang tải thông báo...</span>
          </div>
        ) : filteredNotifs.length === 0 ? (
          <div className="py-12 text-center text-slate-400">
            <Sparkles className="w-8 h-8 mx-auto mb-2 opacity-50 text-blue-500" />
            <p className="text-xs">Không có thông báo nào.</p>
          </div>
        ) : (
          filteredNotifs.map((n) => (
            <div
              key={n.id}
              onClick={() => handleItemClick(n)}
              className={`flex items-start gap-3 p-3 rounded-xl transition-colors cursor-pointer hover:bg-[#f0f2f5] dark:hover:bg-[#3a3b3c] ${
                !n.isRead ? 'bg-blue-50/50 dark:bg-blue-950/20' : ''
              }`}
            >
              {/* Avatar with Reaction / Type Badge */}
              <div className="relative shrink-0">
                {n.actorAvatar ? (
                  <img
                    src={n.actorAvatar}
                    alt={n.actorName}
                    className="w-12 h-12 rounded-full object-cover shadow-sm"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 text-white font-bold flex items-center justify-center text-base shadow-sm">
                    {n.actorName?.[0]?.toUpperCase() || 'U'}
                  </div>
                )}
                <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-[11px] text-white shadow">
                  {(n.type === 'POST_REACTION' || n.type === 'LIKE') && (
                    <span className="w-full h-full rounded-full bg-rose-500 flex items-center justify-center">
                      ❤️
                    </span>
                  )}
                  {(n.type === 'COMMENT' || n.type === 'REPLY') && (
                    <span className="w-full h-full rounded-full bg-emerald-500 flex items-center justify-center">
                      💬
                    </span>
                  )}
                  {(n.type === 'FRIEND_REQ' || n.type === 'FRIEND_ACCEPT') && (
                    <span className="w-full h-full rounded-full bg-blue-600 flex items-center justify-center">
                      👥
                    </span>
                  )}
                  {n.type === 'SYSTEM' && (
                    <span className="w-full h-full rounded-full bg-amber-500 flex items-center justify-center">
                      🔔
                    </span>
                  )}
                </span>
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <p className="text-xs text-slate-800 dark:text-slate-200 leading-snug">
                  <strong className="font-bold text-slate-900 dark:text-white mr-1">
                    {n.actorName || 'Thành viên MXH-K'}
                  </strong>
                  <span>{n.summary}</span>
                </p>
                <span
                  className={`text-[11px] font-semibold mt-1 inline-block ${
                    !n.isRead ? 'text-[#1877f2]' : 'text-slate-400'
                  }`}
                >
                  {formatTime(n.createdAt)}
                </span>
              </div>

              {/* Unread Blue Dot */}
              {!n.isRead && (
                <span className="w-2.5 h-2.5 rounded-full bg-[#1877f2] shrink-0 mt-2" />
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
