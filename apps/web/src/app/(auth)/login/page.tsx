'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Sparkles, ArrowRight, Loader2, AlertCircle, Eye, EyeOff } from 'lucide-react';
import { apiClient } from '../../../lib/api-client';
import { useAuthStore } from '../../../stores/auth.store';
import { GoogleSignInButton } from '../../../components/ui/google-signin-button';
import { Logo } from '../../../components/ui/logo';

export default function LoginPage() {
  const router = useRouter();
  const { setAuth } = useAuthStore();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg('');

    try {
      const res: any = await apiClient.post('/api/auth/login', {
        email: email.trim(),
        password,
        deviceName: 'Next.js Web Browser',
        deviceId: `web_${Date.now()}`,
      });

      const data = res.data || res;
      setAuth(
        {
          id: data.user.id,
          email: data.user.email,
          displayName: data.user.displayName || data.user.email.split('@')[0],
          username: data.user.username || data.user.email.split('@')[0],
          avatarUrl: data.user.avatarUrl || null,
          bio: data.user.bio || '',
        },
        data.accessToken,
      );

      router.push('/');
    } catch (err: any) {
      setErrorMsg(err.response?.data?.message || 'Invalid credentials');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-3 sm:p-4 bg-slate-50 dark:bg-slate-950 w-full max-w-full overflow-x-hidden">
      <div className="max-w-md w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-xl">
        <div className="text-center mb-6 sm:mb-8">
          <Logo variant="full" size="lg" className="justify-center mb-4" />
          <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
            Đăng Nhập MXH-K
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Nền tảng mạng xã hội hiệu năng cao với bảo mật đa thiết bị
          </p>
        </div>

        {errorMsg && (
          <div className="mb-6 p-3 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 rounded-xl flex items-center gap-2 text-xs text-red-600 dark:text-red-400">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        <div className="space-y-3 mb-6">
          <GoogleSignInButton label="Đăng nhập bằng Google" />
          
          <div className="relative flex items-center justify-center my-4">
            <div className="border-t border-slate-200 dark:border-slate-800 w-full"></div>
            <span className="bg-white dark:bg-slate-900 px-3 text-[11px] font-bold text-slate-400 uppercase tracking-wider text-center">
              Hoặc tiếp tục bằng Email
            </span>
            <div className="border-t border-slate-200 dark:border-slate-800 w-full"></div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
              Địa chỉ Email
            </label>
            <input
              type="email"
              inputMode="email"
              autoComplete="email"
              autoCapitalize="none"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tenban@example.com"
              className="w-full bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-xs text-slate-900 dark:text-white outline-none focus:border-blue-600 transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
              Mật khẩu
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl px-4 pr-10 py-2.5 text-xs text-slate-900 dark:text-white outline-none focus:border-blue-600 transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer p-1"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full mt-2 py-3 min-h-[44px] bg-[#1877f2] hover:bg-blue-700 disabled:opacity-50 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all active:scale-[0.98] cursor-pointer touch-manipulation"
          >
            {isLoading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <>
                <span>Đăng Nhập</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        <p className="text-center text-xs text-slate-500 mt-6">
          Bạn chưa có tài khoản?{' '}
          <Link href="/register" className="text-[#1877f2] hover:underline font-bold">
            Đăng ký tài khoản mới
          </Link>
        </p>
      </div>
    </div>
  );
}
