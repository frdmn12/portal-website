import { forwardRef, useEffect, useLayoutEffect, useRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
  Image,
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
import { gsap, MOTION_OK } from '../animations/gsap';

// Internal paths go through React Router (no full reload, so page transitions
// and scroll handling keep working); anything else is a plain anchor. "#"
// entries are placeholders for pages that do not exist yet.
const NavLink = forwardRef(
  ({ href = '#', onNavigate, children, ...rest }, ref) => {
    if (href.startsWith('/')) {
      return (
        <Box ref={ref} as={RouterLink} to={href} onClick={onNavigate} {...rest}>
          {children}
        </Box>
      );
    }
    return (
      <Box
        ref={ref}
        as="a"
        href={href}
        onClick={e => {
          if (href === '#') e.preventDefault();
          if (onNavigate) onNavigate();
        }}
        {...rest}
      >
        {children}
      </Box>
    );
  }
);

function Navbar() {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const rootRef = useRef(null);
  const mobileRef = useRef(null);

  const bg = useColorModeValue('white', '#1C395A');
  const color = useColorModeValue('gray.600', 'white');
  const borderColor = useColorModeValue('gray.200', 'gray.900');

  // Entrance: the bar drops in, then the desktop links follow one by one.
  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    mm.add(
      MOTION_OK,
      () => {
        gsap
          .timeline()
          .from('[data-nav-bar]', {
            yPercent: -100,
            opacity: 0,
            duration: 0.7,
            clearProps: 'transform,opacity',
          })
          .from(
            '[data-nav-item]',
            {
              y: -14,
              opacity: 0,
              duration: 0.5,
              stagger: 0.07,
              clearProps: 'transform,opacity',
            },
            '-=0.3'
          );
      },
      rootRef
    );
    return () => mm.revert();
  }, []);

  // The mobile links slide in one after another each time the menu opens.
  useEffect(() => {
    if (!isOpen) return undefined;
    const mm = gsap.matchMedia();
    mm.add(
      MOTION_OK,
      () => {
        gsap.from('[data-mobile-item]', {
          x: -24,
          opacity: 0,
          duration: 0.4,
          stagger: 0.06,
          clearProps: 'transform,opacity',
        });
      },
      mobileRef
    );
    return () => mm.revert();
  }, [isOpen]);

  return (
    <Box ref={rootRef}>
      <Flex
        data-nav-bar
        bg={bg}
        color={color}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={borderColor}
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
          flex={{ base: '0 1 auto', md: 1 }}
          justify={{ base: 'center', md: 'start' }}
        >
          <Link
            as={RouterLink}
            to="/"
            display="flex"
            alignItems="center"
            _hover={{ textDecoration: 'none' }}
          >
            <Box bgColor="blue.700" p={2} rounded="full" flexShrink={0}>
              <Image src={Logo} alt="Logo Kabupaten Probolinggo" boxSize={6} />
            </Box>
            <Text
              fontFamily="heading"
              color={color}
              fontWeight={700}
              fontSize={{ base: 'sm', md: 'md' }}
              whiteSpace="nowrap"
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
      <Box ref={mobileRef}>
        <Collapse in={isOpen} animateOpacity>
          <MobileNav onNavigate={onClose} />
        </Collapse>
      </Box>
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
        <Box key={navItem.label} data-nav-item>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <NavLink
                href={navItem.href ?? navItem.parenHref}
                p={2}
                display="block"
                fontSize={'xs'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </NavLink>
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
  const hoverBg = useColorModeValue('teal.50', 'gray.900');

  return (
    <NavLink
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: hoverBg }}
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
    </NavLink>
  );
};

const MobileNav = ({ onNavigate }) => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}
      fontFamily={'heading'}
    >
      {NAV_ITEMS.map(navItem => (
        <MobileNavItem
          key={navItem.label}
          onNavigate={onNavigate}
          {...navItem}
        />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href, onNavigate }) => {
  const { isOpen, onToggle } = useDisclosure();
  const textColor = useColorModeValue('gray.600', 'gray.200');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  const labelText = (
    <Text fontWeight={600} color={textColor}>
      {label}
    </Text>
  );

  return (
    <Stack spacing={4} data-mobile-item>
      {children ? (
        // Parents with sub-pages only expand/collapse; their children navigate.
        <Flex
          as="button"
          type="button"
          py={2}
          justifyContent="space-between"
          alignItems="center"
          w="100%"
          textAlign="left"
          onClick={onToggle}
          aria-expanded={isOpen}
        >
          {labelText}
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        </Flex>
      ) : (
        <NavLink
          href={href}
          onNavigate={onNavigate}
          py={2}
          display="block"
          _hover={{ textDecoration: 'none' }}
        >
          {labelText}
        </NavLink>
      )}
      {children && (
        <Collapse
          in={isOpen}
          animateOpacity
          style={{ marginTop: '0!important' }}
        >
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={borderColor}
            align={'start'}
          >
            {children.map(child => (
              <NavLink
                key={child.label}
                href={child.href}
                onNavigate={onNavigate}
                py={2}
              >
                {child.label}
              </NavLink>
            ))}
          </Stack>
        </Collapse>
      )}
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: 'Profil',
    parenHref: '/profil',
    children: [
      {
        label: 'Data Wilayah',
        href: '/profil#datawilayah',
      },
      {
        label: 'Visi Misi',
        href: '/profil#visimisi',
      },
      {
        label: 'Logo Kabupaten',
        href: '/profil#logokabupaten',
      },
      {
        label: 'Kondisi Geografis',
        href: '/profil#kondisigeografis',
      },
    ],
  },
  {
    label: 'Prim',
    parenHref: '/prim',
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
        href: '#',
      },
      {
        label: 'Daftar Ruas Penanganan',
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
    parenHref: '/kinerja',
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
    ],
  },
  {
    label: 'Wisata',
    href: '/#wisata',
  },
  {
    label: 'Berita',
    href: '/news',
  },
];

export default Navbar;
