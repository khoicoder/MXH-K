'use client';

import React, { useState, useEffect } from 'react';
import { StoriesBar } from '../../components/feed/stories-bar';
import { PostComposer } from '../../components/feed/post-composer';
import { PostCard, PostItem } from '../../components/feed/post-card';
import { apiClient } from '../../lib/api-client';
import { Sparkles, Loader2, RefreshCw } from 'lucide-react';

export default function HomePage() {
  const [tab, setTab] = useState<'for_you' | 'following'>('for_you');
  const [posts, setPosts] = useState<PostItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchFeed = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res: any = await apiClient.get('/api/feed');
      const items = res.items || res.data?.items || [];
      setPosts(items);
    } catch (err: any) {
      console.error('Failed to fetch feed:', err);
      setError('Không thể tải bảng tin lúc này. Vui lòng kiểm tra kết nối backend.');
      setPosts([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchFeed();
  }, [tab]);

  return (
    <div className="space-y-4">
      {/* 1. Hàng Tin / Stories Bar kiểu Facebook */}
      <StoriesBar />

      {/* 2. Hộp Tạo Bài Viết kiểu Facebook */}
      <PostComposer onPostCreated={fetchFeed} />

      {/* 3. Tab Chuyển Bảng Tin (Dành cho bạn / Đang theo dõi) */}
      <div className="bg-white dark:bg-[#242526] rounded-2xl p-1.5 shadow-sm border border-slate-200/80 dark:border-neutral-800 flex items-center justify-between">
        <button
          onClick={() => setTab('for_you')}
          className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
            tab === 'for_you'
              ? 'bg-[#e7f3ff] text-[#1877f2] dark:bg-blue-950/60 dark:text-blue-400 shadow-sm'
              : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-[#3a3b3c]'
          }`}
        >
          Dành cho bạn
        </button>

        <button
          onClick={() => setTab('following')}
          className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
            tab === 'following'
              ? 'bg-[#e7f3ff] text-[#1877f2] dark:bg-blue-950/60 dark:text-blue-400 shadow-sm'
              : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-[#3a3b3c]'
          }`}
        >
          Đang theo dõi
        </button>
      </div>

      {/* 4. Danh sách Bảng tin (Feed Stream) */}
      {isLoading ? (
        <div className="py-16 flex flex-col items-center justify-center text-slate-400 gap-2">
          <Loader2 className="w-6 h-6 animate-spin text-[#1877f2]" />
          <span className="text-xs">Đang tải bảng tin của bạn...</span>
        </div>
      ) : error ? (
        <div className="bg-white dark:bg-[#242526] rounded-2xl p-8 text-center border border-red-200 dark:border-red-900/40 shadow-sm">
          <p className="text-sm font-semibold text-red-600 dark:text-red-400 mb-3">{error}</p>
          <button
            onClick={fetchFeed}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition-all cursor-pointer shadow-sm"
          >
            <RefreshCw className="w-4 h-4" />
            Thử lại
          </button>
        </div>
      ) : posts.length === 0 ? (
        <div className="bg-white dark:bg-[#242526] rounded-2xl p-10 text-center border border-slate-200/80 dark:border-neutral-800 shadow-sm">
          <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-600 mx-auto flex items-center justify-center mb-3">
            <Sparkles className="w-6 h-6" />
          </div>
          <h3 className="text-sm font-bold text-slate-900 dark:text-white">Chưa có bài viết mới</h3>
          <p className="text-xs text-slate-500 mt-1">Hãy kết bạn thêm hoặc đăng bài viết đầu tiên của bạn ở trên!</p>
        </div>
      ) : (
        <div className="space-y-4">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
