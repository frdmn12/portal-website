import React from 'react';
import {
  ChakraProvider,
  Box,
  Grid,
  // theme,
} from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
// import { Logo } from './Logo';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import LandingPage from './views/LandingPage/index.js';
import { Redirect, Route, Routes } from 'react-router-dom';

import theme from './theme';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
