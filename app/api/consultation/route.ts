import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { firstName, lastName, email, phone, treatment, provider, city, region, zip, sourceType } = data;

    // Validate: full form requires all fields, exit intent only requires email
    if (sourceType === "exit_intent") {
      if (!email) {
        return NextResponse.json({ error: "Email is required" }, { status: 400 });
      }
    } else {
      if (!firstName || !email) {
        return NextResponse.json({ error: "First name and email are required" }, { status: 400 });
      }
    }

    const lead = {
      firstName: firstName || "",
      lastName: lastName || "",
      email,
      phone: phone || "",
      treatment: treatment || "",
      provider: provider || "",
      city: city || "",
      region: region || "",
      zip: zip || "",
      sourceType: sourceType || "consultation_form",
      timestamp: new Date().toISOString(),
      source: "brotoxofficial.com",
    };

    // Send to Google Sheets via Apps Script webhook
    const sheetWebhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
    if (sheetWebhookUrl) {
      try {
        await fetch(sheetWebhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(lead),
        });
      } catch (sheetError) {
        console.error("Failed to write to Google Sheet:", sheetError);
      }
    }

    // Always log to Vercel as backup
    console.log("NEW LEAD:", JSON.stringify(lead));

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
