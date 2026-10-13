import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { gsap, MOTION_OK } from '../animations/gsap';

// Space left above an anchor target when scrolling to it.
const ANCHOR_OFFSET = 16;

/**
 * Client-side navigation does not reset scroll or honour #hash links the way a
 * full page load does. This restores both: new routes start at the top, and
 * hash links glide to their target with GSAP (instantly when the user prefers
 * reduced motion).
 */
export default function ScrollManager() {
  const { pathname, hash, key } = useLocation();

  useLayoutEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return undefined;
    }

    const id = decodeURIComponent(hash.slice(1));
    // Give the freshly mounted page a moment to lay out before measuring.
    const timer = setTimeout(() => {
      const target = document.getElementById(id);
      if (!target) return;
      const reduce = !window.matchMedia(MOTION_OK).matches;
      gsap.to(window, {
        scrollTo: { y: target, offsetY: ANCHOR_OFFSET },
        duration: reduce ? 0 : 0.9,
        ease: 'power3.inOut',
        overwrite: true,
      });
    }, 120);

    return () => clearTimeout(timer);
  }, [pathname, hash, key]);

  return null;
}
