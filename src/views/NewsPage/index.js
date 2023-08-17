import {
  Box,
  Divider,
  Flex,
  Heading,
  Text,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import LatestNews from '../LandingPage/components/LatestNews';
import CardTravel from '../../components/CardTravel';
import CardNews from '../../components/CardNews.js';
// import CardNews from '../../components/CardNews';

export default function NewsPage() {
  return (
    <Flex direction="column" m={30}>
      <Box display="row" fontFamily="heading">
        <Heading>Informasi Dan Berita Daerah</Heading>
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="/news ">Berita</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
      <Divider my={15} size={'lg'} />
      <Grid templateColumns="repeat(2, 1fr)" gap={3}>
        <GridItem colSpan={1} >
          <Flex flexWrap="wrap">
            <CardNews />
            <CardNews />
            <CardNews />
            <CardNews />
          </Flex>
        </GridItem>
      </Grid>
    </Flex>
  );
}
