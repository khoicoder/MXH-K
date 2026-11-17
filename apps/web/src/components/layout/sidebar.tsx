'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Users,
  Film,
  Bookmark,
  Clock,
  Compass,
  Settings,
  Shield,
  HelpCircle,
  Flag,
} from 'lucide-react';
import { useAuthStore } from '../../stores/auth.store';

export function Sidebar() {
  const pathname = usePathname();
  const { user } = useAuthStore();

  const mainShortcuts = [
    {
      label: user?.displayName || 'Trang cá nhân',
      href: '/profile',
      isProfile: true,
    },
    {
      label: 'Bạn bè & Lời mời',
      href: '/friends',
      icon: Users,
      badge: '2 mới',
      color: 'bg-blue-500 text-white',
    },
    {
      label: 'Thước phim (Reels)',
      href: '/reels',
      icon: Film,
      color: 'bg-gradient-to-tr from-pink-500 to-rose-500 text-white',
    },
    {
      label: 'Khám phá xu hướng',
      href: '/explore',
      icon: Compass,
      color: 'bg-emerald-500 text-white',
    },
    {
      label: 'Bài viết đã lưu',
      href: '/profile',
      icon: Bookmark,
      color: 'bg-purple-500 text-white',
    },
    {
      label: 'Kỷ niệm & Bảng tin',
      href: '/',
      icon: Clock,
      color: 'bg-amber-500 text-white',
    },
    {
      label: 'Cài đặt & bảo mật',
      href: '/settings',
      icon: Settings,
      color: 'bg-slate-600 text-white',
    },
  ];

  return (
    <aside className="hidden xl:block w-[320px] h-[calc(100vh-56px)] sticky top-14 p-3 overflow-y-auto space-y-3 select-none">
      {/* Navigation Shortcut List */}
      <div className="space-y-1">
        {mainShortcuts.map((item) => {
          const isActive = pathname === item.href && !item.isProfile;
          const Icon = item.icon;

          if (item.isProfile) {
            return (
              <Link
                key="profile"
                href="/profile"
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[#e4e6eb]/70 dark:hover:bg-[#3a3b3c] transition-colors group"
              >
                <div className="w-9 h-9 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-sm shrink-0 overflow-hidden shadow-sm">
                  {user?.avatarUrl ? (
                    <img src={user.avatarUrl} alt="Avatar" className="w-full h-full object-cover" />
                  ) : (
                    user?.displayName?.[0]?.toUpperCase() || 'U'
                  )}
                </div>
                <span className="font-semibold text-xs text-slate-800 dark:text-slate-100 truncate">
                  {user?.displayName || 'Trang cá nhân'}
                </span>
              </Link>
            );
          }

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center justify-between px-3 py-2.5 rounded-xl transition-colors group ${
                isActive
                  ? 'bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 font-bold'
                  : 'hover:bg-[#e4e6eb]/70 dark:hover:bg-[#3a3b3c] text-slate-700 dark:text-slate-200 font-medium'
              }`}
            >
              <div className="flex items-center gap-3 min-w-0">
                {Icon && (
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 shadow-sm ${item.color}`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                )}
                <span className="text-xs truncate">{item.label}</span>
              </div>
              {item.badge && (
                <span className="text-[10px] font-bold bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 px-2 py-0.5 rounded-full">
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </div>

      <div className="border-t border-slate-200/80 dark:border-neutral-800 pt-3" />

      {/* Your Shortcuts / Groups Section */}
      <div>
        <p className="px-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
          Lối tắt của bạn
        </p>
        <div className="space-y-1">
          <Link
            href="/explore?q=congnghe"
            className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-[#e4e6eb]/70 dark:hover:bg-[#3a3b3c] transition-colors"
          >
            <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 font-bold flex items-center justify-center text-xs shrink-0">
              💻
            </div>
            <span className="text-xs font-medium text-slate-700 dark:text-slate-200 truncate">
              Cộng đồng Lập trình & AI Việt Nam
            </span>
          </Link>

          <Link
            href="/explore?q=giaitri"
            className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-[#e4e6eb]/70 dark:hover:bg-[#3a3b3c] transition-colors"
          >
            <div className="w-8 h-8 rounded-lg bg-pink-100 dark:bg-pink-950/60 text-pink-600 dark:text-pink-400 font-bold flex items-center justify-center text-xs shrink-0">
              🎬
            </div>
            <span className="text-xs font-medium text-slate-700 dark:text-slate-200 truncate">
              Góc Thư Giãn & Reels Hay Mỗi Ngày
            </span>
          </Link>
        </div>
      </div>

      {/* Facebook-style Footer in Vietnamese */}
      <div className="pt-4 px-3 text-[11px] text-slate-400 dark:text-slate-500 space-y-1 leading-relaxed">
        <p>
          <a href="#" className="hover:underline">Quyền riêng tư</a> ·{' '}
          <a href="#" className="hover:underline">Điều khoản</a> ·{' '}
          <a href="#" className="hover:underline">Quảng cáo</a> ·{' '}
          <a href="#" className="hover:underline">Cookie</a>
        </p>
        <p className="font-semibold text-slate-400/80">MXH-K Việt Nam © 2026</p>
      </div>
    </aside>
  );
}
