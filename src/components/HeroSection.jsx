import Button from './ui/Button';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark">
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/30 via-dark to-dark" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }} />

      {/* Decorative corner lines */}
      <div className="absolute top-20 left-8 w-16 h-16 border-t-2 border-l-2 border-primary-500/30 rounded-tl-lg" />
      <div className="absolute bottom-20 right-8 w-16 h-16 border-b-2 border-r-2 border-accent/30 rounded-br-lg" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-primary-500/10 border border-primary-500/30 rounded-full px-4 py-2 mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-xs font-semibold tracking-widest uppercase text-accent">
            Asociación de Argentina
          </span>
        </div>

        {/* Main title */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none mb-4 animate-fade-in-up">
          <span className="text-white">ADE</span>
          <span className="text-gradient">EMA</span>
        </h1>

        {/* Subtitle institucional */}
        <p className="text-slate-400 text-sm sm:text-base font-medium tracking-widest uppercase mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Asociación de Deportes Electrónicos y Electromecánicos de Argentina
        </p>

        {/* Impact phrase */}
        <div className="max-w-3xl mx-auto mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-white leading-snug">
            El ecosistema deportivo del futuro{' '}
            <span className="text-gradient">comienza hoy.</span>
          </p>
          <p className="text-slate-400 mt-4 text-base md:text-lg leading-relaxed">
            Tecnología, habilidad y competencia al servicio del deporte argentino.
            Construimos la infraestructura que el talento nacional necesita.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <Button variant="primary" size="lg" href="#institucional">
            Conocé ADEEMA
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Button>
          <Button variant="secondary" size="lg" href="#ligas">
            Ver Ligas
          </Button>
          <Button variant="accent" size="lg" href="#contacto">
            Sumate
          </Button>
        </div>

        {/* Stats bar */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          {[
            { value: '4', label: 'Ligas Activas' },
            { value: '800+', label: 'Jugadores' },
            { value: '12+', label: 'Ciudades' },
            { value: '5+', label: 'Disciplinas' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-black text-white mb-1">{stat.value}</div>
              <div className="text-xs text-slate-500 uppercase tracking-wider font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-slate-600 uppercase tracking-widest">Scroll</span>
        <svg className="w-5 h-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
