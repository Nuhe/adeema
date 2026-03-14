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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group p-6 rounded-xl border border-white/5 bg-dark-200/50 hover:border-violet-500/30 hover:bg-violet-500/5 transition-all duration-300"
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
        <div className="relative rounded-2xl overflow-hidden border border-violet-500/30 bg-gradient-to-br from-violet-900/30 to-primary-900/20 p-8 md:p-12 text-center">
          <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
          <div className="relative z-10">
            <div className="text-5xl mb-6">🎮</div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Sumate a la comunidad FAN
            </h3>
            <p className="text-slate-300 text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
              Miles de personas ya forman parte del Área FAN de ADEEMA. Únite y comenzá a vivir
              el ecosistema desde adentro.
            </p>
            <Button variant="fan" size="xl" href="#sumate">
              Unite al Área FAN
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
