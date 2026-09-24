import { ImageResponse } from "next/og";

export const alt = "Affan Shah - AI Engineer & Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          background: "#050505",
          padding: 72,
          fontFamily: "monospace",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              background: "#FF6500",
            }}
          />
          <div style={{ fontSize: 24, color: "#777777", letterSpacing: 8 }}>
            AFFAN SHAH // DEVELOPER TERMINAL
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 84,
              color: "#EAEAEA",
              fontWeight: 700,
              letterSpacing: 4,
            }}
          >
            AFFAN SHAH
          </div>
          <div
            style={{
              fontSize: 34,
              color: "#FF6500",
              letterSpacing: 10,
              marginTop: 16,
            }}
          >
            AI ENGINEER
          </div>
          <div
            style={{
              fontSize: 30,
              color: "#FF6500",
              letterSpacing: 10,
              marginTop: 8,
            }}
          >
            FULL-STACK DEVELOPER
          </div>
          <div
            style={{
              fontSize: 24,
              color: "#777777",
              letterSpacing: 6,
              marginTop: 28,
            }}
          >
            AI • RAG • AI AGENTS • NEXT.JS • PYTHON
          </div>
        </div>

        <div style={{ fontSize: 20, color: "#454545", letterSpacing: 4 }}>
          AFFANSHAHAI.VERCEL.APP
        </div>
      </div>
    ),
    { ...size }
  );
}