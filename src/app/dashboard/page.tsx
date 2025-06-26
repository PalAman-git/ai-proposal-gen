import { createSupabaseServerClient } from '@/lib/supabaseServer';
import { redirect } from 'next/navigation';

export default async function DashboardPage() {
  console.log('[DashboardPage] Loading dashboard...');

  const supabase = await createSupabaseServerClient();
  console.log('[DashboardPage] Supabase client initialized.');

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) {
    console.error('[DashboardPage] Error fetching user:', error);
  } else {
    console.log('[DashboardPage] Retrieved user:', user);
  }

  if (!user) {
    console.warn('[DashboardPage] No user found. Redirecting to /login.');
    redirect('/login'); // 🔁 Redirects unauthenticated user
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <p className="mt-4">Welcome back, {user.email}!</p>
    </div>
  );
}
