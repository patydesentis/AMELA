"use client";

import { T } from "./tokens";

interface SlideNavigationProps {
  current: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
}

export default function SlideNavigation({
  current,
  total,
  onPrev,
  onNext,
}: SlideNavigationProps) {
  const canPrev = current > 0;
  const canNext = current < total - 1;

  // Use Amela Lilac (#BA8AF5) or Deep Purple for navigation dots and buttons
  const navColor = "#BA8AF5";
  const navColorDisabled = "rgba(186, 138, 245, 0.2)";
  const navColorHover = "rgba(186, 138, 245, 0.8)";
  const navBg = "rgba(186, 138, 245, 0.1)";

  return (
    <div className="absolute bottom-7 left-0 right-0 flex items-center justify-center gap-6 z-50">
      {/* Prev */}
      <button
        onClick={onPrev}
        disabled={!canPrev}
        aria-label="Diapositiva anterior"
        style={{
          width: "36px",
          height: "36px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          border: `1px solid ${canPrev ? navColorHover : navColorDisabled}`,
          color: canPrev ? navColor : navColorDisabled,
          cursor: canPrev ? "pointer" : "not-allowed",
          background: canPrev ? navBg : "transparent",
          fontSize: "16px",
          transition: "all 0.25s ease",
          fontFamily: T.body,
        }}
      >
        ←
      </button>

      {/* Dot indicators */}
      <div className="flex items-center gap-2">
        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            style={{
              width: i === current ? "22px" : "8px",
              height: "8px",
              borderRadius: "4px",
              background:
                i === current
                  ? navColor
                  : navColorDisabled,
              transition: "all 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          />
        ))}
      </div>

      {/* Slide counter */}
      <span
        style={{
          fontFamily: T.display,
          fontSize: "12px",
          fontWeight: 500,
          color: "rgba(53, 30, 102, 0.4)",
          minWidth: "40px",
          textAlign: "center",
        }}
      >
        {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </span>

      {/* Next */}
      <button
        onClick={onNext}
        disabled={!canNext}
        aria-label="Siguiente diapositiva"
        style={{
          width: "36px",
          height: "36px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          border: `1px solid ${canNext ? navColorHover : navColorDisabled}`,
          color: canNext ? navColor : navColorDisabled,
          cursor: canNext ? "pointer" : "not-allowed",
          background: canNext ? navBg : "transparent",
          fontSize: "16px",
          transition: "all 0.25s ease",
          fontFamily: T.body,
        }}
      >
        →
      </button>
    </div>
  );
}
