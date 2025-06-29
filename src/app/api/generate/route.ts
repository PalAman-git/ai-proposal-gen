import { NextRequest, NextResponse } from 'next/server';
import { createOpenAIClient } from '@/lib/openai';

export async function POST(req: NextRequest) {
  let body : { client_name?: string; project_type?: string; } = {};
  try {
    body = await req.json();
    const { client_name, project_type } = body;

    const openai = createOpenAIClient();
    const prompt = `Write a professional proposal for a freelancer pitching a ${project_type} project to a client named ${client_name}. Include intro, goals, deliverables, timeline, pricing, and conclusion.`;

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o', // You can switch to gpt-3.5-turbo later
      messages: [{ role: 'user', content: prompt }],
    });

    const content = completion.choices?.[0]?.message?.content;
    console.log('[API/generate] GPT content:', content);

    if (!content) {
      throw new Error('OpenAI returned no content.');
    }

    return NextResponse.json({ content });
  } catch (error: unknown) {
    const err = error as Error;
    console.error('[API/generate] Error:', err.message);

    // Optional fallback for dev use
    const fallbackContent = `
      Dear ${body?.client_name || 'Client'},

      I'm excited to present this proposal for your ${body?.project_type || 'project'} needs...

      - **Goals:** Increase engagement and revenue  
      - **Deliverables:** Wireframes, UI, final site  
      - **Timeline:** 3 weeks  
      - **Pricing:** $1500 flat  

      Best regards,  
      The Freelancer
    `;

    return NextResponse.json({ content: fallbackContent.trim(), fallback: true });
  }
}

// This is a simple API route to test if the server is running correctly.
// export async function POST(req: NextRequest) {
//   return NextResponse.json({ message: "It's working!" });
// }

// export async function POST() {
//   return NextResponse.json({ message: '✅ /api/generate is working!' });
// }

// export async function GET() {
//   return NextResponse.json({ message: 'GET also works!' });
// }
