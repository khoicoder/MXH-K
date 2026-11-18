'use client';

import React, { useState, useRef, useEffect } from 'react';
import {
  X,
  Image as ImageIcon,
  Video as VideoIcon,
  Type,
  Globe,
  Users,
  UserX,
  Star,
  Lock,
  UserCheck,
  ChevronDown,
  Loader2,
  Check,
  Sparkles,
} from 'lucide-react';
import { storyApi } from '../../lib/story-api';
import { apiClient } from '../../lib/api-client';
import { useAuthStore } from '../../stores/auth.store';

interface CreateStoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreated: () => void;
}

type StoryKind = 'IMAGE' | 'VIDEO' | 'TEXT';
type VisibilityType = 'PUBLIC' | 'FRIENDS' | 'FRIENDS_EXCEPT' | 'CLOSE_FRIENDS' | 'ONLY_ME' | 'CUSTOM';

const BG_PRESETS = [
  { id: 'fb-blue', name: 'Xanh Facebook', value: 'linear-gradient(135deg, #1877F2 0%, #0052CC 100%)', color: '#1877F2' },
  { id: 'sunset', name: 'Hoàng hôn', value: 'linear-gradient(135deg, #FA709A 0%, #FEE140 100%)', color: '#FA709A' },
  { id: 'violet', name: 'Tím mộng mơ', value: 'linear-gradient(135deg, #833AB4 0%, #FD1D1D 50%, #FCB045 100%)', color: '#833AB4' },
  { id: 'emerald', name: 'Ngọc bích', value: 'linear-gradient(135deg, #059669 0%, #10B981 100%)', color: '#10B981' },
  { id: 'dark-slate', name: 'Đêm huyền bí', value: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)', color: '#0F172A' },
  { id: 'neon', name: 'Neon Cyber', value: 'linear-gradient(135deg, #4F46E5 0%, #06B6D4 100%)', color: '#4F46E5' },
];

