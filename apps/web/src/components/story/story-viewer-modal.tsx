'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Trash2,
  Eye,
  Globe,
  Users,
  UserX,
  Star,
  Lock,
  UserCheck,
  Heart,
  ThumbsUp,
  Smile,
} from 'lucide-react';
import { StoryGroup, StoryItem, StoryViewerItem, storyApi } from '../../lib/story-api';
import { useAuthStore } from '../../stores/auth.store';

interface StoryViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  groups: StoryGroup[];
  initialGroupIndex?: number;
  initialStoryIndex?: number;
  onStoryDeleted?: () => void;
}

const STORY_DURATION_MS = 5000; // 5 seconds per image/text story

export function StoryViewerModal({
  isOpen,
  onClose,
  groups,
  initialGroupIndex = 0,
  initialStoryIndex = 0,
  onStoryDeleted,
}: StoryViewerModalProps) {
  const { user } = useAuthStore();

  const [currentGroupIdx, setCurrentGroupIdx] = useState(initialGroupIndex);
  const [currentStoryIdx, setCurrentStoryIdx] = useState(initialStoryIndex);
  const [isPaused, setIsPaused] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0); // 0 to 100
  const [showViewersSheet, setShowViewersSheet] = useState(false);
  const [viewersList, setViewersList] = useState<StoryViewerItem[]>([]);
  const [isLoadingViewers, setIsLoadingViewers] = useState(false);
  const [myReaction, setMyReaction] = useState<string | null>(null);
  const [viewCount, setViewCount] = useState<number>(0);

  const videoRef = useRef<HTMLVideoElement>(null);
  const progressIntervalRef = useRef<any>(null);
  const isHoldingRef = useRef(false);

  const currentGroup = groups[currentGroupIdx];
  const currentStory: StoryItem | undefined = currentGroup?.stories[currentStoryIdx];
  const isOwner = user && currentStory && user.id === currentStory.authorId;

  // Reset indices when modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentGroupIdx(Math.min(initialGroupIndex, groups.length - 1));
      setCurrentStoryIdx(0);
      setProgress(0);
      setIsPaused(false);
      setShowViewersSheet(false);
    }
  }, [isOpen, initialGroupIndex, groups.length]);

  // Synchronize story states (reactions, views)
  useEffect(() => {
    if (currentStory) {
      setMyReaction(currentStory.myReaction);
      setViewCount(currentStory.viewCount);
      setProgress(0);

      // Automatically mark story as viewed in backend
      if (user && user.id !== currentStory.authorId) {
        storyApi
          .markStoryViewed(currentStory.id)
          .then((res) => {
            setViewCount(res.viewCount);
            currentStory.isViewed = true;
          })
          .catch(() => {});
      }
    }
  }, [currentStory?.id, user?.id]);

  // Handle Next Story
  const handleNextStory = useCallback(() => {
    if (!currentGroup) return;

    if (currentStoryIdx < currentGroup.stories.length - 1) {
      setCurrentStoryIdx((prev) => prev + 1);
      setProgress(0);
    } else if (currentGroupIdx < groups.length - 1) {
      setCurrentGroupIdx((prev) => prev + 1);
      setCurrentStoryIdx(0);
      setProgress(0);
    } else {
      // Reached the end of all stories
      onClose();
    }
  }, [currentGroup, currentStoryIdx, currentGroupIdx, groups.length, onClose]);

  // Handle Previous Story
  const handlePrevStory = useCallback(() => {
    if (currentStoryIdx > 0) {
      setCurrentStoryIdx((prev) => prev - 1);
      setProgress(0);
    } else if (currentGroupIdx > 0) {
      const prevGroup = groups[currentGroupIdx - 1];
      setCurrentGroupIdx((prev) => prev - 1);
      setCurrentStoryIdx(prevGroup.stories.length - 1);
      setProgress(0);
    }
  }, [currentStoryIdx, currentGroupIdx, groups]);

  // Progress Bar Timer
  useEffect(() => {
    if (!isOpen || !currentStory || isPaused || showViewersSheet) {
      clearInterval(progressIntervalRef.current);
      return;
    }

    const stepMs = 50;
    const increment = (stepMs / STORY_DURATION_MS) * 100;

    progressIntervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          handleNextStory();
          return 0;
        }
        return prev + increment;
      });
    }, stepMs);

    return () => clearInterval(progressIntervalRef.current);
  }, [isOpen, currentStory?.id, isPaused, showViewersSheet, handleNextStory]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        handleNextStory();
      } else if (e.key === 'ArrowLeft') {
        handlePrevStory();
      } else if (e.key === ' ') {
        e.preventDefault();
        setIsPaused((p) => !p);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleNextStory, handlePrevStory, onClose]);

  if (!isOpen || !currentGroup || !currentStory) return null;

  // React to story
  const handleReaction = async (reactionType: string) => {
    try {
      setMyReaction(reactionType);
      await storyApi.reactToStory(currentStory.id, reactionType);
    } catch {}
  };

  // Delete story
  const handleDeleteStory = async () => {
    if (!confirm('Bạn có chắc chắn muốn xóa tin này không?')) return;
    try {
      await storyApi.deleteStory(currentStory.id);
      if (onStoryDeleted) onStoryDeleted();

      if (currentGroup.stories.length > 1) {
        handleNextStory();
      } else {
        onClose();
      }
    } catch (err: any) {
      alert(err.message || 'Lỗi khi xóa tin');
    }
  };

  // Load viewers sheet
  const handleOpenViewersSheet = async () => {
    setIsPaused(true);
    setShowViewersSheet(true);
    setIsLoadingViewers(true);
    try {
      const res = await storyApi.getStoryViewers(currentStory.id);
      setViewersList(res.viewers);
      setViewCount(res.totalViews);
    } catch {
      setViewersList([]);
    } finally {
      setIsLoadingViewers(false);
    }
  };

  // Format relative time in Vietnamese
  const getRelativeTime = (dateStr: string) => {
    const diffMs = Date.now() - new Date(dateStr).getTime();
    const diffMins = Math.floor(diffMs / (60 * 1000));
    if (diffMins < 1) return 'Vừa xong';
    if (diffMins < 60) return `${diffMins} phút trước`;
    const diffHours = Math.floor(diffMins / 60);
    if (diffHours < 24) return `${diffHours} giờ trước`;
    return 'Hôm qua';
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center select-none overflow-hidden animate-in fade-in duration-150">
      {/* Top Controls: Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-md transition"
        title="Đóng (ESC)"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Desktop Prev Button */}
      {currentGroupIdx > 0 || currentStoryIdx > 0 ? (
        <button
          onClick={handlePrevStory}
          className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white items-center justify-center backdrop-blur-md transition"
          title="Tin trước (Mũi tên Trái)"
        >
          <ChevronLeft className="w-7 h-7" />
        </button>
      ) : null}

      {/* Desktop Next Button */}
      {currentGroupIdx < groups.length - 1 || currentStoryIdx < currentGroup.stories.length - 1 ? (
        <button
          onClick={handleNextStory}
          className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white items-center justify-center backdrop-blur-md transition"
          title="Tin tiếp theo (Mũi tên Phải)"
        >
          <ChevronRight className="w-7 h-7" />
        </button>
      ) : null}

      {/* Central Story Card (9:16 Aspect Ratio) */}
      <div className="relative w-full max-w-[420px] h-full sm:h-[92vh] sm:max-h-[820px] sm:rounded-2xl overflow-hidden bg-black shadow-2xl flex flex-col justify-between">
        {/* 1. Header Area: Segmented Progress Bars & Author Details */}
        <div className="absolute top-0 inset-x-0 z-30 p-3 pt-4 sm:pt-3 bg-gradient-to-b from-black/85 via-black/40 to-transparent flex flex-col gap-2.5">
          {/* Segmented Progress Bars */}
          <div className="flex gap-1.5 w-full">
            {currentGroup.stories.map((story, idx) => {
              let fillPercentage = 0;
              if (idx < currentStoryIdx) fillPercentage = 100;
              else if (idx === currentStoryIdx) fillPercentage = progress;

              return (
                <div
                  key={story.id}
                  className="flex-1 h-1 sm:h-1.5 rounded-full bg-white/30 overflow-hidden"
                >
                  <div
                    className="h-full bg-white transition-all duration-75 ease-linear"
                    style={{ width: `${fillPercentage}%` }}
                  />
                </div>
              );
            })}
          </div>

          {/* Author Details & Quick Actions */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-white overflow-hidden shrink-0">
                {currentGroup.authorAvatar ? (
                  <img
                    src={currentGroup.authorAvatar}
                    alt={currentGroup.authorName}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                    {currentGroup.authorName[0]?.toUpperCase() || 'U'}
                  </div>
                )}
              </div>
              <div>
                <p className="text-white text-xs sm:text-sm font-bold drop-shadow leading-tight">
                  {currentGroup.authorName}
                </p>
                <div className="flex items-center gap-1.5 text-white/80 text-[11px] drop-shadow">
                  <span>{getRelativeTime(currentStory.createdAt)}</span>
                  <span>•</span>
                  {currentStory.visibility === 'PUBLIC' && <Globe className="w-3 h-3" />}
                  {currentStory.visibility === 'FRIENDS' && <Users className="w-3 h-3" />}
                  {currentStory.visibility === 'FRIENDS_EXCEPT' && <UserX className="w-3 h-3" />}
                  {currentStory.visibility === 'CLOSE_FRIENDS' && (
                    <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                  )}
                  {currentStory.visibility === 'ONLY_ME' && <Lock className="w-3 h-3" />}
                  {currentStory.visibility === 'CUSTOM' && <UserCheck className="w-3 h-3" />}
                </div>
              </div>
            </div>

            {/* Play/Pause, Mute & Owner Delete */}
            <div className="flex items-center gap-1.5 text-white">
              {currentStory.type === 'VIDEO' && (
                <button
                  type="button"
                  onClick={() => {
                    setIsMuted(!isMuted);
                    if (videoRef.current) videoRef.current.muted = !isMuted;
                  }}
                  className="p-1.5 rounded-full hover:bg-white/20 transition"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
              )}

              <button
                type="button"
                onClick={() => setIsPaused((p) => !p)}
                className="p-1.5 rounded-full hover:bg-white/20 transition"
              >
                {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
              </button>

              {isOwner && (
                <button
                  type="button"
                  onClick={handleDeleteStory}
                  className="p-1.5 rounded-full hover:bg-red-500/30 text-red-400 transition"
                  title="Xóa tin này"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* 2. Main Media / Text Display */}
        <div
          className="relative w-full h-full flex items-center justify-center overflow-hidden"
          onMouseDown={() => {
            isHoldingRef.current = true;
            setIsPaused(true);
          }}
          onMouseUp={() => {
            isHoldingRef.current = false;
            setIsPaused(false);
          }}
          onTouchStart={() => {
            isHoldingRef.current = true;
            setIsPaused(true);
          }}
          onTouchEnd={() => {
            isHoldingRef.current = false;
            setIsPaused(false);
          }}
        >
          {/* Left / Right Click Nav Zones */}
          <div
            className="absolute left-0 inset-y-0 w-1/3 z-20 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              handlePrevStory();
            }}
          />
          <div
            className="absolute right-0 inset-y-0 w-2/3 z-20 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              handleNextStory();
            }}
          />

          {/* Render Story Types */}
          {currentStory.type === 'TEXT' ? (
            <div
              className="w-full h-full p-8 flex items-center justify-center text-center transition-all duration-300"
              style={{
                backgroundColor: currentStory.backgroundColor || '#1877F2',
                background: currentStory.backgroundColor || 'linear-gradient(135deg, #1877F2 0%, #0052CC 100%)',
              }}
            >
              <p className={`text-white text-xl sm:text-2xl drop-shadow-lg font-bold break-words ${currentStory.fontStyle || 'font-sans'}`}>
                {currentStory.content}
              </p>
            </div>
          ) : currentStory.type === 'VIDEO' ? (
            <div className="w-full h-full bg-black flex items-center justify-center">
              <video
                ref={videoRef}
                src={currentStory.mediaUrl || ''}
                autoPlay
                playsInline
                loop
                muted={isMuted}
                className="w-full h-full object-contain"
              />
            </div>
          ) : (
            <div className="relative w-full h-full bg-black flex items-center justify-center">
              {/* Blurred background image */}
              <div
                className="absolute inset-0 bg-cover bg-center filter blur-xl opacity-35 scale-110"
                style={{ backgroundImage: `url(${currentStory.mediaUrl})` }}
              />
              {/* Main crisp image */}
              <img
                src={currentStory.mediaUrl || ''}
                alt="Story content"
                className="relative z-10 w-full h-full object-contain"
              />
            </div>
          )}

          {/* Content Caption Overlay for Image/Video */}
          {currentStory.type !== 'TEXT' && currentStory.content && (
            <div className="absolute bottom-20 inset-x-0 z-20 p-4 bg-gradient-to-t from-black/85 via-black/40 to-transparent text-white text-center text-sm font-medium drop-shadow-md">
              {currentStory.content}
            </div>
          )}
        </div>

        {/* 3. Footer Bar: Reactions & Viewers */}
        <div className="absolute bottom-0 inset-x-0 z-30 p-3 pb-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-center justify-between gap-2">
          {/* View Count for Owner */}
          {isOwner ? (
            <button
              type="button"
              onClick={handleOpenViewersSheet}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/20 hover:bg-white/30 text-white text-xs font-semibold backdrop-blur-md transition"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>{viewCount} người xem</span>
            </button>
          ) : (
            <div className="text-white/60 text-xs pl-2">
              Bấm để chuyển tin
            </div>
          )}

          {/* Reaction Bar */}
          <div className="flex items-center gap-1 bg-black/40 backdrop-blur-md rounded-full px-2 py-1 border border-white/10">
            {[
              { type: 'LIKE', emoji: '👍', label: 'Thích' },
              { type: 'LOVE', emoji: '❤️', label: 'Yêu thích' },
              { type: 'HAHA', emoji: '😂', label: 'Haha' },
              { type: 'WOW', emoji: '😮', label: 'Wow' },
              { type: 'SAD', emoji: '😢', label: 'Buồn' },
              { type: 'ANGRY', emoji: '😡', label: 'Phẫn nộ' },
            ].map((r) => (
              <button
                key={r.type}
                type="button"
                onClick={() => handleReaction(r.type)}
                className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-sm sm:text-base hover:scale-125 transition-transform ${
                  myReaction === r.type ? 'scale-125 ring-2 ring-blue-500 bg-white/20' : ''
                }`}
                title={r.label}
              >
                {r.emoji}
              </button>
            ))}
          </div>
        </div>

        {/* 4. Owner Viewers Sheet Modal */}
        {showViewersSheet && (
          <div className="absolute inset-x-0 bottom-0 max-h-[60%] bg-white dark:bg-[#242526] z-40 rounded-t-2xl shadow-2xl flex flex-col p-4 animate-in slide-in-from-bottom duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-neutral-700">
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4 text-blue-600" />
                <h4 className="font-bold text-sm text-slate-900 dark:text-slate-100">
                  Người đã xem ({viewCount})
                </h4>
              </div>
              <button
                type="button"
                onClick={() => {
                  setShowViewersSheet(false);
                  setIsPaused(false);
                }}
                className="w-7 h-7 rounded-full hover:bg-slate-100 dark:hover:bg-neutral-700 flex items-center justify-center text-slate-500"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-2 space-y-2">
              {isLoadingViewers ? (
                <div className="text-center py-6 text-xs text-slate-400">Đang tải danh sách người xem...</div>
              ) : viewersList.length === 0 ? (
                <div className="text-center py-6 text-xs text-slate-400">Chưa có ai xem tin này</div>
              ) : (
                viewersList.map((viewer) => (
                  <div
                    key={viewer.id}
                    className="flex items-center justify-between p-2 rounded-xl hover:bg-slate-50 dark:hover:bg-neutral-800 transition"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full overflow-hidden bg-slate-200 dark:bg-slate-700 shrink-0">
                        {viewer.avatar ? (
                          <img src={viewer.avatar} alt={viewer.name} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full bg-blue-500 text-white flex items-center justify-center font-bold text-xs">
                            {viewer.name[0]?.toUpperCase() || 'U'}
                          </div>
                        )}
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-slate-900 dark:text-slate-100">
                          {viewer.name}
                        </p>
                        <p className="text-[10px] text-slate-400">
                          {getRelativeTime(viewer.viewedAt)}
                        </p>
                      </div>
                    </div>

                    {viewer.reaction && (
                      <span className="text-base" title={viewer.reaction}>
                        {viewer.reaction === 'LIKE' && '👍'}
                        {viewer.reaction === 'LOVE' && '❤️'}
                        {viewer.reaction === 'HAHA' && '😂'}
                        {viewer.reaction === 'WOW' && '😮'}
                        {viewer.reaction === 'SAD' && '😢'}
                        {viewer.reaction === 'ANGRY' && '😡'}
                      </span>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
