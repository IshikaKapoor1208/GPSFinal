import { NextRequest, NextResponse } from "next/server";

const rawBackendUrl = process.env.BACKEND_API_URL || process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:4000";
const BACKEND_URL = rawBackendUrl.replace(/\/$/, "");

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    let response: Response;
    try {
      response = await fetch(`${BACKEND_URL}/api/v1/callback-requests`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
        signal: AbortSignal.timeout(10000),
      });
    } catch (fetchError) {
      if (BACKEND_URL.includes("localhost")) {
        const fallbackUrl = BACKEND_URL.replace("localhost", "127.0.0.1");
        response = await fetch(`${fallbackUrl}/api/v1/callback-requests`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
          signal: AbortSignal.timeout(10000),
        });
      } else {
        throw fetchError;
      }
    }

    const data = await response.json().catch(() => ({}));
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error("Callback requests API proxy error:", error);
    return NextResponse.json(
      {
        message:
          "Backend service is currently unavailable. Please ensure the backend server is running on port 4000 (or BACKEND_API_URL is properly configured).",
      },
      { status: 502 }
    );
  }
}

