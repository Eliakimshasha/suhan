import Lenis from '@studio-freight/lenis';

export const initSmoothScroll = () => {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical', // Ensures touchpad and touch gestures scroll vertically
    wheelMultiplier: 1, // Adjusts the wheel speed
    touchMultiplier: 2, // Adjusts the touch scroll speed
    infinite: false, // Set to true if you want infinite scrolling
  });

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return lenis;
};
