import Button from './ui/Button';

const benefits = [
  {
    icon: '🏆',
    title: 'Torneos y Ligas',
    description: 'Información exclusiva y anticipada sobre todos los torneos y ligas de ADEEMA.',
  },
  {
    icon: '🎬',
    title: 'Contenidos Exclusivos',
    description: 'Análisis, highlights y material solo disponible para la comunidad FAN.',
  },
  {
    icon: '🎪',
    title: 'Eventos',
    description: 'Acceso prioritario a finales de ligas y encuentros del ecosistema.',
  },
  {
    icon: '📱',
    title: 'Comunidad',
    description: 'Conectate con fanáticos que comparten tu pasión por el deporte tecnológico.',
  },
];

export default function FanSection() {
  return (
    <section id="fan" className="section-padding relative overflow-hidden bg-dark-100 border-y border-white/5">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-900/10 via-transparent to-primary-900/10 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-violet-400 mb-4 px-3 py-1 bg-violet-500/10 border border-violet-500/20 rounded-full">
            Comunidad
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Área{' '}
            <span className="bg-gradient-to-r from-violet-400 to-primary-400 bg-clip-text text-transparent">
              FAN
            </span>
          </h2>
          <p className="text-slate-400 text-base max-w-xl mx-auto leading-relaxed">
            Para seguidores y entusiastas que quieren ser parte del ecosistema sin competir.
            Tu lugar en ADEEMA.
          </p>
          <div className="mt-5 flex justify-center">
            <Button variant="fan" size="md" href="#sumate">
              Quiero entrar al Área FAN
            </Button>
          </div>
        </div>

        {/* Benefits grid — 2 cols on mobile, 4 on xl */}
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 mb-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group p-4 rounded-xl border border-white/5 bg-dark-200/50 hover:border-violet-500/30 hover:bg-violet-500/5 transition-all duration-300"
            >
              <div className="text-2xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-white font-semibold text-sm mb-1.5">{benefit.title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* CTA block */}
        <div className="rounded-2xl border border-violet-500/30 bg-gradient-to-br from-violet-900/25 to-primary-900/10 p-5 md:p-8">
          <div className="grid gap-5 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                Una comunidad para seguir conectados con ADEEMA.
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Acceso anticipado, experiencias, novedades y comunidad en un solo lugar.
              </p>
            </div>
            <div className="flex flex-col gap-2.5">
              {['Novedades y alertas', 'Eventos y experiencias', 'Comunidad y contenidos'].map((item) => (
                <div key={item} className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-slate-200">
                  {item}
                </div>
              ))}
              <Button variant="fan" size="md" href="#sumate" className="mt-1.5">
                Unite al Área FAN
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


