import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Divider,
  Flex,
  Grid,
  Heading,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
} from '@chakra-ui/react';
import CardNews from '../../components/CardNews.js';
import SmallCardNews from '../../components/SmallCardNews';
import {
  kesehatanNews,
  pemerintahanNews,
  pendidikanNews,
  smallKesehatanNews,
  smallPemerintahanNews,
  smallPendidikanNews,
} from '../../variables/general';

const SECTIONS = [
  {
    id: 'pemerintahan',
    title: 'Pemerintahan',
    featured: pemerintahanNews,
    small: smallPemerintahanNews,
  },
  {
    id: 'pendidikan',
    title: 'Pendidikan',
    featured: pendidikanNews,
    small: smallPendidikanNews,
  },
  {
    id: 'kesehatan',
    title: 'Kesehatan',
    featured: kesehatanNews,
    small: smallKesehatanNews,
  },
];

// Two featured stories plus a short list. Every card is a direct child of the
// grid so a single stagger animation covers them all:
//   phone    one column
//   tablet   two columns
//   desktop  featured | featured | list of small cards (stacked, one column)
const NewsSection = ({ id, title, featured, small }) => (
  <Box id={id} my={{ base: 6, lg: 10 }}>
    <Heading size="lg" data-reveal="left">
      {title}
    </Heading>
    <Divider mt={1} />
    <Grid
      data-stagger="up"
      mt={5}
      gap={5}
      templateColumns={{
        base: '1fr',
        md: 'repeat(2, minmax(0, 1fr))',
        xl: 'minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1.1fr)',
      }}
    >
      {featured.map(news => (
        <Box key={news.title} gridRow={{ xl: 'span 3' }}>
          <CardNews
            title={news.title}
            image={news.image}
            date={news.date}
            caption={news.caption}
          />
        </Box>
      ))}
      {small.map(news => (
        <Box key={news.title}>
          <SmallCardNews
            title={news.title}
            image={news.image}
            date={news.date}
            h="100%"
          />
        </Box>
      ))}
    </Grid>
  </Box>
);

export default function NewsPage() {
  return (
    <Container maxW="7xl" px={{ base: 4, md: 6, lg: 8 }} py={{ base: 6, lg: 10 }}>
      <Box fontFamily="heading">
        <Heading size={{ base: 'lg', md: 'xl' }} data-reveal="left">
          Informasi Dan Berita Daerah
        </Heading>
        <Breadcrumb mt={2} data-reveal="fade" data-delay="0.15">
          <BreadcrumbItem>
            <BreadcrumbLink as={RouterLink} to="/">
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink as={RouterLink} to="/news">
              Berita
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
      <Flex data-stagger="zoom" gap={3} wrap="wrap" my={5}>
        {SECTIONS.map(section => (
          <Button
            key={section.id}
            as={RouterLink}
            to={`#${section.id}`}
            colorScheme="teal"
            fontFamily="default"
          >
            {section.title}
          </Button>
        ))}
      </Flex>
      {SECTIONS.map(section => (
        <NewsSection key={section.id} {...section} />
      ))}
    </Container>
  );
}
