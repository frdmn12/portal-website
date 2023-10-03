import {
  Flex,
  ListItem,
  Text,
  OrderedList,
  Box,
} from '@chakra-ui/react';

const VisiMisi = () => {
  return (
    <Flex flexDirection="column">
      <Box my={5}>
        <Text fontFamily="heading" fontWeight="600" fontSize="35px">
          Visi Misi
        </Text>
        <Text fontFamily="heading" fontSize="25px">
          Visi
        </Text>
        <Text fontFamily="heading">
          Terwujudnya Kabupaten Probolinggo Yang Sejahtera, Berkeadilan,
          Mandiri, Berwawasan Lingkungan dan Berakhlak Mulia.
        </Text>
      </Box>
      <Box>
        <Text fontFamily="heading" fontSize="25px">
          Misi
        </Text>
        <OrderedList fontFamily="heading">
          <ListItem>
            Mewujudkan Kesejahteraan Masyarakat Melalui Peningkatan Daya Saing
          </ListItem>
          <ListItem>
            Daerah, Pertumbuhan Ekonomi Berbasis Kerakyatan, dan Optimalisasi
          </ListItem>
          <ListItem>Pengelolaan Sumber Daya Yang Berkelanjutan</ListItem>
          <ListItem>
            Mewujudkan Masyarakat Yang Berakhlak Mulia Melalui Peningkatan
          </ListItem>
          <ListItem>
            Kualitas Pelaksanaan Otonomi Daerah Dalam Penyelenggaraan
          </ListItem>
          <ListItem>Kepemerintahan Yang Baik dan Bersih</ListItem>
        </OrderedList>
      </Box>
    </Flex>
  );
};

export default VisiMisi;
