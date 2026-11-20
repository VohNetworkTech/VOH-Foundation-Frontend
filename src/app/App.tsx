import { Routes, Route } from 'react-router';
import { ScrollToTop } from './components/ScrollToTop';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { Founder } from './components/Founder';
import { Projects } from './components/Projects';
import { ImpactSoFar } from './components/ImpactSoFar';
import { Gallery } from './components/Gallery';
import { SecretaryMessage } from './components/SecretaryMessage';
import { Collaboration } from './components/Collaboration';
import { Footer } from './components/Footer';
import { ProjectDetail } from './pages/ProjectDetail';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { DonationRefundPolicy } from './pages/DonationRefundPolicy';
import { TermsAndConditions } from './pages/TermsAndConditions';

function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <Founder />
        <SecretaryMessage />
        <Projects />
        <ImpactSoFar />
        <Gallery />
        
        <Collaboration />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/:slug" element={<ProjectDetail />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/donation-refund-policy" element={<DonationRefundPolicy />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
    </Routes>
    </>
  );
}
