import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function GET() {
  try {
    const res = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo', // change to 'gpt-3.5-turbo' if needed
      messages: [{ role: 'user', content: 'Say hello in a professional tone' }],
    });

    console.log('🔍 Raw response:', JSON.stringify(res, null, 2));

    const content = res.choices?.[0]?.message?.content;

    return NextResponse.json({ content: content || 'NO CONTENT' });
  } catch (error: any) {
    console.error('❌ OpenAI Error:', error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
