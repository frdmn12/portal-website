import { Text, Flex } from '@chakra-ui/react';
import Hero from './components/Hero.js';
import Footer from '../../components/Footer.js';
import LatestNews from './components/LatestNews.js';
// import {Navbar, Footer} from "./components/index.js"

export default function LandingPage() {
  return (
    <Flex flexDirection={'column'}>
      <Hero />
      <LatestNews />
      <Footer />
    </Flex>
  );
}
