import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import DataWilayah from './components/DataWilayah';

export default function ProfilPage() {
  return (
    <Flex m="30px 10px" gap={50}>
      <Box textAlign="right" fontFamily="heading" w="500px">
        <Heading mb={3}>Profil Kabupaten Probolinggo</Heading>
        <Text decoration="underline">Data Wilayah</Text>
        <Text decoration="underline">Visi Misi</Text>
        <Text decoration="underline">Logo Kabupaten</Text>
        <Text decoration="underline">Kondisi Geografis</Text>
        <Text decoration="underline">Daftar Nama Kepala SKPD</Text>
      </Box>
      <Flex direction="column">
            <DataWilayah/>
            <DataWilayah/>
            <DataWilayah/>
      </Flex>
    </Flex>
  );
}
