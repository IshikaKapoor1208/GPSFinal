const apiUrl = (process.env.NEXT_PUBLIC_API_URL ?? "").replace(/\/$/, "");

export class ApiError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ApiError";
  }
}

export async function submitLead(path: string, payload: Record<string, unknown>): Promise<{ referenceId: string }> {
  const endpoint = `${apiUrl}${path.startsWith("/") ? path : `/${path}`}`;
  
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    
    const data: unknown = await response.json().catch(() => ({}));
    
    if (!response.ok) {
      const message =
        typeof data === "object" && data && "message" in data && typeof data.message === "string"
          ? data.message
          : "Unable to submit your request. Please ensure the backend server is running and try again.";
      throw new ApiError(message);
    }
    
    return data as { referenceId: string };
  } catch (error) {
    if (error instanceof ApiError) throw error;
    throw new ApiError(
      "Could not connect to the server. Please check your internet connection or backend configuration."
    );
  }
}

