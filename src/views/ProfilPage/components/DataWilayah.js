import {
  AspectRatio,
  Flex,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react';

const DataWilayah = () => {
  return (
    <Flex direction={'column'}>
      <Text fontFamily="heading" fontWeight="600" fontSize="35px">
        Data Wilayah
      </Text>
      <UnorderedList fontFamily="heading" spacing={3}>
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
      <AspectRatio
        ratio={16 / 9}
        my={5}
        maxWidth={{ base: '500px', lg: '700px' }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252954.5511410262!2d113.1205043627421!3d-7.851575650512565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd6538d9564fb35%3A0x3027a76e352bde0!2sProbolinggo%20Regency%2C%20East%20Java!5e0!3m2!1sen!2sid!4v1696338806586!5m2!1sen!2sid"
          title="embed_location"
        />
      </AspectRatio>
    </Flex>
  );
};

export default DataWilayah;
