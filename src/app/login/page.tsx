'use client';
import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (!error) router.push('/dashboard');
    else alert(error.message);
  };

  return (
    <div className="max-w-md mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <input className="w-full p-2 border mb-2" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input className="w-full p-2 border mb-4" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={handleLogin}>Login</button>
    </div>
  );
}
