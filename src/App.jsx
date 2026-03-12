import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import InstitutionalSection from './components/InstitutionalSection';
import MissionVisionSection from './components/MissionVisionSection';
import FanSection from './components/FanSection';
import NewsSection from './components/NewsSection';
import SponsorsSection from './components/SponsorsSection';
import LeaguesSection from './components/LeaguesSection';
import CompetitionsSection from './components/CompetitionsSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Navbar />
      <main>
        <HeroSection />
        <InstitutionalSection />
        <MissionVisionSection />
        <FanSection />
        <LeaguesSection />
        <CompetitionsSection />
        <NewsSection />
        <SponsorsSection />
      </main>
      <Footer />
    </div>
  );
}

