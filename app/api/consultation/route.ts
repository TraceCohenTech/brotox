import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const lead = {
      timestamp: data.timestamp || new Date().toLocaleString("en-US", { timeZone: "America/New_York" }),
      zip: data.zip || "",
      age: data.age || "",
      treatment: data.treatment || "",
      email: data.email || "",
      phone: data.phone || "",
      // Legacy fields for backward compatibility
      firstName: data.firstName || "",
      lastName: data.lastName || "",
      provider: data.provider || "",
      city: data.city || "",
      region: data.region || "",
      sourceType: data.sourceType || "consultation_form",
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
