import { Button } from "../ui/Button";

export function HeroSection() {
  return (
    <section className="w-full py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
        <div className="relative w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0 mt-8">
          
          {/* Top Floating Badge (Light Purple) */}
          <div className="hidden lg:flex absolute top-[-40px] right-[10%] lg:right-[20%] bg-amela-light-purple text-amela-purple px-6 py-4 rounded-xl shadow-md font-medium text-sm md:text-base max-w-[300px] z-20">
            Un programa diseñado para founders que facturan y operan a tope.
          </div>

          {/* Left Side: Image & Badges */}
          <div className="relative w-full lg:w-[45%] flex justify-center lg:justify-start z-10">
            
            {/* Left Floating Badge (Yellow) */}
            <div className="absolute top-4 -left-4 md:-left-12 bg-amela-yellow text-amela-purple px-6 py-4 rounded-xl shadow-md font-medium text-sm md:text-base max-w-[320px] z-20">
              Presentación de co-diseño — <br/><span className="font-bold">Paty Desentis × Amela</span>
            </div>

            {/* Main Image Placeholder */}
            <div className="w-[300px] h-[400px] md:w-[400px] md:h-[500px] rounded-3xl overflow-hidden bg-zinc-200 mt-16 md:mt-24 ml-0 md:ml-8 relative">
              <img 
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Founder presenting" 
                className="w-full h-full object-cover"
              />
              {/* Clapping Hands Sticker */}
              <div className="absolute -right-8 bottom-12 w-24 h-24 z-30 transform rotate-12">
                <div className="w-full h-full flex items-center justify-center text-6xl">
                  👏
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Purple Card */}
          <div className="relative w-full lg:w-[65%] lg:-ml-24 z-0">
            <div className="bg-amela-card-purple rounded-[2rem] p-8 md:p-12 lg:p-16 lg:pl-32 shadow-xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                Tu negocio crece.<br />
                <span className="text-amela-yellow mt-2 block">Pero tú estás al borde del burnout.</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-amela-light-purple mb-8 font-medium">
                "Si yo no estoy, el negocio se rompe."
              </p>
              
              <p className="text-lg md:text-xl text-zinc-200 mb-10 leading-relaxed font-light">
                Eres el CEO, pero actúas como el algoritmo. Es hora de usar Inteligencia Artificial para clonar tu mejor trabajo y escalar sin ti.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  Únete al primer cohort
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Conoce el programa
                </Button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
