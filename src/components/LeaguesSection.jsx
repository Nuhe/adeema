import { leagues } from '../data/leagues';
import Button from './ui/Button';

export default function LeaguesSection() {
  return (
    <section id="ligas" className="bg-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        {/* Header compacto */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary-400 mb-2 px-3 py-1 bg-primary-500/10 border border-primary-500/20 rounded-full">
              Sistema de Ligas
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Ligas ADEEMA
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              Próxima temporada en preparación
            </p>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-semibold tracking-wider uppercase w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            Próximamente
          </div>
        </div>

        {/* League badges compactos */}
        <div className="flex flex-wrap gap-3 mb-6">
          {leagues.map((league) => (
            <div
              key={league.id}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border ${league.borderColor} bg-dark-200/40 text-sm`}
            >
              <span className="text-base">{league.icon}</span>
              <div>
                <span className="text-white font-medium">{league.name}</span>
                <span className={`hidden sm:inline ml-2 text-xs ${league.accentColor}`}>— {league.tagline}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <p className="text-slate-500 text-sm">
            ¿Querés organizar una liga? Contactanos para ser parte del ecosistema.
          </p>
          <Button variant="secondary" size="sm" href="#sumate" className="shrink-0">
            Contactá a ADEEMA
          </Button>
        </div>
      </div>
    </section>
  );
}

