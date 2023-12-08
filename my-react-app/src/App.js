import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Home } from './components/sectionOneHome';
import { SectionTwo } from './components/sectionTwoHome'; 
import { Product } from './pages/product';
import { Pricing } from './pages/pricing';
import { Cases } from './pages/cases';
import { AboutUs } from './pages/aboutUs';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { NotFoundPage } from './pages/pagenotfound';


const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};
export const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container" role="main"> {/* Lägg till roll "main" för huvudinnehåll */}
          <Header role="banner" /> {/* Lägg till roll "banner" för sidhuvud */}
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home/>
                  <SectionTwo/>

                </>
              } />
            <Route path="/product" element={<Product />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/validated-cases" element={<Cases />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Footer role="contentinfo" />
      </div>
    </Router>
  )
}