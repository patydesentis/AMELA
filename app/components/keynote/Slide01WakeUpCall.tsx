import SlideLayout from "./SlideLayout";
import { T } from "./tokens";

export default function Slide01WakeUpCall() {
  return (
    <SlideLayout number="01" label="WAKE-UP CALL">
      {/* Main headline */}
      <div className="keynote-child-2" style={{ fontFamily: T.display, marginBottom: "40px" }}>
        <h1
          style={{
            fontSize: "clamp(46px, 6.5vw, 88px)",
            fontWeight: 600,
            color: T.cream,
            lineHeight: 1.05,
            marginBottom: "6px",
          }}
        >
          Tu negocio crece.
        </h1>
        <div style={{ display: "inline-block", background: T.accent, padding: "4px 16px", borderRadius: "12px", transform: "rotate(-1deg)" }}>
          <h1
            style={{
              fontSize: "clamp(36px, 5.5vw, 70px)",
              fontWeight: 500,
              color: T.cream,
              lineHeight: 1.05,
            }}
          >
            Pero tú estás al borde del burnout.
          </h1>
        </div>
      </div>

      {/* Separator with sub-headline */}
      <div className="keynote-child-3 flex items-center gap-5 mb-10">
        <div
          style={{
            padding: "8px 20px",
            background: T.accentBg,
            borderRadius: "20px",
            display: "inline-flex"
          }}
        >
          <span
            style={{
              fontFamily: T.display,
              fontSize: "clamp(16px, 2vw, 22px)",
              fontWeight: 500,
              color: T.surface,
            }}
          >
            La trampa del éxito operativo.
          </span>
        </div>
      </div>

      {/* Quote */}
      <div className="keynote-child-4 flex gap-5 mb-8" style={{ maxWidth: "680px" }}>
        <p
          style={{
            fontFamily: T.display,
            fontSize: "clamp(24px, 3.2vw, 40px)",
            fontWeight: 500,
            color: T.surface,
            lineHeight: 1.4,
            padding: "24px 32px",
            background: "white",
            borderRadius: "16px",
            boxShadow: "0 10px 30px rgba(53, 30, 102, 0.08)",
            border: `2px solid ${T.border}`
          }}
        >
          “Si yo no estoy, el negocio se rompe.”
        </p>
      </div>

      {/* Body */}
      <p
        className="keynote-child-5"
        style={{
          fontSize: "clamp(15px, 1.6vw, 20px)",
          fontWeight: 400,
          color: T.muted,
          lineHeight: 1.6,
          maxWidth: "600px",
        }}
      >
        Eres el CEO, pero actúas como el algoritmo. Es hora de usar Inteligencia Artificial para clonar tu mejor trabajo y escalar sin ti.
      </p>
    </SlideLayout>
  );
}
