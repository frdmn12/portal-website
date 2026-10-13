import React from 'react';
import { Box } from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
// import { Logo } from './Logo';
import Navbar from './components/Navbar.js';
import LandingPage from './views/LandingPage/index.js';
import { Route, Routes, useLocation } from 'react-router-dom';
import NewsPage from './views/NewsPage/index.js';
import Footer from './components/Footer.js';
import ProfilPage from './views/ProfilPage/index.js';
import PageNotFound from './views/PageNotFound/index.js';
import PageTransition from './components/PageTransition.js';
import ScrollManager from './components/ScrollManager.js';

function App() {
  const { pathname } = useLocation();

  return (
    <Box>
      <ScrollManager />
      <Navbar />
      {/* Keyed by path so every route change mounts a fresh, animated page. */}
      <PageTransition key={pathname}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/profil" element={<ProfilPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </PageTransition>
      <Footer />
    </Box>
  );
}

export default App;
