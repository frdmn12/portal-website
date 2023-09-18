import { Flex, ListItem, Text, UnorderedList } from '@chakra-ui/react';

const DataWilayah = () => {
  return (
    <Flex direction={"column"}>
      <Text fontFamily="heading" fontWeight="600" fontSize="35px">Data Wilayah</Text>
      <UnorderedList>
        <ListItem>Nama Resmi : Kabupaten Probolinggo </ListItem>
        <ListItem>Ibu Kota : Kraksaan </ListItem>
        <ListItem>Provinsi Jawa Timur </ListItem>
        <ListItem>Batas Wilayah </ListItem>
        <ListItem>Utara : Selat Madura </ListItem>
        <ListItem>Selatan : Kabupaten Lumajang dan Kabupaten Malang </ListItem>
        <ListItem>Barat : Kabupaten Pasuruan </ListItem>
        <ListItem>Timur : Kabupaten Situbondo dan Kabupaten Jember </ListItem>
        <ListItem>Utara Bagian Tengah : Kota Probolinggo </ListItem>
        <ListItem>Luas Wilayah : 169.616,65 Ha atau + 1.696,17 Km2 </ListItem>
        <ListItem>
          Jumlah Penduduk : 1.092.036 jiwa (Sensus Penduduk 2008){' '}
        </ListItem>
        <ListItem>Wilayah Administrasi : </ListItem>
        <ListItem>Kecamatan 24 Desa 325 </ListItem>
        <ListItem>Kelurahan 5 </ListItem>
        <ListItem>Website Resmi : http://www.probolinggokab.go.id </ListItem>
      </UnorderedList>
    </Flex>
  );
};

export default DataWilayah;
