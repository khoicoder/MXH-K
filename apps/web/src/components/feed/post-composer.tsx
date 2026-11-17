'use client';

import React, { useState, useRef } from 'react';
import { Video, Image, Smile, Globe, Users, Lock, X, Loader2, Sparkles, UploadCloud } from 'lucide-react';
import { apiClient } from '../../lib/api-client';
import { useAuthStore } from '../../stores/auth.store';

interface PostComposerProps {
  onPostCreated?: () => void;
}

export function PostComposer({ onPostCreated }: PostComposerProps) {
  const { user } = useAuthStore();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState('');
  const [visibility, setVisibility] = useState<'PUBLIC' | 'FRIENDS_ONLY' | 'PRIVATE'>('PUBLIC');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [mediaList, setMediaList] = useState<Array<{ mediaId: string; mediaType: string; url: string }>>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim() && mediaList.length === 0) return;

    setIsSubmitting(true);
    try {
      await apiClient.post('/api/posts', {
        content: content.trim(),
        visibility,
        media: mediaList,
      });

      setContent('');
      setMediaList([]);
      setIsOpen(false);
      if (onPostCreated) onPostCreated();
    } catch (err: any) {
      alert(err.response?.data?.message || 'Không thể đăng bài viết. Vui lòng thử lại.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOpenPhotoPicker = () => {
    setIsOpen(true);
    setTimeout(() => {
      fileInputRef.current?.click();
    }, 100);
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setIsUploading(true);
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append('files', files[i]);
    }

    try {
      const res: any = await apiClient.post('/api/media/upload-multiple', formData);
      const urls: string[] = res.urls || (res.files ? res.files.map((f: any) => f.url) : []);
      if (urls.length > 0) {
        const newMedia = urls.map((url, idx) => ({
          mediaId: `media-${Date.now()}-${idx}`,
          mediaType: 'IMAGE',
          url,
        }));
        setMediaList((prev) => [...prev, ...newMedia]);
      }
    } catch (err: any) {
      alert(err.response?.data?.message || 'Không thể tải ảnh lên. Vui lòng thử lại.');
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  return (
    <div className="bg-white dark:bg-[#242526] rounded-2xl p-4 shadow-[0_1px_2px_rgba(0,0,0,0.08)] border border-slate-200/80 dark:border-neutral-800 mb-4 select-none">
      {/* Hidden file input for native file browsing */}
      <input
        type="file"
        ref={fileInputRef}
        accept="image/*"
        multiple
        onChange={handleFileChange}
        className="hidden"
      />

      {/* 1. Top Row: Avatar + Facebook-style Input Pill */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-sm shrink-0 overflow-hidden shadow-sm">
          {user?.avatarUrl ? (
            <img src={user.avatarUrl} alt="Avatar" className="w-full h-full object-cover" />
          ) : (
            user?.displayName?.[0]?.toUpperCase() || 'U'
          )}
        </div>

        <button
          onClick={() => setIsOpen(true)}
          className="flex-1 bg-[#f0f2f5] hover:bg-[#e4e6eb] dark:bg-[#3a3b3c] dark:hover:bg-[#4e4f50] rounded-full px-4 py-2.5 text-left text-xs text-slate-500 dark:text-slate-400 font-normal transition-colors cursor-pointer"
        >
          {user?.displayName ? `${user.displayName} ơi, bạn đang nghĩ gì thế?` : 'Bạn đang nghĩ gì thế?'}
        </button>
      </div>

      <div className="border-t border-slate-100 dark:border-neutral-800 my-3" />

      {/* 2. Bottom Row: 3 Facebook Action Buttons */}
      <div className="flex items-center justify-between px-2">
        <button
          onClick={() => alert('Tính năng Phát trực tiếp (Live) đang chuẩn bị ra mắt!')}
          className="flex items-center justify-center gap-2 flex-1 py-2 hover:bg-[#f0f2f5] dark:hover:bg-[#3a3b3c] rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 transition-colors cursor-pointer"
        >
          <Video className="w-5 h-5 text-red-500 shrink-0" />
          <span>Video trực tiếp</span>
        </button>

        <button
          onClick={handleOpenPhotoPicker}
          className="flex items-center justify-center gap-2 flex-1 py-2 hover:bg-[#f0f2f5] dark:hover:bg-[#3a3b3c] rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 transition-colors cursor-pointer"
        >
          <Image className="w-5 h-5 text-emerald-500 shrink-0" />
          <span>Ảnh/video</span>
        </button>

        <button
          onClick={() => {
            setIsOpen(true);
            setContent((c) => (c ? `${c} đang cảm thấy hào hứng! 🎉` : 'Đang cảm thấy hào hứng! 🎉 '));
          }}
          className="flex items-center justify-center gap-2 flex-1 py-2 hover:bg-[#f0f2f5] dark:hover:bg-[#3a3b3c] rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 transition-colors cursor-pointer"
        >
          <Smile className="w-5 h-5 text-amber-500 shrink-0" />
          <span>Cảm xúc/hoạt động</span>
        </button>
      </div>

      {/* 3. Facebook Modal Tạo Bài Viết */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white dark:bg-[#242526] w-full max-w-lg rounded-2xl shadow-2xl border border-slate-200 dark:border-neutral-800 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            {/* Modal Header */}
            <div className="relative px-4 py-3.5 border-b border-slate-100 dark:border-neutral-800 text-center">
              <h3 className="font-bold text-base text-slate-900 dark:text-white">Tạo bài viết</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#e4e6eb] dark:bg-[#3a3b3c] hover:bg-slate-300 dark:hover:bg-[#4e4f50] flex items-center justify-center text-slate-600 dark:text-slate-300 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-4 space-y-4">
              {/* User Identity & Privacy Dropdown */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-sm shrink-0 overflow-hidden">
                  {user?.avatarUrl ? (
                    <img src={user.avatarUrl} alt="Avatar" className="w-full h-full object-cover" />
                  ) : (
                    user?.displayName?.[0]?.toUpperCase() || 'U'
                  )}
                </div>
                <div>
                  <p className="font-bold text-xs text-slate-900 dark:text-white">
                    {user?.displayName || 'Thành viên'}
                  </p>
                  <select
                    value={visibility}
                    onChange={(e: any) => setVisibility(e.target.value)}
                    className="bg-[#f0f2f5] dark:bg-[#3a3b3c] border-none text-[11px] font-semibold text-slate-700 dark:text-slate-200 rounded-lg px-2 py-1 mt-0.5 outline-none cursor-pointer"
                  >
                    <option value="PUBLIC">🌐 Công khai</option>
                    <option value="FRIENDS_ONLY">👥 Bạn bè</option>
                    <option value="PRIVATE">🔒 Chỉ mình tôi</option>
                  </select>
                </div>
              </div>

              {/* Text Area */}
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Bạn đang nghĩ gì thế? Thêm #hashtag hoặc cảm xúc..."
                rows={4}
                autoFocus
                className="w-full bg-transparent resize-none outline-none text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 placeholder:text-base leading-relaxed"
              />

              {/* Uploading indicator */}
              {isUploading && (
                <div className="p-3 bg-blue-50 dark:bg-blue-950/40 rounded-xl flex items-center justify-center gap-2 text-xs text-[#1877f2] font-semibold">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Đang tải ảnh từ máy tính lên...</span>
                </div>
              )}

              {/* Media Preview inside Modal */}
              {mediaList.length > 0 && (
                <div className="relative rounded-xl overflow-hidden border border-slate-200 dark:border-neutral-700 bg-slate-50 dark:bg-black/30 p-2">
                  <div className="grid grid-cols-2 gap-2">
                    {mediaList.map((m, idx) => (
                      <div key={idx} className="relative aspect-video rounded-lg overflow-hidden border">
                        <img src={m.url} alt="Attached" className="w-full h-full object-cover" />
                        <button
                          type="button"
                          onClick={() => setMediaList((list) => list.filter((_, i) => i !== idx))}
                          className="absolute top-1.5 right-1.5 bg-black/70 hover:bg-black text-white rounded-full w-5 h-5 flex items-center justify-center text-xs cursor-pointer"
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Add to Post Bar */}
              <div className="flex items-center justify-between p-3 rounded-xl border border-slate-200/80 dark:border-neutral-800 bg-[#f0f2f5]/50 dark:bg-[#3a3b3c]/30">
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Thêm vào bài viết của bạn
                </span>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    title="Chọn ảnh từ máy tính"
                    className="p-2 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 rounded-full text-emerald-600 transition-colors cursor-pointer flex items-center gap-1 text-xs font-semibold"
                  >
                    <Image className="w-5 h-5" />
                    <span className="text-[11px] hidden sm:inline">Thêm ảnh</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setContent((c) => `${c} #mxhk `)}
                    title="Gắn thẻ hashtag"
                    className="p-2 hover:bg-blue-50 dark:hover:bg-blue-950/40 rounded-full text-blue-600 transition-colors cursor-pointer font-bold text-xs"
                  >
                    #
                  </button>
                </div>
              </div>

              {/* Submit Post Button */}
              <button
                type="submit"
                disabled={isSubmitting || isUploading || (!content.trim() && mediaList.length === 0)}
                className="w-full py-2.5 bg-[#1877f2] hover:bg-blue-700 disabled:opacity-50 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <span>Đăng bài</span>}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
