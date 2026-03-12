import { leagues } from '../data/leagues';
import SectionHeader from './ui/SectionHeader';

export default function LeaguesSection() {
  return (
    <section id="ligas" className="section-padding bg-dark relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-1/2 h-64 bg-gradient-to-r from-primary-900/10 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Sistema de Ligas"
          title="Las ligas que impulsan el ecosistema"
          subtitle="ADEEMA organiza y avala cuatro ligas diseñadas para cubrir cada perfil de jugador, institución y organización del país."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {leagues.map((league) => (
            <div
              key={league.id}
              className={`group relative rounded-2xl border ${league.borderColor} bg-dark-200/50 p-7 overflow-hidden hover:border-opacity-70 transition-all duration-300 hover:-translate-y-1`}
            >
              {/* Background gradient accent */}
              <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${league.color} opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity duration-500`} />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">{league.icon}</div>
                    <div>
                      <h3 className="text-white font-bold text-xl mb-1">{league.name}</h3>
                      <p className={`text-sm font-medium ${league.accentColor}`}>{league.tagline}</p>
                    </div>
                  </div>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {league.description}
                </p>

                {/* Stats */}
                <div className="flex gap-4 mb-5">
                  {Object.entries(league.stats).map(([key, val]) => (
                    <div key={key} className="text-center">
                      <div className="text-white font-bold text-lg">{val}</div>
                      <div className="text-slate-500 text-xs capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Disciplines */}
                <div className="flex flex-wrap gap-2">
                  {league.disciplines.map((d) => (
                    <span
                      key={d}
                      className={`text-xs px-3 py-1 rounded-full border ${league.borderColor} ${league.accentColor} bg-white/5`}
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-slate-400 mb-4 text-sm">
            ¿Querés organizar una liga en tu ciudad, universidad o empresa?
          </p>
          <button className="border border-primary-500/50 text-primary-400 hover:bg-primary-500/10 hover:border-primary-400 px-8 py-3 rounded-lg text-sm font-medium transition-all duration-200">
            Contactá a ADEEMA
          </button>
        </div>
      </div>
    </section>
  );
}
