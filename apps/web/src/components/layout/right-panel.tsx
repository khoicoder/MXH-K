'use client';

import React, { useState } from 'react';
import { Gift, Search, MoreHorizontal, Check, X } from 'lucide-react';
import Link from 'next/link';

export function RightPanel() {
  const [friendRequests, setFriendRequests] = useState([
    {
      id: 'req-1',
      name: 'Nguyễn Thu Trang',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80',
      mutualFriends: 12,
      time: '3 giờ trước',
    },
    {
      id: 'req-2',
      name: 'Trần Quang Huy',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80',
      mutualFriends: 5,
      time: '1 ngày trước',
    },
  ]);

  const onlineContacts = [
    { id: 'u1', name: 'Đặng Tuấn Anh', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80', online: true },
    { id: 'u2', name: 'Lê Hoàng Yến', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80', online: true },
    { id: 'u3', name: 'Phạm Đức Duy', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&auto=format&fit=crop&q=80', online: true },
    { id: 'u4', name: 'Vũ Minh Hằng', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80', online: true },
    { id: 'u5', name: 'Bùi Thế Hùng', avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=120&auto=format&fit=crop&q=80', online: true },
    { id: 'u6', name: 'Đỗ Phương Thảo', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120&auto=format&fit=crop&q=80', online: true },
  ];

  const handleAcceptRequest = (id: string) => {
    setFriendRequests((prev) => prev.filter((r) => r.id !== id));
  };

  const handleDeclineRequest = (id: string) => {
    setFriendRequests((prev) => prev.filter((r) => r.id !== id));
  };

  return (
    <aside className="hidden lg:block w-[320px] h-[calc(100vh-56px)] sticky top-14 p-3 space-y-4 overflow-y-auto select-none">
      {/* 1. Lời mời kết bạn (Friend Requests) */}
      {friendRequests.length > 0 && (
        <div className="space-y-3 pb-3 border-b border-slate-200/80 dark:border-neutral-800">
          <div className="flex items-center justify-between px-1">
            <span className="font-semibold text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              Lời mời kết bạn
            </span>
            <Link href="/friends" className="text-xs text-[#1877f2] dark:text-[#2d88ff] hover:underline font-medium">
              Xem tất cả
            </Link>
          </div>

          <div className="space-y-2.5">
            {friendRequests.map((req) => (
              <div
                key={req.id}
                className="bg-white dark:bg-[#242526] rounded-xl p-3 border border-slate-200/70 dark:border-neutral-800 shadow-sm space-y-2.5"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={req.avatar}
                    alt={req.name}
                    className="w-11 h-11 rounded-full object-cover shrink-0"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-xs text-slate-900 dark:text-white truncate">
                      {req.name}
                    </p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">
                      {req.mutualFriends} bạn chung · {req.time}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleAcceptRequest(req.id)}
                    className="flex-1 py-1.5 bg-[#1877f2] hover:bg-blue-700 text-white font-semibold text-xs rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-1"
                  >
                    <Check className="w-3.5 h-3.5" />
                    <span>Xác nhận</span>
                  </button>
                  <button
                    onClick={() => handleDeclineRequest(req.id)}
                    className="flex-1 py-1.5 bg-[#e4e6eb] hover:bg-[#d8dadf] dark:bg-[#3a3b3c] dark:hover:bg-[#4e4f50] text-slate-700 dark:text-slate-200 font-semibold text-xs rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-1"
                  >
                    <X className="w-3.5 h-3.5" />
                    <span>Xóa</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 2. Sinh nhật (Birthdays) */}
      <div className="pb-3 border-b border-slate-200/80 dark:border-neutral-800">
        <span className="font-semibold text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-2 px-1">
          Sinh nhật
        </span>
        <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-[#e4e6eb]/60 dark:hover:bg-[#3a3b3c] transition-colors cursor-pointer">
          <div className="w-9 h-9 rounded-full bg-rose-100 dark:bg-rose-950/60 flex items-center justify-center text-rose-500 shrink-0">
            <Gift className="w-5 h-5" />
          </div>
          <p className="text-xs text-slate-700 dark:text-slate-200 leading-tight">
            Hôm nay là sinh nhật của <strong className="font-semibold text-slate-900 dark:text-white">Lê Hoàng Yến</strong> và 1 người khác.
          </p>
        </div>
      </div>

      {/* 3. Người liên hệ / Bạn bè trực tuyến (Contacts) */}
      <div className="space-y-1">
        <div className="flex items-center justify-between px-1 mb-2">
          <span className="font-semibold text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            Người liên hệ
          </span>
          <div className="flex items-center gap-1 text-slate-400">
            <button className="p-1 hover:bg-slate-200 dark:hover:bg-[#3a3b3c] rounded-full transition-colors cursor-pointer">
              <Search className="w-3.5 h-3.5" />
            </button>
            <button className="p-1 hover:bg-slate-200 dark:hover:bg-[#3a3b3c] rounded-full transition-colors cursor-pointer">
              <MoreHorizontal className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="space-y-0.5">
          {onlineContacts.map((contact) => (
            <Link
              key={contact.id}
              href="/profile"
              className="flex items-center gap-3 px-2 py-2 rounded-xl hover:bg-[#e4e6eb]/70 dark:hover:bg-[#3a3b3c] transition-colors group cursor-pointer"
            >
              <div className="relative shrink-0">
                <img
                  src={contact.avatar}
                  alt={contact.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                {contact.online && (
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-white dark:border-[#242526] rounded-full" />
                )}
              </div>
              <span className="text-xs font-medium text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 truncate">
                {contact.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
