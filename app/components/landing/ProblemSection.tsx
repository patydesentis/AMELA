export function ProblemSection() {
  return (
    <section className="w-full py-20 md:py-32 overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
        
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-amela-purple inline-block relative z-10">
            Todo el mundo habla de ChatGPT.
            {/* Underline decoration */}
            <span className="absolute -bottom-2 left-0 right-0 h-3 bg-amela-yellow -z-10 rounded-full w-full mx-auto transform -rotate-1"></span>
          </h2>
          <p className="text-xl text-amela-purple mt-6 max-w-2xl mx-auto font-medium">
            Nadie te dice cómo implementarlo.
          </p>
          <p className="text-lg text-zinc-600 mt-4 max-w-2xl mx-auto">
            El problema no es que no uses AI. Es que estás usando prompts básicos en lugar de crear sistemas inteligentes.
          </p>
        </div>

        <div className="relative w-full flex flex-col lg:flex-row-reverse items-center justify-between gap-12 lg:gap-0 mt-12">
          
          {/* Right Side: Image & Sticker */}
          <div className="relative w-full lg:w-[45%] flex justify-center lg:justify-end z-10">
            
            {/* Right Floating Badge (Purple) */}
            <div className="hidden lg:flex absolute top-12 -right-8 bg-amela-purple text-white px-6 py-4 rounded-xl shadow-md font-medium text-sm md:text-base max-w-[250px] z-20">
              Deja de automatizar tu caos.
            </div>

            {/* Main Image Placeholder */}
            <div className="w-[300px] h-[400px] md:w-[450px] md:h-[450px] rounded-3xl overflow-hidden bg-zinc-200 relative">
              <img 
                src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Team working" 
                className="w-full h-full object-cover"
              />
              {/* Idea Bulb Sticker */}
              <div className="absolute -left-12 top-12 w-28 h-28 z-30 transform -rotate-12 bg-white rounded-full p-2 shadow-lg border-2 border-amela-purple flex items-center justify-center">
                <div className="text-5xl text-amela-yellow drop-shadow-md">💡</div>
              </div>
            </div>

            {/* Bottom Floating Badge (Light Purple) */}
            <div className="absolute -bottom-8 left-10 lg:-left-20 bg-amela-light-purple text-amela-purple px-6 py-4 rounded-xl shadow-md font-medium text-sm md:text-base max-w-[300px] z-20">
              Crea sistemas, optimiza y luego acelera con AI.
            </div>
          </div>

          {/* Left Side: Purple Card */}
          <div className="relative w-full lg:w-[65%] lg:-mr-24 z-0">
            <div className="bg-amela-card-purple rounded-[2rem] p-8 md:p-12 lg:p-16 lg:pr-32 shadow-xl">
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-amela-yellow mb-6">
                El enfoque habitual vs Nuestro enfoque:
              </h3>
              
              <div className="grid md:grid-cols-1 gap-8 w-full mt-8">
                {/* El enfoque habitual */}
                <div className="flex flex-col space-y-4">
                  <h4 className="text-xl font-semibold text-white/70 border-b border-white/20 pb-2">El enfoque habitual</h4>
                  <ul className="space-y-3 text-zinc-300">
                    <li className="flex items-start gap-3">
                      <span className="text-amela-light-purple font-bold">×</span>
                      <span>"Usa esta nueva herramienta mágica"</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-amela-light-purple font-bold">×</span>
                      <span>Automatizas tu propio caos</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-amela-light-purple font-bold">×</span>
                      <span>Sigues siendo el cuello de botella</span>
                    </li>
                  </ul>
                </div>

                {/* Nuestro enfoque */}
                <div className="flex flex-col space-y-4 mt-6">
                  <h4 className="text-2xl font-semibold text-white border-b border-amela-yellow/30 pb-2">Nuestro enfoque</h4>
                  <ul className="space-y-3 text-white font-medium">
                    <li className="flex items-start gap-3">
                      <span className="text-amela-yellow font-bold">✓</span>
                      <span>Diseña tu sistema, luego inyecta AI</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-amela-yellow font-bold">✓</span>
                      <span>Optimizas y luego aceleras con AI</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-amela-yellow font-bold">✓</span>
                      <span>Tu negocio opera y escala solo</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
