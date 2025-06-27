import { getCurrentUser } from '@/lib/auth';
import { createSupabaseServerClient } from '@/lib/supabaseServer';
import { redirect } from 'next/navigation';
import DashboardClient from './DashboardClient';

export default async function DashboardPage() {
  console.log('[DashboardPage] SSR: Authenticating user...');

  const user = await getCurrentUser();

  if (!user) {
    console.warn('[DashboardPage] ❌ No user found. Redirecting to login.');
    redirect('/login');
  }

  console.log('[DashboardPage] ✅ User authenticated:', user.email);

  const supabase = await createSupabaseServerClient();

  const { data: proposals, error } = await supabase
    .from('proposals')
    .select('*')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('[DashboardPage] ❌ Error fetching proposals:', error.message);
  } else {
    console.log(`[DashboardPage] ✅ Fetched ${proposals?.length || 0} proposals`);
  }

  return <DashboardClient proposals={proposals ?? []} />;
}
