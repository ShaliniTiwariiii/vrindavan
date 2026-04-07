import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const scriptUrl = process.env.APPS_SCRIPT_URL;
    if (!scriptUrl) {
      return NextResponse.json(
        { success: false, error: 'Apps Script URL not configured.' },
        { status: 500 }
      );
    }

    // Forward data to Google Apps Script as a URL-encoded form (most reliable for Apps Script doPost)
    const params = new URLSearchParams();
    params.append('name', body.name || '');
    params.append('phone', body.phone || '');
    params.append('email', body.email || '');
    params.append('date', body.date || '');
    params.append('time', body.time || '');
    params.append('message', body.message || '');
    params.append('property', body.property || 'General Inquiry');

    const scriptResponse = await fetch(scriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
      redirect: 'follow', // Apps Script redirects on success
    });

    // Apps Script returns 200 after the redirect
    if (scriptResponse.ok || scriptResponse.status === 200) {
      return NextResponse.json({ success: true });
    }

    return NextResponse.json(
      { success: false, error: `Apps Script returned ${scriptResponse.status}` },
      { status: 502 }
    );
  } catch (error: unknown) {
    console.error('submit-lead error:', error);
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
