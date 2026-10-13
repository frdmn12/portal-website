import { useLayoutEffect, useRef } from 'react';
import { Flex, Heading, Text, Image, Box, useColorModeValue } from '@chakra-ui/react';
import img404 from '../../assets/Image404.png';
import { gsap, MOTION_OK } from '../../animations/gsap';

export default function PageNotFound() {
  const rootRef = useRef(null);
  const textColor = useColorModeValue('gray.700', 'gray.100');

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    mm.add(
      MOTION_OK,
      () => {
        const number = rootRef.current.querySelector('[data-404-number]');
        const counter = { value: 0 };

        gsap
          .timeline()
          .from('[data-404-image]', {
            y: -140,
            opacity: 0,
            duration: 1.1,
            ease: 'bounce.out',
          })
          .to(
            counter,
            {
              value: 404,
              duration: 1.2,
              ease: 'power2.out',
              snap: { value: 1 },
              onUpdate: () => {
                number.textContent = counter.value;
              },
            },
            '-=0.7'
          )
          .from(
            '[data-404-text]',
            { y: 20, opacity: 0, duration: 0.6, stagger: 0.15 },
            '-=0.6'
          );

        // Once it has landed the illustration hovers gently.
        gsap.to('[data-404-image]', {
          y: -10,
          duration: 2,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
          delay: 1.4,
        });
      },
      rootRef
    );
    return () => mm.revert();
  }, []);

  return (
    <Flex
      ref={rootRef}
      flexDirection="column"
      fontFamily="heading"
      justifyContent="center"
      alignItems="center"
      my={10}
      px={4}
      textAlign="center"
    >
      <Box data-404-image>
        <Image
          src={img404}
          alt="page_not_found"
          boxSize={{ base: 'min(300px, 80vw)', lg: '500px' }}
          fit="cover"
        />
      </Box>
      <Heading
        data-404-number
        aria-label="404"
        fontFamily="heading"
        color={textColor}
        size="3xl"
      >
        404
      </Heading>

      <Text data-404-text fontSize="lg" color={textColor} fontWeight="700">
        Page Not Found
      </Text>
      <Text data-404-text fontSize="md" color={textColor}>
        Halaman ini tidak ditemukan atau dalam tahap pengembangan
      </Text>
    </Flex>
  );
}
