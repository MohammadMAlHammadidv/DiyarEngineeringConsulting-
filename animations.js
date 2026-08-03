const revealElements = document.querySelectorAll('.reveal');
revealElements.forEach((element, index) => {
  element.style.transitionDelay = `${index * 70}ms`;
});

window.addEventListener('scroll', () => {
  const offset = window.scrollY;
  document.querySelectorAll('[data-parallax]').forEach((item) => {
    item.style.transform = `translateY(${offset * 0.03}px)`;
  });
});

const typed = document.querySelector('[data-typing]');
if (typed) {
  const originalText = typed.textContent;
  typed.textContent = '';
  let i = 0;
  const type = () => {
    typed.textContent = originalText.slice(0, i);
    i += 1;
    if (i <= originalText.length) {
      setTimeout(type, 30);
    }
  };
  type();
}
