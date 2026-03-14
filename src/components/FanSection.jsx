import Button from './ui/Button';

const benefits = [
  {
    icon: '🏆',
    title: 'Torneos y Ligas',
    description: 'Accedé a información exclusiva y anticipada sobre todos los torneos, ligas y competencias organizadas por ADEEMA.',
  },
  {
    icon: '🎬',
    title: 'Contenidos Exclusivos',
    description: 'Recibí contenidos especiales, análisis, highlights y material que solo está disponible para la comunidad FAN.',
  },
  {
    icon: '🎪',
    title: 'Participación en Eventos',
    description: 'Asistí a eventos presenciales, finales de ligas y encuentros del ecosistema con acceso prioritario.',
  },
  {
    icon: '🤝',
    title: 'Experiencias Únicas',
    description: 'Viví experiencias junto a jugadores, equipos y figuras del ecosistema de deportes electrónicos.',
  },
  {
    icon: '📱',
    title: 'Comunidad Activa',
    description: 'Conectate con miles de fanáticos, seguidores y entusiastas que comparten tu pasión por el deporte tecnológico.',
  },
  {
    icon: '🔔',
    title: 'Alertas y Novedades',
    description: 'Sé el primero en enterarte de resultados, rankings, novedades del sector y movimientos del ecosistema.',
  },
];

export default function FanSection() {
  const featuredBenefits = benefits.slice(0, 4);

  return (
    <section id="fan" className="section-padding relative overflow-hidden bg-dark-100 border-y border-white/5">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-900/10 via-transparent to-primary-900/10 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-violet-400 mb-4 px-3 py-1 bg-violet-500/10 border border-violet-500/20 rounded-full">
            Comunidad
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Área{' '}
            <span className="bg-gradient-to-r from-violet-400 to-primary-400 bg-clip-text text-transparent">
              FAN
            </span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            El espacio pensado para seguidores, jugadores ocasionales y todos aquellos que quieren
            ser parte del ecosistema sin competir. Tu lugar en ADEEMA.
          </p>
          <div className="mt-6 flex justify-center">
            <Button variant="fan" size="md" href="#sumate">
              Quiero entrar al Área FAN
            </Button>
          </div>
        </div>

        {/* Benefits grid */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
          {featuredBenefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group p-5 rounded-xl border border-white/5 bg-dark-200/50 hover:border-violet-500/30 hover:bg-violet-500/5 transition-all duration-300"
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-white font-semibold text-base mb-2">{benefit.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* CTA block */}
        <div className="rounded-2xl border border-violet-500/30 bg-gradient-to-br from-violet-900/25 to-primary-900/10 p-6 md:p-8">
          <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Una comunidad pensada para seguir conectados con ADEEMA.
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Simplificamos esta sección para que comunique rápido su propuesta: acceso anticipado,
                experiencias, novedades y comunidad en un solo lugar.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {['Novedades y alertas', 'Eventos y experiencias', 'Comunidad y contenidos'].map((item) => (
                <div key={item} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
                  {item}
                </div>
              ))}
              <Button variant="fan" size="lg" href="#sumate" className="mt-2">
                Unite al Área FAN
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
