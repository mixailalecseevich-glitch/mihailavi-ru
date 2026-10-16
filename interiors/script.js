document.querySelectorAll('[data-comparison]').forEach((comparison) => {
  const slider = comparison.querySelector('input[type="range"]');
  const update = () => comparison.style.setProperty('--split', `${slider.value}%`);
  slider.addEventListener('input', update);
  update();
});
