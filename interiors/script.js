document.querySelectorAll('[data-comparison]').forEach((comparison) => {
  const slider = comparison.querySelector('input[type="range"]');
  const update = () => comparison.style.setProperty('--split', `${slider.value}%`);
  slider.addEventListener('input', update);
  update();
});

const heroVisual = document.querySelector('.hero-visual');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const wideScreen = window.matchMedia('(min-width: 1081px)');
let parallaxFrame = 0;

function updateParallax() {
  parallaxFrame = 0;
  if (!heroVisual) return;
  if (reducedMotion.matches || !wideScreen.matches) {
    heroVisual.style.removeProperty('--parallax-y');
    return;
  }
  const distance = Math.min(28, Math.max(0, window.scrollY * .08));
  heroVisual.style.setProperty('--parallax-y', `${distance}px`);
}

function requestParallax() {
  if (!parallaxFrame) parallaxFrame = requestAnimationFrame(updateParallax);
}

window.addEventListener('scroll', requestParallax, { passive: true });
window.addEventListener('resize', requestParallax);
reducedMotion.addEventListener('change', requestParallax);
wideScreen.addEventListener('change', requestParallax);
updateParallax();
