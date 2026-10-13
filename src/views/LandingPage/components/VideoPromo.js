import { AspectRatio, Container, Flex, Text } from '@chakra-ui/react';

const VideoPromo = () => {
  return (
    <Container maxW="4xl" px={{ base: 4, md: 6 }} py={{ base: 8, lg: 14 }}>
      <Flex flexDirection="column" fontFamily="heading" alignItems="center">
        <AspectRatio
          data-reveal="zoom"
          ratio={16 / 9}
          w="100%"
          rounded="xl"
          overflow="hidden"
          boxShadow="xl"
        >
          <iframe
            // src="https://www.youtube.com/embed/wI2vqXsjsIo"
            src="https://youtube.com/embed/nxGOfXS_qkM"
            title="Video Daerah Kabupaten Probolinggo"
            loading="lazy"
            allowFullScreen
          />
        </AspectRatio>
        <Text
          data-reveal="up"
          data-delay="0.1"
          mt={{ base: 5, lg: 8 }}
          textAlign={'center'}
          fontSize={{ base: 'sm', lg: 'lg' }}
        >
          Dalam keindahan dan keberagaman yang kami cintai, kami mempersembahkan
          "Video Daerah Kami" – jendela yang membawa Anda ke dalam pesona tiap
          sudut tanah ini.
        </Text>
      </Flex>
    </Container>
  );
};

export default VideoPromo;
