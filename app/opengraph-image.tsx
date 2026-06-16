import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Pluck — export any list on the web as CSV";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "1200px",
          height: "630px",
          background: "#FBFAF5",
          position: "relative",
          overflow: "hidden",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Colour blobs */}
        <div
          style={{
            display: "flex",
            position: "absolute",
            top: "-80px",
            left: "-80px",
            width: "340px",
            height: "340px",
            borderRadius: "50%",
            background: "#C4B5FD",
            opacity: 0.45,
          }}
        />
        <div
          style={{
            display: "flex",
            position: "absolute",
            bottom: "-100px",
            right: "-60px",
            width: "380px",
            height: "380px",
            borderRadius: "50%",
            background: "#6EE7B7",
            opacity: 0.38,
          }}
        />
        <div
          style={{
            display: "flex",
            position: "absolute",
            top: "60px",
            right: "160px",
            width: "180px",
            height: "180px",
            borderRadius: "50%",
            background: "#FBBF24",
            opacity: 0.28,
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "72px 96px",
            gap: "0px",
            width: "100%",
          }}
        >
          {/* Badge / logo row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "36px",
            }}
          >
            {/* Inline badge: indigo circle + stacked bars */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "72px",
                height: "72px",
                borderRadius: "50%",
                background: "#4F46E5",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "5px",
                  alignItems: "center",
                }}
              >
                {/* Amber lifted bar */}
                <div
                  style={{
                    display: "flex",
                    width: "32px",
                    height: "7px",
                    background: "#FBBF24",
                    borderRadius: "3px",
                    transform: "translateY(-3px) rotate(-4deg)",
                  }}
                />
                {/* Cream bars */}
                <div
                  style={{
                    display: "flex",
                    width: "32px",
                    height: "7px",
                    background: "#FBFAF5",
                    borderRadius: "3px",
                    opacity: 0.85,
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    width: "32px",
                    height: "7px",
                    background: "#FBFAF5",
                    borderRadius: "3px",
                    opacity: 0.6,
                  }}
                />
              </div>
            </div>

            <span
              style={{
                fontSize: "28px",
                fontWeight: 800,
                color: "#141414",
                letterSpacing: "-0.5px",
              }}
            >
              Pluck
            </span>
          </div>

          {/* Headline */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              fontSize: "80px",
              fontWeight: 900,
              color: "#141414",
              lineHeight: 1.05,
              letterSpacing: "-2px",
              marginBottom: "28px",
              gap: "0px",
            }}
          >
            <span style={{ display: "flex" }}>Pluck any list into&nbsp;</span>
            <span style={{ display: "flex", color: "#4F46E5" }}>CSV.</span>
          </div>

          {/* Subline */}
          <div
            style={{
              display: "flex",
              fontSize: "28px",
              fontWeight: 600,
              color: "#4B5563",
              letterSpacing: "0.5px",
              marginBottom: "44px",
            }}
          >
            Deterministic · 100% local · no tracking
          </div>

          {/* Footer tag */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                display: "flex",
                padding: "8px 18px",
                background: "#141414",
                borderRadius: "20px",
                color: "#FBFAF5",
                fontSize: "20px",
                fontWeight: 700,
              }}
            >
              Chrome Extension
            </div>
            <span
              style={{
                fontSize: "20px",
                fontWeight: 600,
                color: "#9CA3AF",
              }}
            >
              github.com/ameyypawar/pluck
            </span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
