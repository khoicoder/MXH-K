'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { FacebookHeader } from '../../components/layout/facebook-header';
import { Sidebar } from '../../components/layout/sidebar';
import { RightPanel } from '../../components/layout/right-panel';
import { MobileNav } from '../../components/layout/mobile-nav';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isMessages = pathname.startsWith('/messages');

  return (
    <div className="min-h-screen bg-[#f0f2f5] dark:bg-[#18191a] flex flex-col w-full max-w-full overflow-x-hidden">
      {/* 1. Fixed Facebook Top Navigation Bar */}
      <FacebookHeader />

      {/* 2. Main Body */}
      {isMessages ? (
        <main className="flex-1 w-full min-h-[calc(100vh-56px)] overflow-hidden">
          {children}
        </main>
      ) : (
        <div className="flex-1 flex justify-between w-full max-w-[1920px] mx-auto">
          {/* Left Sidebar (Lối tắt & Trang cá nhân) */}
          <Sidebar />

          {/* Center Feed Content (Cột Tin Chính giữa) */}
          <main className="flex-1 max-w-[680px] w-full min-h-[calc(100vh-56px)] mx-auto px-0 sm:px-4 py-2 sm:py-4 pb-24 md:pb-8">
            {children}
          </main>

          {/* Right Sidebar (Lời mời kết bạn & Bạn bè Online) */}
          <RightPanel />
        </div>
      )}

      {/* Mobile Bottom Navigation (only on feed pages, hidden on messenger) */}
      {!isMessages && <MobileNav />}
    </div>
  );
}
