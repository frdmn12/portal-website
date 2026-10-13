import {
  Box,
  Button,
  Card,
  CardFooter,
  Heading,
  Image,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import placeholder from '../assets/ImagePlaceholder.svg';

const CardTravel = ({ title, location, image, ...rest }) => {
  return (
    <Card
      position="relative"
      overflow="hidden"
      w="100%"
      sx={{ aspectRatio: '4 / 5' }}
      bg="gray.600"
      _hover={{
        transform: 'translateY(-5px)',
        transition: 'transform 0.3s',
      }}
      {...rest}
    >
      <Image
        src={image}
        alt={title}
        fallbackSrc={placeholder}
        loading="lazy"
        referrerPolicy="no-referrer"
        position="absolute"
        inset={0}
        w="100%"
        h="100%"
        objectFit="cover"
      />
      {/* Darkens the bottom of the photo so the white title stays readable
          whatever the picture looks like. */}
      <Box
        position="absolute"
        inset={0}
        bgGradient="linear(to-t, blackAlpha.800 0%, blackAlpha.500 35%, transparent 70%)"
        pointerEvents="none"
      />
      <CardFooter position="relative" mt="auto" p={{ base: 3, md: 5 }}>
        <Box>
          <Heading
            color="white"
            size={{ base: 'sm', md: 'md', lg: 'lg' }}
            mb={2}
            textShadow="0 1px 6px rgba(0,0,0,0.6)"
          >
            {title}
          </Heading>
          <Link href={location} isExternal _hover={{ textDecoration: 'none' }}>
            <Button
              as="span"
              variant={useColorModeValue('solid', 'outline')}
              rightIcon={<FaMapMarkerAlt />}
              fontFamily="heading"
              size={{ base: 'xs', lg: 'sm' }}
              colorScheme="teal"
            >
              Cek Lokasi
            </Button>
          </Link>
        </Box>
      </CardFooter>
    </Card>
  );
};
export default CardTravel;
