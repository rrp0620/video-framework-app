import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // TODO: Implement actual form handling
    // Options:
    //   - Send notification email (e.g. via SendGrid, Resend, or SES)
    //   - Store in database (e.g. Supabase, PlanetScale)
    //   - Forward to pharmacy management system
    //   - Send to a Slack/Teams webhook for immediate notification
    //
    // Required fields from the form:
    //   - firstName: string
    //   - lastName: string
    //   - dob: string (date)
    //   - phone: string
    //   - currentPharmacy: string
    //   - medications: string
    //   - fulfillment: "pickup" | "delivery"
    //   - notes?: string

    console.log("Transfer request received:", {
      name: `${body.firstName} ${body.lastName}`,
      phone: body.phone,
      currentPharmacy: body.currentPharmacy,
      fulfillment: body.fulfillment,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { success: true, message: "Transfer request received." },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { success: false, message: "Failed to process request." },
      { status: 500 }
    );
  }
}
