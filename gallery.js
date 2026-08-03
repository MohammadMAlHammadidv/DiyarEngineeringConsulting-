const galleryState = {
  activeFilter: 'All'
};

function renderGallery() {
  const grid = document.getElementById('gallery-grid');
  const filters = document.getElementById('gallery-filters');
  if (!grid || !filters) return;

  const categories = ['All', ...new Set(siteData.gallery.map((item) => item.category))];
  filters.innerHTML = categories.map((category) => `
    <button class="${category === galleryState.activeFilter ? 'active' : ''}" data-filter="${category}">${category}</button>
  `).join('');

  const items = galleryState.activeFilter === 'All'
    ? siteData.gallery
    : siteData.gallery.filter((item) => item.category === galleryState.activeFilter);

  grid.innerHTML = items.map((item) => `
    <img src="${item.image}" alt="${item.title}" data-lightbox-src="${item.image}" loading="lazy" />
  `).join('');

  grid.querySelectorAll('img').forEach((img) => {
    img.addEventListener('click', () => openLightbox(img.getAttribute('data-lightbox-src')));
  });

  filters.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', () => {
      galleryState.activeFilter = button.getAttribute('data-filter');
      renderGallery();
    });
  });
}

const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const closeButton = document.getElementById('lightbox-close');

function openLightbox(src) {
  if (!lightbox || !lightboxImage) return;
  lightboxImage.src = src;
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden', 'false');
}

function closeLightbox() {
  if (!lightbox) return;
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
}

closeButton?.addEventListener('click', closeLightbox);
lightbox?.addEventListener('click', (event) => {
  if (event.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeLightbox();
});

if (document.getElementById('gallery-grid')) {
  renderGallery();
}
