'use client';

import React, { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { apiClient } from '../../lib/api-client';
import { useAuthStore } from '../../stores/auth.store';

interface GoogleSignInButtonProps {
  label?: string;
  className?: string;
}

declare global {
  interface Window {
    google?: any;
  }
}

export function GoogleSignInButton({
  label = 'Continue with Google',
  className = '',
}: GoogleSignInButtonProps) {
  const router = useRouter();
  const { setAuth } = useAuthStore();
  const [loading, setLoading] = useState(false);
  const [gsiLoaded, setGsiLoaded] = useState(false);

  const clientId =
    process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID ||
    '278248269944-4t8rp1124jifgpui6adf9oe07rp5fanl.apps.googleusercontent.com';

  // Load Google Identity Services script
  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (window.google?.accounts?.id) {
      setGsiLoaded(true);
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.defer = true;
    script.onload = () => {
      setGsiLoaded(true);
    };
    document.head.appendChild(script);
  }, []);

  // Handle credential from Google Identity Services (ID Token JWT)
  const handleCredentialResponse = async (response: any) => {
    try {
      setLoading(true);
      const res: any = await apiClient.post('/api/auth/google', {
        idToken: response.credential,
        deviceName: 'Web Browser',
        deviceId: `web_${Date.now()}`,
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

      router.push('/');
    } catch (err: any) {
      alert(err.response?.data?.message || err.message || 'Google authentication failed');
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    setLoading(true);

    const origin =
      typeof window !== 'undefined' ? window.location.origin : 'http://localhost:3000';
    const redirectUri = `${origin}/auth/google/callback`;

    // Strategy 1: If Google Identity Services (GSI) is loaded, use OAuth2 popup to avoid redirect_uri policy block
    if (window.google?.accounts?.oauth2) {
      try {
        const client = window.google.accounts.oauth2.initCodeClient({
          client_id: clientId,
          scope: 'openid email profile',
          ux_mode: 'popup',
          callback: async (response: any) => {
            if (response.code) {
              try {
                const res: any = await apiClient.post('/api/auth/google', {
                  code: response.code,
                  redirectUri: 'postmessage',
                  deviceName: 'Web Browser (Popup)',
                  deviceId: `web_${Date.now()}`,
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

                router.push('/');
              } catch (err: any) {
                console.error('Google auth error:', err);
                alert(err.response?.data?.message || err.message || 'Authentication failed');
                setLoading(false);
              }
            } else {
              setLoading(false);
            }
          },
          error_callback: (err: any) => {
            console.warn('GSI popup error, falling back to redirect:', err);
            fallbackRedirect(redirectUri);
          },
        });

        client.requestCode();
        return;
      } catch (e) {
        console.warn('GSI initCodeClient failed, falling back to standard redirect', e);
      }
    }

    // Strategy 2: Standard OAuth 2.0 Authorization Code redirect
    fallbackRedirect(redirectUri);
  };

  const fallbackRedirect = (redirectUri: string) => {
    const scope = encodeURIComponent('openid email profile');
    const googleOAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${encodeURIComponent(
      redirectUri,
    )}&response_type=code&scope=${scope}&access_type=offline&prompt=consent`;

    window.location.href = googleOAuthUrl;
  };

  return (
    <button
      type="button"
      onClick={handleGoogleLogin}
      disabled={loading}
      className={`w-full py-2.5 px-4 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/80 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-xl font-medium text-xs flex items-center justify-center gap-3 shadow-sm hover:shadow transition-all cursor-pointer disabled:opacity-60 ${className}`}
    >
      {loading ? (
        <Loader2 className="w-4 h-4 animate-spin text-blue-600" />
      ) : (
        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
          <path
            fill="#4285F4"
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          />
          <path
            fill="#34A853"
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          />
          <path
            fill="#FBBC05"
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
          />
          <path
            fill="#EA4335"
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
          />
        </svg>
      )}
      <span>{label}</span>
    </button>
  );
}
