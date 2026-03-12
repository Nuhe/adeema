import { disciplines, competitionOrganizers, competitionFeatures } from '../data/competitions';
import SectionHeader from './ui/SectionHeader';

export default function CompetitionsSection() {
  return (
    <section id="competencias" className="section-padding bg-dark-100 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-cyan-900/5 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Sistema Competitivo"
          title="Un sistema de competencias para todo el país"
          subtitle="ADEEMA registra, avala y organiza torneos en distintas disciplinas. Cada competencia es parte de un sistema de resultados, rankings y estadísticas a nivel nacional."
        />

        {/* Disciplines */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-12">
          {disciplines.map((d) => (
            <div
              key={d.id}
              className={`group rounded-xl border p-5 ${d.color} hover:scale-105 transition-all duration-300 cursor-default`}
            >
              <div className={`w-10 h-10 rounded-lg ${d.iconBg} flex items-center justify-center text-xl mb-4`}>
                {d.icon}
              </div>
              <h3 className="text-white font-semibold text-sm mb-2">{d.name}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">{d.description}</p>
            </div>
          ))}
        </div>

        {/* Who can organize */}
        <div className="grid lg:grid-cols-2 gap-10 items-center mb-12">
          <div>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-4 px-3 py-1 bg-accent/10 border border-accent/20 rounded-full">
              Organizadores
            </span>
            <h3 className="text-white font-bold text-3xl mb-4">
              ¿Quién puede organizar una competencia ADEEMA?
            </h3>
            <p className="text-slate-400 leading-relaxed mb-8">
              Cualquier institución, club, organización o individuo puede organizar torneos bajo el
              aval de ADEEMA. Brindamos el marco reglamentario, el sistema de inscripciones y el
              reconocimiento oficial para que tu evento sea parte del ecosistema nacional.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {competitionOrganizers.map((org) => (
                <div
                  key={org.label}
                  className="flex items-center gap-3 p-3 rounded-lg border border-white/5 bg-dark-200/50 hover:border-primary-500/30 transition-colors"
                >
                  <span className="text-xl">{org.icon}</span>
                  <span className="text-slate-300 text-sm font-medium">{org.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="space-y-4">
            {competitionFeatures.map((feature) => (
              <div
                key={feature.title}
                className="flex items-start gap-4 p-5 rounded-xl border border-white/5 bg-dark-200/50 hover:border-primary-500/20 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary-600/20 border border-primary-500/30 flex items-center justify-center text-xl flex-shrink-0 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm mb-1">{feature.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ranking highlight */}
        <div className="rounded-2xl border border-accent/20 bg-gradient-to-r from-cyan-900/20 to-dark-200 p-8 md:p-10">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left items-center">
            <div className="md:col-span-2">
              <div className="text-accent text-xs font-bold uppercase tracking-widest mb-3">
                Ranking Nacional ADEEMA
              </div>
              <h3 className="text-white font-bold text-2xl md:text-3xl mb-3">
                Cada resultado cuenta en el sistema nacional
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Los puntos obtenidos en cada competencia avanzan en el ranking nacional de ADEEMA por disciplina.
                Los jugadores construyen su carrera deportiva participando en torneos municipales, universitarios,
                corporativos o amateurs que forman parte del ecosistema oficial.
              </p>
            </div>
            <div className="flex flex-col gap-4 items-center">
              {[
                { label: 'Torneos registrados', value: '30+' },
                { label: 'Rankings activos', value: '5' },
                { label: 'Provincias', value: '8+' },
              ].map((stat) => (
                <div key={stat.label} className="text-center w-full py-3 border border-accent/20 rounded-lg bg-accent/5">
                  <div className="text-2xl font-black text-white">{stat.value}</div>
                  <div className="text-xs text-slate-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
