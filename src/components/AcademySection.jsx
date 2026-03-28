import Button from './ui/Button';

const paths = [
  {
    icon: '🎮',
    title: 'Formación Competitiva',
    description: 'Recursos, guías y programas para desarrollar tus habilidades y escalar en el ecosistema.',
  },
  {
    icon: '📊',
    title: 'Análisis y Estrategia',
    description: 'Contenido táctico, revisión de partidas y metodologías de alto rendimiento.',
  },
  {
    icon: '🤝',
    title: 'Mentoría y Red',
    description: 'Conectate con entrenadores, referentes y jugadores experimentados del ecosistema.',
  },
  {
    icon: '🏅',
    title: 'Certificación ADEEMA',
    description: 'Obtené reconocimiento oficial de tu desarrollo dentro del sistema competitivo nacional.',
  },
];

export default function AcademySection() {
  return (
    <section id="academy" className="section-padding relative overflow-hidden bg-dark border-y border-white/5">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 via-transparent to-teal-900/10 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-cyan-400 mb-4 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full">
            Desarrollo
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Área{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Academy
            </span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            El espacio de formación y desarrollo de ADEEMA. Para jugadores que quieren crecer,
            entrenadores que quieren enseñar y organizaciones que quieren estructurar su proceso competitivo.
          </p>
          <div className="mt-6 flex justify-center">
            <Button variant="secondary" size="md" href="#sumate">
              Conocé Área Academy
            </Button>
          </div>
        </div>

        {/* Paths grid */}
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
          {paths.map((path) => (
            <div
              key={path.title}
              className="group p-5 rounded-xl border border-white/5 bg-dark-200/50 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all duration-300"
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {path.icon}
              </div>
              <h3 className="text-white font-semibold text-sm mb-2">{path.title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">{path.description}</p>
            </div>
          ))}
        </div>

        {/* CTA block */}
        <div className="rounded-2xl border border-cyan-500/25 bg-gradient-to-br from-cyan-900/20 to-dark-200/80 p-6 md:p-8">
          <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Construí tu carrera dentro del ecosistema.
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Academy es el puente entre el juego y la competencia profesional. Formación,
                red de contactos y reconocimiento oficial en un solo lugar.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              {['Programas de entrenamiento', 'Torneos formativos', 'Certificación oficial'].map((item) => (
                <div key={item} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
                  {item}
                </div>
              ))}
              <Button variant="secondary" size="lg" href="#sumate" className="mt-2 border-cyan-500/40 hover:border-cyan-500/60">
                Quiero saber más
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
