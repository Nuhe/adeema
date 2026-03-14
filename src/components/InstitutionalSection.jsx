import SectionHeader from './ui/SectionHeader';
import Card from './ui/Card';

const partners = [
  { icon: '🏛️', label: 'Municipios' },
  { icon: '⚽', label: 'Clubes Deportivos' },
  { icon: '🎓', label: 'Universidades' },
  { icon: '💡', label: 'Centros Tecnológicos' },
  { icon: '🏆', label: 'Organizadores' },
  { icon: '💻', label: 'Empresas Tech' },
];

const disciplines = [
  { name: 'Esports', icon: '🎮', desc: 'Videojuegos competitivos con formato profesional' },
  { name: 'SimRacing', icon: '🏎️', desc: 'Simulación de automovilismo de alto rendimiento' },
  { name: 'Competencias Tecnológicas', icon: '⚙️', desc: 'Desafíos digitales, robótica y estrategia' },
  { name: 'Deportes Electromecánicos', icon: '🤖', desc: 'Destreza física y tecnología integradas' },
  { name: 'Nuevas Disciplinas', icon: '🚀', desc: 'Categorías emergentes e innovación continua' },
];

export default function InstitutionalSection() {
  return (
    <section id="institucional" className="section-padding bg-dark-100 relative overflow-hidden border-t border-white/5">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-900/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] gap-10 items-center mb-12">
          {/* Left col - text */}
          <div>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-4 px-3 py-1 bg-accent/10 border border-accent/20 rounded-full">
              Quiénes somos
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Impulsamos el ecosistema{' '}
              <span className="text-gradient">deportivo tecnológico</span>{' '}
              de Argentina
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                ADEEMA desarrolla, promueve y organiza los deportes electrónicos y electromecánicos en Argentina.
                Articulamos jugadores, clubes, ligas, instituciones educativas, marcas y organizadores dentro de
                un mismo ecosistema competitivo.
              </p>
              <p>
                Nuestro foco está en consolidar competencias estructuradas, abrir oportunidades para el talento
                emergente y construir una plataforma con visión <span className="text-white font-medium">federal</span>,
                sostenible y profesional.
              </p>
            </div>
          </div>

          {/* Right col - partners */}
          <div>
            <p className="text-slate-500 text-sm uppercase tracking-widest font-medium mb-6">
              Trabajamos junto a
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {partners.map((partner) => (
                <Card key={partner.label} className="p-4 text-center" hover>
                  <div className="text-3xl mb-2">{partner.icon}</div>
                  <p className="text-slate-300 text-sm font-medium">{partner.label}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Disciplines */}
        <div>
          <SectionHeader
            label="Disciplinas"
            title="El ecosistema de competencias ADEEMA"
            subtitle="Organizamos y avalamos competencias en disciplinas que representan el presente y el futuro del deporte."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {disciplines.map((d) => (
              <Card key={d.name} className="p-5 text-center group" hover>
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {d.icon}
                </div>
                <h3 className="text-white font-semibold text-sm mb-2">{d.name}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{d.desc}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Federal badge */}
        <div className="mt-10 rounded-2xl border border-primary-500/20 bg-primary-500/5 p-6 flex flex-col md:flex-row items-center gap-5 text-center md:text-left">
          <div className="text-5xl flex-shrink-0">🗺️</div>
          <div>
            <h3 className="text-white font-bold text-xl mb-2">Alcance Federal</h3>
            <p className="text-slate-400 leading-relaxed">
              ADEEMA opera con una visión federal, llegando a jugadores, instituciones y organizadores de todas las
              provincias argentinas. Cada liga, cada torneo y cada iniciativa apunta a construir un ecosistema
              verdaderamente nacional, inclusivo y accesible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
