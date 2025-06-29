'use client';

import { useEffect, useState } from 'react';

type Proposal = {
  id: string;
  client_name: string;
  project_type: string;
  content: string;
  created_at: string;
};

export default function DashboardClient({ proposals }: { proposals: Proposal[] }) {
  const [list] = useState<Proposal[]>(proposals);

  useEffect(() => {
    console.log('[DashboardClient] 🔄 Component mounted');
    console.log('[DashboardClient] ✅ Initial proposals:', proposals);
  }, [proposals]);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Your Proposals</h1>

      {list.length === 0 ? (
        <p>No proposals found.</p>
      ) : (
        <ul className="space-y-4">
          {list.map((p) => (
            <li key={p.id} className="border p-4 rounded">
              <h2 className="font-semibold">
                {p.client_name} – {p.project_type}
              </h2>
              <p className="text-sm text-gray-500">{p.created_at}</p>
              <p className="mt-2 text-gray-700 line-clamp-2">{p.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
