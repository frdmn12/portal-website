import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import CardTravel from '../../../components/CardTravel';
import { TravelPlace } from '../../../variables/general';

const Travel = () => {
  const bg = useColorModeValue('gray.300', 'blue.900');
  const textColor = useColorModeValue('blue.700', 'gray.100');

  return (
    <Box bg={bg} py={{ base: 8, lg: 14 }}>
      <Container maxW="6xl" px={{ base: 4, md: 6, lg: 8 }}>
        <Box textAlign="center" mb={{ base: 6, lg: 8 }}>
          <Heading
            as="h2"
            data-reveal="up"
            fontFamily="heading"
            fontSize={{ base: '25px', md: '35px', lg: '45px' }}
            fontWeight={700}
            mb={2}
            color={textColor}
          >
            Wisata
          </Heading>
          <Text
            data-reveal="up"
            data-delay="0.1"
            fontFamily="heading"
            fontWeight="500"
            color={textColor}
          >
            Wisata wisata terkenal di daerah Kabupaten Probolinggo
          </Text>
        </Box>
        <Grid
          data-stagger="zoom"
          templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }}
          gap={{ base: 3, md: 5 }}
        >
          {TravelPlace.map(place => (
            <GridItem key={place.title} minW={0}>
              <CardTravel
                title={place.title}
                image={place.image}
                location={place.location}
              />
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Travel;
