import {
  Flex,
  Text,
  Link,
  Grid,
  GridItem,
  Card,
  CardHeader,
  CardBody,
  Heading,
  Image,
  Badge,
  CardFooter,
  Button,
  Box,
} from '@chakra-ui/react';

const LatestNews = () => {
  return (
    <Flex flexDirection={'column'} p={{ lg: '40px' }} m={{ lg: '5px' }}>
      <Text
        fontFamily={'heading'}
        fontSize={{ base: '25px', md: '35px', lg: '45px' }}
        fontWeight={700}
        mb={{base: "5px", lg: '10px' }}
        ml={{base: "5px", lg: '10px' }}
        color="#4F7BA6"
      >
        Berita Terbaru
      </Text>
      <Grid
        templateRows={{ base : "", lg : "repeat(2, 1fr)" }}
        templateColumns={{ base : "1fr", lg : "repeat(2, 1fr)" }}
        gap={3}
        m="10px"
      >
        <GridItem rowSpan={2} colSpan={1}>
          <Card
            // size="md"
            _hover={{
              transform: 'translateY(-5px)',
              transition: 'transform 0.3s',
            }}
            h="100%"
            m={{ base: "3" }}
          >
            <Image
              src="https://probolinggokab.go.id/wp-content/uploads/2023/08/IMG-20230812-WA0100-1200x630.jpg"
              borderRadius="lg"
              m={3}
            />
            <CardHeader pb={0}>
              <Badge colorScheme="green" fontSize="md" mb="2" fontFamily="default">
                12 / 08 / 2023
              </Badge>
              <Heading size={{ base : "sm" , lg : "md" }}>
                Pemkab-KPN Ikuti Sosialisasi Program PTSL Tahun 2022 Secara
                Virtual
              </Heading>
            </CardHeader>
            <CardBody fontFamily="body" pb={0}>
              <Text fontSize={{ lg : "lg", base : "sm" }} >
                Ratusan Kepala Sekolah dan guru dari jenjang PAUD, SD dan SMP di
                Kabupaten Probolinggo mengikuti sosialisasi akuntabilitas
                pengelolaan dana Bantuan Operasional Sekolah (BOS) di Auditorium
                Madakaripura, Kantor Bupati Probolinggo, Sabtu (12/8/2023).
              </Text>
            </CardBody>
            <CardFooter>
              <Button fontFamily={'heading'} colorScheme="teal">
                Kesehatan
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem colSpan={1} >
          <Card
            size="lg"
            _hover={{
              transform: 'translateY(-5px)',
              transition: 'transform 0.3s',
            }}
            h="100%"
            m={{ base: "3" }}
          >
            <CardHeader pb={0}>
              <Badge colorScheme="green" fontSize="md" mb="2" fontFamily="default">
                12 / 08 / 2023
              </Badge>
              <Heading size={{ base : "sm" , lg : "md" }}>
                Ribuan ASN Kerja Bhakti Bersih-Bersih Stadion Gelora Merdeka
                Kraksaan
              </Heading>
            </CardHeader>
            <CardBody fontFamily="body" pb={0}>
              <Text fontSize={{ lg : "lg", base : "sm" }} >
                Ribuan Aparatur Sipil Negara (ASN) dari Organisasi Perangkat
                Daerah (OPD) dan Kecamatan bersama dengan anggota TNI, Pramuka
                dan Karang Taruna melakukan kerja bakti bersih-bersih Stadion
                Gelora Merdeka Kraksaan, Sabtu (12/8/2023).
              </Text>
            </CardBody>
            <CardFooter>
              <Button fontFamily={'heading'} colorScheme="teal">
                Kemasyarakatan
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem colSpan={1}>
          <Card
          size="md"
            _hover={{
              transform: 'translateY(-5px)',
              transition: 'transform 0.3s',
            }}
            h="100%"
            m={{ base: "3" }}
          >
            <CardHeader pb={0}>
              <Badge colorScheme="green" fontSize="md" mb="2" fontFamily="default">
                11 / 08 / 2023
              </Badge>
              <Heading size={{ base : "sm" , lg : "md" }}>
                Teken Nota Kesepakatan KUA-PPAS P-APBD TA 2023
              </Heading>
            </CardHeader>
            <CardBody fontFamily="body" pb={0}>
              <Text fontSize={{ lg : "lg", base : "sm" }} >
                Setelah melalui tahapan pembahasan oleh Tim Anggaran Pemerintah
                Daerah (TAPD) dan Badan Anggaran (Banggar) DPRD Kabupaten
                Probolinggo, Jum’at (11/8/2023) dilakukan penandatanganan
                (teken) Nota Kesepakatan Bersama antara Pemkab Probolinggo
                dengan DPRD Kabupaten Probolinggo Tentang Kebijakan Umum
                Anggaran (KUA) dan Prioritas serta Plafon Anggaran Sementara
                (PPAS) Perubahan Anggaran Pendapatan dan Belanja Daerah (P-APBD)
                Kabupaten Probolinggo Tahun Anggaran 2023.
              </Text>
            </CardBody>
            <CardFooter>
              <Button fontFamily={'heading'} colorScheme="teal">
                Kesehatan
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default LatestNews;
