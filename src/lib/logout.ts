// lib/logout.ts
'use client';

import { supabase } from '@/lib/supabase';

export async function logout(): Promise<void> {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error('[logout.ts] Logout failed:', error.message);
    throw error;
  }
  window.location.href = '/login';
}
