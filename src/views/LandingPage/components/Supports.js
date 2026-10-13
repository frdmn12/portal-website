import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';
import { institutionSupports } from '../../../variables/general';

const Supports = () => {
  const bgSupport = useColorModeValue('transparent', 'gray.200');

  return (
    <Container
      maxW="6xl"
      px={{ base: 4, md: 6, lg: 8 }}
      pt={{ base: 6, lg: 12 }}
      pb={{ base: 10, lg: 16 }}
    >
      <Heading
        as="h2"
        data-reveal="up"
        textAlign="center"
        fontFamily={'heading'}
        fontSize={{ base: '25px', md: '35px', lg: '45px' }}
        fontWeight={700}
        mb={{ base: 5, lg: 8 }}
        color={useColorModeValue('blue.700', 'gray.100')}
      >
        Lembaga & Program Kabupaten
      </Heading>
      {/* Flex + wrap (instead of a grid) keeps a short last row centred. */}
      <Flex
        data-stagger="zoom"
        justifyContent="center"
        flexWrap="wrap"
        gap={{ base: 3, md: 5 }}
      >
        {institutionSupports.map(institution => (
          <Link
            key={institution.title}
            href="https://probolinggokab.go.id/"
            isExternal
            w={{
              base: 'calc(50% - 6px)',
              md: 'calc(25% - 15px)',
              lg: 'calc(25% - 15px)',
            }}
          >
            <Box
              h={{ base: '80px', md: '110px', lg: '140px' }}
              border={{ base: '2px solid black', lg: '3px solid black' }}
              rounded="lg"
              display="flex"
              justifyContent="center"
              alignItems="center"
              p={3}
              bg={bgSupport}
              transition="background 0.2s"
              _hover={{ bg: 'gray.100' }}
            >
              <Image
                src={institution.image}
                alt={institution.title}
                objectFit="contain"
                maxW="100%"
                maxH="100%"
              />
            </Box>
          </Link>
        ))}
      </Flex>
    </Container>
  );
};

export default Supports;
