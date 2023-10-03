import {
    Badge,
  Box,
  Flex,
  Highlight,
  Image,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import LogoDaerah from '../../../assets/Logo_Kabupaten_Probolinggo_-_Seal_of_Probolinggo_Regency.png';

const LogoKabupaten = () => {
  return (
    <Flex fontFamily="heading" flexDirection="column" gap={4}>
      <Text fontWeight="600" fontSize="35px">
        Logo Kabupaten
      </Text>
      <Box display="flex" justifyContent="center">
        <Image
          src={LogoDaerah}
          boxSize={{ base: '150px', md: '250px', lg: '300px' }}
          fit={'contain'}
        />
      </Box>
      <Box>
        <Text fontSize="25px">Makna Lambang Kabupaten Probolinggo</Text>
        <UnorderedList>
          <ListItem>
            Bintang berwarna kuning merupakan pertanda KETUHANAN YANG MAHA ESA.
          </ListItem>
          <ListItem>
            Sungai sebagai pertanda “Sungai Banger”. Sebuah sungai yang semula
            memberi nama daerah Kabupaten ini pada zaman Bupati Probolinggo yang
            pertama Kiyai Tumenggung Djojolelono (tahun : 1746-1768).
          </ListItem>
          <ListItem>
            Angin berwarna merah putih merupakan ciri khas dari daerah Kabupaten
            Probolinggo, yang terkenal dengan sebutan “ANGIN GENDING”. Angin
            yang arusnya sangat deras yang datang setiap musim kemarau dari arah
            tenggara.
          </ListItem>
          <ListItem>
            Gunung, sebagai pertanda “GUNUNG BROMO”. Sebuah gunung di daerah
            Kabupaten Probolinggo, terletak di Pegunungan Tengger dalam sebuah
            kaldera yang luas dengan garis tengahnya kurang lebih 11 (sebelas)
            kilometer.
          </ListItem>
          <ListItem>
            Dataran tanah berwarna hijau, merupakan pertanda keadaan tanah
            daerah Kabupaten Probolinggo yang cukup subur.
          </ListItem>
          <ListItem>
            Gelombang air laut, yang menunjukkan letak daerah Kabupaten
            Probolinggo di tepi pantai Selat Madura.
          </ListItem>
          <ListItem>
            Daun anggur sebanyak 4 (empat) helai berwarna hijau muda, dengan
            buah anggur 17 (tujuh belas) buah menunjukkan hasil buah-buahan khas
            daerah Kabupaten Probolinggo (terkenal sejak tahun 1913).
          </ListItem>
          <ListItem>
            Daun mangga sebanyak 5 (lima) helai berwarna hijau, dengan buah
            mangga 8 (delapan) buah, menunjukkan buah-buahan yang terkenal di
            seluruh Indonesia dan di sekitarnya serta merupakan buah-buahan khas
            daerah Kabupaten Probolinggo.
          </ListItem>
          <ListItem>
            Pita dasar dengan warna putih berisi Semboyan “PRASAJA NGESTI
            WIBAWA”. Makna semboyan : PRASAJA, berarti : bersahaja, terbuka,
            jujur, beres dan terus terang. NGESTI, berarti : menginginkan,
            menciptakan dan mempunyai tujuan.WIBAWA, berarti : mukti, luhur dan
            mulia. “PRASAJA NGESTI WIBAWA”, berarti : Dengan rasa tulus ikhlas
            bersahaja, beres menuju kemuliaan.
          </ListItem>
        </UnorderedList>
      </Box>
      <Box>
        <Text fontSize="25px">Makna Warna-warna Yang Digunakan :</Text>
        <UnorderedList>
          <ListItem>
            Warna Kuning berarti : Keagungan, Keluhuran, Kemuliaan.
          </ListItem>
          <ListItem>Warna Biru berarti : Kesetiaan.</ListItem>
          <ListItem>Warna Hijau berarti : Kesuburan, Kemakmuran.</ListItem>
        </UnorderedList>
      </Box>
    </Flex>
  );
};

export default LogoKabupaten;
