import { useLayoutEffect } from 'react';
import { gsap, ScrollTrigger, MOTION_OK } from './gsap';

// Where an element starts from before it settles into place.
const PRESETS = {
  up: { y: 40 },
  down: { y: -40 },
  left: { x: -60 },
  right: { x: 60 },
  zoom: { scale: 0.85 },
  fade: {},
};

const presetFor = name => PRESETS[name] || PRESETS.up;

/**
 * Scroll-triggered reveal animations, driven by data attributes so page
 * components stay declarative:
 *
 *   data-reveal="up|down|left|right|zoom|fade"   animate this element in
 *   data-delay="0.2" data-duration="1"           optional timing (seconds)
 *   data-stagger="up"                            animate the *children* of
 *                                                this element, row by row as
 *                                                they scroll into view
 *
 * Call once per page/route with a ref to the page root. Everything is reverted
 * on unmount, and nothing is hidden when the user prefers reduced motion.
 */
export default function useReveal(scopeRef) {
  useLayoutEffect(() => {
    const scope = scopeRef.current;
    if (!scope) return undefined;

    const mm = gsap.matchMedia();
    mm.add(MOTION_OK, () => {
      gsap.utils.toArray('[data-reveal]', scope).forEach(el => {
        gsap.from(el, {
          ...presetFor(el.dataset.reveal),
          opacity: 0,
          duration: Number(el.dataset.duration) || 0.8,
          delay: Number(el.dataset.delay) || 0,
          // Drop the inline styles afterwards so CSS :hover transforms
          // (cards lift on hover) are not overridden by GSAP.
          clearProps: 'opacity,transform',
          scrollTrigger: { trigger: el, start: 'top 90%', once: true },
        });
      });

      gsap.utils.toArray('[data-stagger]', scope).forEach(group => {
        const items = Array.from(group.children);
        if (!items.length) return;
        const from = presetFor(group.dataset.stagger);
        gsap.set(items, { ...from, opacity: 0 });
        // batch() groups the items that enter the viewport together, so cards
        // in a long grid are staggered as the user reaches them rather than
        // all at once when the container itself becomes visible.
        ScrollTrigger.batch(items, {
          start: 'top 92%',
          once: true,
          onEnter: batch =>
            gsap.to(batch, {
              x: 0,
              y: 0,
              scale: 1,
              opacity: 1,
              duration: 0.7,
              stagger: 0.1,
              overwrite: true,
              clearProps: 'opacity,transform',
            }),
        });
      });
    });

    // Late layout shifts (route change, webfonts, remote images) move trigger
    // positions, including those belonging to the footer outside this scope.
    const refresh = () => ScrollTrigger.refresh();
    const raf = requestAnimationFrame(refresh);
    window.addEventListener('load', refresh);
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(refresh);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('load', refresh);
      mm.revert();
    };
  }, [scopeRef]);
}
