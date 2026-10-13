import {
  Card,
  Stack,
  CardBody,
  Heading,
  Badge,
  Box,
} from '@chakra-ui/react';
import CoverImage from './CoverImage';

const SmallCardNews = ({ image, title, date, ...rest }) => {
  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow="hidden"
      variant="outline"
      w="100%"
      _hover={{
        transform: 'translateY(-5px)',
        transition: 'transform 0.3s',
      }}
      size="sm"
      {...rest}
    >
      <Box
        flexShrink={0}
        w={{ base: '100%', sm: '200px', xl: '150px' }}
        // On the row layout the image fills the card's full height.
        alignSelf={{ sm: 'stretch' }}
      >
        <CoverImage
          src={image}
          alt={title}
          ratio={{ base: 16 / 9, sm: 4 / 3 }}
          h="100%"
        />
      </Box>
      <Stack justify="center" minW={0}>
        <CardBody>
          <Heading size="sm" noOfLines={3}>
            {title}
          </Heading>
          <Badge fontFamily="default" mt={3} px={2} py={1}>
            {date}
          </Badge>
        </CardBody>
      </Stack>
    </Card>
  );
};

export default SmallCardNews;
