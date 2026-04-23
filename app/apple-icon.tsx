import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#050505",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "98px",
            height: "98px",
            borderTop: "12px solid #C8783A",
            borderLeft: "12px solid #C8783A",
            borderBottom: "12px solid #C8783A",
            display: "flex",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
