import { ImageResponse } from "next/og";

export const alt = "KenRemind — Ethiopian calendar reminders";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        overflow: "hidden",
        background: "#0c1711",
        color: "#f3f6ef",
        fontFamily: "sans-serif",
        padding: "62px 72px",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: 580,
          height: 580,
          right: -60,
          top: -150,
          border: "1px solid rgba(183,200,164,.3)",
          borderRadius: "50%",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 420,
          height: 420,
          right: 20,
          bottom: -220,
          border: "1px solid rgba(220,232,246,.22)",
          borderRadius: "50%",
        }}
      />
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 38,
              height: 38,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "2px solid #b7c8a4",
              borderRadius: 10,
              color: "#b7c8a4",
              fontSize: 18,
            }}
          >
            13
          </div>
          <span style={{ fontSize: 25, fontWeight: 700 }}>KenRemind</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <span
            style={{
              color: "#b7c8a4",
              fontSize: 18,
              fontWeight: 700,
              letterSpacing: 3,
              textTransform: "uppercase",
            }}
          >
            13 months. One clear rhythm.
          </span>
          <div
            style={{
              maxWidth: 820,
              display: "flex",
              fontSize: 72,
              fontWeight: 600,
              lineHeight: 1.02,
              letterSpacing: -4,
            }}
          >
            Your Ethiopian calendar, right on time.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "rgba(243,246,239,.55)",
            fontSize: 17,
          }}
        >
          <span>2018 EC</span>
          <span>Available on iOS and Android</span>
        </div>
      </div>
    </div>,
    size,
  );
}