export function CreateStoryModal({ isOpen, onClose, onCreated }: CreateStoryModalProps) {
  const { user } = useAuthStore();
  const [kind, setKind] = useState<StoryKind>('IMAGE');
  const [visibility, setVisibility] = useState<VisibilityType>('PUBLIC');
  const [content, setContent] = useState('');
  const [selectedBg, setSelectedBg] = useState(BG_PRESETS[0]);
  const [fontStyle, setFontStyle] = useState('font-sans font-bold');
  const [mediaFile, setMediaFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Privacy dropdown
  const [showPrivacyMenu, setShowPrivacyMenu] = useState(false);
  const [showFriendPicker, setShowFriendPicker] = useState(false);
  const [friendsList, setFriendsList] = useState<Array<{ id: string; name: string; avatar: string | null }>>([]);
  const [selectedFriendIds, setSelectedFriendIds] = useState<string[]>([]);
  const [searchFriend, setSearchFriend] = useState('');

  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setErrorMsg(null);
      // Fetch friends for custom/except selection
      apiClient
        .get('/api/friends')
        .then((res: any) => {
          if (Array.isArray(res)) setFriendsList(res);
        })
        .catch(() => {});
    } else {
      // Reset state
      setMediaFile(null);
      if (previewUrl && previewUrl.startsWith('blob:')) {
        URL.revokeObjectURL(previewUrl);
      }
      setPreviewUrl(null);
      setContent('');
      setIsUploading(false);
      setShowPrivacyMenu(false);
      setShowFriendPicker(false);
      setSelectedFriendIds([]);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (previewUrl && previewUrl.startsWith('blob:')) {
      URL.revokeObjectURL(previewUrl);
    }

    if (file.type.startsWith('video/')) {
      setKind('VIDEO');
    } else if (file.type.startsWith('image/')) {
      setKind('IMAGE');
    } else {
      setErrorMsg('Vui lòng chọn tệp hình ảnh (JPG, PNG, WEBP) hoặc video (MP4, WEBM)');
      return;
    }

    setMediaFile(file);
    const objUrl = URL.createObjectURL(file);
    setPreviewUrl(objUrl);
    setErrorMsg(null);
  };

  const handlePrivacySelect = (v: VisibilityType) => {
    setVisibility(v);
    setShowPrivacyMenu(false);
    if (v === 'FRIENDS_EXCEPT' || v === 'CUSTOM') {
      setShowFriendPicker(true);
    }
  };

  const toggleFriendSelection = (id: string) => {
    setSelectedFriendIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const handleSubmit = async () => {
    setErrorMsg(null);

    if (kind === 'TEXT') {
      if (!content.trim()) {
        setErrorMsg('Vui lòng nhập nội dung văn bản cho tin của bạn');
        return;
      }
    } else {
      if (!mediaFile && !previewUrl) {
        setErrorMsg('Vui lòng chọn hình ảnh hoặc video để tải lên');
        return;
      }
    }

    try {
      setIsUploading(true);

      let finalMediaUrl: string | undefined = undefined;

      if (mediaFile) {
        const uploadRes = await storyApi.uploadMedia(mediaFile);
        finalMediaUrl = uploadRes.url;
      }

      await storyApi.createStory({
        type: kind,
        content: content.trim() || undefined,
        mediaUrl: finalMediaUrl,
        backgroundColor: kind === 'TEXT' ? selectedBg.color : undefined,
        fontStyle: kind === 'TEXT' ? fontStyle : undefined,
        visibility,
        targetUserIds:
          visibility === 'FRIENDS_EXCEPT' || visibility === 'CUSTOM'
            ? selectedFriendIds
            : undefined,
      });

      onCreated();
      onClose();
    } catch (err: any) {
      const msg = err.response?.data?.message || err.message || 'Có lỗi xảy ra khi đăng tin';
      setErrorMsg(typeof msg === 'string' ? msg : JSON.stringify(msg));
    } finally {
      setIsUploading(false);
    }
  };

  const filteredFriends = friendsList.filter((f) =>
    f.name.toLowerCase().includes(searchFriend.toLowerCase()),
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full h-full sm:h-auto sm:max-h-[92vh] sm:max-w-4xl bg-white dark:bg-[#1c1e21] sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 dark:border-neutral-800 bg-white dark:bg-[#242526] shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400">
              <Sparkles className="w-4 h-4" />
            </div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100">
              Tạo tin 24 giờ
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full hover:bg-slate-100 dark:hover:bg-neutral-700 flex items-center justify-center text-slate-500 dark:text-slate-400 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body: Two Columns on Desktop (Controls on left, Live 9:16 Preview on right) */}
        <div className="flex-1 flex flex-col md:flex-row overflow-y-auto">
          {/* Left Panel: Options & Controls */}
          <div className="w-full md:w-[380px] p-4 sm:p-5 border-r border-slate-200 dark:border-neutral-800 flex flex-col gap-4 overflow-y-auto">
            {/* User Profile & Privacy Picker */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-200 dark:bg-slate-700 shrink-0">
                  {user?.avatarUrl ? (
                    <img src={user.avatarUrl} alt="Avatar" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-blue-600 text-white flex items-center justify-center font-bold">
                      {user?.displayName?.[0]?.toUpperCase() || 'U'}
                    </div>
                  )}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 leading-tight">
                    {user?.displayName || 'Người dùng'}
                  </p>
                  {/* Privacy Selector Button */}
                  <div className="relative mt-1">
                    <button
                      type="button"
                      onClick={() => setShowPrivacyMenu(!showPrivacyMenu)}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 hover:bg-slate-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-slate-700 dark:text-slate-300 transition"
                    >
                      {visibility === 'PUBLIC' && <Globe className="w-3.5 h-3.5 text-blue-500" />}
                      {visibility === 'FRIENDS' && <Users className="w-3.5 h-3.5 text-emerald-500" />}
                      {visibility === 'FRIENDS_EXCEPT' && <UserX className="w-3.5 h-3.5 text-amber-500" />}
                      {visibility === 'CLOSE_FRIENDS' && <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />}
                      {visibility === 'ONLY_ME' && <Lock className="w-3.5 h-3.5 text-rose-500" />}
                      {visibility === 'CUSTOM' && <UserCheck className="w-3.5 h-3.5 text-indigo-500" />}
                      <span>
                        {visibility === 'PUBLIC' && 'Công khai'}
                        {visibility === 'FRIENDS' && 'Bạn bè'}
                        {visibility === 'FRIENDS_EXCEPT' && `Ngoại trừ (${selectedFriendIds.length})`}
                        {visibility === 'CLOSE_FRIENDS' && 'Bạn thân'}
                        {visibility === 'ONLY_ME' && 'Chỉ mình tôi'}
                        {visibility === 'CUSTOM' && `Tùy chỉnh (${selectedFriendIds.length})`}
                      </span>
                      <ChevronDown className="w-3 h-3 text-slate-400" />
                    </button>

                    {/* Privacy Dropdown Menu */}
                    {showPrivacyMenu && (
                      <div className="absolute top-full left-0 mt-1.5 w-64 p-1.5 bg-white dark:bg-[#242526] rounded-xl shadow-xl border border-slate-200 dark:border-neutral-700 z-50 animate-in fade-in zoom-in-95 duration-150">
                        <button
                          type="button"
                          onClick={() => handlePrivacySelect('PUBLIC')}
                          className={`w-full flex items-start gap-2.5 p-2 rounded-lg text-left text-xs transition ${
                            visibility === 'PUBLIC' ? 'bg-blue-50 dark:bg-blue-900/30' : 'hover:bg-slate-100 dark:hover:bg-neutral-700'
                          }`}
                        >
                          <Globe className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                          <div>
                            <p className="font-semibold text-slate-900 dark:text-slate-100">Công khai</p>
                            <p className="text-[11px] text-slate-500 dark:text-slate-400">Bất kỳ ai trên mạng xã hội đều có thể xem</p>
                          </div>
                        </button>

                        <button
                          type="button"
                          onClick={() => handlePrivacySelect('FRIENDS')}
                          className={`w-full flex items-start gap-2.5 p-2 rounded-lg text-left text-xs transition ${
                            visibility === 'FRIENDS' ? 'bg-blue-50 dark:bg-blue-900/30' : 'hover:bg-slate-100 dark:hover:bg-neutral-700'
                          }`}
                        >
                          <Users className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                          <div>
                            <p className="font-semibold text-slate-900 dark:text-slate-100">Bạn bè</p>
                            <p className="text-[11px] text-slate-500 dark:text-slate-400">Chỉ những người đã kết bạn mới xem được</p>
                          </div>
                        </button>

                        <button
                          type="button"
                          onClick={() => handlePrivacySelect('FRIENDS_EXCEPT')}
                          className={`w-full flex items-start gap-2.5 p-2 rounded-lg text-left text-xs transition ${
                            visibility === 'FRIENDS_EXCEPT' ? 'bg-blue-50 dark:bg-blue-900/30' : 'hover:bg-slate-100 dark:hover:bg-neutral-700'
                          }`}
                        >
                          <UserX className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                          <div>
                            <p className="font-semibold text-slate-900 dark:text-slate-100">Bạn bè ngoại trừ...</p>
                            <p className="text-[11px] text-slate-500 dark:text-slate-400">Ẩn tin đối với một số bạn bè cụ thể</p>
                          </div>
                        </button>

                        <button
                          type="button"
                          onClick={() => handlePrivacySelect('CLOSE_FRIENDS')}
                          className={`w-full flex items-start gap-2.5 p-2 rounded-lg text-left text-xs transition ${
                            visibility === 'CLOSE_FRIENDS' ? 'bg-blue-50 dark:bg-blue-900/30' : 'hover:bg-slate-100 dark:hover:bg-neutral-700'
                          }`}
                        >
                          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500 mt-0.5 shrink-0" />
                          <div>
                            <p className="font-semibold text-slate-900 dark:text-slate-100">Bạn thân</p>
                            <p className="text-[11px] text-slate-500 dark:text-slate-400">Chỉ danh sách Bạn thân mới xem được</p>
                          </div>
                        </button>

                        <button
                          type="button"
                          onClick={() => handlePrivacySelect('ONLY_ME')}
                          className={`w-full flex items-start gap-2.5 p-2 rounded-lg text-left text-xs transition ${
                            visibility === 'ONLY_ME' ? 'bg-blue-50 dark:bg-blue-900/30' : 'hover:bg-slate-100 dark:hover:bg-neutral-700'
                          }`}
                        >
                          <Lock className="w-4 h-4 text-rose-500 mt-0.5 shrink-0" />
                          <div>
                            <p className="font-semibold text-slate-900 dark:text-slate-100">Chỉ mình tôi</p>
                            <p className="text-[11px] text-slate-500 dark:text-slate-400">Chỉ bạn mới có thể xem tin này</p>
                          </div>
                        </button>

                        <button
                          type="button"
                          onClick={() => handlePrivacySelect('CUSTOM')}
                          className={`w-full flex items-start gap-2.5 p-2 rounded-lg text-left text-xs transition ${
                            visibility === 'CUSTOM' ? 'bg-blue-50 dark:bg-blue-900/30' : 'hover:bg-slate-100 dark:hover:bg-neutral-700'
                          }`}
                        >
                          <UserCheck className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0" />
                          <div>
                            <p className="font-semibold text-slate-900 dark:text-slate-100">Tùy chỉnh...</p>
                            <p className="text-[11px] text-slate-500 dark:text-slate-400">Chọn đích danh những người được xem</p>
                          </div>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Story Kind Selector Tabs */}
            <div className="flex rounded-xl bg-slate-100 dark:bg-neutral-800 p-1">
              <button
                type="button"
                onClick={() => {
                  setKind('IMAGE');
                  if (fileInputRef.current) fileInputRef.current.accept = 'image/*';
                }}
                className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold transition ${
                  kind === 'IMAGE'
                    ? 'bg-white dark:bg-[#242526] text-blue-600 dark:text-blue-400 shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
                }`}
              >
                <ImageIcon className="w-4 h-4" />
                <span>Ảnh</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setKind('VIDEO');
                  if (fileInputRef.current) fileInputRef.current.accept = 'video/mp4,video/webm,video/quicktime';
                }}
                className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold transition ${
                  kind === 'VIDEO'
                    ? 'bg-white dark:bg-[#242526] text-blue-600 dark:text-blue-400 shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
                }`}
              >
                <VideoIcon className="w-4 h-4" />
                <span>Video</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setKind('TEXT');
                  setMediaFile(null);
                  setPreviewUrl(null);
                }}
                className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold transition ${
                  kind === 'TEXT'
                    ? 'bg-white dark:bg-[#242526] text-blue-600 dark:text-blue-400 shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
                }`}
              >
                <Type className="w-4 h-4" />
                <span>Văn bản</span>
              </button>
            </div>

            {/* Media Picker Button (for IMAGE / VIDEO) */}
            {kind !== 'TEXT' && (
              <div className="space-y-2">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept={kind === 'VIDEO' ? 'video/mp4,video/webm,video/quicktime' : 'image/*'}
                  onChange={handleFileChange}
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full py-3 px-4 rounded-xl border-2 border-dashed border-slate-300 dark:border-neutral-700 hover:border-blue-500 dark:hover:border-blue-500 bg-slate-50 dark:bg-neutral-800/50 hover:bg-blue-50/50 dark:hover:bg-blue-950/20 text-slate-700 dark:text-slate-300 flex flex-col items-center justify-center gap-2 transition"
                >
                  {kind === 'VIDEO' ? (
                    <VideoIcon className="w-6 h-6 text-blue-600" />
                  ) : (
                    <ImageIcon className="w-6 h-6 text-blue-600" />
                  )}
                  <span className="text-xs font-semibold">
                    {previewUrl ? 'Thay đổi tệp đã chọn' : `Chọn ${kind === 'VIDEO' ? 'video' : 'ảnh'} từ máy tính`}
                  </span>
                  <span className="text-[10px] text-slate-400">
                    {kind === 'VIDEO' ? 'Định dạng MP4, WebM (tối đa 50MB)' : 'Hỗ trợ JPG, PNG, WebP (tối đa 50MB)'}
                  </span>
                </button>
              </div>
            )}

            {/* Caption / Content input */}
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-slate-700 dark:text-slate-300">
                {kind === 'TEXT' ? 'Nội dung văn bản tin *' : 'Thêm chú thích (tùy chọn)'}
              </label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder={
                  kind === 'TEXT'
                    ? 'Bạn đang nghĩ gì thế? Nhập nội dung chia sẻ...'
                    : 'Viết chú thích cho tin của bạn...'
                }
                rows={kind === 'TEXT' ? 5 : 3}
                maxLength={1000}
                className="w-full p-3 rounded-xl border border-slate-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none transition"
              />
              <div className="text-right text-[11px] text-slate-400">
                {content.length}/1000 ký tự
              </div>
            </div>

            {/* Text story styling options */}
            {kind === 'TEXT' && (
              <div className="space-y-3">
                <label className="text-xs font-medium text-slate-700 dark:text-slate-300">
                  Màu nền tin:
                </label>
                <div className="flex flex-wrap gap-2">
                  {BG_PRESETS.map((preset) => (
                    <button
                      key={preset.id}
                      type="button"
                      onClick={() => setSelectedBg(preset)}
                      className={`w-9 h-9 rounded-full transition-transform ${
                        selectedBg.id === preset.id ? 'scale-110 ring-2 ring-blue-500 ring-offset-2 dark:ring-offset-[#1c1e21]' : 'hover:scale-105'
                      }`}
                      style={{ background: preset.value }}
                      title={preset.name}
                    />
                  ))}
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-700 dark:text-slate-300">
                    Kiểu chữ:
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'font-sans font-bold', label: 'Hiện đại' },
                      { id: 'font-serif font-bold italic', label: 'Cổ điển' },
                      { id: 'font-mono font-bold', label: 'Mã hóa' },
                    ].map((f) => (
                      <button
                        key={f.id}
                        type="button"
                        onClick={() => setFontStyle(f.id)}
                        className={`py-1.5 px-2 rounded-lg border text-xs font-medium transition ${
                          fontStyle === f.id
                            ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400'
                            : 'border-slate-200 dark:border-neutral-700 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-neutral-800'
                        }`}
                      >
                        {f.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Error Message */}
            {errorMsg && (
              <div className="p-3 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/60 text-xs text-red-600 dark:text-red-400">
                {errorMsg}
              </div>
            )}

            {/* Submit Action Buttons */}
            <div className="mt-auto pt-4 flex gap-2.5">
              <button
                type="button"
                onClick={onClose}
                disabled={isUploading}
                className="flex-1 py-2.5 rounded-xl border border-slate-300 dark:border-neutral-700 hover:bg-slate-100 dark:hover:bg-neutral-800 text-slate-700 dark:text-slate-300 text-sm font-semibold transition"
              >
                Hủy bỏ
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isUploading}
                className="flex-1 py-2.5 rounded-xl bg-[#1877F2] hover:bg-blue-600 text-white text-sm font-semibold shadow-md flex items-center justify-center gap-2 transition disabled:opacity-50"
              >
                {isUploading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Đang chia sẻ...</span>
                  </>
                ) : (
                  <span>Chia sẻ lên tin</span>
                )}
              </button>
            </div>
          </div>

          {/* Right Panel: Live 9:16 Story Preview */}
          <div className="flex-1 bg-slate-100 dark:bg-neutral-900 p-4 sm:p-6 flex items-center justify-center overflow-hidden">
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[9/16] rounded-2xl shadow-2xl overflow-hidden border border-slate-300 dark:border-neutral-800 flex flex-col select-none">
              {/* Story Content Rendering */}
              {kind === 'TEXT' ? (
                <div
                  className="w-full h-full p-6 flex items-center justify-center text-center transition-all duration-300"
                  style={{ background: selectedBg.value }}
                >
                  <p className={`text-white text-lg sm:text-xl drop-shadow-md break-words ${fontStyle}`}>
                    {content.trim() || 'Nhập nội dung tin để xem trước...'}
                  </p>
                </div>
              ) : previewUrl ? (
                kind === 'VIDEO' ? (
                  <video
                    src={previewUrl}
                    controls
                    autoPlay
                    muted
                    loop
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={previewUrl}
                    alt="Story Preview"
                    className="w-full h-full object-cover"
                  />
                )
              ) : (
                <div className="w-full h-full bg-slate-800 flex flex-col items-center justify-center gap-3 text-slate-400 p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-slate-700/60 flex items-center justify-center">
                    {kind === 'VIDEO' ? <VideoIcon className="w-6 h-6" /> : <ImageIcon className="w-6 h-6" />}
                  </div>
                  <p className="text-xs">
                    Xem trước tin {kind === 'VIDEO' ? 'video' : 'hình ảnh'} của bạn tại đây
                  </p>
                </div>
              )}

              {/* Top Bar Preview inside Card */}
              <div className="absolute top-0 inset-x-0 p-3 bg-gradient-to-b from-black/70 via-black/30 to-transparent flex items-center gap-2">
                <div className="w-8 h-8 rounded-full overflow-hidden border border-white shrink-0">
                  {user?.avatarUrl ? (
                    <img src={user.avatarUrl} alt="Avatar" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold">
                      {user?.displayName?.[0]?.toUpperCase() || 'U'}
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white text-xs font-semibold truncate drop-shadow">
                    {user?.displayName || 'Bạn'}
                  </p>
                  <p className="text-white/80 text-[10px] drop-shadow">Vừa xong</p>
                </div>
              </div>

              {/* Bottom Caption Overlay for Image/Video */}
              {kind !== 'TEXT' && content.trim() && (
                <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/80 to-transparent text-white text-xs text-center drop-shadow-md">
                  {content}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Friend Picker Modal for FRIENDS_EXCEPT / CUSTOM */}
        {showFriendPicker && (
          <div className="absolute inset-0 bg-white dark:bg-[#242526] z-50 p-4 sm:p-6 flex flex-col animate-in slide-in-from-bottom-6 duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-neutral-800">
              <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base">
                {visibility === 'FRIENDS_EXCEPT'
                  ? 'Chọn bạn bè không được xem tin'
                  : 'Chọn bạn bè được phép xem tin'}
              </h3>
              <button
                type="button"
                onClick={() => setShowFriendPicker(false)}
                className="text-sm font-semibold text-blue-600 hover:underline"
              >
                Xong ({selectedFriendIds.length})
              </button>
            </div>

            <input
              type="text"
              placeholder="Tìm kiếm bạn bè..."
              value={searchFriend}
              onChange={(e) => setSearchFriend(e.target.value)}
              className="my-3 p-2.5 text-xs rounded-xl border border-slate-200 dark:border-neutral-700 bg-slate-50 dark:bg-neutral-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />

            <div className="flex-1 overflow-y-auto space-y-1">
              {filteredFriends.length === 0 ? (
                <p className="text-xs text-slate-400 text-center py-8">
                  {friendsList.length === 0 ? 'Bạn chưa có người bạn nào' : 'Không tìm thấy bạn bè'}
                </p>
              ) : (
                filteredFriends.map((friend) => {
                  const isChecked = selectedFriendIds.includes(friend.id);
                  return (
                    <div
                      key={friend.id}
                      onClick={() => toggleFriendSelection(friend.id)}
                      className="flex items-center justify-between p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-neutral-700 cursor-pointer transition"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-full overflow-hidden bg-slate-200 dark:bg-slate-700 shrink-0">
                          {friend.avatar ? (
                            <img src={friend.avatar} alt={friend.name} className="w-full h-full object-cover" />
                          ) : (
                            <div className="w-full h-full bg-blue-500 text-white flex items-center justify-center font-bold text-xs">
                              {friend.name[0]?.toUpperCase()}
                            </div>
                          )}
                        </div>
                        <span className="text-xs font-semibold text-slate-900 dark:text-slate-100">
                          {friend.name}
                        </span>
                      </div>
                      <div
                        className={`w-5 h-5 rounded-md border flex items-center justify-center transition ${
                          isChecked
                            ? 'bg-blue-600 border-blue-600 text-white'
                            : 'border-slate-300 dark:border-neutral-600'
                        }`}
                      >
                        {isChecked && <Check className="w-3.5 h-3.5 stroke-[3px]" />}
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
