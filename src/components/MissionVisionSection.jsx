export default function MissionVisionSection() {
  return (
    <section id="mision-vision" className="section-padding bg-dark relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-100 to-dark pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-4 px-3 py-1 bg-accent/10 border border-accent/20 rounded-full">
            Nuestra identidad
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Misión & Visión
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Misión */}
          <div className="relative group rounded-2xl border border-primary-500/30 bg-gradient-to-br from-primary-900/30 to-dark-200 p-8 md:p-10 overflow-hidden hover:border-primary-500/60 transition-all duration-300">
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary-500/10 rounded-full blur-2xl group-hover:bg-primary-500/20 transition-colors duration-500" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary-600/30 border border-primary-500/50 flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-primary-400">
                  Misión
                </span>
              </div>
              <p className="text-white text-xl md:text-2xl font-semibold leading-snug mb-4">
                Promover, organizar y desarrollar los deportes electrónicos y electromecánicos en Argentina.
              </p>
              <p className="text-slate-400 leading-relaxed">
                A través de la creación de competencias, ligas, comunidades y plataformas que permitan el
                crecimiento sostenible del ecosistema deportivo tecnológico en todo el territorio nacional.
              </p>
              <div className="mt-8 pt-6 border-t border-primary-500/20 grid grid-cols-3 gap-4">
                {[
                  { icon: '🏆', label: 'Competencias' },
                  { icon: '🤝', label: 'Comunidad' },
                  { icon: '📈', label: 'Crecimiento' },
                ].map((item) => (
                  <div key={item.label} className="text-center">
                    <div className="text-2xl mb-1">{item.icon}</div>
                    <span className="text-xs text-slate-500 font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Visión */}
          <div className="relative group rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-900/20 to-dark-200 p-8 md:p-10 overflow-hidden hover:border-cyan-500/60 transition-all duration-300">
            <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-colors duration-500" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-cyan-600/20 border border-cyan-500/50 flex items-center justify-center">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                  Visión
                </span>
              </div>
              <p className="text-white text-xl md:text-2xl font-semibold leading-snug mb-4">
                Ser la organización de referencia en Argentina y en la región para el desarrollo de deportes electrónicos y electromecánicos.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Generando un sistema competitivo moderno que conecte talento, tecnología e innovación, y que
                posicione a Argentina como referente del ecosistema deportivo tecnológico a nivel regional.
              </p>
              <div className="mt-8 pt-6 border-t border-cyan-500/20 grid grid-cols-3 gap-4">
                {[
                  { icon: '🌎', label: 'Regional' },
                  { icon: '💡', label: 'Innovación' },
                  { icon: '⭐', label: 'Referencia' },
                ].map((item) => (
                  <div key={item.label} className="text-center">
                    <div className="text-2xl mb-1">{item.icon}</div>
                    <span className="text-xs text-slate-500 font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
