import React from 'react';
import { Box } from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
// import { Logo } from './Logo';
import Navbar from './components/Navbar.js';
import LandingPage from './views/LandingPage/index.js';
import {  Route, Routes } from 'react-router-dom';
import NewsPage from './views/NewsPage/index.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/news" element={<NewsPage />} />
      </Routes>
      <Footer/>
    </Box>
  );
}

export default App;
