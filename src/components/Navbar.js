import {
  Box,
  Flex,
  Text,
  IconButton,
  // Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Image,
  // Center,
  Link,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import Logo from '../assets/LogoKabProb.png';

function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', '#1C395A')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex
          alignItems="center"
          flex={{ base: 1 }}
          justify={{ base: 'center', md: 'start' }}
        >
          <IconButton
            aria-label="Logo Kab"
            isRound={true}
            icon={
              <Box
                bgColor="blue.700" // Ganti dengan skema warna yang Anda inginkan
                p={2}
                rounded="full"
              >
                <Image src={Logo} alt="Logo Kab" boxSize={6} />
              </Box>
            }
          />
          <Link href="/">
            <Text
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily="heading"
              color={useColorModeValue('gray.600', 'white')}
              fontWeight={700}
              ml={2}
            >
              Kab Probolinggo
            </Text>
          </Link>
          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}
          alignItems={'center'}
        >
          <ColorModeSwitcher />
        </Stack>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction={'row'} spacing={4} fontFamily="heading">
      {NAV_ITEMS.map(navItem => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Box
                as="a"
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'xs'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Box>
            </PopoverTrigger>
            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}
              >
                <Stack>
                  {navItem.children.map(child => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Box
      as="a"
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('teal.50', 'gray.900') }}
    >
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'teal.400' }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}
        >
          <Icon color={'teal.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Box>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}
      fontFamily={'heading'}
    >
      {NAV_ITEMS.map(navItem => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as="a"
        href={href ?? '#'}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Box>
      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}
        >
          {children &&
            children.map(child => (
              <Box as="a" key={child.label} py={2} href={child.href}>
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: 'Profil',
    children: [
      {
        label: 'Data Wilayah',
        href: '#',
      },
      {
        label: 'Visi Misi',
        href: '#',
      },
      {
        label: 'Logo Kabupaten',
        href: '#',
      },
      {
        label: 'Kondisi Geografis',
        href: '#',
      },
      {
        label: 'Daftar Nama Kepala SKPD',
        href: '#',
      },
    ],
  },
  {
    label: 'Prim',
    children: [
      {
        label: 'Data Fisik Konstruksi 2022',
        // subLabel : `Tahun 2022`,
        href: '#',
      },
      {
        label: 'DPA Bidang Bina Marga',
        href: '#',
      },
      {
        label: 'Tahun Anggaran',
        // subLabel : `Tahun 2022`,
        href: '#',
      },
      {
        label: 'Daftar Ruas Penanganan',
        // subLabel : `Tahun 2022`,
        href: '#',
      },
      {
        label: 'Peta Penanganan Prim',
        href: '#',
      },
    ],
  },

  {
    label: 'Kinerja',
    href: '#',
    children: [
      {
        label: 'Kecamatan Besuk',
        href: '#',
      },
      {
        label: 'Kecamatan Bantaran',
        href: '#',
      },
      {
        label: 'Kecamatan Banyuanyar',
        href: '#',
      },
      {
        label: 'Kecamatan Dringu',
        href: '#',
      },
      {
        label: 'Kecamatan Gending',
        href: '#',
      },
      {
        label: 'Kecamatan Kraksaan',
        href: '#',
      },
      // {
      //   label: 'Kecamatan Krejengan',
      //   href: '#',
      // },
      // {
      //   label: 'Kecamatan Krucil',
      //   href: '#',
      // },
      // {
      //   label: 'Kecamatan Kuripan',
      //   href: '#',
      // },
      // {
      //   label: 'Kecamatan Kotanyar',
      //   href: '#',
      // },
      // {
      //   label: 'Kecamatan Leces',
      //   href: '#',
      // },
      // {
      //   label: 'Kecamatan Lumbang',
      //   href: '#',
      // },
      // {
      //   label: 'Kecamatan Maron',
      //   href: '#',
      // },
      // {
      //   label: 'Kecamatan Paiton',
      //   href: '#',
      // },
      // {
      //   label: 'Kecamatan Pajarakan',
      //   href: '#',
      // },
      // {
      //   label: 'Kecamatan Pakuniran',
      //   href: '#',
      // },
      // {
      //   label: 'Kecamatan Sumber',
      //   href: '#',
      // },
    ]
  },
  {
    label: 'Wisata',
    href: '#',
  },
  {
    label: 'Berita',
    href: '#',
  },
];

export default WithSubnavigation;
