import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// Layout & Global Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import BackToTop from './components/BackToTop';
import DemoModal from './components/DemoModal';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CoursesPage from './pages/CoursesPage';
import WorkshopsPage from './pages/WorkshopsPage';
import WebDevelopmentPage from './pages/WebDevelopmentPage';
import SEOMarketingPage from './pages/SEOMarketingPage';
import AISolutionsPage from './pages/AISolutionsPage';
import MobileAppsPage from './pages/MobileAppsPage';
import SoftwareDevelopmentPage from './pages/SoftwareDevelopmentPage';
import FYPProjectsPage from './pages/FYPProjectsPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';

// Scroll to top helper on navigation
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [demoCourse, setDemoCourse] = useState("");

  const handleOpenDemo = (courseTitle = "") => {
    setDemoCourse(courseTitle);
    setIsDemoModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F7FA] text-[#102A43]">
      <ScrollToTop />
      
      {/* Navigation Bar */}
      <Navbar onOpenDemoModal={() => handleOpenDemo()} />

      {/* Main Routed Content */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage onOpenDemoModal={() => handleOpenDemo()} />} />
          <Route path="/about" element={<AboutPage onOpenDemoModal={() => handleOpenDemo()} />} />
          <Route path="/courses" element={<CoursesPage onOpenDemoModal={() => handleOpenDemo()} />} />
          <Route path="/workshops" element={<WorkshopsPage />} />
          
          {/* Services Routes */}
          <Route path="/services/web-development" element={<WebDevelopmentPage />} />
          <Route path="/services/seo-digital-marketing" element={<SEOMarketingPage />} />
          <Route path="/services/ai-solutions" element={<AISolutionsPage />} />
          <Route path="/services/mobile-apps" element={<MobileAppsPage />} />
          <Route path="/services/software-development" element={<SoftwareDevelopmentPage />} />
          <Route path="/services/fyp-projects" element={<FYPProjectsPage />} />

          {/* Portfolio & Contact */}
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage onOpenDemoModal={() => handleOpenDemo()} />} />

          {/* Catch-all redirect to Home */}
          <Route path="*" element={<HomePage onOpenDemoModal={() => handleOpenDemo()} />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Utilities */}
      <WhatsAppButton />
      <BackToTop />

      {/* Global Demo Booking Modal */}
      <DemoModal 
        isOpen={isDemoModalOpen} 
        onClose={() => setIsDemoModalOpen(false)}
        defaultCourse={demoCourse}
      />
    </div>
  );
}
