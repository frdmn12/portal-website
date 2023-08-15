import React from 'react';
import { Box } from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
// import { Logo } from './Logo';
import Navbar from './components/Navbar.js';
import LandingPage from './views/LandingPage/index.js';
import { Redirect, Route, Routes } from 'react-router-dom';
import NewsPage from './views/NewsPage/index.js';

function App() {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/news" element={<NewsPage />} />
      </Routes>
    </Box>
  );
}

export default App;
