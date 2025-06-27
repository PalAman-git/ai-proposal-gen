// lib/auth.ts
'use server';

import { createSupabaseServerClient } from './supabaseServer';
import type { User } from '@supabase/supabase-js';

export async function getCurrentUser(): Promise<User | null> {
  const supabase = await createSupabaseServerClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) {
    console.error('[auth.ts] Failed to fetch user:', error.message);
    return null;
  }

  return user;
}
