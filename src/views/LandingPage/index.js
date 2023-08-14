import { Flex, Stack } from '@chakra-ui/react';
import Hero from './components/Hero.js';
import Footer from '../../components/Footer.js';
import LatestNews from './components/LatestNews.js';
import Travel from './components/Travel.js';
import VideoPromo from './components/VideoPromo.js';
// import {Navbar, Footer} from "./components/index.js"

export default function LandingPage() {
  return (
    <Flex flexDirection={'column'}>
      <Stack spacing={7}>
        <Hero />
         <LatestNews />
        <Travel />
        <VideoPromo/>
        <Footer /> 
      </Stack>
    </Flex>
  );
}
