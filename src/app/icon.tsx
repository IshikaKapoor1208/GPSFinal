import { ImageResponse } from "next/og";

export const size = {
  width: 96,
  height: 96,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1F216B 0%, #14164F 100%)",
          borderRadius: "22%",
          border: "4px solid rgba(210, 172, 101, 0.9)",
          boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
        }}
      >
        <span
          style={{
            fontSize: "46px",
            fontWeight: "900",
            color: "#D2AC65",
            letterSpacing: "-1.5px",
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
