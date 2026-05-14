import Navigation from './components/Navigation';
import HeroSection from './sections/HeroSection';
import PhilosophySection from './sections/PhilosophySection';
import IntroductionSection from './sections/IntroductionSection';
import PromiseSection from './sections/PromiseSection';
import ChaptersSection from './sections/ChaptersSection';
import AuthorSection from './sections/AuthorSection';
import PraiseSection from './sections/PraiseSection';
import FooterSection from './sections/FooterSection';

export default function App() {
  return (
    <div style={{ background: '#050505' }}>
      <Navigation />
      <HeroSection />
      <PhilosophySection />
      <IntroductionSection />
      <PromiseSection />
      <ChaptersSection />
      <AuthorSection />
      <PraiseSection />
      <FooterSection />
    </div>
  );
}
