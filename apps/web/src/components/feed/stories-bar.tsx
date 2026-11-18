'use client';

import React, { useState, useEffect } from 'react';
import { Plus, Sparkles, Video, Image as ImageIcon } from 'lucide-react';
import { useAuthStore } from '../../stores/auth.store';
import { StoryGroup, storyApi } from '../../lib/story-api';
import { CreateStoryModal } from '../story/create-story-modal';
import { StoryViewerModal } from '../story/story-viewer-modal';

export function StoriesBar() {
  const { user } = useAuthStore();
  const [groups, setGroups] = useState<StoryGroup[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [viewerOpen, setViewerOpen] = useState(false);
  const [selectedGroupIdx, setSelectedGroupIdx] = useState(0);

  const fetchStories = async () => {
    try {
      const res = await storyApi.getStoryFeed();
      setGroups(res.groups || []);
    } catch {
      setGroups([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchStories();
  }, [user?.id]);

  const handleOpenViewer = (index: number) => {
    setSelectedGroupIdx(index);
    setViewerOpen(true);
  };

  return (
    <>
      <div className="flex gap-2 sm:gap-2.5 overflow-x-auto pb-1 mb-3 sm:mb-4 px-2 sm:px-0 select-none scrollbar-none snap-x">
        {/* 1. Create Story Card */}
        <div
          onClick={() => setIsCreateOpen(true)}
          className="relative w-24 sm:w-32 h-40 sm:h-52 rounded-xl sm:rounded-2xl bg-white dark:bg-[#242526] border border-slate-200/80 dark:border-neutral-800 shadow-sm overflow-hidden flex flex-col shrink-0 cursor-pointer group hover:opacity-95 transition-all snap-start"
        >
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
            <div className="absolute -top-4 w-8 h-8 rounded-full bg-[#1877f2] border-4 border-white dark:border-[#242526] flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform">
              <Plus className="w-4 h-4 stroke-[3px]" />
            </div>
            <span className="text-[11px] font-semibold text-slate-800 dark:text-slate-100 text-center">
              Tạo tin
            </span>
          </div>
        </div>

        {/* 2. Real User Stories Groups from Database */}
        {groups.map((group, idx) => {
          const latestStory = group.stories[group.stories.length - 1];
          if (!latestStory) return null;

          return (
            <div
              key={group.authorId}
              onClick={() => handleOpenViewer(idx)}
              className="relative w-24 sm:w-32 h-40 sm:h-52 rounded-xl sm:rounded-2xl overflow-hidden shrink-0 cursor-pointer group shadow-sm hover:shadow-md transition-all snap-start"
            >
              {/* Background of the card: Photo / Video poster / Text Background */}
              {latestStory.type === 'TEXT' ? (
                <div
                  className="w-full h-full flex items-center justify-center p-2 text-center"
                  style={{
                    backgroundColor: latestStory.backgroundColor || '#1877F2',
                    background:
                      latestStory.backgroundColor ||
                      'linear-gradient(135deg, #1877F2 0%, #0052CC 100%)',
                  }}
                >
                  <p className="text-white text-[11px] font-bold line-clamp-4 drop-shadow">
                    {latestStory.content}
                  </p>
                </div>
              ) : latestStory.type === 'VIDEO' ? (
                <div className="w-full h-full bg-slate-900 flex items-center justify-center relative">
                  {latestStory.mediaUrl ? (
                    <video
                      src={latestStory.mediaUrl}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <Video className="w-8 h-8 text-white/50" />
                  )}
                  <div className="absolute top-2.5 right-2.5 w-5 h-5 rounded-full bg-black/60 flex items-center justify-center text-white">
                    <Video className="w-3 h-3" />
                  </div>
                </div>
              ) : (
                <img
                  src={latestStory.mediaUrl || ''}
                  alt={group.authorName}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              )}

              {/* Dark Gradient Overlay for Readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/85 pointer-events-none" />

              {/* Author Circular Avatar with Status Ring:
                  - Blue ring if has unviewed stories
                  - Gray ring if all stories viewed
              */}
              <div
                className={`absolute top-2.5 left-2.5 w-9 h-9 rounded-full overflow-hidden shadow-md transition-transform group-hover:scale-105 ${
                  group.hasUnviewed
                    ? 'border-[3px] border-[#1877f2] ring-2 ring-[#1877f2]/30'
                    : 'border-2 border-slate-300 dark:border-neutral-600'
                }`}
              >
                {group.authorAvatar ? (
                  <img
                    src={group.authorAvatar}
                    alt={group.authorName}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white text-xs font-bold">
                    {group.authorName[0]?.toUpperCase() || 'U'}
                  </div>
                )}
              </div>

              {/* Story Count Pill if > 1 story */}
              {group.stories.length > 1 && (
                <div className="absolute top-2.5 right-2 px-1.5 py-0.5 rounded-full bg-black/60 backdrop-blur-sm text-[10px] font-bold text-white shadow">
                  {group.stories.length}
                </div>
              )}

              {/* Author Name */}
              <div className="absolute bottom-2.5 left-2.5 right-2.5 pointer-events-none">
                <span className="text-white text-xs font-semibold drop-shadow-md line-clamp-2 leading-tight">
                  {group.isSelf ? 'Tin của bạn' : group.authorName}
                </span>
              </div>
            </div>
          );
        })}

        {/* Empty State / Hint if no stories yet */}
        {!isLoading && groups.length === 0 && (
          <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-2xl border border-dashed border-slate-200 dark:border-neutral-800 text-xs text-slate-400">
            <Sparkles className="w-4 h-4 text-blue-500" />
            <span>Hãy là người đầu tiên chia sẻ khoảnh khắc trong 24 giờ!</span>
          </div>
        )}
      </div>

      {/* Modals */}
      <CreateStoryModal
        isOpen={isCreateOpen}
        onClose={() => setIsCreateOpen(false)}
        onCreated={() => fetchStories()}
      />

      <StoryViewerModal
        isOpen={viewerOpen}
        onClose={() => {
          setViewerOpen(false);
          fetchStories();
        }}
        groups={groups}
        initialGroupIndex={selectedGroupIdx}
        onStoryDeleted={() => fetchStories()}
      />
    </>
  );
}
