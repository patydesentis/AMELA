import { Button } from "../ui/Button";

export function ProposalSection() {
  return (
    <section className="w-full py-24 bg-amela-card-purple text-white overflow-hidden relative">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-amela-light-purple/10 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-amela-yellow/5 rounded-full blur-[80px] -z-10"></div>

      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl relative z-10">
        <div className="flex flex-col items-center max-w-5xl mx-auto space-y-16">
          
          <div className="text-center space-y-6">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8">
              Entra al <span className="text-amela-yellow">primer cohort.</span>
            </h2>
            
            {/* Price Badge */}
            <div className="inline-flex items-center gap-4 bg-white text-amela-purple p-2 pr-6 rounded-full shadow-lg transform -rotate-2 hover:rotate-0 transition-transform">
              <span className="bg-amela-yellow text-amela-purple px-6 py-3 rounded-full text-xl font-bold">
                MXN $6,400
              </span>
              <span className="font-medium text-lg">por participante</span>
            </div>
            
            <p className="text-2xl text-amela-light-purple font-medium max-w-2xl mx-auto mt-8">
              Aprende a construir, no a teorizar. Hands-on AI.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 w-full mt-8">
            {/* Paty Card */}
            <div className="p-10 bg-amela-purple rounded-[2rem] border border-amela-light-purple/20 flex flex-col justify-between hover:border-amela-light-purple/50 transition-colors shadow-xl">
              <div>
                <div className="text-5xl mb-6">👩‍💻</div>
                <h3 className="text-3xl font-bold text-white mb-6">Paty Desentis</h3>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4 text-zinc-100">
                    <span className="text-amela-yellow text-xl mt-1">✓</span>
                    <span className="text-lg">Estrategia y Escalabilidad Operativa</span>
                  </li>
                  <li className="flex items-start gap-4 text-zinc-100">
                    <span className="text-amela-yellow text-xl mt-1">✓</span>
                    <span className="text-lg">Diagnóstico estratégico (Sesiones 1–3)</span>
                  </li>
                  <li className="flex items-start gap-4 text-zinc-100">
                    <span className="text-amela-yellow text-xl mt-1">✓</span>
                    <span className="text-lg">10+ años operando y escalando negocios</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Amela Card */}
            <div className="p-10 bg-[#f8f8f8] text-amela-purple rounded-[2rem] border border-transparent flex flex-col justify-between shadow-xl">
              <div>
                <div className="text-5xl mb-6">🚀</div>
                <h3 className="text-3xl font-bold text-amela-purple mb-6">Amela</h3>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4 text-zinc-700">
                    <span className="text-amela-purple font-bold text-xl mt-1">✓</span>
                    <span className="text-lg font-medium">AI Builders & Agents</span>
                  </li>
                  <li className="flex items-start gap-4 text-zinc-700">
                    <span className="text-amela-purple font-bold text-xl mt-1">✓</span>
                    <span className="text-lg font-medium">Construcción con AI (Sesiones 4–5)</span>
                  </li>
                  <li className="flex items-start gap-4 text-zinc-700">
                    <span className="text-amela-purple font-bold text-xl mt-1">✓</span>
                    <span className="text-lg font-medium">Comunidad builder en LATAM y Europa</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="w-full p-10 md:p-16 bg-amela-purple rounded-[2.5rem] border border-amela-light-purple/30 text-center space-y-10 mt-8 shadow-2xl relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 22h20L12 2z"/>
              </svg>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-amela-yellow relative z-10">
              Al terminar, sales con:
            </h3>
            
            <div className="grid sm:grid-cols-3 gap-8 text-left relative z-10 mt-12">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-[2rem] border border-white/20 hover:bg-white/20 transition-colors">
                <div className="text-4xl mb-4">📋</div>
                <div className="font-bold text-white text-xl">Auditoría de automatización</div>
                <p className="text-amela-light-purple mt-2">de tu negocio</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-[2rem] border border-white/20 hover:bg-white/20 transition-colors">
                <div className="text-4xl mb-4">🤖</div>
                <div className="font-bold text-white text-xl">Tu primer sistema</div>
                <p className="text-amela-light-purple mt-2">de AI funcionando</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-[2rem] border border-white/20 hover:bg-white/20 transition-colors">
                <div className="text-4xl mb-4">🗺️</div>
                <div className="font-bold text-white text-xl">Roadmap a 90 días</div>
                <p className="text-amela-light-purple mt-2">de implementación AI</p>
              </div>
            </div>
            
            <div className="pt-10 relative z-10 flex flex-col items-center">
              <p className="text-amela-light-purple font-medium text-xl mb-8">
                Lanzamiento en 4 semanas · Cupo limitado · Primer cohort
              </p>
              <Button size="lg" variant="primary" className="text-xl px-12 py-6 shadow-xl hover:shadow-amela-yellow/20 hover:-translate-y-1 transform transition-all">
                Aplica ahora
              </Button>
            </div>
          </div>

        </div>
      </div>
      <footer className="w-full text-center py-8 mt-16 text-amela-light-purple/60 text-sm font-medium">
        Programa desarrollado por Paty Desentis × Amela — 2025
      </footer>
    </section>
  );
}
