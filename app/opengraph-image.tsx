import { ImageResponse } from "next/og";

export const alt = "Juan Andres Carlini — Automation & AI Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const BG = "#050505";
const TEXT = "#E8EAE6";
const MUTED = "#6E746D";
const ACCENT = "#C8783A";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: BG,
          color: TEXT,
          padding: "80px",
          fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Eyebrow with cursor */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            color: ACCENT,
            fontSize: "22px",
            letterSpacing: "0.14em",
          }}
        >
          <div style={{ width: "14px", height: "22px", background: ACCENT, display: "flex" }} />
          <span>[CARLINI — ROSARIO, AR]</span>
        </div>

        {/* Flex spacer */}
        <div style={{ flex: 1, display: "flex" }} />

        {/* Title */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: "104px",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            lineHeight: 0.95,
            textTransform: "uppercase",
          }}
        >
          <div style={{ display: "flex" }}>Systems that work</div>
          <div style={{ display: "flex", color: ACCENT }}>when your team</div>
          <div style={{ display: "flex" }}>can&apos;t.</div>
        </div>

        {/* Subtitle */}
        <div
          style={{
            display: "flex",
            marginTop: "32px",
            fontSize: "26px",
            color: MUTED,
            lineHeight: 1.4,
            maxWidth: "1000px",
          }}
        >
          Automation &amp; AI Developer — Production systems for teams that outgrew manual processes.
        </div>

        {/* Flex spacer */}
        <div style={{ flex: 1, display: "flex" }} />

        {/* Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "18px",
            color: MUTED,
            letterSpacing: "0.12em",
          }}
        >
          <span>N8N · POWER AUTOMATE · CLAUDE API · NEXT.JS</span>
          <span>PORTFOLIO / 2026</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
