'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Compass, Film, Users, User, Bell } from 'lucide-react';

export function MobileNav() {
  const pathname = usePathname();

  const items = [
    { label: 'Trang chủ', href: '/', icon: Home },
    { label: 'Reels', href: '/reels', icon: Film },
    { label: 'Bạn bè', href: '/friends', icon: Users },
    { label: 'Khám phá', href: '/explore', icon: Compass },
    { label: 'Thông báo', href: '/notifications', icon: Bell },
    { label: 'Cá nhân', href: '/profile', icon: User },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 h-16 pb-[env(safe-area-inset-bottom,4px)] bg-white/95 dark:bg-[#242526]/95 backdrop-blur-md border-t border-slate-200/80 dark:border-neutral-800 flex items-center justify-between px-1 z-50 shadow-[0_-2px_10px_rgba(0,0,0,0.05)] select-none">
      {items.map((item) => {
        const isActive = pathname === item.href;
        const Icon = item.icon;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex-1 flex flex-col items-center justify-center min-h-[44px] py-1 rounded-xl transition-all active:scale-95 touch-manipulation ${
              isActive
                ? 'text-[#1877f2] dark:text-[#2d88ff] font-bold'
                : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200'
            }`}
          >
            <div className="relative">
              <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.6px] scale-110' : 'stroke-[1.8px]'}`} />
              {isActive && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#1877f2] dark:bg-[#2d88ff]" />
              )}
            </div>
            <span className="text-[10px] mt-1 leading-none tracking-tight">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
