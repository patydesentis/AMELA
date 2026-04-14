export function AudienceSection() {
  const profile = [
    { icon: "📍", title: "Empresa en crecimiento", desc: "Facturando y operando a tope" },
    { icon: "👤", title: "Dueño-operador", desc: "Atrapado en el día a día" },
    { icon: "🔧", title: "AI Principiante", desc: "Usas ChatGPT como un simple buscador" },
    { icon: "🧠", title: "Hacedor Implacable", desc: "Quieres código y sistemas, no teoría" }
  ];

  const pains = [
    "Trabajo más que nunca pero no escalamos",
    "Siento que me estoy quedando atrás con la AI",
    "Si yo no respondo, mi equipo se paraliza",
    "Creo que la AI es solo para corporativos"
  ];

  return (
    <section className="w-full py-24 bg-white overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
        
        <div className="flex flex-col items-center max-w-5xl mx-auto space-y-16">
          
          <div className="text-center space-y-4 relative">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-amela-purple inline-block relative z-10">
              Amela is for:
              <span className="absolute -bottom-2 left-0 right-0 h-3 bg-amela-yellow -z-10 rounded-full w-full mx-auto"></span>
            </h2>
            <p className="text-xl text-amela-purple font-medium mt-8">
              ¿Estás listo para esta clase?
            </p>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              Este programa está diseñado específicamente para líderes que construyen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 w-full mt-12 relative">
            {/* Background decoration */}
            <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-amela-light-purple/20 rounded-full blur-3xl -z-10"></div>
            
            {/* Perfil */}
            <div className="space-y-8 z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-amela-purple">
                Tu perfil actual:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {profile.map((item, i) => (
                  <div key={i} className="p-6 bg-[#f8f8f8] hover:bg-amela-light-purple/10 rounded-[2rem] border-2 border-transparent hover:border-amela-light-purple transition-all duration-300">
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <div className="font-bold text-amela-purple text-lg leading-tight">{item.title}</div>
                    <div className="text-sm text-zinc-600 mt-2">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dolores */}
            <div className="space-y-8 z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-amela-purple">
                Tus 4 dolores principales:
              </h3>
              <div className="space-y-4">
                {pains.map((pain, i) => (
                  <div key={i} className="flex items-center gap-4 p-5 bg-amela-card-purple rounded-[2rem] shadow-md hover:-translate-y-1 transition-transform">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-amela-yellow text-amela-purple font-bold text-lg shrink-0">
                      {i + 1}
                    </div>
                    <p className="text-white font-medium">
                      "{pain}"
                    </p>
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
