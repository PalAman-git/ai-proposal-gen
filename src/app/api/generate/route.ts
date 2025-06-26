import { NextRequest, NextResponse } from 'next/server';
import { createOpenAIClient } from '@/lib/openai';

export async function POST(req: NextRequest) {
  try {
    const { client_name, project_type } = await req.json();

    if (!client_name || !project_type) {
      console.error('Missing client_name or project_type');
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    const openai = createOpenAIClient();

    const prompt = `Write a professional proposal for a freelancer pitching a ${project_type} project to a client named ${client_name}. Include intro, goals, deliverables, timeline, pricing, and conclusion.`;

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [{role: 'user', content: 'Say hello in a business proposal style'}],
    });

    const content = completion.choices[0]?.message?.content;

    if (!content) {
      console.error('No content generated from OpenAI');
      return NextResponse.json({ error: 'Failed to generate content' }, { status: 500 });
    }

    return NextResponse.json({ content });
  } catch (err: any) {
    console.error('[API] GPT Error:', err.message);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
