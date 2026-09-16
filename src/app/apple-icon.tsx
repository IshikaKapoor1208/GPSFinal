import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1F216B 0%, #14164F 100%)",
          borderRadius: "22%",
          border: "6px solid rgba(210, 172, 101, 0.8)",
        }}
      >
        <span
          style={{
            fontSize: "92px",
            fontWeight: "900",
            color: "#D2AC65",
            letterSpacing: "-2px",
            fontFamily: "system-ui, -apple-system, sans-serif",
          }}
        >
          GP
        </span>
      </div>
    ),
    {
      ...size,
    }
  );
}
