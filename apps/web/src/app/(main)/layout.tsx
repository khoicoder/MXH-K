import React from 'react';
import { FacebookHeader } from '../../components/layout/facebook-header';
import { Sidebar } from '../../components/layout/sidebar';
import { RightPanel } from '../../components/layout/right-panel';
import { MobileNav } from '../../components/layout/mobile-nav';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#f0f2f5] dark:bg-[#18191a] flex flex-col">
      {/* 1. Fixed Facebook Top Navigation Bar */}
      <FacebookHeader />

      {/* 2. Main 3-Column Body */}
      <div className="flex-1 flex justify-between w-full max-w-[1920px] mx-auto">
        {/* Left Sidebar (Lối tắt & Trang cá nhân) */}
        <Sidebar />

        {/* Center Feed Content (Cột Tin Chính giữa) */}
        <main className="flex-1 max-w-[680px] w-full min-h-[calc(100vh-56px)] mx-auto px-2 sm:px-4 py-4 pb-20 md:pb-8">
          {children}
        </main>

        {/* Right Sidebar (Lời mời kết bạn & Bạn bè Online) */}
        <RightPanel />
      </div>

      {/* Mobile Bottom Navigation */}
      <MobileNav />
    </div>
  );
}
