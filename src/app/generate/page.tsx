// app/generate/page.tsx
import { getCurrentUser } from '@/lib/auth';
import { redirect } from 'next/navigation';
import CreateProposalPage from './CreateProposalClient';

export default async function GeneratePage() {
  const user = await getCurrentUser();
  if (!user) {
    console.log('[GeneratePage] Not logged in. Redirecting to login.');
    redirect('/login');
  }

  return <CreateProposalPage />;
}
