import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import Footer from './components/Footer';
import FinalCTASection from './components/FinalCTASection';

const InstitutionalSection = lazy(() => import('./components/InstitutionalSection'));
const MissionVisionSection = lazy(() => import('./components/MissionVisionSection'));
const FanSection = lazy(() => import('./components/FanSection'));
const LeaguesSection = lazy(() => import('./components/LeaguesSection'));
const CompetitionsSection = lazy(() => import('./components/CompetitionsSection'));
const SponsorsSection = lazy(() => import('./components/SponsorsSection'));
const NewsSection = lazy(() => import('./components/NewsSection'));

function SectionsFallback() {
  return (
    <div className="section-padding bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-8 w-48 rounded-full bg-white/5 mb-6 animate-pulse" />
        <div className="h-14 max-w-2xl rounded-2xl bg-white/5 mb-4 animate-pulse" />
        <div className="h-24 rounded-3xl bg-white/5 animate-pulse" />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Navbar />
      <main className="overflow-x-hidden">
        <HeroSection />
        <StatsSection />
        <Suspense fallback={<SectionsFallback />}>
          <InstitutionalSection />
          <MissionVisionSection />
          <FanSection />
          <LeaguesSection />
          <CompetitionsSection />
          <SponsorsSection />
          <NewsSection />
          <FinalCTASection />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
