import { NextRequest, NextResponse } from 'next/server';
import { createSupabaseServerClient } from '@/lib/supabaseServer';

export async function POST(req: NextRequest) {
  console.log('[API] Received proposal save request');

  const { client_name, project_type, content } = await req.json();
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    console.error('[API] No authenticated user found.');
    return NextResponse.redirect(new URL('/login', req.url));
  }

  const { error } = await supabase.from('proposals').insert({
    user_id: user.id,
    client_name,
    project_type,
    content,
  });

  if (error) {
    console.error('[API] Error saving proposal:', error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  console.log('[API] Proposal saved successfully.');
  return NextResponse.json({ success: true });
}
