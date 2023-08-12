import { Flex, Text, Box, Badge, useColorModeValue } from '@chakra-ui/react';

const Hero = () => {
  const bgImage =
    'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80';
  const badgeColorScheme = 'blue';
  const badgeFontSize = "0.8em"

  return (
    <Flex
      bgImage={`url(${bgImage})`}
      bgSize="cover"
      bgPosition="center"
      height={{ base: '200px', md: '300px', lg: '800px' }}
      justifyContent="center"
      alignItems="center"
      mb="30px"
    >
      <Box
        flexDirection="column"
        boxSize={{ base: 'fit-content', md: 'fit-content', lg: 'max-content' }}
        textAlign="center"
      >
        <Text
          fontSize={{ base: '30px', md: '70px', lg: '110px' }}
          fontFamily="heading"
          fontWeight="900"
          color="gray.50"
          mb={{ base: '10px', md: '20px' }}
          //   textShadow="1px 1px 2px rgba(0, 0, 0, 66)"
          // boxShadow={"xl"}
        >
          PRASAJA NGESTI WIBAWA
        </Text>
        <Text
          fontFamily="heading"
          color="gray.50"
          fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
        >
          Terwujudnya Kabupaten Probolinggo Yang
          <Badge variant="subtle" colorScheme={badgeColorScheme} fontSize={badgeFontSize} m={"0px 2px"}>
            Sejahtera,
          </Badge>
          <Badge variant="subtle" colorScheme={badgeColorScheme} fontSize={badgeFontSize} m={"0px 2px"}>
            Berkeadilan
          </Badge>
          ,
          <Badge variant="subtle" colorScheme={badgeColorScheme} fontSize={badgeFontSize} m={"0px 2px"}>
            Mandiri
          </Badge>
          ,
          <Badge variant="subtle" colorScheme={badgeColorScheme} fontSize={badgeFontSize} m={"0px 2px"}>
            Berwawasan Lingkungan
          </Badge>
          dan
          <Badge variant="subtle" colorScheme={badgeColorScheme} fontSize={badgeFontSize} m={"0px 2px"}>
            Berakhlak Mulia.
          </Badge>
        </Text>
      </Box>
    </Flex>
  );
};

export default Hero;
