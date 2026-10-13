import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react';
import DataWilayah from './components/DataWilayah';
import VisiMisi from './components/VisiMisi';
import LogoKabupaten from './components/LogoKabupaten';
import KondisiGeo from './components/KondisiGeo';

const MENU = [
  { id: 'datawilayah', label: 'Data Wilayah' },
  { id: 'visimisi', label: 'Visi Misi' },
  { id: 'logokabupaten', label: 'Logo Kabupaten' },
  { id: 'kondisigeografis', label: 'Kondisi Geografis' },
];

export default function ProfilPage() {
  return (
    <Container maxW="7xl" px={{ base: 4, md: 6, lg: 8 }} py={{ base: 6, lg: 10 }}>
      <Flex gap={{ base: 6, lg: 12 }} flexDirection={{ base: 'column', lg: 'row' }}>
        <Box
          as="nav"
          flexShrink={0}
          w={{ lg: '300px' }}
          textAlign={{ base: 'left', lg: 'right' }}
          fontFamily="heading"
        >
          <Heading mb={3} size={{ base: 'lg', md: 'xl' }} data-reveal="left">
            Profil Kabupaten Probolinggo
          </Heading>
          <Stack data-stagger="left" spacing={1}>
            {MENU.map(item => (
              <Box
                key={item.id}
                as={RouterLink}
                to={`#${item.id}`}
                alignSelf={{ base: 'flex-start', lg: 'flex-end' }}
                py={1}
              >
                <Text decoration="underline">{item.label}</Text>
              </Box>
            ))}
          </Stack>
        </Box>
        <Box flex={1} minW={0}>
          <Flex flexDirection="column" gap={8}>
            <Box id="datawilayah">
              <DataWilayah />
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
    </Container>
  );
}
