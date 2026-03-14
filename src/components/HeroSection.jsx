import Button from './ui/Button';
import { BRAND_ASSETS } from '../assets/brandAssets';

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[82svh] items-center justify-center overflow-hidden bg-dark pt-32 pb-16 sm:pt-36 md:min-h-[88svh] md:pt-48 md:pb-20"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/30 via-dark to-dark" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }} />

      {/* Decorative corner lines */}
      <div className="absolute top-20 left-8 w-16 h-16 border-t-2 border-l-2 border-primary-500/30 rounded-tl-lg" />
      <div className="absolute bottom-20 right-8 w-16 h-16 border-b-2 border-r-2 border-accent/30 rounded-br-lg" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-5 md:mb-7 animate-fade-in-up">
          <img
            src={BRAND_ASSETS.emblemNegative}
            alt="Emblema ADEEMA"
            className="mx-auto h-16 sm:h-20 md:h-24 w-auto object-contain drop-shadow-[0_0_30px_rgba(0,229,255,0.18)]"
            loading="eager"
            decoding="async"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-primary-500/10 border border-primary-500/30 rounded-full px-4 py-2 mb-6 md:mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-xs font-semibold tracking-widest uppercase text-accent">
            Asociación Argentina
          </span>
        </div>

        {/* Main title */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none mb-4 animate-fade-in-up">
          <span className="text-white">ADE</span>
          <span className="text-gradient">EMA</span>
        </h1>

        {/* Subtitle institucional */}
        <p
          className="max-w-3xl mx-auto text-slate-400 text-sm sm:text-base font-medium tracking-[0.22em] uppercase mb-8 md:mb-10 animate-fade-in-up"
          style={{ animationDelay: '0.1s' }}
        >
          Asociación de Deportes Electrónicos y Electromecánicos de Argentina
        </p>

        {/* Impact phrase */}
        <div className="max-w-3xl mx-auto mb-10 md:mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <p className="text-xl sm:text-2xl md:text-4xl font-semibold text-white leading-snug">
            El ecosistema deportivo del futuro{' '}
            <span className="text-gradient">comienza hoy.</span>
          </p>
          <p className="text-slate-400 mt-5 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Competencias, comunidad y desarrollo institucional para hacer crecer el deporte tecnológico en todo el país.
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
        </div>
      </div>
    </section>
  );
}
