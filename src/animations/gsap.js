import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { SplitText } from 'gsap/SplitText';

// Plugins are registered once here; every other file imports from this module
// so there is a single place to tweak global defaults.
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, SplitText);

// Mobile browsers resize the viewport while the URL bar collapses; refreshing
// ScrollTrigger on every one of those resizes makes pages jitter.
ScrollTrigger.config({ ignoreMobileResize: true });

gsap.defaults({ ease: 'power3.out', duration: 0.8 });

// Pass to gsap.matchMedia().add(...) so users who ask the OS for reduced
// motion get the final state straight away (nothing is hidden or moved).
export const MOTION_OK = '(prefers-reduced-motion: no-preference)';

export { gsap, ScrollTrigger, ScrollToPlugin, SplitText };
