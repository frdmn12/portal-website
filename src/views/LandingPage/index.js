import { Flex, Stack, Box } from '@chakra-ui/react';
import Hero from './components/Hero.js';
import LatestNews from './components/LatestNews.js';
import Travel from './components/Travel.js';
import VideoPromo from './components/VideoPromo.js';
import Supports from './components/Supports.js';

export default function LandingPage() {
  return (
    <Flex flexDirection={'column'}>
      <Stack spacing={{ base: 4, lg: 7 }}>
        <Hero />
        <LatestNews />
        <Box id="wisata">
          <Travel />
        </Box>
        <VideoPromo />
        <Supports />
      </Stack>
    </Flex>
  );
}
