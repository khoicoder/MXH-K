'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Compass, Film, Users, Bell, User } from 'lucide-react';

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
    <nav className="md:hidden fixed bottom-0 left-0 right-0 h-14 bg-white/95 dark:bg-[#242526]/95 backdrop-blur-lg border-t border-slate-200 dark:border-neutral-800 flex items-center justify-around px-2 z-50 shadow-lg">
      {items.map((item) => {
        const isActive = pathname === item.href;
        const Icon = item.icon;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center justify-center p-1.5 rounded-xl transition-colors ${
              isActive
                ? 'text-[#1877f2] dark:text-[#2d88ff] font-bold'
                : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
            }`}
          >
            <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.5px]' : 'stroke-[1.8px]'}`} />
            <span className="text-[10px] mt-0.5">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
