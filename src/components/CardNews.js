import {
  Card,
  Text,
  CardHeader,
  CardBody,
  Badge,
  Heading,
  Button,
  CardFooter,
  Image
} from '@chakra-ui/react';
import Image404 from "../assets/Image404.png"

export default function CardNews() {
  return (
    <Card
      size="sm"
      _hover={{
        transform: 'translateY(-5px)',
        transition: 'transform 0.3s',
      }}
      w={"300px"}
    //   h="100%"
      m={{ base: '3' }}
    >
        <Image
        src={Image404}
        alt='ImageNews'
        />
      <CardHeader pb={0}>
        <Badge colorScheme="green" fontSize="md" mb="2" fontFamily="default">
          11 / 08 / 2023
        </Badge>
        <Heading size={{ base: 'sm', lg: 'sm' }}>
          Teken Nota Kesepakatan KUA-PPAS P-APBD TA 2023
        </Heading>
      </CardHeader>
      <CardBody fontFamily="body" pb={0}>
        <Text fontSize={{ lg: 'sm', base: 'xs' }}>
          Setelah melalui tahapan pembahasan oleh Tim Anggaran Pemerintah Daerah
          (TAPD) dan Badan Anggaran (Banggar) DPRD Kabupaten Probolinggo, Jum’at
          (11/8/2023) dilakukan penandatanganan (teken) Nota Kesepakatan Bersama
          antara Pemkab Probolinggo dengan DPRD Kabupaten Probolinggo Tentang
          Kebijakan Umum Anggaran (KUA) dan Prioritas serta Plafon Anggaran
          Sementara (PPAS) Perubahan Anggaran Pendapatan dan Belanja Daerah
          (P-APBD) Kabupaten Probolinggo Tahun Anggaran 2023.
        </Text>
      </CardBody>
      <CardFooter>
        <Button fontFamily={'heading'} colorScheme="teal">
          Kesehatan
        </Button>
      </CardFooter>
    </Card>
  );
}
