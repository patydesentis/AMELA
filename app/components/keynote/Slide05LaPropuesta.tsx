import SlideLayout from "./SlideLayout";
import { T } from "./tokens";

const experts = [
  {
    name: "Paty Desentis",
    role: "Estrategia y Escalabilidad",
    sessions: "Sesiones 1–3 · Diagnóstico",
    detail: "10+ años escalando negocios",
  },
  {
    name: "Amela",
    role: "AI Builders & Agents",
    sessions: "Sesiones 4–5 · Construcción",
    detail: "Comunidad builder en LATAM",
  },
];

const deliverables = [
  "Auditoría de automatización de tu negocio",
  "Tu primer sistema de AI funcionando",
  "Roadmap de implementación AI a 90 días",
];

export default function Slide05LaPropuesta() {
  return (
    <SlideLayout number="05" label="LA PROPUESTA">
      {/* Price + headline */}
      <div className="keynote-child-2" style={{ marginBottom: "32px", display: "flex", flexDirection: "column", gap: "12px", alignItems: "flex-start" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "20px", background: T.surface, padding: "12px 24px", borderRadius: "20px" }}>
          <h1
            style={{
              fontFamily: T.display,
              fontSize: "clamp(46px, 6.5vw, 86px)",
              fontWeight: 600,
              color: "white",
              lineHeight: 1,
            }}
          >
            MXN$6,400
          </h1>
          <span
            style={{
              fontFamily: T.display,
              fontSize: "clamp(14px, 1.6vw, 20px)",
              fontWeight: 500,
              color: T.accentBg,
            }}
          >
            por participante
          </span>
        </div>
        <p
          style={{
            fontFamily: T.display,
            fontSize: "clamp(16px, 2vw, 26px)",
            fontWeight: 500,
            color: T.muted,
            background: "white",
            padding: "8px 16px",
            borderRadius: "12px",
            border: `2px solid ${T.border}`
          }}
        >
          Aprende a construir, no a teorizar. <strong style={{ color: T.surface }}>Hands-on AI.</strong>
        </p>
      </div>

      {/* Main content: experts + deliverables */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "24px",
          maxWidth: "960px",
        }}
      >
        {/* Expert cards */}
        {experts.map((e, i) => (
          <div
            key={i}
            className="keynote-child-3"
            style={{
              padding: "24px 20px",
              background: "white",
              border: `2px solid ${T.border}`,
              borderRadius: "16px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              boxShadow: "0 10px 30px rgba(53, 30, 102, 0.05)",
            }}
          >
            <p
              style={{
                fontFamily: T.display,
                fontSize: "clamp(20px, 2.2vw, 26px)",
                fontWeight: 600,
                color: T.surface,
                lineHeight: 1.2,
              }}
            >
              {e.name}
            </p>
            <p
              style={{
                fontFamily: T.body,
                fontSize: "14px",
                fontWeight: 500,
                color: T.accent,
                lineHeight: 1.3,
              }}
            >
              {e.role}
            </p>
            <div
              style={{
                height: "2px",
                background: T.border,
                margin: "4px 0",
              }}
            />
            <p
              style={{
                fontFamily: T.display,
                fontSize: "clamp(13px, 1.4vw, 15px)",
                fontWeight: 600,
                color: T.muted,
                lineHeight: 1.4,
              }}
            >
              {e.sessions}
            </p>
            <p
              style={{
                fontFamily: T.body,
                fontSize: "13px",
                fontWeight: 400,
                color: T.dimmed,
                lineHeight: 1.4,
              }}
            >
              {e.detail}
            </p>
          </div>
        ))}

        {/* Deliverables */}
        <div
          className="keynote-child-4"
          style={{
            padding: "24px 20px",
            background: T.accentBg,
            borderRadius: "16px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            boxShadow: "0 10px 30px rgba(254, 240, 83, 0.3)",
          }}
        >
          <p
            style={{
              fontFamily: T.display,
              fontSize: "13px",
              letterSpacing: "0.1em",
              color: T.surface,
              fontWeight: 600,
              textTransform: "uppercase"
            }}
          >
            AL TERMINAR, SALES CON:
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {deliverables.map((d, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                <span
                  style={{
                    color: "white",
                    background: T.surface,
                    borderRadius: "50%",
                    width: "20px",
                    height: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "12px",
                    fontWeight: "bold",
                    flexShrink: 0,
                    marginTop: "2px",
                  }}
                >
                  ✓
                </span>
                <p
                  style={{
                    fontFamily: T.display,
                    fontSize: "clamp(13px, 1.4vw, 16px)",
                    fontWeight: 500,
                    color: T.surface,
                    lineHeight: 1.4,
                  }}
                >
                  {d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Closing CTA */}
      <div className="keynote-child-5 flex items-center gap-4 mt-8">
        <span
          style={{
            fontFamily: T.display,
            fontSize: "clamp(14px, 1.5vw, 18px)",
            fontWeight: 600,
            color: "white",
            background: T.accent,
            padding: "6px 16px",
            borderRadius: "12px",
            letterSpacing: "0.02em",
          }}
        >
          Lanzamiento en 4 semanas · Cupo limitado · Primer cohort
        </span>
      </div>
    </SlideLayout>
  );
}
