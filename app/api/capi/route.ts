import { NextResponse } from "next/server";
import { headers } from "next/headers";

export async function POST(req: Request) {
  try {
    const PIXEL_ID = process.env.META_PIXEL_ID;
    const TOKEN = process.env.META_CAPI_TOKEN;

    if (!PIXEL_ID || !TOKEN) {
      return NextResponse.json({ error: "Meta Config Missing" }, { status: 500 });
    }

    const body = await req.json();
    const { event_name, event_time, event_source_url, user_data, custom_data, event_id, action_source } = body;

    const reqHeaders = headers();
    const client_ip_address = reqHeaders.get("x-forwarded-for")?.split(",")[0] || reqHeaders.get("x-real-ip") || reqHeaders.get("remote-addr") || "";
    const client_user_agent = reqHeaders.get("user-agent") || "";

    const data = [
      {
        event_name,
        event_time: event_time || Math.floor(Date.now() / 1000),
        action_source: action_source || "website",
        event_source_url,
        event_id,
        user_data: {
          client_ip_address,
          client_user_agent,
          fbp: user_data?.fbp,
          fbc: user_data?.fbc,
        },
        custom_data: custom_data || {},
      },
    ];

    const response = await fetch(`https://graph.facebook.com/v19.0/${PIXEL_ID}/events?access_token=${TOKEN}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data,
      }),
    });

    const result = await response.json();
    
    if (result.error) {
      console.error("[CAPI Error]", result.error);
    }

    return NextResponse.json({ success: true, result });
  } catch (error) {
    console.error("[CAPI Exception]", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
