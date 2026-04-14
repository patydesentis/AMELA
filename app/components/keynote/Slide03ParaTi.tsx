import SlideLayout from "./SlideLayout";
import { T } from "./tokens";

const attributes = [
  { icon: "◈", label: "Empresa en crecimiento", sub: "Facturando y operando a tope" },
  { icon: "◉", label: "Dueño-operador", sub: "Atrapado en el día a día" },
  { icon: "◫", label: "AI Principiante", sub: "Usas ChatGPT como un simple buscador" },
  { icon: "◑", label: "Hacedor Implacable", sub: "Quieres código y sistemas, no teoría" },
];

const pains = [
  "Trabajo más que nunca pero no escalamos.",
  "Siento que me estoy quedando atrás con la AI.",
  "Si yo no respondo, mi equipo se paraliza.",
  "Creo que la AI es solo para corporativos.",
];

export default function Slide03ParaTi() {
  return (
    <SlideLayout number="03" label="¿ESTO ES PARA TI?">
      {/* Headline */}
      <div className="keynote-child-2" style={{ fontFamily: T.display, marginBottom: "32px" }}>
        <h1
          style={{
            fontSize: "clamp(38px, 5.5vw, 72px)",
            fontWeight: 600,
            color: T.cream,
            lineHeight: 1.05,
          }}
        >
          ¿Estás listo para esta clase?
        </h1>
      </div>

      {/* Two-column layout */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "32px",
          maxWidth: "900px",
        }}
      >
        {/* Left: attributes */}
        <div className="keynote-child-3 flex flex-col gap-4">
          {attributes.map((attr, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "16px",
                padding: "16px 20px",
                background: "white",
                border: `2px solid ${T.border}`,
                borderRadius: "16px",
                boxShadow: "0 4px 20px rgba(53, 30, 102, 0.05)",
              }}
            >
              <span
                style={{
                  fontFamily: T.display,
                  fontSize: "24px",
                  color: T.accent,
                  lineHeight: 1,
                  marginTop: "2px",
                  flexShrink: 0,
                }}
              >
                {attr.icon}
              </span>
              <div>
                <p
                  style={{
                    fontFamily: T.display,
                    fontSize: "clamp(14px, 1.6vw, 18px)",
                    fontWeight: 600,
                    color: T.cream,
                    lineHeight: 1.3,
                    marginBottom: "4px",
                  }}
                >
                  {attr.label}
                </p>
                <p
                  style={{
                    fontFamily: T.body,
                    fontSize: "14px",
                    fontWeight: 400,
                    color: T.muted,
                    lineHeight: 1.4,
                  }}
                >
                  {attr.sub}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right: pain points */}
        <div className="keynote-child-4 flex flex-col gap-4">
          <p
            style={{
              fontFamily: T.display,
              fontSize: "12px",
              letterSpacing: "0.15em",
              color: T.muted,
              marginBottom: "8px",
              fontWeight: 600,
              textTransform: "uppercase"
            }}
          >
            TUS 4 DOLORES PRINCIPALES
          </p>
          {pains.map((pain, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "16px",
                padding: "16px 20px",
                background: T.accentBg,
                borderRadius: "16px",
                boxShadow: "0 4px 15px rgba(254, 240, 83, 0.3)",
              }}
            >
              <span
                style={{
                  fontFamily: T.display,
                  fontSize: "14px",
                  color: T.surface,
                  lineHeight: 1,
                  marginTop: "4px",
                  fontWeight: 600,
                  flexShrink: 0,
                }}
              >
                0{i + 1}
              </span>
              <p
                style={{
                  fontFamily: T.display,
                  fontSize: "clamp(14px, 1.6vw, 18px)",
                  fontWeight: 500,
                  color: T.surface,
                  lineHeight: 1.4,
                }}
              >
                “{pain}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
