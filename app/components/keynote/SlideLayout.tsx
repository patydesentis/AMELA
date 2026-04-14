import { T } from "./tokens";

interface SlideLayoutProps {
  number: string;
  label: string;
  children: React.ReactNode;
}

export default function SlideLayout({ number, label, children }: SlideLayoutProps) {
  return (
    <div
      className="h-full w-full flex flex-col"
      style={{ fontFamily: T.body, color: T.cream }}
    >
      <div className="flex-1 flex flex-col justify-center px-16 lg:px-24 xl:px-32 py-10">
        {/* Slide header */}
        <div className="keynote-child-1 flex justify-between items-start mb-10">
          <span
            style={{
              fontFamily: T.display,
              fontSize: "14px",
              color: T.muted,
              letterSpacing: "0.15em",
              fontWeight: 500,
              textTransform: "uppercase",
            }}
          >
            {label}
          </span>
          <span
            style={{
              fontFamily: T.display,
              fontSize: "clamp(60px, 8vw, 100px)",
              color: T.ghost,
              fontWeight: 600,
              lineHeight: 1,
              userSelect: "none",
            }}
          >
            {number}
          </span>
        </div>

        {/* Content */}
        {children}
      </div>

      {/* Footer */}
      <div
        className="px-16 lg:px-24 xl:px-32 py-5 flex justify-between items-center flex-shrink-0"
        style={{ borderTop: `1px solid ${T.border}` }}
      >
        <span
          style={{
            fontFamily: T.display,
            fontSize: "12px",
            letterSpacing: "0.15em",
            color: T.dimmed,
            fontWeight: 500,
          }}
        >
          NEGOCIOS QUE ESCALAN
        </span>
        <span
          style={{
            fontFamily: T.display,
            fontSize: "12px",
            letterSpacing: "0.1em",
            color: T.accent,
            fontWeight: 600,
          }}
        >
          PATY DESENTIS × AMELA
        </span>
      </div>
    </div>
  );
}
