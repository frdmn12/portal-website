import { useLayoutEffect, useRef } from 'react';
import { Flex, Text, Box, Badge } from '@chakra-ui/react';
import { gsap, SplitText, MOTION_OK } from '../../../animations/gsap';

const bgImage =
  'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80';

const MOTTO = [
  'Sejahtera',
  'Berkeadilan',
  'Mandiri',
  'Berwawasan Lingkungan',
  'Berakhlak Mulia.',
];

const MottoBadge = ({ children }) => (
  <Badge
    data-hero-badge
    variant="subtle"
    colorScheme="blue"
    fontSize="0.8em"
    m="0 2px"
  >
    {children}
  </Badge>
);

const Hero = () => {
  const rootRef = useRef(null);
  const bgRef = useRef(null);
  const titleRef = useRef(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();

    mm.add(MOTION_OK, () => {
      // The photo slowly settles from a slight zoom while the title letters
      // rise into place, followed by the tagline and the motto badges.
      gsap.fromTo(
        bgRef.current,
        { scale: 1.2 },
        { scale: 1, duration: 2.6, ease: 'power2.out' }
      );

      const split = SplitText.create(titleRef.current, { type: 'words,chars' });
      gsap
        .timeline({ delay: 0.2 })
        .from(split.chars, {
          yPercent: 110,
          opacity: 0,
          rotate: 6,
          duration: 0.8,
          stagger: 0.035,
          ease: 'back.out(1.6)',
        })
        .from('[data-hero-tagline]', { y: 24, opacity: 0, duration: 0.8 }, '-=0.4')
        .from(
          '[data-hero-badge]',
          {
            scale: 0.6,
            opacity: 0,
            duration: 0.5,
            stagger: 0.12,
            ease: 'back.out(2)',
          },
          '-=0.4'
        );

      return () => split.revert();
    }, rootRef);

    // Parallax is skipped on phones: it is jittery with touch scrolling and
    // the hero is barely taller than the screen anyway.
    mm.add(`(min-width: 768px) and ${MOTION_OK}`, () => {
      gsap.to(bgRef.current, {
        yPercent: 10,
        ease: 'none',
        scrollTrigger: {
          trigger: rootRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <Flex
      ref={rootRef}
      position="relative"
      overflow="hidden"
      minH={{ base: '440px', md: '560px', lg: 'min(800px, 90vh)' }}
      px={4}
      py={12}
      justifyContent="center"
      alignItems="center"
      mb={{ base: 2, lg: '30px' }}
    >
      {/* Oversized so the parallax shift never exposes an edge. */}
      <Box
        ref={bgRef}
        position="absolute"
        inset="-15% 0"
        bgImage={`url(${bgImage})`}
        bgSize="cover"
        bgPosition="center"
        aria-hidden="true"
      />
      {/* Keeps the white text readable on top of a bright photo. */}
      <Box
        position="absolute"
        inset={0}
        bgGradient="linear(to-b, blackAlpha.500, blackAlpha.600)"
        aria-hidden="true"
      />
      <Box position="relative" maxW="6xl" textAlign="center">
        <Text
          ref={titleRef}
          as="h1"
          fontSize={{ base: '32px', sm: '44px', md: '70px', lg: '110px' }}
          lineHeight="1.05"
          fontFamily="heading"
          fontWeight="900"
          color="gray.50"
          mb={{ base: '16px', md: '24px' }}
          textShadow="0 2px 12px rgba(0,0,0,0.35)"
        >
          PRASAJA NGESTI WIBAWA
        </Text>
        <Text
          data-hero-tagline
          fontFamily="heading"
          color="gray.50"
          fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
          lineHeight={{ base: 2.1, md: 2 }}
          maxW="4xl"
          mx="auto"
        >
          Terwujudnya Kabupaten Probolinggo Yang{' '}
          {MOTTO.map((word, i) => (
            <span key={word}>
              <MottoBadge>{word}</MottoBadge>
              {i === MOTTO.length - 2 ? ' dan ' : i < MOTTO.length - 2 ? ', ' : ''}
            </span>
          ))}
        </Text>
      </Box>
    </Flex>
  );
};

export default Hero;
