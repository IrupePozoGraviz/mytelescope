import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Home } from './pages/home.js';
import { Product } from './pages/product';
import { Pricing } from './pages/pricing';
import { Cases } from './pages/cases';
import { AboutUs } from './pages/aboutUs';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { NotFoundPage } from './pages/pagenotfound';
import { Blog } from './pages/blog.js';
import { AllPosts } from './components/AllPosts.js';
import { OnePost } from './components/OnePost.js'


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

                </>
              } />
            <Route path="/product" element={<Product />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/validated-cases" element={<Cases />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route component={AllPosts} path="/blog" element={<Blog />} />
            <Route component={OnePost} path="/:slug" element={<Blog />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Footer role="contentinfo" />
      </div>
    </Router>
  )
}