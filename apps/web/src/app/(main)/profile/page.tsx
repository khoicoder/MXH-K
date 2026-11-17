'use client';

import React, { useState, useEffect, useRef } from 'react';
import { User, Bookmark, Grid, Edit3, Camera, Plus, MapPin, Briefcase, Calendar, Globe, Sparkles, Loader2, Users, UploadCloud } from 'lucide-react';
import { apiClient } from '../../../lib/api-client';
import { useAuthStore } from '../../../stores/auth.store';
import { PostCard, PostItem } from '../../../components/feed/post-card';
import { PostComposer } from '../../../components/feed/post-composer';

export default function ProfilePage() {
  const { user, setUser } = useAuthStore();
  const avatarInputRef = useRef<HTMLInputElement>(null);
  const coverInputRef = useRef<HTMLInputElement>(null);
  const [profile, setProfile] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<'posts' | 'about' | 'friends' | 'saved'>('posts');
  const [posts, setPosts] = useState<PostItem[]>([]);
  const [savedPosts, setSavedPosts] = useState<PostItem[]>([]);
  const [friends, setFriends] = useState<any[]>([]);
  const [isLoadingPosts, setIsLoadingPosts] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isUploadingAvatar, setIsUploadingAvatar] = useState(false);
  const [isUploadingCover, setIsUploadingCover] = useState(false);

  // Edit states
  const [editDisplayName, setEditDisplayName] = useState(user?.displayName || '');
  const [editBio, setEditBio] = useState(user?.bio || 'Yêu thích công nghệ, kết nối và chia sẻ trên MXH-K.');
  const [editAvatarUrl, setEditAvatarUrl] = useState(user?.avatarUrl || '');
  const [editCoverUrl, setEditCoverUrl] = useState(user?.coverUrl || '');

  const fetchProfile = async () => {
    try {
      const res: any = await apiClient.get('/api/users/me');
      const p = res.data || res;
      setProfile(p);
      setEditDisplayName(p.displayName || user?.displayName || '');
      setEditBio(p.bio || 'Yêu thích công nghệ, kết nối và chia sẻ trên MXH-K.');
      setEditAvatarUrl(p.avatarUrl || user?.avatarUrl || '');
      setEditCoverUrl(p.coverUrl || user?.coverUrl || '');
      setUser({
        displayName: p.displayName,
        avatarUrl: p.avatarUrl,
        coverUrl: p.coverUrl,
        username: p.username,
        bio: p.bio,
      });
    } catch {}
  };

  const fetchUserPosts = async () => {
    if (!user?.id) return;
    setIsLoadingPosts(true);
    try {
      const res: any = await apiClient.get(`/api/posts/user/${user.id}`);
      const items = res.items || res.data?.items || (Array.isArray(res) ? res : []);
      setPosts(items);
    } catch {
      // Fallback
    } finally {
      setIsLoadingPosts(false);
    }
  };

  const fetchSavedPosts = async () => {
    try {
      const res: any = await apiClient.get('/api/posts/saved');
      const items = res.items || res.data?.items || (Array.isArray(res) ? res : []);
      setSavedPosts(items);
    } catch {}
  };

  const fetchFriends = async () => {
    try {
      const res: any = await apiClient.get('/api/friends');
      const items = res.friends || res.items || (Array.isArray(res) ? res : []);
      setFriends(items);
    } catch {}
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  useEffect(() => {
    if (user?.id) {
      fetchUserPosts();
    }
  }, [user?.id]);

  useEffect(() => {
    if (activeTab === 'saved') fetchSavedPosts();
    if (activeTab === 'friends') fetchFriends();
  }, [activeTab]);

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    try {
      await apiClient.patch('/api/users/me', {
        displayName: editDisplayName.trim(),
        bio: editBio.trim(),
        avatarUrl: editAvatarUrl.trim() || null,
        coverUrl: editCoverUrl.trim() || null,
      });

      setUser({
        displayName: editDisplayName.trim(),
        bio: editBio.trim(),
        avatarUrl: editAvatarUrl.trim() || undefined,
        coverUrl: editCoverUrl.trim() || undefined,
      });

      setIsEditing(false);
      alert('Đã cập nhật trang cá nhân thành công!');
      fetchUserPosts();
    } catch (err: any) {
      alert(err.response?.data?.message || 'Không thể cập nhật hồ sơ');
    } finally {
      setIsSaving(false);
    }
  };

  const handleAvatarFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploadingAvatar(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res: any = await apiClient.post('/api/media/upload', formData);
      const uploadedUrl = res.url;
      if (uploadedUrl) {
        await apiClient.patch('/api/users/me', {
          avatarUrl: uploadedUrl,
        });

        setUser({
          avatarUrl: uploadedUrl,
        });

        setEditAvatarUrl(uploadedUrl);
        setProfile((prev: any) => ({ ...prev, avatarUrl: uploadedUrl }));
        alert('Cập nhật ảnh đại diện từ máy tính thành công!');
        fetchUserPosts();
      }
    } catch (err: any) {
      alert(err.response?.data?.message || 'Không thể tải ảnh đại diện lên');
    } finally {
      setIsUploadingAvatar(false);
      if (avatarInputRef.current) avatarInputRef.current.value = '';
    }
  };

  const handleCoverFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploadingCover(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res: any = await apiClient.post('/api/media/upload', formData);
      const uploadedUrl = res.url;
      if (uploadedUrl) {
        await apiClient.patch('/api/users/me', {
          coverUrl: uploadedUrl,
        });

        setUser({
          coverUrl: uploadedUrl,
        });

        setEditCoverUrl(uploadedUrl);
        setProfile((prev: any) => ({ ...prev, coverUrl: uploadedUrl }));
        alert('Cập nhật ảnh bìa từ máy tính thành công!');
      }
    } catch (err: any) {
      alert(err.response?.data?.message || 'Không thể tải ảnh bìa lên');
    } finally {
      setIsUploadingCover(false);
      if (coverInputRef.current) coverInputRef.current.value = '';
    }
  };

  const currentDisplayName = user?.displayName || profile?.displayName || editDisplayName || 'Người dùng MXH-K';
  const currentBio = user?.bio || profile?.bio || editBio;
  const currentAvatar = user?.avatarUrl || profile?.avatarUrl || editAvatarUrl;
  const currentCover = user?.coverUrl || profile?.coverUrl || editCoverUrl;

  return (
    <div className="space-y-4 select-none">
      {/* Hidden file inputs for local uploads */}
      <input
        type="file"
        ref={avatarInputRef}
        accept="image/*"
        onChange={handleAvatarFileSelect}
        className="hidden"
      />
      <input
        type="file"
        ref={coverInputRef}
        accept="image/*"
        onChange={handleCoverFileSelect}
        className="hidden"
      />

      {/* 1. Header Profile: Cover Photo & Avatar Card (Chuẩn Facebook) */}
      <div className="bg-white dark:bg-[#242526] rounded-2xl overflow-hidden shadow-sm border border-slate-200/80 dark:border-neutral-800">
        {/* Cover Photo */}
        <div className="relative h-44 sm:h-56 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
          <img
            src={currentCover || 'https://images.unsplash.com/photo-1707343843437-caacff5cfa74?w=1200&auto=format&fit=crop&q=80'}
            alt="Cover"
            className="w-full h-full object-cover"
          />
          <button
            onClick={() => coverInputRef.current?.click()}
            disabled={isUploadingCover}
            className="absolute bottom-3 right-3 px-3 py-1.5 bg-white/90 dark:bg-black/70 hover:bg-white text-slate-800 dark:text-white rounded-lg text-xs font-bold shadow-md flex items-center gap-1.5 cursor-pointer"
          >
            {isUploadingCover ? <Loader2 className="w-4 h-4 animate-spin text-blue-600" /> : <Camera className="w-4 h-4" />}
            <span>{isUploadingCover ? 'Đang tải lên...' : 'Chỉnh sửa ảnh bìa'}</span>
          </button>
        </div>

        {/* Avatar & Profile Info */}
        <div className="px-6 pb-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between -mt-16 sm:-mt-20 gap-4 mb-4">
            <div className="flex flex-col sm:flex-row items-center sm:items-end gap-4 text-center sm:text-left">
              <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full border-4 border-white dark:border-[#242526] overflow-hidden bg-blue-600 shadow-xl shrink-0">
                {currentAvatar ? (
                  <img src={currentAvatar} alt="Avatar" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-white text-4xl font-black">
                    {(currentDisplayName[0] || 'U').toUpperCase()}
                  </div>
                )}
                <button
                  onClick={() => avatarInputRef.current?.click()}
                  disabled={isUploadingAvatar}
                  title="Tải ảnh đại diện từ máy tính"
                  className="absolute bottom-2 right-2 p-2 bg-[#e4e6eb] hover:bg-[#d8dadf] text-slate-800 rounded-full shadow cursor-pointer transition-transform hover:scale-105"
                >
                  {isUploadingAvatar ? (
                    <Loader2 className="w-4 h-4 animate-spin text-blue-600" />
                  ) : (
                    <Camera className="w-4 h-4" />
                  )}
                </button>
              </div>

              <div className="space-y-1">
                <h1 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                  {currentDisplayName}
                </h1>
                <p className="text-xs text-slate-500 font-medium">
                  {user?.username ? `@${user.username}` : ''} · {posts.length} bài viết
                </p>
                <p className="text-xs text-slate-700 dark:text-slate-300 max-w-md pt-0.5">{currentBio}</p>
              </div>
            </div>

            {/* Profile Action Buttons */}
            <div className="flex items-center justify-center sm:justify-end gap-2 shrink-0">
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="px-4 py-2 bg-[#e4e6eb] hover:bg-[#d8dadf] dark:bg-[#3a3b3c] dark:hover:bg-[#4e4f50] text-slate-800 dark:text-slate-100 font-bold text-xs rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <Edit3 className="w-4 h-4" />
                <span>Chỉnh sửa hồ sơ</span>
              </button>
            </div>
          </div>

          {/* Edit Form Drawer */}
          {isEditing && (
            <form onSubmit={handleUpdateProfile} className="p-4 bg-slate-50 dark:bg-slate-800/40 rounded-xl mb-4 space-y-3 border border-slate-200 dark:border-neutral-700 animate-in fade-in duration-150">
              <h3 className="font-bold text-xs text-slate-800 dark:text-slate-200">Chỉnh sửa thông tin cá nhân</h3>
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Tên hiển thị (Họ và tên)</label>
                <input
                  type="text"
                  required
                  value={editDisplayName}
                  onChange={(e) => setEditDisplayName(e.target.value)}
                  placeholder="Ví dụ: Nguyễn Văn Hoàng"
                  className="w-full bg-white dark:bg-[#242526] border border-slate-300 dark:border-neutral-700 rounded-lg px-3 py-1.5 text-xs outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Tiểu sử giới thiệu</label>
                <textarea
                  value={editBio}
                  onChange={(e) => setEditBio(e.target.value)}
                  rows={2}
                  placeholder="Chia sẻ đôi nét về bản thân bạn..."
                  className="w-full bg-white dark:bg-[#242526] border border-slate-300 dark:border-neutral-700 rounded-lg px-3 py-1.5 text-xs outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Ảnh đại diện (Avatar)</label>
                <div className="flex gap-2 items-center">
                  <input
                    type="text"
                    value={editAvatarUrl}
                    onChange={(e) => setEditAvatarUrl(e.target.value)}
                    placeholder="URL ảnh hoặc tải trực tiếp từ máy..."
                    className="flex-1 bg-white dark:bg-[#242526] border border-slate-300 dark:border-neutral-700 rounded-lg px-3 py-1.5 text-xs outline-none focus:border-blue-500"
                  />
                  <button
                    type="button"
                    disabled={isUploadingAvatar}
                    onClick={() => avatarInputRef.current?.click()}
                    className="px-3 py-1.5 bg-[#e4e6eb] hover:bg-[#d8dadf] dark:bg-[#3a3b3c] dark:hover:bg-[#4e4f50] text-slate-800 dark:text-slate-200 text-xs font-bold rounded-lg cursor-pointer flex items-center gap-1 shrink-0"
                  >
                    {isUploadingAvatar ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Camera className="w-3.5 h-3.5" />}
                    <span>{isUploadingAvatar ? 'Đang tải...' : 'Chọn từ máy'}</span>
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Ảnh bìa (Cover)</label>
                <div className="flex gap-2 items-center">
                  <input
                    type="text"
                    value={editCoverUrl}
                    onChange={(e) => setEditCoverUrl(e.target.value)}
                    placeholder="URL ảnh bìa hoặc tải từ máy..."
                    className="flex-1 bg-white dark:bg-[#242526] border border-slate-300 dark:border-neutral-700 rounded-lg px-3 py-1.5 text-xs outline-none focus:border-blue-500"
                  />
                  <button
                    type="button"
                    disabled={isUploadingCover}
                    onClick={() => coverInputRef.current?.click()}
                    className="px-3 py-1.5 bg-[#e4e6eb] hover:bg-[#d8dadf] dark:bg-[#3a3b3c] dark:hover:bg-[#4e4f50] text-slate-800 dark:text-slate-200 text-xs font-bold rounded-lg cursor-pointer flex items-center gap-1 shrink-0"
                  >
                    {isUploadingCover ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Camera className="w-3.5 h-3.5" />}
                    <span>{isUploadingCover ? 'Đang tải...' : 'Chọn từ máy'}</span>
                  </button>
                </div>
              </div>
              <div className="flex justify-end gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-3 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-200 rounded-lg cursor-pointer"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  disabled={isSaving}
                  className="px-4 py-1.5 bg-[#1877f2] hover:bg-blue-700 disabled:opacity-50 text-white text-xs font-bold rounded-lg cursor-pointer flex items-center gap-1.5 shadow"
                >
                  {isSaving && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
                  <span>Lưu thay đổi</span>
                </button>
              </div>
            </form>
          )}

          {/* Facebook Profile Navigation Tabs */}
          <div className="flex border-t border-slate-200/80 dark:border-neutral-800 pt-1 -mb-1 overflow-x-auto scrollbar-none">
            {[
              { id: 'posts', label: `Bài viết (${posts.length})` },
              { id: 'about', label: 'Giới thiệu' },
              { id: 'friends', label: 'Bạn bè' },
              { id: 'saved', label: `Đã lưu (${savedPosts.length})` },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-3 px-4 text-xs font-bold border-b-2 transition-all cursor-pointer shrink-0 ${
                  activeTab === tab.id
                    ? 'border-[#1877f2] text-[#1877f2]'
                    : 'border-transparent text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-[#3a3b3c] rounded-lg'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Profile Content Area */}
      {activeTab === 'posts' && (
        <div className="space-y-4">
          <PostComposer onPostCreated={fetchUserPosts} />

          {isLoadingPosts ? (
            <div className="bg-white dark:bg-[#242526] rounded-2xl p-8 text-center text-slate-400">
              <Loader2 className="w-6 h-6 animate-spin mx-auto mb-2 text-blue-600" />
              <p className="text-xs">Đang tải danh sách bài viết...</p>
            </div>
          ) : posts.length === 0 ? (
            <div className="bg-white dark:bg-[#242526] rounded-2xl p-8 text-center text-slate-400 border border-slate-200/80 dark:border-neutral-800">
              <Sparkles className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <h3 className="font-bold text-xs text-slate-800 dark:text-slate-200">Bạn chưa đăng bài viết nào</h3>
              <p className="text-xs text-slate-400 mt-1">Hãy chia sẻ khoảnh khắc đầu tiên của bạn với cộng đồng MXH-K!</p>
            </div>
          ) : (
            posts.map((post) => (
              <PostCard
                key={post.id}
                post={{
                  ...post,
                  authorName: post.authorName || currentDisplayName,
                  authorAvatar: post.authorAvatar || currentAvatar,
                }}
              />
            ))
          )}
        </div>
      )}

      {activeTab === 'about' && (
        <div className="bg-white dark:bg-[#242526] rounded-2xl p-6 shadow-sm border border-slate-200/80 dark:border-neutral-800 space-y-4">
          <h2 className="font-bold text-sm text-slate-900 dark:text-white">Thông tin giới thiệu</h2>
          <div className="space-y-3 text-xs text-slate-700 dark:text-slate-300">
            <div className="flex items-center gap-3">
              <User className="w-4 h-4 text-slate-400" />
              <span>Họ và tên: <strong>{currentDisplayName}</strong></span>
            </div>
            <div className="flex items-center gap-3">
              <Globe className="w-4 h-4 text-slate-400" />
              <span>Tên người dùng: <strong>@{user?.username || profile?.username || 'user'}</strong></span>
            </div>
            <div className="flex items-center gap-3">
              <Briefcase className="w-4 h-4 text-slate-400" />
              <span>Làm việc tại: <strong>Cộng đồng Công nghệ MXH-K</strong></span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-slate-400" />
              <span>Sống tại: <strong>Việt Nam</strong></span>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="w-4 h-4 text-slate-400" />
              <span>Tham gia từ: <strong>{profile?.createdAt ? new Date(profile.createdAt).toLocaleDateString('vi-VN') : 'Tháng 11 năm 2026'}</strong></span>
            </div>
            <div className="flex items-center gap-3">
              <Globe className="w-4 h-4 text-slate-400" />
              <span>Email: <strong>{user?.email || 'Chưa cập nhật'}</strong></span>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'friends' && (
        <div className="bg-white dark:bg-[#242526] rounded-2xl p-6 shadow-sm border border-slate-200/80 dark:border-neutral-800 space-y-4">
          <h2 className="font-bold text-sm text-slate-900 dark:text-white">Danh sách bạn bè ({friends.length})</h2>
          {friends.length === 0 ? (
            <div className="text-center py-8 text-slate-400">
              <Users className="w-8 h-8 mx-auto mb-2 text-slate-300" />
              <p className="text-xs">Bạn chưa có bạn bè nào. Hãy vào mục Bạn bè để kết nối cùng mọi người nhé!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {friends.map((f, i) => (
                <div key={i} className="flex items-center gap-3 p-2.5 rounded-xl border border-slate-200/60 dark:border-neutral-800">
                  <div className="w-12 h-12 rounded-xl bg-blue-600 text-white font-bold flex items-center justify-center text-sm shrink-0 overflow-hidden">
                    {f.avatarUrl ? (
                      <img src={f.avatarUrl} alt={f.displayName} className="w-full h-full object-cover" />
                    ) : (
                      (f.displayName?.[0] || 'U').toUpperCase()
                    )}
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-xs truncate">{f.displayName || f.username || 'Bạn bè'}</p>
                    <p className="text-[11px] text-slate-400">@{f.username || 'user'}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {activeTab === 'saved' && (
        <div className="space-y-4">
          {savedPosts.length === 0 ? (
            <div className="bg-white dark:bg-[#242526] rounded-2xl p-6 shadow-sm border border-slate-200/80 dark:border-neutral-800 text-center py-12 text-slate-400">
              <Bookmark className="w-8 h-8 mx-auto mb-2 text-purple-500" />
              <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200">Chưa có bài viết đã lưu</h3>
              <p className="text-xs text-slate-400 mt-1">Các bài viết bạn lưu lại để xem sau sẽ hiển thị ở đây.</p>
            </div>
          ) : (
            savedPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))
          )}
        </div>
      )}
    </div>
  );
}
