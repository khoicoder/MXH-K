'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Loader2, AlertCircle, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { apiClient } from '../../../../lib/api-client';
import { useAuthStore } from '../../../../stores/auth.store';

function GoogleCallbackContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { setAuth } = useAuthStore();
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const code = searchParams.get('code');
    const error = searchParams.get('error');

    if (error) {
      setStatus('error');
      setErrorMessage(`Google authentication was cancelled or rejected (${error})`);
      return;
    }

    if (!code) {
      setStatus('error');
      setErrorMessage('No authorization code provided in callback from Google');
      return;
    }

    const exchangeCode = async () => {
      try {
        const redirectUri = `${window.location.origin}/auth/google/callback`;
        const res: any = await apiClient.post('/api/auth/google', {
          code,
          redirectUri,
          deviceName: navigator.userAgent.includes('Mobile')
            ? 'Mobile Browser'
            : 'Desktop Browser',
          deviceId: `device_web_${Math.random().toString(36).substring(2, 10)}`,
        });

        const payload = res.data || res;
        const user = payload.user || payload;
        const accessToken = payload.accessToken || res.accessToken;

        setAuth(
          {
            id: user.id,
            email: user.email,
            displayName: user.displayName || user.email?.split('@')[0],
            avatarUrl: user.avatarUrl,
          },
          accessToken,
        );

        setStatus('success');
        setTimeout(() => {
          router.push('/');
        }, 800);
      } catch (err: any) {
        setStatus('error');
        setErrorMessage(
          err.response?.data?.message || err.message || 'Failed to authenticate with Google',
        );
      }
    };

    exchangeCode();
  }, [searchParams, router, setAuth]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-md w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-xl text-center">
        {status === 'loading' && (
          <div className="py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-blue-50 dark:bg-blue-950/50 mx-auto flex items-center justify-center">
              <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Connecting to Google...
            </h2>
            <p className="text-xs text-slate-500">
              Verifying your credentials and establishing a secure multi-device session.
            </p>
          </div>
        )}

        {status === 'success' && (
          <div className="py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-50 dark:bg-emerald-950/50 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8 text-emerald-600" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Authentication Successful
            </h2>
            <p className="text-xs text-slate-500">
              Welcome to the platform! Redirecting you now...
            </p>
          </div>
        )}

        {status === 'error' && (
          <div className="py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-red-50 dark:bg-red-950/50 mx-auto flex items-center justify-center">
              <AlertCircle className="w-8 h-8 text-red-600" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Google Sign-In Failed
            </h2>
            <p className="text-xs text-red-500 px-4">{errorMessage}</p>
            <div className="pt-4">
              <Link
                href="/login"
                className="inline-block py-2.5 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs rounded-xl shadow-md transition-colors"
              >
                Return to Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function GoogleCallbackPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
          <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
        </div>
      }
    >
      <GoogleCallbackContent />
    </Suspense>
  );
}
