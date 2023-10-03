import { Box, Divider, Flex, Heading, Text, Link } from '@chakra-ui/react';
import DataWilayah from './components/DataWilayah';
import VisiMisi from './components/VisiMisi';
import LogoKabupaten from './components/LogoKabupaten';
import KondisiGeo from './components/KondisiGeo';

export default function ProfilPage() {
  return (
    <Flex m="30px 10px" gap={50} flexDirection={{ base: 'column', lg: 'row' }}>
      <Box textAlign={{ base: 'left', lg: 'right' }} fontFamily="heading">
        <Heading mb={3}>Profil Kabupaten Probolinggo</Heading>
        <Link href="#datawilayah">
          <Text decoration="underline">Data Wilayah</Text>
        </Link>
        <Link href="#visimisi">
          <Text decoration="underline">Visi Misi</Text>
        </Link>
        <Link href="#logokabupaten">
          <Text decoration="underline">Logo Kabupaten</Text>
        </Link>
        <Link href="#kondisigeografis">
          <Text decoration="underline">Kondisi Geografis</Text>
        </Link>
      </Box>
      <Box>
        <Flex flexDirection="column" gap={8}>
          <Box id="datawilayah">
            <DataWilayah id="datawilayah" />
          </Box>
          <Box id="visimisi">
            <Divider />
            <VisiMisi />
          </Box>
          <Box id="logokabupaten">
            <Divider />
            <LogoKabupaten />
          </Box>
          <Box id="kondisigeografis">
            <Divider />
            <KondisiGeo />
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}
