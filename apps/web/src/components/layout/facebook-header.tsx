'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { io } from 'socket.io-client';
import {
  Home,
  Film,
  Users,
  Compass,
  Bell,
  Search,
  Plus,
  MessageCircle,
  Settings,
  LogOut,
  User as UserIcon,
  Moon,
  Sun,
  Shield,
  Bookmark,
} from 'lucide-react';
import { Logo } from '../ui/logo';
import { useAuthStore } from '../../stores/auth.store';
import { apiClient } from '../../lib/api-client';

export function FacebookHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const { user, clearAuth } = useAuthStore();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [isDark, setIsDark] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Sync unread notification count
  useEffect(() => {
    if (!user?.id) return;

    // Fetch initial unread count
    apiClient.get('/api/notifications/unread-count')
      .then((res: any) => {
        if (typeof res?.unreadCount === 'number') {
          setUnreadCount(res.unreadCount);
        }
      })
      .catch(() => {});

    // Connect to notification socket for real-time updates
    const socket = io('http://localhost:4000/notifications', {
      query: { userId: user.id },
      transports: ['websocket', 'polling'],
    });

    socket.on('new_notification', () => {
      setUnreadCount((prev) => prev + 1);
    });

    // Smart polling fallback every 8 seconds
    const timer = setInterval(() => {
      apiClient.get('/api/notifications/unread-count')
        .then((res: any) => {
          if (typeof res?.unreadCount === 'number') {
            setUnreadCount(res.unreadCount);
          }
        })
        .catch(() => {});
    }, 8000);

    return () => {
      socket.disconnect();
      clearInterval(timer);
    };
  }, [user?.id]);

  // Reset local badge when visiting notifications
  useEffect(() => {
    if (pathname === '/notifications') {
      setUnreadCount(0);
    }
  }, [pathname]);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowUserMenu(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/explore?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleLogout = async () => {
    try {
      await apiClient.post('/api/auth/logout');
    } catch {
      // Ignored
    }
    clearAuth();
    router.push('/login');
  };

  const navTabs = [
    { label: 'Trang chủ', href: '/', icon: Home },
    { label: 'Thước phim', href: '/reels', icon: Film },
    { label: 'Bạn bè', href: '/friends', icon: Users },
    { label: 'Khám phá', href: '/explore', icon: Compass },
    { label: 'Thông báo', href: '/notifications', icon: Bell, badge: unreadCount },
  ];

  return (
    <header className="sticky top-0 z-50 h-14 bg-white dark:bg-[#242526] border-b border-slate-200/80 dark:border-neutral-800 shadow-[0_1px_3px_rgba(0,0,0,0.06)] px-4 flex items-center justify-between">
      {/* 1. LEFT: Brand Logo & Facebook-style Pill Search */}
      <div className="flex items-center gap-3 w-1/4 min-w-[220px]">
        <Link href="/" className="shrink-0 hover:opacity-95 transition-opacity">
          <Logo variant="icon" size="md" />
        </Link>

        <form onSubmit={handleSearchSubmit} className="relative hidden sm:block flex-1 max-w-[240px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tìm kiếm trên MXH-K..."
            className="w-full bg-[#f0f2f5] dark:bg-[#3a3b3c] border-none rounded-full pl-9 pr-4 py-2 text-xs text-slate-800 dark:text-slate-100 placeholder:text-slate-500 dark:placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
          />
        </form>
      </div>

      {/* 2. CENTER: Large Facebook Navigation Tabs */}
      <nav className="flex items-center justify-center flex-1 max-w-2xl h-full px-2">
        {navTabs.map((tab) => {
          const isActive = pathname === tab.href;
          const Icon = tab.icon;
          return (
            <Link
              key={tab.href}
              href={tab.href}
              title={tab.label}
              className={`relative flex items-center justify-center flex-1 h-full max-w-[110px] rounded-lg transition-colors hover:bg-slate-100 dark:hover:bg-[#3a3b3c] ${
                isActive ? 'text-[#1877f2] dark:text-[#2d88ff]' : 'text-slate-500 dark:text-slate-400'
              }`}
            >
              <div className="relative">
                <Icon className={`w-6 h-6 ${isActive ? 'stroke-[2.5px]' : 'stroke-[1.8px]'}`} />
                {tab.badge && tab.badge > 0 ? (
                  <span className="absolute -top-1.5 -right-2 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.2 rounded-full min-w-[18px] text-center shadow-sm">
                    {tab.badge}
                  </span>
                ) : null}
              </div>
              {/* Active Blue Bottom Bar */}
              {isActive && (
                <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#1877f2] dark:bg-[#2d88ff] rounded-t-sm" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* 3. RIGHT: Quick Actions & Profile Dropdown */}
      <div className="flex items-center justify-end gap-2 w-1/4 min-w-[220px]" ref={menuRef}>
        {/* Quick Create Button */}
        <button
          onClick={() => router.push('/')}
          title="Tạo bài viết mới"
          className="w-10 h-10 rounded-full bg-[#e4e6eb] dark:bg-[#3a3b3c] hover:bg-[#d8dadf] dark:hover:bg-[#4e4f50] flex items-center justify-center text-slate-800 dark:text-slate-100 transition-colors cursor-pointer"
        >
          <Plus className="w-5 h-5" />
        </button>

        {/* Messenger Button */}
        <button
          title="Tin nhắn"
          className="w-10 h-10 rounded-full bg-[#e4e6eb] dark:bg-[#3a3b3c] hover:bg-[#d8dadf] dark:hover:bg-[#4e4f50] flex items-center justify-center text-slate-800 dark:text-slate-100 transition-colors cursor-pointer relative"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-[#1877f2] rounded-full border-2 border-white dark:border-[#242526]" />
        </button>

        {/* User Avatar & Dropdown Menu */}
        <div className="relative">
          <button
            onClick={() => setShowUserMenu(!showUserMenu)}
            className="flex items-center gap-2 p-1 rounded-full hover:bg-slate-100 dark:hover:bg-[#3a3b3c] transition-colors cursor-pointer"
          >
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 text-white font-bold flex items-center justify-center text-sm shadow-sm overflow-hidden">
              {user?.avatarUrl ? (
                <img src={user.avatarUrl} alt="Avatar" className="w-full h-full object-cover" />
              ) : (
                user?.displayName?.[0]?.toUpperCase() || 'U'
              )}
            </div>
          </button>

          {/* Facebook-style Account Menu Dropdown */}
          {showUserMenu && (
            <div className="absolute right-0 top-12 w-80 bg-white dark:bg-[#242526] rounded-2xl shadow-2xl border border-slate-200 dark:border-neutral-800 p-3 space-y-2 z-50">
              {/* Profile Card Header */}
              <Link
                href="/profile"
                onClick={() => setShowUserMenu(false)}
                className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#f0f2f5] dark:hover:bg-[#3a3b3c] transition-colors shadow-sm bg-slate-50 dark:bg-[#18191a]/40"
              >
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-lg shrink-0 overflow-hidden">
                  {user?.avatarUrl ? (
                    <img src={user.avatarUrl} alt="Avatar" className="w-full h-full object-cover" />
                  ) : (
                    user?.displayName?.[0]?.toUpperCase() || 'U'
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-bold text-sm text-slate-900 dark:text-white truncate">
                    {user?.displayName || 'Thành viên MXH-K'}
                  </p>
                  <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                    Xem trang cá nhân của bạn
                  </p>
                </div>
              </Link>

              <div className="border-t border-slate-100 dark:border-neutral-800 my-1" />

              {/* Menu Links in Vietnamese */}
              <div className="space-y-0.5">
                <Link
                  href="/settings"
                  onClick={() => setShowUserMenu(false)}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-[#f0f2f5] dark:hover:bg-[#3a3b3c] transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-[#e4e6eb] dark:bg-[#3a3b3c] flex items-center justify-center">
                    <Settings className="w-4 h-4 text-slate-700 dark:text-slate-200" />
                  </div>
                  <span>Cài đặt & quyền riêng tư</span>
                </Link>

                <Link
                  href="/settings"
                  onClick={() => setShowUserMenu(false)}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-[#f0f2f5] dark:hover:bg-[#3a3b3c] transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-[#e4e6eb] dark:bg-[#3a3b3c] flex items-center justify-center">
                    <Shield className="w-4 h-4 text-slate-700 dark:text-slate-200" />
                  </div>
                  <span>Bảo mật thiết bị & phiên đăng nhập</span>
                </Link>

                <button
                  onClick={() => {
                    document.documentElement.classList.toggle('dark');
                    setIsDark(!isDark);
                  }}
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-[#f0f2f5] dark:hover:bg-[#3a3b3c] transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#e4e6eb] dark:bg-[#3a3b3c] flex items-center justify-center">
                      <Moon className="w-4 h-4 text-slate-700 dark:text-slate-200" />
                    </div>
                    <span>Chế độ giao diện Tối</span>
                  </div>
                  <span className="text-[11px] text-slate-400">Bật/Tắt</span>
                </button>

                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors cursor-pointer text-left"
                >
                  <div className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-950/60 flex items-center justify-center text-red-600 dark:text-red-400">
                    <LogOut className="w-4 h-4" />
                  </div>
                  <span>Đăng xuất tài khoản</span>
                </button>
              </div>

              <div className="pt-2 text-[10px] text-slate-400 dark:text-slate-500 text-center">
                Quyền riêng tư · Điều khoản · MXH-K © 2026
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
