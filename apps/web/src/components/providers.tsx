'use client';

import React, { useState, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useAuthStore } from '../stores/auth.store';
import { apiClient } from '../lib/api-client';

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
            retry: 1,
            refetchOnWindowFocus: false,
          },
        },
      }),
  );

  useEffect(() => {
    const token = useAuthStore.getState().accessToken;
    if (token) {
      apiClient
        .get('/api/users/me')
        .then((res: any) => {
          const p = res.data || res;
          if (p && (p.displayName || p.avatarUrl)) {
            useAuthStore.getState().setUser({
              displayName: p.displayName,
              avatarUrl: p.avatarUrl,
              username: p.username,
              bio: p.bio,
            });
          }
        })
        .catch(() => {});
    }
  }, []);

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
