import { sponsorTiers, sponsorOpportunities } from '../data/sponsors';
import SectionHeader from './ui/SectionHeader';
import Button from './ui/Button';

export default function SponsorsSection() {
  const featuredOpportunities = sponsorOpportunities.slice(0, 3);
  const compactTiers = sponsorTiers.map((tier) => tier.name);

  return (
    <section id="alianzas" className="section-padding bg-dark-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark to-dark-100 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Alianzas y Patrocinios"
          title="Actores que potencian el ecosistema ADEEMA"
          subtitle="ADEEMA conecta instituciones, marcas y empresas con una comunidad joven, activa y en crecimiento. Las alianzas estratégicas amplifican el alcance de cada liga, torneo y programa."
        />

        {/* Opportunities grid */}
        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {featuredOpportunities.map((opp) => (
            <div
              key={opp.title}
              className="group p-6 rounded-xl border border-white/5 bg-dark-200/50 hover:border-primary-500/30 hover:bg-primary-500/5 transition-all duration-300"
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {opp.icon}
              </div>
              <h3 className="text-white font-semibold text-sm mb-2">{opp.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{opp.description}</p>
            </div>
          ))}
        </div>

        {/* Sponsor tiers */}
        <div className="mb-10 rounded-2xl border border-white/10 bg-dark-200/40 p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-white font-bold text-2xl mb-2">
                Modelos de vinculación más simples de comparar
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed max-w-2xl">
                En lugar de desplegar toda la tabla en la home, resumimos la propuesta en tres niveles
                para que la página sea más corta y la navegación más liviana.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {compactTiers.map((tier) => (
                <span
                  key={tier}
                  className="rounded-full border border-primary-500/20 bg-primary-500/5 px-4 py-2 text-sm font-medium text-slate-200"
                >
                  {tier}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="relative rounded-2xl border border-primary-500/30 bg-gradient-to-r from-primary-900/30 to-dark-200 p-8 md:p-12 overflow-hidden text-center">
          <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-white mb-4">
              ¿Tu organización quiere ser parte del ecosistema?
            </h3>
            <p className="text-slate-400 text-base max-w-xl mx-auto mb-8 leading-relaxed">
              Diseñamos propuestas de colaboración y sponsoreo alineadas a objetivos institucionales,
              de marca y de desarrollo territorial.
            </p>
            <Button variant="primary" size="lg" href="#sumate">
              Quiero ser aliado
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
