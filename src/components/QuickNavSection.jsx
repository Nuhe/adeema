const sectionLinks = [
  { label: 'Quiénes somos', href: '#institucional' },
  { label: 'Misión', href: '#mision-vision' },
  { label: 'Área FAN', href: '#fan' },
  { label: 'Ligas', href: '#ligas' },
  { label: 'Competencias', href: '#competencias' },
  { label: 'Alianzas', href: '#alianzas' },
  { label: 'Sumate', href: '#sumate' },
];

export default function QuickNavSection() {
  return (
    <section className="bg-dark border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-slate-500 mb-1">
              Navegación rápida
            </p>
            <p className="text-sm text-slate-400">
              Saltá directo a cada bloque principal y evitá recorrer una página larga.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {sectionLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-300 transition-all duration-200 hover:border-primary-400/50 hover:bg-primary-500/10 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
