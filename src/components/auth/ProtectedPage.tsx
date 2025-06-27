//this page checks if the user is logged in before rendering the children components like if a user is not logged in , he cant access the generate page similarly other pages which I dont want to expose to the unauthenticated users

import { getCurrentUser } from '@/lib/auth';
import { redirect } from 'next/navigation';

type Props = {
  children: React.ReactNode;
};

export default async function ProtectedPage({ children }: Props) {
  const user = await getCurrentUser();
  if (!user) {
    console.log('[ProtectedPage] Not logged in. Redirecting to login.');
    redirect('/login');
  }

  return <>{children}</>;
}
