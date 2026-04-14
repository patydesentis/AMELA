import SlideLayout from "./SlideLayout";
import { T } from "./tokens";

const rows = [
  {
    wrong: `"Usa esta nueva herramienta mágica"`,
    right: `"Diseña tu sistema, luego inyecta AI"`,
  },
  {
    wrong: "Automatizas tu propio caos",
    right: "Optimizas y luego aceleras con AI",
  },
  {
    wrong: "Sigues siendo el cuello de botella",
    right: "Tu negocio opera y escala solo",
  },
];

export default function Slide02ElProblema() {
  return (
    <SlideLayout number="02" label="EL PROBLEMA REAL">
      {/* Headline */}
      <div className="keynote-child-2" style={{ fontFamily: T.display, marginBottom: "36px" }}>
        <h1
          style={{
            fontSize: "clamp(34px, 5vw, 68px)",
            fontWeight: 600,
            color: T.cream,
            lineHeight: 1.1,
            marginBottom: "12px",
            maxWidth: "780px",
          }}
        >
          Todo el mundo habla de ChatGPT.
        </h1>
        <div style={{ display: "inline-block", background: T.accentBg, padding: "6px 20px", borderRadius: "12px", transform: "rotate(1deg)" }}>
          <h2
            style={{
              fontSize: "clamp(26px, 3.5vw, 52px)",
              fontWeight: 500,
              color: T.surface,
              lineHeight: 1.1,
            }}
          >
            Nadie te dice cómo implementarlo.
          </h2>
        </div>
      </div>

      {/* Comparison table */}
      <div
        className="keynote-child-3"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "16px",
          maxWidth: "860px",
          marginBottom: "32px",
        }}
      >
        {/* Column headers */}
        <div
          style={{
            padding: "16px 24px",
            background: "white",
            borderRadius: "16px",
            border: `2px solid ${T.border}`,
            boxShadow: "0 4px 20px rgba(53, 30, 102, 0.05)",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <span
            style={{
              fontFamily: T.display,
              fontSize: "13px",
              letterSpacing: "0.1em",
              color: T.muted,
              fontWeight: 600,
              textTransform: "uppercase"
            }}
          >
            ✕ EL ENFOQUE HABITUAL
          </span>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {rows.map((row, i) => (
              <p
                key={`w-${i}`}
                style={{
                  fontFamily: T.display,
                  fontSize: "clamp(14px, 1.5vw, 18px)",
                  fontWeight: 400,
                  color: T.dimmed,
                  lineHeight: 1.5,
                  padding: "12px 16px",
                  background: "#F5F5F5",
                  borderRadius: "8px",
                }}
              >
                {row.wrong}
              </p>
            ))}
          </div>
        </div>

        <div
          style={{
            padding: "16px 24px",
            background: T.surface,
            borderRadius: "16px",
            boxShadow: "0 10px 30px rgba(53, 30, 102, 0.15)",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <span
            style={{
              fontFamily: T.display,
              fontSize: "13px",
              letterSpacing: "0.1em",
              color: T.accentBg,
              fontWeight: 600,
              textTransform: "uppercase"
            }}
          >
            ✓ NUESTRO ENFOQUE
          </span>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {rows.map((row, i) => (
              <p
                key={`r-${i}`}
                style={{
                  fontFamily: T.display,
                  fontSize: "clamp(14px, 1.5vw, 18px)",
                  fontWeight: 500,
                  color: T.surface,
                  lineHeight: 1.5,
                  padding: "12px 16px",
                  background: T.accent,
                  borderRadius: "8px",
                }}
              >
                {row.right}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Closing statement */}
      <div className="keynote-child-4 flex items-center gap-4 mt-6" style={{ maxWidth: "700px" }}>
        <p
          style={{
            fontFamily: T.display,
            fontSize: "clamp(16px, 1.8vw, 22px)",
            fontWeight: 500,
            color: T.muted,
            lineHeight: 1.5,
          }}
        >
          El problema no es que no uses AI. Es que estás usando prompts 
          básicos en lugar de <span style={{ color: T.surface, fontWeight: 600 }}>crear sistemas inteligentes.</span>
        </p>
      </div>
    </SlideLayout>
  );
}
