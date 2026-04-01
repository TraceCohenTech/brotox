import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { firstName, lastName, email, phone, treatment, provider, city, region } = data;

    // Validate required fields
    if (!firstName || !email) {
      return NextResponse.json(
        { error: "First name and email are required" },
        { status: 400 }
      );
    }

    // Log the lead (visible in Vercel logs)
    console.log("🔥 NEW LEAD:", JSON.stringify({
      firstName,
      lastName,
      email,
      phone,
      treatment,
      provider,
      city,
      region,
      timestamp: new Date().toISOString(),
    }));

    // TODO: Connect to your preferred lead capture service:
    // - Formspree, Airtable, Google Sheets, Mailchimp, etc.
    // For now, leads are captured in Vercel function logs.

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
