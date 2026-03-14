const stats = [
  {
    value: '4',
    label: 'Ligas activas',
    description: 'Circuitos pensados para comunidades, instituciones, universidades y empresas.',
  },
  {
    value: '800+',
    label: 'Jugadores',
    description: 'Una base en crecimiento con participación amateur, formativa y competitiva.',
  },
  {
    value: '12+',
    label: 'Ciudades',
    description: 'Presencia territorial para construir una escena verdaderamente federal.',
  },
  {
    value: '5+',
    label: 'Disciplinas',
    description: 'Videojuegos, simulación y nuevas competencias tecnológicas en evolución.',
  },
];

export default function StatsSection() {
  return (
    <section id="metricas" className="relative bg-dark-100 border-y border-white/5">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-900/10 to-transparent pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-4 px-3 py-1 bg-accent/10 border border-accent/20 rounded-full">
              Indicadores
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Un ecosistema en expansión, con estructura y proyección.
            </h2>
            <p className="text-slate-400 leading-relaxed">
              Estos indicadores resumen el alcance actual de ADEEMA y ayudan a entender, de un vistazo,
              la escala del proyecto, su presencia territorial y el crecimiento del ecosistema.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4 flex-1">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-dark/60 p-5 md:p-6 backdrop-blur-sm"
              >
                <div className="text-3xl md:text-4xl font-black text-white mb-2">{stat.value}</div>
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300 mb-3">
                  {stat.label}
                </div>
                <p className="text-sm leading-relaxed text-slate-500">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
