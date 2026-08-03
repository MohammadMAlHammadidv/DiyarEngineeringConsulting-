const slider = document.querySelector('[data-slider]');
if (slider) {
  const track = slider.querySelector('.slider-track');
  const prev = slider.querySelector('[data-slider-prev]');
  const next = slider.querySelector('[data-slider-next]');
  let index = 0;

  function updateSlider() {
    if (!track) return;
    const cards = track.children;
    if (!cards.length) return;
    const offset = index * 100;
    track.style.transform = `translateX(-${offset}%)`;
    track.style.transition = 'transform 0.35s ease';
  }

  prev?.addEventListener('click', () => {
    const cards = track.children;
    if (!cards.length) return;
    index = index > 0 ? index - 1 : cards.length - 1;
    updateSlider();
  });

  next?.addEventListener('click', () => {
    const cards = track.children;
    if (!cards.length) return;
    index = index < cards.length - 1 ? index + 1 : 0;
    updateSlider();
  });

  let startX = 0;
  track?.addEventListener('touchstart', (event) => {
    startX = event.touches[0].clientX;
  }, { passive: true });
  track?.addEventListener('touchend', (event) => {
    const delta = event.changedTouches[0].clientX - startX;
    if (delta < -50) next?.click();
    if (delta > 50) prev?.click();
  }, { passive: true });

  updateSlider();
}
