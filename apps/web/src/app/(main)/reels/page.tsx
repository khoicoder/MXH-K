'use client';

import React, { useState, useEffect } from 'react';
import { Heart, MessageCircle, Bookmark, Share2, Play, Pause, Volume2, Music, Film } from 'lucide-react';
import { apiClient } from '../../../lib/api-client';

export default function ReelsPage() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(382);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showCommentSheet, setShowCommentSheet] = useState(false);
  const [activeReelIndex, setActiveReelIndex] = useState(0);
  const [reels, setReels] = useState<any[]>([
    {
      id: 'reel-demo-1',
      creatorName: 'Nguyễn Văn Minh',
      creatorAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&auto=format&fit=crop&q=80',
      caption: 'Khám phá kiến trúc vi dịch vụ mạng xã hội MXH-K cực kỳ mượt mà! 🚀 Đón xem mẹo lập trình hữu ích nhé. #congnghe #laptrinh #mxhk #vietnam',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      viewsCount: '15.4K',
      likesCount: 382,
      commentsCount: 45,
      song: 'Âm thanh gốc - Nguyễn Văn Minh',
    },
    {
      id: 'reel-demo-2',
      creatorName: 'Lê Hoàng Yến',
      creatorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80',
      caption: 'Một ngày làm việc năng lượng tại văn phòng công nghệ mới! Cùng ngắm hoàng hôn Hà Nội nào cả nhà 🌇 #hanoi #vlog #reels',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
      viewsCount: '28.1K',
      likesCount: 924,
      commentsCount: 88,
      song: 'Nhạc nền thư giãn - Lo-Fi Chill',
    },
  ]);

  const activeReel = reels[activeReelIndex] || reels[0];

  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNextReel = () => {
    setActiveReelIndex((prev) => (prev + 1) % reels.length);
    setIsLiked(false);
    setIsBookmarked(false);
    setIsPlaying(true);
  };

  const handlePrevReel = () => {
    setActiveReelIndex((prev) => (prev - 1 + reels.length) % reels.length);
    setIsLiked(false);
    setIsBookmarked(false);
    setIsPlaying(true);
  };

  const handleLike = () => {
    if (isLiked) {
      setLikeCount((c) => c - 1);
    } else {
      setLikeCount((c) => c + 1);
    }
    setIsLiked(!isLiked);
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-130px)] sm:min-h-[calc(100vh-80px)] select-none w-full max-w-full">
      {/* Header */}
      <div className="w-full sm:max-w-sm mb-2 sm:mb-3 flex items-center justify-between px-3 sm:px-2">
        <h1 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Film className="w-5 h-5 text-rose-500" />
          <span>Thước phim (Reels)</span>
        </h1>
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrevReel}
            className="text-xs font-bold text-blue-600 hover:underline cursor-pointer"
          >
            Trước
          </button>
          <span className="text-slate-400">·</span>
          <button
            onClick={handleNextReel}
            className="text-xs font-bold text-blue-600 hover:underline cursor-pointer"
          >
            Tiếp theo
          </button>
        </div>
      </div>

      {/* Reel Card */}
      <div className="relative w-full sm:max-w-sm aspect-[9/16] bg-black rounded-none sm:rounded-3xl overflow-hidden shadow-2xl border-y sm:border border-slate-800">
        <video
          src={activeReel.videoUrl}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover cursor-pointer"
          onClick={handleTogglePlay}
        />

        {/* Play/Pause Center Indicator */}
        {!isPlaying && (
          <div
            onClick={handleTogglePlay}
            className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[1px] cursor-pointer"
          >
            <div className="w-16 h-16 rounded-full bg-black/60 text-white flex items-center justify-center shadow-lg">
              <Play className="w-8 h-8 fill-white ml-1" />
            </div>
          </div>
        )}

        {/* Bottom Metadata Info */}
        <div className="absolute bottom-0 left-0 right-14 p-4 bg-gradient-to-t from-black/90 via-black/40 to-transparent text-white space-y-2 pointer-events-none">
          <div className="flex items-center gap-2.5 pointer-events-auto">
            <img
              src={activeReel.creatorAvatar}
              alt={activeReel.creatorName}
              className="w-9 h-9 rounded-full border-2 border-white object-cover"
            />
            <span className="font-bold text-xs shadow-sm">{activeReel.creatorName}</span>
            <button className="px-3 py-1 bg-white text-black font-bold text-[11px] rounded-full hover:bg-slate-200 transition-colors">
              Theo dõi
            </button>
          </div>

          <p className="text-xs leading-relaxed line-clamp-3 text-slate-100 pointer-events-auto">
            {activeReel.caption}
          </p>

          <div className="flex items-center gap-2 text-[11px] text-slate-300">
            <Music className="w-3.5 h-3.5 animate-spin" />
            <span className="truncate">{activeReel.song}</span>
          </div>
        </div>

        {/* Right Action Floating Column (Facebook Reels style) */}
        <div className="absolute right-3 bottom-6 flex flex-col items-center gap-4 text-white z-20">
          {/* Like */}
          <button onClick={handleLike} className="flex flex-col items-center gap-1 group cursor-pointer">
            <div
              className={`w-11 h-11 rounded-full flex items-center justify-center backdrop-blur-md transition-all ${
                isLiked ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/40' : 'bg-black/50 text-white hover:bg-black/70'
              }`}
            >
              <Heart className={`w-5 h-5 ${isLiked ? 'fill-white' : ''}`} />
            </div>
            <span className="text-[11px] font-bold drop-shadow">{likeCount}</span>
          </button>

          {/* Comment */}
          <button
            onClick={() => setShowCommentSheet(true)}
            className="flex flex-col items-center gap-1 group cursor-pointer"
          >
            <div className="w-11 h-11 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center backdrop-blur-md transition-colors">
              <MessageCircle className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-bold drop-shadow">{activeReel.commentsCount}</span>
          </button>

          {/* Bookmark */}
          <button onClick={handleBookmark} className="flex flex-col items-center gap-1 group cursor-pointer">
            <div
              className={`w-11 h-11 rounded-full flex items-center justify-center backdrop-blur-md transition-all ${
                isBookmarked ? 'bg-amber-500 text-white shadow-lg' : 'bg-black/50 text-white hover:bg-black/70'
              }`}
            >
              <Bookmark className={`w-5 h-5 ${isBookmarked ? 'fill-white' : ''}`} />
            </div>
            <span className="text-[11px] font-bold drop-shadow">{isBookmarked ? 'Đã lưu' : 'Lưu'}</span>
          </button>

          {/* Share */}
          <button
            onClick={() => alert('Đã sao chép liên kết video!')}
            className="flex flex-col items-center gap-1 group cursor-pointer"
          >
            <div className="w-11 h-11 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center backdrop-blur-md transition-colors">
              <Share2 className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-bold drop-shadow">Chia sẻ</span>
          </button>
        </div>

        {/* Comment Bottom Sheet for Mobile */}
        {showCommentSheet && (
          <div className="absolute inset-0 bg-black/50 z-30 flex flex-col justify-end">
            <div className="bg-white dark:bg-[#242526] rounded-t-3xl max-h-[60%] flex flex-col p-4 shadow-2xl animate-in slide-in-from-bottom duration-200">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-neutral-700">
                <h3 className="font-bold text-xs text-slate-900 dark:text-white">Bình luận ({activeReel.commentsCount})</h3>
                <button
                  onClick={() => setShowCommentSheet(false)}
                  className="p-1 hover:bg-slate-100 dark:hover:bg-[#3a3b3c] rounded-full text-slate-500 cursor-pointer"
                >
                  ✕
                </button>
              </div>
              <div className="py-3 overflow-y-auto space-y-3 flex-1 text-xs">
                <div className="flex gap-2">
                  <div className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shrink-0 text-[10px]">
                    N
                  </div>
                  <div className="bg-slate-100 dark:bg-[#3a3b3c] p-2.5 rounded-2xl flex-1">
                    <span className="font-bold text-[11px] text-slate-900 dark:text-white block">Nguyễn Văn Hoàng</span>
                    <span className="text-slate-700 dark:text-slate-300">Video chất lượng quá bạn ơi! 👏</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="w-7 h-7 rounded-full bg-rose-600 text-white font-bold flex items-center justify-center shrink-0 text-[10px]">
                    T
                  </div>
                  <div className="bg-slate-100 dark:bg-[#3a3b3c] p-2.5 rounded-2xl flex-1">
                    <span className="font-bold text-[11px] text-slate-900 dark:text-white block">Trần Thu Hà</span>
                    <span className="text-slate-700 dark:text-slate-300">Nhạc nền hay quá xin tên bài hát với ạ!</span>
                  </div>
                </div>
              </div>
              <div className="pt-2 border-t border-slate-200 dark:border-neutral-700 flex gap-2">
                <input
                  type="text"
                  placeholder="Thêm bình luận..."
                  className="flex-1 bg-slate-100 dark:bg-[#3a3b3c] border-none rounded-full px-3 py-1.5 text-xs outline-none"
                />
                <button className="px-3 py-1.5 bg-blue-600 text-white font-bold text-xs rounded-full">
                  Gửi
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
