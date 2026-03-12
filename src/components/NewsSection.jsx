import { useState } from 'react';
import { news, newsCategories } from '../data/news';
import SectionHeader from './ui/SectionHeader';
import Card from './ui/Card';

function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString('es-AR', { year: 'numeric', month: 'long', day: 'numeric' });
}

const categoryColors = {
  Ligas: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  Torneos: 'bg-orange-500/20 text-orange-300 border-orange-500/30',
  Jugadores: 'bg-green-500/20 text-green-300 border-green-500/30',
  Tecnología: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
  Comunidad: 'bg-violet-500/20 text-violet-300 border-violet-500/30',
};

function NewsCard({ article, featured = false }) {
  return (
    <Card
      className={`overflow-hidden flex flex-col h-full ${featured ? 'border-primary-500/30' : ''}`}
      hover
    >
      {/* Image placeholder */}
      <div className={`w-full bg-gradient-to-br from-dark-300 to-dark-400 flex items-center justify-center ${featured ? 'h-48' : 'h-36'}`}>
        <div className="text-4xl opacity-30">
          {article.category === 'Ligas' ? '🏆' :
           article.category === 'Torneos' ? '🎮' :
           article.category === 'Jugadores' ? '👤' :
           article.category === 'Tecnología' ? '💡' : '🤝'}
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-3">
          <span className={`text-xs font-medium px-2 py-1 rounded-full border ${categoryColors[article.category] || 'bg-slate-500/20 text-slate-300 border-slate-500/30'}`}>
            {article.category}
          </span>
          <span className="text-slate-600 text-xs">{article.readTime} de lectura</span>
        </div>

        <h3 className={`text-white font-semibold leading-snug mb-3 flex-1 ${featured ? 'text-lg' : 'text-sm'}`}>
          {article.title}
        </h3>

        <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
          {article.excerpt}
        </p>

        <div className="flex items-center justify-between pt-3 border-t border-white/5">
          <span className="text-slate-500 text-xs">{formatDate(article.date)}</span>
          <button className="text-primary-400 text-xs font-medium hover:text-primary-300 transition-colors flex items-center gap-1">
            Leer más
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </Card>
  );
}

export default function NewsSection() {
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filtered = activeCategory === 'Todos'
    ? news
    : news.filter((n) => n.category === activeCategory);

  const featured = filtered.filter((n) => n.featured);
  const rest = filtered.filter((n) => !n.featured);

  return (
    <section id="noticias" className="section-padding bg-dark relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Actualidad"
          title="Noticias y Novedades"
          subtitle="Todo lo que pasa en el ecosistema ADEEMA: torneos, ligas, jugadores y las últimas novedades del sector."
        />

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {newsCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-primary-600 text-white border border-primary-500'
                  : 'bg-dark-200 text-slate-400 border border-white/10 hover:border-primary-500/40 hover:text-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured articles */}
        {featured.length > 0 && (
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {featured.slice(0, 2).map((article) => (
              <NewsCard key={article.id} article={article} featured />
            ))}
          </div>
        )}

        {/* Rest of articles */}
        {rest.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {rest.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        )}

        {filtered.length === 0 && (
          <div className="text-center py-16 text-slate-500">
            <div className="text-4xl mb-4">📰</div>
            <p>No hay artículos en esta categoría todavía.</p>
          </div>
        )}

        <div className="text-center mt-12">
          <button className="border border-white/10 text-slate-300 hover:text-white hover:border-primary-500/50 px-8 py-3 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-primary-500/5">
            Ver todos los artículos
          </button>
        </div>
      </div>
    </section>
  );
}
