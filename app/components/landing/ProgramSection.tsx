export function ProgramSection() {
  const sessions = [
    { num: 1, title: "Radiografía de tu operación", desc: "Mapeas dónde estás perdiendo tiempo" },
    { num: 2, title: "El punto de apalancamiento", desc: "Descubres qué automatizar primero" },
    { num: 3, title: "Prompt Engineering Avanzado", desc: "Dejas de hablarle a la AI como a Google" },
    { num: 4, title: "Tu primer Agente de AI", desc: "Construimos tu primer sistema autónomo" },
    { num: 5, title: "Escala tu Imperio", desc: "Lanzamiento y plan de automatización a 90 días" }
  ];

  return (
    <section className="w-full py-24 bg-[#F8F8F8] overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-16">
          
          {/* Left Text / Titles */}
          <div className="w-full lg:w-[40%] space-y-8 sticky top-24">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-amela-light-purple leading-tight">
              A Global Platform +<br />
              Network For<br />
              Entrepreneurs
            </h2>
            <h3 className="text-2xl font-bold text-amela-purple">
              5 Sesiones. 1 Agente de AI. Libertad Operativa.
            </h3>
            <p className="text-lg text-zinc-700 leading-relaxed font-medium">
              Amela is a <span className="font-bold text-amela-purple">global platform for entrepreneurs.</span> A space to find structure, scale and support.
            </p>
            <p className="text-lg text-zinc-600 leading-relaxed">
              Hands-on · 5 Sesiones en vivo · Cupo limitado para builders.
              You don't need more vague advice. You need a roadmap, a circle that gets you and real tools to grow.
            </p>
            
            {/* Women raising women sticker */}
            <div className="mt-12 bg-amela-purple text-white px-8 py-6 rounded-3xl inline-block shadow-lg relative transform -rotate-3 hover:rotate-0 transition-transform">
              <h4 className="text-3xl font-bold leading-tight">Women<br/><span className="text-amela-yellow">raising</span><br/>Women</h4>
              <div className="absolute -right-4 -bottom-4 w-12 h-12 bg-amela-light-purple rounded-full"></div>
            </div>
          </div>

          {/* Right Sessions List */}
          <div className="w-full lg:w-[55%]">
            <div className="w-full relative pl-0 md:pl-12">
              {/* Connecting line */}
              <div className="absolute left-[24px] md:left-[72px] top-8 bottom-8 w-1 bg-amela-light-purple/30 hidden sm:block rounded-full"></div>
              
              <div className="space-y-8 w-full relative">
                {sessions.map((session) => (
                  <div key={session.num} className="relative flex flex-col sm:flex-row items-start gap-6 p-8 bg-white rounded-[2rem] shadow-sm border border-zinc-100 hover:border-amela-light-purple hover:shadow-md transition-all group">
                    <div className="z-10 flex items-center justify-center w-14 h-14 rounded-full bg-amela-yellow text-amela-purple font-bold text-xl shrink-0 shadow-md group-hover:scale-110 transition-transform">
                      {session.num}
                    </div>
                    <div className="flex-1 mt-1">
                      <h3 className="text-2xl font-bold text-amela-purple mb-2">{session.title}</h3>
                      <p className="text-zinc-600 text-lg">{session.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
