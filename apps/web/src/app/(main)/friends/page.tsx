'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Users, UserCheck, UserX, UserPlus, Check, X, MessageCircle, Loader2, Sparkles } from 'lucide-react';
import { apiClient } from '../../../lib/api-client';
import { useAuthStore } from '../../../stores/auth.store';

export default function FriendsPage() {
  const { user } = useAuthStore();
  const [friends, setFriends] = useState<any[]>([]);
  const [requests, setRequests] = useState<any[]>([]);
  const [sentRequests, setSentRequests] = useState<any[]>([]);
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [sentUserIds, setSentUserIds] = useState<Set<string>>(new Set());
  const [isLoading, setIsLoading] = useState(true);

  // Helper for time formatting
  const formatTime = (dateStr?: string) => {
    if (!dateStr) return 'gần đây';
    try {
      const diff = Date.now() - new Date(dateStr).getTime();
      const mins = Math.floor(diff / (1000 * 60));
      if (mins < 1) return 'vừa xong';
      if (mins < 60) return `${mins} phút trước`;
      const hours = Math.floor(mins / 60);
      if (hours < 24) return `${hours} giờ trước`;
      const days = Math.floor(hours / 24);
      return `${days} ngày trước`;
    } catch {
      return 'gần đây';
    }
  };

  const loadData = async () => {
    try {
      const [reqRes, friendsRes, sugRes]: any = await Promise.all([
        apiClient.get('/api/friends/requests').catch(() => ({ received: [], sent: [] })),
        apiClient.get('/api/friends').catch(() => []),
        apiClient.get('/api/friends/suggestions').catch(() => []),
      ]);

      setRequests(reqRes?.received || []);
      setSentRequests(reqRes?.sent || []);
      setFriends(Array.isArray(friendsRes) ? friendsRes : []);
      setSuggestions(Array.isArray(sugRes) ? sugRes : []);
    } catch (e) {
      console.error('Failed to load friends data', e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, [user?.id]);

  const handleAccept = async (requestId: string) => {
    const accepted = requests.find((r) => r.id === requestId);
    try {
      await apiClient.patch(`/api/friends/requests/${requestId}/accept`);
      setRequests((prev) => prev.filter((r) => r.id !== requestId));
      if (accepted) {
        setFriends((prev) => [
          ...prev,
          {
            id: accepted.senderId,
            name: accepted.senderName,
            avatar: accepted.avatar,
            username: accepted.senderUsername,
          },
        ]);
      }
    } catch (e: any) {
      alert(`Không thể xác nhận lời mời: ${e.response?.data?.message || e.message}`);
    }
  };

  const handleReject = async (requestId: string) => {
    try {
      await apiClient.patch(`/api/friends/requests/${requestId}/reject`);
      setRequests((prev) => prev.filter((r) => r.id !== requestId));
    } catch (e: any) {
      alert(`Không thể xóa lời mời: ${e.response?.data?.message || e.message}`);
    }
  };

  const handleRemoveFriend = async (friendId: string, friendName: string) => {
    if (!confirm(`Bạn có chắc chắn muốn hủy kết bạn với ${friendName}?`)) return;
    try {
      await apiClient.delete(`/api/friends/${friendId}`);
      setFriends((prev) => prev.filter((f) => f.id !== friendId));
    } catch (e: any) {
      alert(`Không thể hủy kết bạn: ${e.response?.data?.message || e.message}`);
    }
  };

  const handleSendFriendRequest = async (targetUserId: string) => {
    try {
      await apiClient.post('/api/friends/requests', { targetUserId });
      setSentUserIds((prev) => new Set(prev).add(targetUserId));
      setSuggestions((prev) => prev.filter((s) => s.id !== targetUserId));
    } catch (e: any) {
      alert(`Lỗi khi gửi lời mời: ${e.response?.data?.message || e.message}`);
    }
  };

  return (
    <div className="space-y-6 select-none">
      {/* Header */}
      <div className="bg-white dark:bg-[#242526] rounded-2xl p-4 shadow-sm border border-slate-200/80 dark:border-neutral-800 flex items-center justify-between">
        <div>
          <h1 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Users className="w-5 h-5 text-[#1877f2]" />
            <span>Bạn bè & Kết nối</span>
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Quản lý bạn bè, lời mời kết bạn và tìm kiếm những người bạn quen biết
          </p>
        </div>
        <span className="text-xs font-bold px-3 py-1 bg-blue-50 dark:bg-blue-950/40 text-[#1877f2] rounded-full">
          {friends.length} bạn bè
        </span>
      </div>

      {isLoading ? (
        <div className="bg-white dark:bg-[#242526] rounded-2xl p-12 flex flex-col items-center justify-center gap-2 text-slate-400">
          <Loader2 className="w-6 h-6 animate-spin text-[#1877f2]" />
          <span className="text-xs">Đang tải danh sách kết nối...</span>
        </div>
      ) : (
        <>
          {/* 1. Lời mời kết bạn đang chờ (Pending Received Requests) */}
          <div className="bg-white dark:bg-[#242526] rounded-2xl p-4 shadow-sm border border-slate-200/80 dark:border-neutral-800 space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                <span>Lời mời kết bạn</span>
                {requests.length > 0 && (
                  <span className="text-xs font-bold px-2 py-0.5 bg-red-100 text-red-600 rounded-full">
                    {requests.length}
                  </span>
                )}
              </h2>
            </div>

            {requests.length === 0 ? (
              <p className="text-xs text-slate-400 py-3 text-center">
                Bạn không có lời mời kết bạn nào đang chờ.
              </p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {requests.map((req) => (
                  <div
                    key={req.id}
                    className="flex items-center gap-3 p-3 rounded-xl border border-slate-200/70 dark:border-neutral-700 bg-slate-50/50 dark:bg-[#18191a]/40"
                  >
                    {req.avatar ? (
                      <img
                        src={req.avatar}
                        alt={req.senderName}
                        className="w-12 h-12 rounded-full object-cover shrink-0 shadow-sm"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-sm shrink-0">
                        {req.senderName?.[0]?.toUpperCase() || 'U'}
                      </div>
                    )}
                    <div className="min-w-0 flex-1 space-y-1.5">
                      <div>
                        <h3 className="font-bold text-xs text-slate-900 dark:text-white truncate">
                          {req.senderName}
                        </h3>
                        <p className="text-[11px] text-slate-400">
                          {formatTime(req.createdAt)}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleAccept(req.id)}
                          className="flex-1 py-1.5 bg-[#1877f2] hover:bg-blue-700 text-white font-bold text-xs rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-1 shadow-sm"
                        >
                          <Check className="w-3.5 h-3.5" />
                          <span>Xác nhận</span>
                        </button>
                        <button
                          onClick={() => handleReject(req.id)}
                          className="flex-1 py-1.5 bg-[#e4e6eb] hover:bg-[#d8dadf] dark:bg-[#3a3b3c] dark:hover:bg-[#4e4f50] text-slate-700 dark:text-slate-200 font-bold text-xs rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-1"
                        >
                          <X className="w-3.5 h-3.5" />
                          <span>Xóa</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* 2. Danh sách tất cả bạn bè (Friend List) */}
          <div className="bg-white dark:bg-[#242526] rounded-2xl p-4 shadow-sm border border-slate-200/80 dark:border-neutral-800 space-y-3">
            <h2 className="font-bold text-sm text-slate-900 dark:text-white">
              Tất cả bạn bè ({friends.length})
            </h2>

            {friends.length === 0 ? (
              <p className="text-xs text-slate-400 py-3 text-center">
                Bạn chưa có bạn bè nào. Hãy gửi lời mời kết bạn ở bên dưới nhé!
              </p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {friends.map((friend) => (
                  <div
                    key={friend.id}
                    className="flex items-center justify-between p-3 rounded-xl border border-slate-200/60 dark:border-neutral-800 hover:bg-[#f0f2f5]/60 dark:hover:bg-[#3a3b3c]/60 transition-colors"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      {friend.avatar ? (
                        <img
                          src={friend.avatar}
                          alt={friend.name}
                          className="w-11 h-11 rounded-full object-cover shrink-0 shadow-sm"
                        />
                      ) : (
                        <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 text-white font-bold flex items-center justify-center text-sm shrink-0">
                          {friend.name?.[0]?.toUpperCase() || 'U'}
                        </div>
                      )}
                      <div className="min-w-0">
                        <h3 className="font-bold text-xs text-slate-900 dark:text-white truncate">
                          {friend.name}
                        </h3>
                        <p className="text-[11px] text-slate-400 truncate">
                          {friend.bio || `@${friend.username || 'user'}`}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <button
                        onClick={() => handleRemoveFriend(friend.id, friend.name)}
                        title="Hủy kết bạn"
                        className="px-2.5 py-1.5 bg-red-50 hover:bg-red-100 dark:bg-red-950/40 text-red-600 dark:text-red-400 font-semibold text-xs rounded-lg transition-colors cursor-pointer"
                      >
                        Hủy kết bạn
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* 3. Những người bạn có thể biết (Suggested Friends) */}
          <div className="bg-white dark:bg-[#242526] rounded-2xl p-4 shadow-sm border border-slate-200/80 dark:border-neutral-800 space-y-3">
            <h2 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
              <UserPlus className="w-4 h-4 text-emerald-500" />
              <span>Gợi ý kết bạn từ người dùng thật</span>
            </h2>

            {suggestions.length === 0 ? (
              <p className="text-xs text-slate-400 py-3 text-center">
                Không còn gợi ý kết bạn nào mới tại thời điểm này.
              </p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {suggestions.map((sug) => {
                  const isSent = sentUserIds.has(sug.id);
                  return (
                    <div
                      key={sug.id}
                      className="flex items-center justify-between p-3 rounded-xl border border-slate-200/60 dark:border-neutral-800"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        {sug.avatar ? (
                          <img
                            src={sug.avatar}
                            alt={sug.name}
                            className="w-11 h-11 rounded-full object-cover shrink-0 shadow-sm"
                          />
                        ) : (
                          <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-slate-500 to-slate-700 text-white font-bold flex items-center justify-center text-sm shrink-0">
                            {sug.name?.[0]?.toUpperCase() || 'U'}
                          </div>
                        )}
                        <div className="min-w-0">
                          <h3 className="font-bold text-xs text-slate-900 dark:text-white truncate">
                            {sug.name}
                          </h3>
                          <p className="text-[11px] text-slate-400 truncate">
                            {sug.bio || `@${sug.username || 'user'}`}
                          </p>
                        </div>
                      </div>

                      <button
                        disabled={isSent}
                        onClick={() => handleSendFriendRequest(sug.id)}
                        className={`py-1.5 px-3 font-bold text-xs rounded-lg transition-colors cursor-pointer shrink-0 flex items-center gap-1 ${
                          isSent
                            ? 'bg-slate-100 text-slate-500 cursor-default'
                            : 'bg-[#1877f2] hover:bg-blue-700 text-white shadow-sm'
                        }`}
                      >
                        {isSent ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                            <span>Đã gửi lời mời</span>
                          </>
                        ) : (
                          <>
                            <UserPlus className="w-3.5 h-3.5" />
                            <span>Thêm bạn bè</span>
                          </>
                        )}
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
