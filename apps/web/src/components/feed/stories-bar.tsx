'use client';

import React from 'react';
import { Plus } from 'lucide-react';
import { useAuthStore } from '../../stores/auth.store';

export function StoriesBar() {
  const { user } = useAuthStore();

  const stories = [
    {
      id: 'story-1',
      author: 'Nguyễn Thu Trang',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=80',
    },
    {
      id: 'story-2',
      author: 'Đặng Tuấn Anh',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80',
      image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=500&auto=format&fit=crop&q=80',
    },
    {
      id: 'story-3',
      author: 'Lê Hoàng Yến',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80',
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&auto=format&fit=crop&q=80',
    },
    {
      id: 'story-4',
      author: 'Phạm Đức Duy',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&auto=format&fit=crop&q=80',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&auto=format&fit=crop&q=80',
    },
  ];

  return (
    <div className="flex gap-2 sm:gap-2.5 overflow-x-auto pb-1 mb-3 sm:mb-4 px-2 sm:px-0 select-none scrollbar-none snap-x">
      {/* 1. Create Story Card */}
      <div className="relative w-24 sm:w-32 h-40 sm:h-52 rounded-xl sm:rounded-2xl bg-white dark:bg-[#242526] border border-slate-200/80 dark:border-neutral-800 shadow-sm overflow-hidden flex flex-col shrink-0 cursor-pointer group hover:opacity-95 transition-all snap-start">
        <div className="h-28 sm:h-40 overflow-hidden bg-slate-100 dark:bg-slate-800">
          {user?.avatarUrl ? (
            <img
              src={user.avatarUrl}
              alt="Avatar"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white text-2xl font-bold">
              {user?.displayName?.[0]?.toUpperCase() || 'U'}
            </div>
          )}
        </div>
        <div className="relative flex-1 bg-white dark:bg-[#242526] flex flex-col items-center justify-end pb-2 px-1">
          <div className="absolute -top-4 w-8 h-8 rounded-full bg-[#1877f2] border-4 border-white dark:border-[#242526] flex items-center justify-center text-white shadow-md">
            <Plus className="w-4 h-4 stroke-[3px]" />
          </div>
          <span className="text-[11px] font-semibold text-slate-800 dark:text-slate-100 text-center">
            Tạo tin
          </span>
        </div>
      </div>

      {/* 2. Friends' Stories */}
      {stories.map((story) => (
        <div
          key={story.id}
          className="relative w-24 sm:w-32 h-40 sm:h-52 rounded-xl sm:rounded-2xl overflow-hidden shrink-0 cursor-pointer group shadow-sm hover:shadow-md transition-all snap-start"
        >
          {/* Background Story Image */}
          <img
            src={story.image}
            alt={story.author}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />

          {/* Author Circular Avatar with Facebook Blue Ring */}
          <div className="absolute top-2.5 left-2.5 w-9 h-9 rounded-full border-[3px] border-[#1877f2] overflow-hidden shadow-md">
            <img src={story.avatar} alt={story.author} className="w-full h-full object-cover" />
          </div>

          {/* Author Name */}
          <div className="absolute bottom-2.5 left-2.5 right-2.5">
            <span className="text-white text-xs font-semibold drop-shadow-md line-clamp-2">
              {story.author}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
