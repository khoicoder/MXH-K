'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import {
  Search,
  Hash,
  User as UserIcon,
  Sparkles,
  TrendingUp,
  Compass,
  UserPlus,
  Check,
  FileText,
  Loader2,
} from 'lucide-react';
import { apiClient } from '../../../lib/api-client';

function ExploreContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') || '';

  const [query, setQuery] = useState(initialQuery);
  const [activeTab, setActiveTab] = useState<'all' | 'users' | 'posts'>('all');
  const [results, setResults] = useState<any[]>([]);
  const [sentUserIds, setSentUserIds] = useState<Set<string>>(new Set());
  const [isSearching, setIsSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const trendingTopics = [
    { tag: 'congnghe', name: 'Công nghệ & Trí tuệ nhân tạo (AI)', posts: '15.8K bài viết' },
    { tag: 'mxhk', name: 'Mạng xã hội MXH-K Việt Nam', posts: '24.2K bài viết' },
    { tag: 'dulich', name: 'Kinh nghiệm du lịch Việt Nam 2026', posts: '18.1K bài viết' },
    { tag: 'amthuc', name: 'Ẩm thực đường phố 3 miền', posts: '9.4K bài viết' },
    { tag: 'reels', name: 'Video ngắn xu hướng thịnh hành', posts: '32.6K bài viết' },
  ];

  const performSearch = async (searchTerm: string) => {
    const clean = searchTerm.trim();
    if (!clean) return;

    setIsSearching(true);
    setHasSearched(true);
    try {
      const res: any = await apiClient.get(`/api/search?q=${encodeURIComponent(clean)}&limit=30`);
      const items = res?.items || res?.data?.items || [];
      setResults(items);
    } catch {
      setResults([]);
    } finally {
      setIsSearching(false);
    }
  };

  useEffect(() => {
    if (initialQuery) {
      setQuery(initialQuery);
      performSearch(initialQuery);
    }
  }, [initialQuery]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    performSearch(query);
  };

  const handleSendFriendRequest = async (targetUserId: string) => {
    try {
      await apiClient.post('/api/friends/requests', { targetUserId });
      setSentUserIds((prev) => new Set(prev).add(targetUserId));
    } catch (e: any) {
      alert(`Lỗi khi gửi lời mời: ${e.response?.data?.message || e.message}`);
    }
  };

  const userResults = results.filter((r) => r.entityType === 'USER');
  const postResults = results.filter((r) => r.entityType === 'POST');

  return (
    <div className="space-y-6 select-none">
      {/* Header & Search Bar */}
      <div className="bg-white dark:bg-[#242526] rounded-2xl p-4 shadow-sm border border-slate-200/80 dark:border-neutral-800 space-y-3">
        <h1 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Compass className="w-5 h-5 text-emerald-500" />
          <span>Tìm kiếm & Khám phá</span>
        </h1>

        <form onSubmit={handleSearchSubmit} className="relative">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Tìm kiếm người dùng thật, bạn bè, bài viết, hashtag #..."
            className="w-full pl-10 pr-4 py-2.5 bg-[#f0f2f5] dark:bg-[#3a3b3c] rounded-full text-xs outline-none focus:ring-2 focus:ring-blue-500/20 text-slate-800 dark:text-slate-100 placeholder:text-slate-500 transition-all"
          />
        </form>

        {/* Filter Tabs when searched */}
        {hasSearched && (
          <div className="flex gap-2 pt-2 border-t border-slate-100 dark:border-neutral-800">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-colors cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-[#1877f2] text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-[#3a3b3c] text-slate-600 dark:text-slate-300'
              }`}
            >
              Tất cả ({results.length})
            </button>
            <button
              onClick={() => setActiveTab('users')}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-colors cursor-pointer flex items-center gap-1 ${
                activeTab === 'users'
                  ? 'bg-[#1877f2] text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-[#3a3b3c] text-slate-600 dark:text-slate-300'
              }`}
            >
              <UserIcon className="w-3.5 h-3.5" />
              <span>Mọi người ({userResults.length})</span>
            </button>
            <button
              onClick={() => setActiveTab('posts')}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-colors cursor-pointer flex items-center gap-1 ${
                activeTab === 'posts'
                  ? 'bg-[#1877f2] text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-[#3a3b3c] text-slate-600 dark:text-slate-300'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Bài viết ({postResults.length})</span>
            </button>
          </div>
        )}
      </div>

      {/* Loading State */}
      {isSearching && (
        <div className="bg-white dark:bg-[#242526] rounded-2xl p-12 flex flex-col items-center justify-center gap-2 text-slate-400 shadow-sm border border-slate-200/80 dark:border-neutral-800">
          <Loader2 className="w-6 h-6 animate-spin text-[#1877f2]" />
          <span className="text-xs">Đang tìm kiếm...</span>
        </div>
      )}

      {/* Search Results */}
      {!isSearching && hasSearched && (
        <div className="space-y-4">
          {/* User Results Section */}
          {(activeTab === 'all' || activeTab === 'users') && userResults.length > 0 && (
            <div className="bg-white dark:bg-[#242526] rounded-2xl p-4 shadow-sm border border-slate-200/80 dark:border-neutral-800 space-y-3">
              <h2 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                <UserIcon className="w-4 h-4 text-blue-600" />
                <span>Người dùng tìm thấy ({userResults.length})</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {userResults.map((u) => {
                  const isSent = sentUserIds.has(u.entityId);
                  return (
                    <div
                      key={u.id}
                      className="flex items-center justify-between p-3 rounded-xl border border-slate-200/60 dark:border-neutral-800 hover:bg-[#f0f2f5]/50 dark:hover:bg-[#3a3b3c]/50 transition-colors"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        {u.avatarUrl ? (
                          <img
                            src={u.avatarUrl}
                            alt={u.title}
                            className="w-12 h-12 rounded-full object-cover shrink-0 shadow-sm"
                          />
                        ) : (
                          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 text-white font-bold flex items-center justify-center text-base shrink-0 shadow-sm">
                            {u.title?.[0]?.toUpperCase() || 'U'}
                          </div>
                        )}
                        <div className="min-w-0">
                          <h3 className="font-bold text-xs text-slate-900 dark:text-white truncate">
                            {u.title}
                          </h3>
                          <p className="text-[11px] text-slate-400 truncate">
                            {u.content}
                          </p>
                        </div>
                      </div>

                      <button
                        disabled={isSent}
                        onClick={() => handleSendFriendRequest(u.entityId)}
                        className={`py-1.5 px-3 font-bold text-xs rounded-lg transition-colors cursor-pointer shrink-0 flex items-center gap-1 ${
                          isSent
                            ? 'bg-slate-100 text-slate-500 cursor-default'
                            : 'bg-[#1877f2] hover:bg-blue-700 text-white shadow-sm'
                        }`}
                      >
                        {isSent ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                            <span>Đã gửi lời mời</span>
                          </>
                        ) : (
                          <>
                            <UserPlus className="w-3.5 h-3.5" />
                            <span>Thêm bạn bè</span>
                          </>
                        )}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Post Results Section */}
          {(activeTab === 'all' || activeTab === 'posts') && postResults.length > 0 && (
            <div className="bg-white dark:bg-[#242526] rounded-2xl p-4 shadow-sm border border-slate-200/80 dark:border-neutral-800 space-y-3">
              <h2 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                <FileText className="w-4 h-4 text-emerald-600" />
                <span>Bài viết liên quan ({postResults.length})</span>
              </h2>

              <div className="divide-y divide-slate-100 dark:divide-neutral-800">
                {postResults.map((p) => (
                  <div key={p.id} className="py-3 space-y-1">
                    <p className="text-xs text-slate-800 dark:text-slate-200 line-clamp-3">
                      {p.content}
                    </p>
                    <div className="flex items-center gap-2 text-[11px] text-slate-400">
                      <span>Khớp nội dung</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {results.length === 0 && (
            <div className="bg-white dark:bg-[#242526] rounded-2xl p-12 text-center text-slate-400 shadow-sm border border-slate-200/80 dark:border-neutral-800">
              <Sparkles className="w-8 h-8 mx-auto mb-2 opacity-50" />
              <p className="text-xs">Không tìm thấy kết quả phù hợp cho &quot;{query}&quot;.</p>
            </div>
          )}
        </div>
      )}

      {/* Trending Topics List */}
      <div className="bg-white dark:bg-[#242526] rounded-2xl p-5 shadow-sm border border-slate-200/80 dark:border-neutral-800 space-y-3">
        <h2 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-[#1877f2]" />
          <span>Chủ đề thịnh hành hôm nay</span>
        </h2>

        <div className="divide-y divide-slate-100 dark:divide-neutral-800">
          {trendingTopics.map((topic, i) => (
            <div
              key={topic.tag}
              onClick={() => {
                setQuery(`#${topic.tag}`);
                performSearch(`#${topic.tag}`);
              }}
              className="py-3 flex items-center justify-between hover:bg-[#f0f2f5]/60 dark:hover:bg-[#3a3b3c]/50 px-2 rounded-xl transition-colors cursor-pointer group"
            >
              <div className="flex items-center gap-3">
                <span className="text-xs font-black text-slate-400 w-4 text-center">{i + 1}</span>
                <div>
                  <p className="font-bold text-xs text-slate-900 dark:text-white group-hover:text-[#1877f2] transition-colors">
                    #{topic.tag} · {topic.name}
                  </p>
                  <p className="text-[11px] text-slate-400">{topic.posts}</p>
                </div>
              </div>
              <span className="text-xs font-bold text-[#1877f2] group-hover:underline">Khám phá</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ExplorePage() {
  return (
    <Suspense fallback={
      <div className="bg-white dark:bg-[#242526] rounded-2xl p-12 flex flex-col items-center justify-center gap-2 text-slate-400">
        <Loader2 className="w-6 h-6 animate-spin text-[#1877f2]" />
        <span className="text-xs">Đang tải trang khám phá...</span>
      </div>
    }>
      <ExploreContent />
    </Suspense>
  );
}
