import { Flex, ListItem, OrderedList, Text, Box } from '@chakra-ui/react';

const KondisiGeo = () => {
  return (
    <Flex flexDirection="column" fontFamily="heading" gap={4}>
      <Text fontWeight="600" fontSize="35px">
        Kondisi Geografis
      </Text>
      <Text>
        Kabupaten Probolinggo merupakan salah satu Kabupaten yang terletak di
        Provinsi Jawa Timur berada pada posisi 112’50’ – 113’30’ Bujur Timur
        (BT) dan 7’40’ – 8’10’ Lintang Selatan (LS), dengan luas wilayah sekitar
        169.616,65 Ha atau + 1.696,17 km2 (1,07 % dari luas daratan dan lautan
        Propinsi Jawa Timur).
      </Text>
      <Box>
        <Text fontWeight={700}>Dengan rincian sebagai berikut :</Text>
        <OrderedList>
          <ListItem>Permukiman : 147,74 Km2</ListItem>
          <ListItem>Persawahan : 373,13 Km2</ListItem>
          <ListItem>Tegal : 513,80 Km2</ListItem>
          <ListItem>Perkebunan : 32,81 Km2</ListItem>
          <ListItem>Hutan : 426,46 Km2</ListItem>
          <ListItem>Tambak/Kolam : 13,99 Km2</ListItem>
          <ListItem>Pulau Gili Ketapang : 0,60 Km2</ListItem>
          <ListItem>Lain-lain : 188,24 Km2</ListItem>
        </OrderedList>
      </Box>
      <Box>
        <Text fontWeight={700}>Wilayah Kabupaten Probolinggo berbatasan dengan :</Text>
        <OrderedList>
          <ListItem>Sebelah Utara : Selat Madura</ListItem>
          <ListItem>
            Sebelah Timur : Kabupaten Situbondo dan Kabupaten Jember
          </ListItem>
          <ListItem>Sebelah Barat : Kabupaten Pasuruan</ListItem>
          <ListItem>
            Sebelah Selatan : Kabupaten Lumajang dan Kabupaten Malang
          </ListItem>
          <ListItem>
            Sedangkan di sebelah Utara bagian tengah terdapat Daerah Otonom
            yaitu Kota Probolinggo
          </ListItem>
        </OrderedList>
      </Box>
      <Box>
        <Text>
        Dilihat dari geografisnya Kabupaten Probolinggo terletak di lereng pegunungan yang membujur dari Barat ke Timur, yaitu Gunung Semeru, Argopuro, Lamongan dan Tengger. Selain itu terdapat gunung lainnya, yaitu Gunung Bromo, Widodaren, Gilap, Gambir, Jombang, Cemoro Lawang, Malang dan Batujajar. Dilihat dari ketinggian berada pada 0-2500 m diatas permukaan laut dengan temperatur rata-rata 27’C – 30’C.
        </Text>
      </Box>
      <Box>
        <Text>
        Lokasi Kabupaten Probolinggo yang berada di sekitar garis khatulistiwa menyebabkan daerah ini mengalami perubahan iklim dua jenis setiap tahun, yaitu musim kemarau dan musim penghujan. Untuk musim kemarau berkisar pada bulan April hingga bulan Oktober dengan rata-rata curah hujan + 29,5 mm per hari hujan, sedangkan musim penghujan dari bulan Oktober hingga bulan April dengan rata-rata curah hujan + 229 mm per hari hujan. Curah hujan yang cukup tinggi terjadi pada bulan Desember sampai dengan bulan Maret dengan rata-rata curah hujan + 360 mm per hari hujan. Diantara dua musim tersebut terdapat musim pancaroba yang biasanya ditandai dengan tiupan angin kering yang cukup kencang yang berhembus dari arah Tenggara ke Barat Laut biasa disebut “Angin Gending”
        </Text>
      </Box>
      <Box>
        <Text>
        Selain itu Kabupaten Probolinggo memiliki beberapa obyek wisata yaitu Gunung Bromo, Air Terjun Madakaripura, Pulau Gili Ketapang dengan taman lautnya, Pantai Bentar, Arum Jeram Sungai Pekalen, Ranu Segaran dan Sumber Air Panas serta Candi Jabung yang mencerminkan kejayaan masa lalu.
        </Text>
      </Box>
      <Box>
        <Text>
        Adapun pembagian wilayah administratif, secara yuridis formal dibentuk dengan Undang-Undang Nomor 12 Tahun 1950 Tentang Pembentukan Daerah- daerah Kabupaten Dalam Lingkungan Propinsi Jawa Timur, yang terdiri dari 24 wilayah Kecamatan, 325 Desa dan 5 Kelurahan, 1.642 Rukun Warga (RW) dan 5.864 Rukun Tetangga (RT)
        </Text>
      </Box>
    </Flex>
  );
};

export default KondisiGeo;
