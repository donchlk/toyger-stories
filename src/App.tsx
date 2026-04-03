import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { I18nProvider } from '@/i18n/I18nContext';
import { ThemeProvider } from '@/hooks/useTheme';
import { Header } from '@/sections/Header';
import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Gallery } from '@/sections/Gallery';
import { Philosophy } from '@/sections/Philosophy';
import { BreedStory } from '@/sections/BreedStory';
import { WhyToyger } from '@/sections/WhyToyger';
import { BreedInfo } from '@/sections/BreedInfo';
import { Temperament } from '@/sections/Temperament';
import { FunFacts } from '@/sections/FunFacts';
import { Moments } from '@/sections/Moments';
import { KittenMoments } from '@/sections/KittenMoments';
import { DailyLife } from '@/sections/DailyLife';
import { WhoFits } from '@/sections/WhoFits';
import { BreedFAQ } from '@/sections/BreedFAQ';
import { FAQ } from '@/sections/FAQ';
import { FutureUpdates } from '@/sections/FutureUpdates';
import { Contact } from '@/sections/Contact';
import { Footer } from '@/sections/Footer';
import { Impressum } from '@/pages/Impressum';
import { Privacy } from '@/pages/Privacy';

// Detect GitHub Pages deployment by checking base path
const basename = window.location.pathname.startsWith('/toyger-stories') ? '/toyger-stories' : '';

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Philosophy />
        <BreedStory />
        <WhyToyger />
        <BreedInfo />
        <Temperament />
        <FunFacts />
        <Moments />
        <KittenMoments />
        <DailyLife />
        <WhoFits />
        <BreedFAQ />
        <FAQ />
        <FutureUpdates />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <I18nProvider>
      <ThemeProvider>
        <BrowserRouter basename={basename}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </I18nProvider>
  );
}

export default App;
