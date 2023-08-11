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

import theme from './theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh">
          <Navbar />
          {/* <Footer /> */}
        </Grid>
      </Box>
      <Footer/>
    </ChakraProvider>
  );
}

export default App;
