import { useLayoutEffect, useRef } from 'react';
import { Box } from '@chakra-ui/react';
import { gsap, MOTION_OK } from '../animations/gsap';
import useReveal from '../animations/useReveal';

/**
 * Wraps the routed page. App keys it by pathname, so each navigation mounts a
 * fresh instance: the page fades in and every `data-reveal` / `data-stagger`
 * element inside it is wired up by useReveal.
 */
export default function PageTransition({ children }) {
  const ref = useRef(null);
  useReveal(ref);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    mm.add(MOTION_OK, () => {
      gsap.from(ref.current, {
        opacity: 0,
        duration: 0.5,
        ease: 'power1.out',
        clearProps: 'opacity',
      });
    });
    return () => mm.revert();
  }, []);

  return (
    <Box ref={ref} as="main" overflowX="clip">
      {children}
    </Box>
  );
}
