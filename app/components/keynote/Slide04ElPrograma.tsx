import SlideLayout from "./SlideLayout";
import { T } from "./tokens";

const sessions = [
  {
    num: "01",
    title: "Radiografía de tu operación",
    outcome: "Mapeas dónde estás perdiendo tiempo",
  },
  {
    num: "02",
    title: "El punto de apalancamiento",
    outcome: "Descubres qué automatizar primero",
  },
  {
    num: "03",
    title: "Prompt Engineering Avanzado",
    outcome: "Dejas de hablarle a la AI como a Google",
  },
  {
    num: "04",
    title: "Tu primer Agente de AI",
    outcome: "Construimos tu primer sistema autónomo",
  },
  {
    num: "05",
    title: "Escala tu Imperio",
    outcome: "Lanzamiento y plan de automatización a 90 días",
  },
];

export default function Slide04ElPrograma() {
  return (
    <SlideLayout number="04" label="EL PROGRAMA">
      {/* Headline */}
      <div className="keynote-child-2" style={{ fontFamily: T.display, marginBottom: "32px", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "12px" }}>
        <h1
          style={{
            fontSize: "clamp(38px, 5.5vw, 72px)",
            fontWeight: 600,
            color: T.cream,
            lineHeight: 1.05,
          }}
        >
          5 Sesiones. 1 Agente de AI.
        </h1>
        <div style={{ background: T.accent, padding: "6px 20px", borderRadius: "12px", transform: "rotate(-1deg)" }}>
          <h2
            style={{
              fontSize: "clamp(22px, 3vw, 42px)",
              fontWeight: 500,
              color: "white",
              lineHeight: 1.1,
            }}
          >
            Libertad Operativa.
          </h2>
        </div>
      </div>

      {/* Sessions list */}
      <div
        className="keynote-child-3"
        style={{ maxWidth: "860px", display: "flex", flexDirection: "column", gap: "8px" }}
      >
        {sessions.map((s, i) => (
          <div
            key={i}
            style={{
              display: "grid",
              gridTemplateColumns: "52px 1fr auto",
              alignItems: "center",
              gap: "20px",
              padding: "16px 24px",
              background: i >= 3 ? T.surface : "white",
              border: `2px solid ${i >= 3 ? "transparent" : T.border}`,
              borderRadius: "12px",
              transition: "transform 0.2s",
            }}
          >
            {/* Number */}
            <span
              style={{
                fontFamily: T.display,
                fontSize: "clamp(20px, 2.5vw, 30px)",
                fontWeight: 600,
                color: i >= 3 ? T.accentBg : T.muted,
                lineHeight: 1,
              }}
            >
              {s.num}
            </span>

            {/* Session title */}
            <p
              style={{
                fontFamily: T.display,
                fontSize: "clamp(14px, 1.6vw, 18px)",
                fontWeight: 600,
                color: i >= 3 ? "white" : T.cream,
                lineHeight: 1.3,
              }}
            >
              {s.title}
            </p>

            {/* Outcome */}
            <p
              style={{
                fontFamily: T.body,
                fontSize: "clamp(12px, 1.2vw, 14px)",
                fontWeight: 400,
                color: i >= 3 ? T.accent : T.muted,
                lineHeight: 1.4,
                textAlign: "right",
                maxWidth: "240px",
              }}
            >
              {s.outcome}
            </p>
          </div>
        ))}
      </div>

      {/* Format note */}
      <div className="keynote-child-4 flex items-center gap-3 mt-6">
        <span
          style={{
            fontFamily: T.body,
            fontSize: "14px",
            fontWeight: 500,
            color: T.surface,
            background: T.accentBg,
            padding: "4px 12px",
            borderRadius: "8px",
            letterSpacing: "0.05em",
          }}
        >
          Hands-on · 5 Sesiones en vivo · Cupo limitado para builders
        </span>
      </div>
    </SlideLayout>
  );
}
