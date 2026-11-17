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

  const fetchFeed = async () => {
    setIsLoading(true);
    try {
      const res: any = await apiClient.get('/api/feed');
      const items = res.items || res.data?.items || [];
      if (items.length > 0) {
        setPosts(items);
      } else {
        throw new Error('Empty feed');
      }
    } catch {
      // Dữ liệu mẫu khởi đầu bằng Tiếng Việt thân thiện, chuẩn Facebook
      setPosts([
        {
          id: 'post-1',
          authorId: 'admin_1',
          authorName: 'Nguyễn Thành Nam',
          authorAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&auto=format&fit=crop&q=80',
          content: 'Chào mừng cả nhà đến với mạng xã hội MXH-K! 🚀 Giao diện mới chuẩn phong cách Facebook, tốc độ siêu mượt và hỗ trợ đầy đủ video ngắn #reels, kết bạn và trò chuyện thời gian thực. Cùng chia sẻ cảm nghĩ nhé! #mxhk #congnghe #vietnam',
          visibility: 'PUBLIC',
          createdAt: new Date().toISOString(),
          media: [
            {
              id: 'med-1',
              url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1000&auto=format&fit=crop&q=80',
              mediaType: 'IMAGE',
            },
          ],
        },
        {
          id: 'post-2',
          authorId: 'author_2',
          authorName: 'Trần Mai Phương',
          authorAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80',
          content: 'Hôm nay trời Hà Nội mát mẻ tuyệt đẹp, làm cốc cà phê ngắm phố phường thấy lòng nhẹ tênh ☕ Chúc mọi người một ngày làm việc và học tập tràn đầy năng lượng! #hanoi #coffee #relax',
          visibility: 'PUBLIC',
          createdAt: new Date(Date.now() - 3600000).toISOString(),
          media: [
            {
              id: 'med-2',
              url: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1000&auto=format&fit=crop&q=80',
              mediaType: 'IMAGE',
            },
          ],
        },
      ]);
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
