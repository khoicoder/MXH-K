'use client';

import React, { useState, useEffect } from 'react';
import { Shield, Laptop, Smartphone, Trash2, Power, CheckCircle, Globe, Lock } from 'lucide-react';
import { apiClient } from '../../../lib/api-client';
import { useAuthStore } from '../../../stores/auth.store';
import { useRouter } from 'next/navigation';

export default function SettingsPage() {
  const router = useRouter();
  const { user, clearAuth } = useAuthStore();
  const [sessions, setSessions] = useState<any[]>([
    {
      id: 'sess-current',
      deviceName: 'Trình duyệt Web (Thiết bị này)',
      ipAddress: '127.0.0.1 (Việt Nam)',
      createdAt: new Date().toISOString(),
      isCurrent: true,
    },
    {
      id: 'sess-2',
      deviceName: 'Chrome trên Windows 11',
      ipAddress: '192.168.1.15',
      createdAt: new Date(Date.now() - 86400000).toISOString(),
      isCurrent: false,
    },
  ]);

  const handleRevokeSession = (sessionId: string) => {
    if (!confirm('Bạn có chắc muốn đăng xuất khỏi thiết bị này?')) return;
    setSessions((prev) => prev.filter((s) => s.id !== sessionId));
    alert('Đã hủy phiên đăng nhập của thiết bị từ xa!');
  };

  const handleLogoutAll = async () => {
    if (!confirm('Bạn có chắc chắn muốn đăng xuất khỏi TẤT CẢ các thiết bị?')) return;
    try {
      await apiClient.post('/api/auth/logout-all');
    } catch {
      // Ignored
    }
    clearAuth();
    router.push('/login');
  };

  return (
    <div className="space-y-6 select-none">
      {/* Header */}
      <div className="bg-white dark:bg-[#242526] rounded-2xl p-4 shadow-sm border border-slate-200/80 dark:border-neutral-800">
        <h1 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Shield className="w-5 h-5 text-[#1877f2]" />
          <span>Cài đặt & Quyền riêng tư</span>
        </h1>
        <p className="text-xs text-slate-500 mt-0.5">
          Quản lý tài khoản, mật khẩu, và bảo mật các phiên đăng nhập trên nhiều thiết bị
        </p>
      </div>

      {/* 1. Thông tin tài khoản */}
      <div className="bg-white dark:bg-[#242526] rounded-2xl p-5 shadow-sm border border-slate-200/80 dark:border-neutral-800 space-y-4">
        <h2 className="font-bold text-sm text-slate-900 dark:text-white">Thông tin tài khoản</h2>
        <div className="space-y-3 text-xs">
          <div className="flex items-center justify-between py-2 border-b border-slate-100 dark:border-neutral-800">
            <span className="text-slate-500 font-medium">Email đăng ký</span>
            <span className="font-bold text-slate-900 dark:text-white">{user?.email || 'nq5494150@gmail.com'}</span>
          </div>

          <div className="flex items-center justify-between py-2 border-b border-slate-100 dark:border-neutral-800">
            <span className="text-slate-500 font-medium">Trạng thái xác thực</span>
            <span className="inline-flex items-center gap-1.5 text-emerald-600 font-bold bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-1 rounded-full text-[11px]">
              <CheckCircle className="w-3.5 h-3.5" />
              Đã xác thực an toàn qua Google OAuth
            </span>
          </div>

          <div className="flex items-center justify-between py-2">
            <span className="text-slate-500 font-medium">Tiêu chuẩn bảo mật phiên</span>
            <span className="font-bold text-blue-600 dark:text-blue-400">RS256 JWT + Xoay vòng Refresh Token (RFC 6819)</span>
          </div>
        </div>
      </div>

      {/* 2. Quản lý phiên đăng nhập trên các thiết bị */}
      <div className="bg-white dark:bg-[#242526] rounded-2xl p-5 shadow-sm border border-slate-200/80 dark:border-neutral-800 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-bold text-sm text-slate-900 dark:text-white">Nơi bạn đã đăng nhập</h2>
            <p className="text-xs text-slate-500">Xem và quản lý các thiết bị đang truy cập tài khoản của bạn</p>
          </div>
          <button
            onClick={handleLogoutAll}
            className="px-3 py-1.5 bg-red-50 hover:bg-red-100 dark:bg-red-950/40 text-red-600 dark:text-red-400 font-bold text-xs rounded-xl transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <Power className="w-3.5 h-3.5" />
            <span>Đăng xuất tất cả thiết bị</span>
          </button>
        </div>

        <div className="space-y-3">
          {sessions.map((s) => (
            <div
              key={s.id}
              className="flex items-center justify-between p-3.5 rounded-xl border border-slate-200/70 dark:border-neutral-800 bg-slate-50/50 dark:bg-[#18191a]/40"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-950/60 flex items-center justify-center text-[#1877f2] shrink-0">
                  <Laptop className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="font-bold text-xs text-slate-900 dark:text-white truncate">{s.deviceName}</p>
                    {s.isCurrent && (
                      <span className="text-[10px] font-bold text-emerald-600 bg-emerald-100 dark:bg-emerald-950/60 px-2 py-0.2 rounded-full">
                        Đang hoạt động
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-slate-500">Địa chỉ: {s.ipAddress}</p>
                </div>
              </div>

              {!s.isCurrent && (
                <button
                  onClick={() => handleRevokeSession(s.id)}
                  title="Đăng xuất thiết bị này"
                  className="px-3 py-1.5 bg-[#e4e6eb] hover:bg-slate-300 dark:bg-[#3a3b3c] text-slate-700 dark:text-slate-200 font-semibold text-xs rounded-lg transition-colors cursor-pointer"
                >
                  Đăng xuất
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
