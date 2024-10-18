'use client';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from '@/shared/services/react-query-config';
import { ReactNode } from 'react';

export default function ClientProvider({ children }: { children: ReactNode }) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
