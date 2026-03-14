import Button from './ui/Button';
import { BRAND_ASSETS } from '../assets/brandAssets';

export default function FinalCTASection() {
  return (
    <section id="sumate" className="section-padding bg-dark relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/25 via-dark to-violet-950/20 pointer-events-none" />
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-dark-100/85 p-8 md:p-12 lg:p-16 text-center shadow-2xl shadow-black/20">
          <img
            src={BRAND_ASSETS.emblemPrimary}
            alt="Emblema ADEEMA"
            className="mx-auto mb-6 h-16 md:h-20 w-auto object-contain"
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
          />
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-4 px-3 py-1 bg-accent/10 border border-accent/20 rounded-full">
            CTA final
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-5">
            Llevá tu proyecto, comunidad o institución al ecosistema ADEEMA.
          </h2>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-8">
            Ya sea para competir, organizar una liga, activar una alianza o sumarte al Área FAN,
            dejamos un único punto de entrada claro y visible para que el siguiente paso sea simple.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button variant="primary" size="lg" href="#contacto">
              Quiero sumarme
            </Button>
            <Button variant="secondary" size="lg" href="#ligas">
              Explorar ligas
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-4 text-left">
            {[
              {
                title: 'Jugadores y comunidades',
                description: 'Participación, visibilidad y acceso a competencias y novedades.',
              },
              {
                title: 'Instituciones y organizadores',
                description: 'Estructura para desarrollar ligas, torneos y programas propios.',
              },
              {
                title: 'Marcas y aliados',
                description: 'Integración con propuestas de activación y crecimiento territorial.',
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-sm leading-relaxed text-slate-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
