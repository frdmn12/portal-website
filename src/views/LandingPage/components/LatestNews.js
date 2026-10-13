import {
  Container,
  Heading,
  Grid,
  GridItem,
  Card,
  CardHeader,
  CardBody,
  Badge,
  CardFooter,
  Button,
  Text,
} from '@chakra-ui/react';
import CoverImage from '../../../components/CoverImage';
import { latestNews } from '../../../variables/general';

const LatestNews = () => {
  return (
    <Container maxW="7xl" px={{ base: 4, md: 6, lg: 8 }} py={{ base: 4, lg: 8 }}>
      <Heading
        as="h2"
        data-reveal="left"
        fontFamily="heading"
        fontSize={{ base: '25px', md: '35px', lg: '40px' }}
        fontWeight={700}
        mb={{ base: 4, lg: 6 }}
        color="#4F7BA6"
      >
        Berita Terbaru
      </Heading>
      <Grid
        data-stagger="up"
        templateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }}
        templateRows={{ lg: 'repeat(2, auto)' }}
        gap={{ base: 4, lg: 6 }}
      >
        {latestNews.map((news, index) => (
          // The first story is the featured one and spans both rows.
          <GridItem key={news.title} rowSpan={{ lg: index === 0 ? 2 : 1 }}>
            <Card
              h="100%"
              overflow="hidden"
              _hover={{
                transform: 'translateY(-5px)',
                transition: 'transform 0.3s',
              }}
            >
              {news.image && <CoverImage src={news.image} alt={news.title} />}
              <CardHeader pb={0}>
                <Badge
                  colorScheme="green"
                  fontSize={{ base: 'sm', lg: 'md' }}
                  mb="2"
                  fontFamily="default"
                >
                  {news.date}
                </Badge>
                <Heading size={{ base: 'sm', lg: 'md' }}>{news.title}</Heading>
              </CardHeader>
              <CardBody fontFamily="body" pb={0}>
                <Text fontSize={{ base: 'sm', lg: 'lg' }}>{news.caption}</Text>
              </CardBody>
              <CardFooter>
                <Button fontFamily={'heading'} colorScheme="teal" size={{ base: 'sm', lg: 'md' }}>
                  {news.category}
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
};

export default LatestNews;
