'use client';

import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, Share2, MoreHorizontal, Bookmark, Globe, Users, Lock, Send, Heart, Trash2, Reply, X } from 'lucide-react';
import { io } from 'socket.io-client';
import { apiClient } from '../../lib/api-client';
import { useAuthStore } from '../../stores/auth.store';

const REACTION_CONFIG: Record<string, { emoji: string; label: string; color: string }> = {
  LIKE: { emoji: '👍', label: 'Thích', color: 'text-[#1877f2]' },
  LOVE: { emoji: '❤️', label: 'Yêu thích', color: 'text-rose-500' },
  HAHA: { emoji: '😂', label: 'Haha', color: 'text-amber-500' },
  WOW: { emoji: '😮', label: 'Wow', color: 'text-amber-500' },
  SAD: { emoji: '😢', label: 'Buồn', color: 'text-blue-400' },
  ANGRY: { emoji: '😡', label: 'Phẫn nộ', color: 'text-orange-600' },
};

export interface PostItem {
  id: string;
  authorId: string;
  authorName?: string;
  authorAvatar?: string;
  content: string;
  visibility: string;
  isPinned?: boolean;
  createdAt: string;
  media?: Array<{ id: string; url: string; mediaType: string }>;
  mediaUrls?: string[];
  hashtags?: string[];
  reactionsCount?: number;
  commentsCount?: number;
  myReaction?: string | null;
}

interface CommentItem {
  id: string;
  postId: string;
  authorId: string;
  authorName?: string;
  authorAvatar?: string;
  parentCommentId?: string | null;
  depth: number;
  content: string;
  createdAt: string;
}

function formatRelativeTime(dateString?: string): string {
  if (!dateString) return 'Vừa xong';
  const now = Date.now();
  const past = new Date(dateString).getTime();
  const diffSec = Math.floor((now - past) / 1000);

  if (diffSec < 60) return 'Vừa xong';
  const diffMin = Math.floor(diffSec / 60);
  if (diffMin < 60) return `${diffMin} phút`;
  const diffHr = Math.floor(diffMin / 60);
  if (diffHr < 24) return `${diffHr} giờ`;
  const diffDay = Math.floor(diffHr / 24);
  if (diffDay < 7) return `${diffDay} ngày`;
  return new Date(dateString).toLocaleDateString('vi-VN');
}

export function PostCard({ post }: { post: PostItem }) {
  const { user } = useAuthStore();
  const [currentReaction, setCurrentReaction] = useState<string | null>(post.myReaction || null);
  const [reactionTotal, setReactionTotal] = useState<number>(post.reactionsCount || 0);
  const [commentsCount, setCommentsCount] = useState<number>(post.commentsCount || 0);
  const [showPicker, setShowPicker] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [comments, setComments] = useState<CommentItem[]>([]);
  const [isLoadingComments, setIsLoadingComments] = useState(false);
  const [commentInput, setCommentInput] = useState('');
  const [replyingTo, setReplyingTo] = useState<{ id: string; authorName: string } | null>(null);

  const fetchComments = async () => {
    setIsLoadingComments(true);
    try {
      const res: any = await apiClient.get(`/api/comments/post/${post.id}`);
      const items = res.items || res.data?.items || (Array.isArray(res) ? res : []);
      setComments(items);
      setCommentsCount(items.length);
    } catch {
      // Fallback
    } finally {
      setIsLoadingComments(false);
    }
  };

  useEffect(() => {
    if (showComments && comments.length === 0) {
      fetchComments();
    }
  }, [showComments]);

  // Real-time synchronization via Socket.IO + Smart Polling Fallback
  useEffect(() => {
    let socket: any = null;
    try {
      const socketUrl = typeof window !== 'undefined' ? window.location.origin : 'http://localhost:4000';
      socket = io(`${socketUrl}/interactions`, {
        transports: ['websocket', 'polling'],
        timeout: 5000,
      });

      socket.emit('join_post', post.id);

      socket.on('reaction_updated', (data: any) => {
        if (data.targetId === post.id) {
          if (typeof data.total === 'number') {
            setReactionTotal(data.total);
          }
          if (user?.id && data.userId === user.id) {
            setCurrentReaction(data.action === 'REMOVED' ? null : data.reactionType);
          }
        }
      });

      socket.on('comment_created', (data: any) => {
        if (data.postId === post.id) {
          setCommentsCount((c) => c + 1);
          if (showComments && data.comment) {
            setComments((prev) => {
              if (prev.some((c) => c.id === data.comment.id)) return prev;
              return [...prev, data.comment];
            });
          }
        }
      });

      socket.on('comment_deleted', (data: any) => {
        if (data.postId === post.id) {
          setCommentsCount((c) => Math.max(0, c - 1));
          setComments((prev) => prev.filter((c) => c.id !== data.commentId));
        }
      });
    } catch {}

    // Polling every 4 seconds to sync interactions across any network
    const interval = setInterval(async () => {
      try {
        const res: any = await apiClient.get(`/api/reactions/POST/${post.id}`);
        if (res && typeof res.total === 'number') {
          setReactionTotal(res.total);
          if (res.myReaction !== undefined) {
            setCurrentReaction(res.myReaction);
          }
        }
      } catch {}

      if (showComments) {
        try {
          const res: any = await apiClient.get(`/api/comments/post/${post.id}`);
          const items = res.items || res.data?.items || (Array.isArray(res) ? res : []);
          setComments(items);
          setCommentsCount(items.length);
        } catch {}
      }
    }, 4000);

    return () => {
      clearInterval(interval);
      if (socket) {
        socket.emit('leave_post', post.id);
        socket.disconnect();
      }
    };
  }, [post.id, showComments, user?.id]);

  const handleSelectReaction = async (type: string) => {
    setShowPicker(false);
    try {
      const res: any = await apiClient.post('/api/reactions', {
        targetType: 'POST',
        targetId: post.id,
        reactionType: type,
      });

      if (res.action === 'REMOVED') {
        setCurrentReaction(null);
        if (typeof res.total === 'number') setReactionTotal(res.total);
        else setReactionTotal((c) => Math.max(0, c - 1));
      } else {
        setCurrentReaction(type);
        if (typeof res.total === 'number') setReactionTotal(res.total);
        else if (!currentReaction) setReactionTotal((c) => c + 1);
      }
    } catch {
      if (currentReaction === type) {
        setCurrentReaction(null);
        setReactionTotal((c) => Math.max(0, c - 1));
      } else {
        if (!currentReaction) setReactionTotal((c) => c + 1);
        setCurrentReaction(type);
      }
    }
  };

  const handleToggleSave = async () => {
    try {
      const res: any = await apiClient.post(`/api/posts/${post.id}/save`);
      setIsSaved(res.saved ?? !isSaved);
    } catch {
      setIsSaved(!isSaved);
    }
  };

  const handleAddComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentInput.trim()) return;

    const contentToSend = commentInput.trim();
    const parentId = replyingTo?.id;

    try {
      const res: any = await apiClient.post('/api/comments', {
        postId: post.id,
        content: contentToSend,
        parentCommentId: parentId,
      });

      const newCmt: CommentItem = {
        id: res.id || `cmt-${Date.now()}`,
        postId: post.id,
        authorId: user?.id || 'you',
        authorName: res.authorName || user?.displayName || 'Bạn',
        authorAvatar: res.authorAvatar || user?.avatarUrl,
        parentCommentId: parentId || null,
        depth: parentId ? 1 : 0,
        content: contentToSend,
        createdAt: new Date().toISOString(),
      };

      setComments((prev) => {
        if (prev.some((c) => c.id === newCmt.id)) return prev;
        return [...prev, newCmt];
      });
      setCommentsCount((c) => c + 1);
      setCommentInput('');
      setReplyingTo(null);
    } catch (err: any) {
      alert(err.response?.data?.message || 'Không thể đăng bình luận. Vui lòng đăng nhập lại.');
    }
  };

  const handleDeleteComment = async (commentId: string) => {
    if (!confirm('Bạn có chắc muốn xóa bình luận này?')) return;
    try {
      await apiClient.delete(`/api/comments/${commentId}`);
      setComments((prev) => prev.filter((c) => c.id !== commentId));
      setCommentsCount((c) => Math.max(0, c - 1));
    } catch {
      setComments((prev) => prev.filter((c) => c.id !== commentId));
      setCommentsCount((c) => Math.max(0, c - 1));
    }
  };

  const renderFormattedContent = (text: string) => {
    const parts = text.split(/(#[a-zA-Z0-9_]+)/g);
    return parts.map((part, i) => {
      if (part.startsWith('#')) {
        return (
          <span key={i} className="text-[#1877f2] dark:text-[#2d88ff] font-semibold hover:underline cursor-pointer">
            {part}
          </span>
        );
      }
      return part;
    });
  };

  const activeReactionData = currentReaction ? REACTION_CONFIG[currentReaction] : null;
  const authorInitial = (post.authorName?.[0] || 'U').toUpperCase();

  return (
    <article className="bg-white dark:bg-[#242526] rounded-2xl shadow-[0_1px_2px_rgba(0,0,0,0.08)] border border-slate-200/80 dark:border-neutral-800 mb-4 overflow-hidden select-none">
      {/* 1. Header: Author, Vietnamese Time, Privacy & Menu */}
      <div className="flex items-center justify-between p-3.5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 text-white font-bold flex items-center justify-center text-sm shrink-0 overflow-hidden shadow-sm">
            {post.authorAvatar ? (
              <img src={post.authorAvatar} alt="Avatar" className="w-full h-full object-cover" />
            ) : (
              authorInitial
            )}
          </div>
          <div>
            <h4 className="font-bold text-xs text-slate-900 dark:text-white hover:underline cursor-pointer">
              {post.authorName || 'Người dùng MXH-K'}
            </h4>
            <div className="flex items-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400">
              <span>{formatRelativeTime(post.createdAt)}</span>
              <span>·</span>
              <span title="Chia sẻ công khai">
                <Globe className="w-3 h-3 text-slate-400" />
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={handleToggleSave}
            title={isSaved ? 'Bỏ lưu' : 'Lưu bài viết'}
            className="p-2 hover:bg-[#f0f2f5] dark:hover:bg-[#3a3b3c] rounded-full text-slate-500 transition-colors cursor-pointer"
          >
            <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-blue-600 text-blue-600' : ''}`} />
          </button>
          <button className="p-2 hover:bg-[#f0f2f5] dark:hover:bg-[#3a3b3c] rounded-full text-slate-500 transition-colors cursor-pointer">
            <MoreHorizontal className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 2. Post Content */}
      <div className="px-3.5 pb-3">
        <p className="text-xs text-slate-900 dark:text-slate-100 whitespace-pre-line leading-relaxed">
          {renderFormattedContent(post.content)}
        </p>
      </div>

      {/* 3. Media Grid */}
      {(() => {
        const rawMedia: string[] = (post.media && post.media.length > 0)
          ? post.media.map((m: any) => typeof m === 'string' ? m : m.url)
          : (post.mediaUrls || []);
        if (rawMedia.length === 0) return null;

        if (rawMedia.length === 1) {
          return (
            <div className="w-full bg-slate-100 dark:bg-black/40 overflow-hidden">
              <img
                src={rawMedia[0]}
                alt="Ảnh bài viết"
                className="w-full max-h-[550px] object-cover hover:opacity-95 transition-opacity"
              />
            </div>
          );
        }

        if (rawMedia.length === 2) {
          return (
            <div className="grid grid-cols-2 gap-1 w-full bg-slate-100 dark:bg-black/40 overflow-hidden">
              {rawMedia.map((url: string, idx: number) => (
                <img
                  key={idx}
                  src={url}
                  alt={`Ảnh ${idx + 1}`}
                  className="w-full h-64 object-cover"
                />
              ))}
            </div>
          );
        }

        return (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 w-full bg-slate-100 dark:bg-black/40 overflow-hidden">
            {rawMedia.map((url: string, idx: number) => (
              <img
                key={idx}
                src={url}
                alt={`Ảnh ${idx + 1}`}
                className="w-full h-48 object-cover"
              />
            ))}
          </div>
        );
      })()}

      {/* 4. Reaction Count & Comments Counter */}
      <div className="px-3.5 py-2 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 border-b border-slate-100 dark:border-neutral-800">
        <div className="flex items-center gap-1.5">
          {reactionTotal > 0 && (
            <div className="flex items-center -space-x-1">
              <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-blue-500 text-[10px] text-white">👍</span>
              <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-red-500 text-[10px] text-white">❤️</span>
            </div>
          )}
          <span className="font-medium">{reactionTotal > 0 ? `${reactionTotal} lượt tương tác` : 'Hãy là người đầu tiên thích'}</span>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={() => setShowComments(!showComments)} className="hover:underline cursor-pointer font-medium">
            {commentsCount > 0 ? `${commentsCount} bình luận` : 'Bình luận'}
          </button>
          <span>·</span>
          <span>1 chia sẻ</span>
        </div>
      </div>

      {/* 5. 3 Action Buttons with Hover Picker */}
      <div className="px-2 py-1 flex items-center justify-between relative border-b border-slate-100 dark:border-neutral-800">
        {showPicker && (
          <div
            onMouseLeave={() => setShowPicker(false)}
            className="absolute -top-12 left-4 bg-white dark:bg-[#242526] rounded-full shadow-2xl border border-slate-200 dark:border-neutral-700 px-2 py-1.5 flex items-center gap-1.5 z-30 animate-in fade-in slide-in-from-bottom-2 duration-150"
          >
            {Object.entries(REACTION_CONFIG).map(([type, cfg]) => (
              <button
                key={type}
                onClick={() => handleSelectReaction(type)}
                className="w-8 h-8 flex items-center justify-center text-xl hover:scale-130 transition-transform duration-150 cursor-pointer"
                title={cfg.label}
              >
                {cfg.emoji}
              </button>
            ))}
          </div>
        )}

        <button
          onMouseEnter={() => setShowPicker(true)}
          onClick={() => handleSelectReaction('LIKE')}
          className={`flex items-center justify-center gap-2 flex-1 py-2 hover:bg-[#f0f2f5] dark:hover:bg-[#3a3b3c] rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
            activeReactionData ? activeReactionData.color : 'text-slate-600 dark:text-slate-300'
          }`}
        >
          {activeReactionData ? (
            <span className="text-base leading-none">{activeReactionData.emoji}</span>
          ) : (
            <Heart className="w-4 h-4" />
          )}
          <span>{activeReactionData ? activeReactionData.label : 'Thích'}</span>
        </button>

        <button
          onClick={() => {
            setShowComments(!showComments);
            if (!showComments) fetchComments();
          }}
          className="flex items-center justify-center gap-2 flex-1 py-2 hover:bg-[#f0f2f5] dark:hover:bg-[#3a3b3c] rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 transition-colors cursor-pointer"
        >
          <MessageCircle className="w-4 h-4 text-slate-500" />
          <span>Bình luận</span>
        </button>

        <button
          onClick={() => alert('Đã sao chép liên kết bài viết vào bộ nhớ tạm!')}
          className="flex items-center justify-center gap-2 flex-1 py-2 hover:bg-[#f0f2f5] dark:hover:bg-[#3a3b3c] rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 transition-colors cursor-pointer"
        >
          <Share2 className="w-4 h-4 text-slate-500" />
          <span>Chia sẻ</span>
        </button>
      </div>

      {/* 6. Comments Section (Facebook-style with Threaded Replies) */}
      {showComments && (
        <div className="p-3.5 space-y-3 bg-[#f0f2f5]/40 dark:bg-[#18191a]/30">
          {/* Write comment input */}
          <form onSubmit={handleAddComment} className="space-y-1.5">
            {replyingTo && (
              <div className="flex items-center justify-between px-3 py-1 bg-blue-50 dark:bg-blue-950/40 rounded-lg text-[11px] text-blue-600 dark:text-blue-400">
                <span>Đang trả lời <b>@{replyingTo.authorName}</b></span>
                <button type="button" onClick={() => setReplyingTo(null)} className="cursor-pointer">
                  <X className="w-3 h-3" />
                </button>
              </div>
            )}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-xs shrink-0 overflow-hidden">
                {user?.avatarUrl ? (
                  <img src={user.avatarUrl} alt="Avatar" className="w-full h-full object-cover" />
                ) : (
                  (user?.displayName?.[0] || 'U').toUpperCase()
                )}
              </div>
              <div className="flex-1 relative flex items-center">
                <input
                  type="text"
                  value={commentInput}
                  onChange={(e) => setCommentInput(e.target.value)}
                  placeholder={replyingTo ? `Trả lời @${replyingTo.authorName}...` : 'Viết bình luận công khai...'}
                  className="w-full bg-white dark:bg-[#242526] border border-slate-200 dark:border-neutral-700 rounded-full pl-4 pr-10 py-2 text-xs text-slate-800 dark:text-slate-100 placeholder:text-slate-400 outline-none focus:border-blue-500"
                />
                <button
                  type="submit"
                  disabled={!commentInput.trim()}
                  className="absolute right-3 text-blue-600 hover:text-blue-700 disabled:opacity-40 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </form>

          {/* Comment list */}
          <div className="space-y-2.5 pt-1">
            {isLoadingComments && comments.length === 0 ? (
              <p className="text-center text-xs text-slate-400 py-2">Đang tải bình luận...</p>
            ) : comments.length === 0 ? (
              <p className="text-center text-xs text-slate-400 py-2">Chưa có bình luận nào. Hãy là người đầu tiên bình luận!</p>
            ) : (
              comments.map((c) => {
                const isMyComment = user?.id === c.authorId;
                const isReply = c.depth > 0 || !!c.parentCommentId;

                return (
                  <div key={c.id} className={`flex gap-2.5 items-start ${isReply ? 'ml-8' : ''}`}>
                    <div className="w-8 h-8 rounded-full bg-indigo-500 text-white font-bold flex items-center justify-center text-xs shrink-0 mt-0.5 overflow-hidden">
                      {c.authorAvatar ? (
                        <img src={c.authorAvatar} alt="Avatar" className="w-full h-full object-cover" />
                      ) : (
                        (c.authorName?.[0] || 'N').toUpperCase()
                      )}
                    </div>
                    <div className="space-y-1 flex-1">
                      <div className="bg-white dark:bg-[#242526] rounded-2xl px-3.5 py-2 border border-slate-200/60 dark:border-neutral-800 shadow-sm inline-block max-w-full relative group">
                        <p className="font-bold text-xs text-slate-900 dark:text-white leading-tight">
                          {c.authorName || 'Thành viên MXH-K'}
                        </p>
                        <p className="text-xs text-slate-700 dark:text-slate-200 mt-0.5 whitespace-pre-wrap">
                          {c.content}
                        </p>
                        {isMyComment && (
                          <button
                            onClick={() => handleDeleteComment(c.id)}
                            className="absolute -right-6 top-2 text-slate-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity p-1 cursor-pointer"
                            title="Xóa bình luận"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                        )}
                      </div>
                      <div className="flex items-center gap-3 pl-3 text-[11px] text-slate-400 font-semibold">
                        <button className="hover:underline cursor-pointer">Thích</button>
                        <span>·</span>
                        <button
                          onClick={() => setReplyingTo({ id: c.id, authorName: c.authorName || 'bạn' })}
                          className="hover:underline cursor-pointer text-blue-600 dark:text-blue-400"
                        >
                          Phản hồi
                        </button>
                        <span>·</span>
                        <span>{formatRelativeTime(c.createdAt)}</span>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}
    </article>
  );
}
