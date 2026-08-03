const navMarkup = `
  <header class="site-header">
    <div class="nav-shell">
      <a class="brand-mark" href="index.html">
        <img class="brand-logo" src="ديار.jpg" alt="شعار ديار" />
        <span>
          <span>ديار</span><br />
          <small>للاستشارات الهندسية</small>
        </span>
      </a>
      <nav class="nav-links" aria-label="التنقل الرئيسي">
        <a href="about.html">من نحن</a>
        <a href="services.html">الخدمات</a>
        <a href="projects.html">المشاريع</a>
        <a href="gallery.html">المعرض</a>
        <a href="blog.html">المجلة</a>
        <a href="contact.html">تواصل</a>
      </nav>
      <a class="btn btn-secondary nav-toggle" href="contact.html">استشارة</a>
    </div>
  </header>
`;

const footerMarkup = `
  <footer>
    <div>
      <strong>ديار للاستشارات الهندسية</strong>
      <p>حلول هندسية عملية ومهنية من التخطيط إلى التنفيذ.</p>
    </div>
    <div>
      <a href="privacy.html">الخصوصية</a> · <a href="contact.html">تواصل</a>
    </div>
  </footer>
`;

document.querySelectorAll('[data-nav]').forEach((el) => { el.outerHTML = navMarkup; });
document.querySelectorAll('[data-footer]').forEach((el) => { el.outerHTML = footerMarkup; });

const path = window.location.pathname.split('/').pop() || 'index.html';
const currentPage = path === '' ? 'index.html' : path;
document.querySelectorAll('.nav-links a').forEach((link) => {
  const href = link.getAttribute('href');
  if (href === currentPage) link.classList.add('active');
});

function renderCards(containerId, items, type) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = items.map((item) => {
    if (type === 'service') {
      return `
        <article class="card">
          <img src="${item.image}" alt="${item.title}" loading="lazy" />
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          <div class="tag-row">${item.benefits.map((b) => `<span class="tag">${b}</span>`).join('')}</div>
          <a class="btn btn-secondary" href="contact.html">طلب استشارة</a>
        </article>
      `;
    }
    if (type === 'project') {
      return `
        <article class="card">
          <img src="${item.image}" alt="${item.title}" loading="lazy" />
          <div class="tag-row"><span class="tag">${item.category}</span></div>
          <h3>${item.title}</h3>
          <p>${item.location} · ${item.year} · ${item.client}</p>
          <p>${item.description}</p>
        </article>
      `;
    }
    if (type === 'blog') {
      return `
        <article class="card">
          <img src="${item.image}" alt="${item.title}" loading="lazy" />
          <h3>${item.title}</h3>
          <p>${item.summary}</p>
          <p><strong>${item.author}</strong> · ${item.readTime}</p>
        </article>
      `;
    }
    return '';
  }).join('');
}

function renderStats() {
  const stats = document.getElementById('stats');
  if (!stats) return;
  stats.innerHTML = siteData.stats.map((item) => `
    <div class="stats-card">
      <strong>${item.value}</strong>
      <span>${item.label}</span>
    </div>
  `).join('');
}

function renderTestimonials() {
  const container = document.getElementById('testimonials');
  if (!container) return;
  container.innerHTML = siteData.testimonials.map((item) => `
    <article class="testimonial-card">
      <p>“${item.quote}”</p>
      <h3>${item.author}</h3>
      <p>${item.role}</p>
    </article>
  `).join('');
}

function renderGalleryPreview() {
  const container = document.getElementById('gallery-preview');
  if (!container) return;
  container.innerHTML = siteData.gallery.slice(0, 6).map((item) => `
    <img src="${item.image}" alt="${item.title}" loading="lazy" />
  `).join('');
}

function renderTeam() {
  const container = document.getElementById('team-grid');
  if (!container) return;
  container.innerHTML = siteData.team.map((member) => `
    <article class="card">
      <img src="${member.image}" alt="${member.name}" loading="lazy" />
      <h3>${member.name}</h3>
      <p>${member.role}</p>
    </article>
  `).join('');
}

if (document.getElementById('services-preview')) {
  renderCards('services-preview', siteData.services.slice(0, 3), 'service');
}
if (document.getElementById('services-grid')) {
  renderCards('services-grid', siteData.services, 'service');
}
if (document.getElementById('projects-preview')) {
  renderCards('projects-preview', siteData.projects.slice(0, 3), 'project');
}
if (document.getElementById('projects-grid')) {
  renderCards('projects-grid', siteData.projects, 'project');
}
if (document.getElementById('blog-preview')) {
  renderCards('blog-preview', siteData.blog.slice(0, 3), 'blog');
}
if (document.getElementById('blog-grid')) {
  renderCards('blog-grid', siteData.blog, 'blog');
}
if (document.getElementById('stats')) {
  renderStats();
}
if (document.getElementById('testimonials')) {
  renderTestimonials();
}
if (document.getElementById('gallery-preview')) {
  renderGalleryPreview();
}
if (document.getElementById('team-grid')) {
  renderTeam();
}

const progressBar = document.querySelector('.scroll-progress');
window.addEventListener('scroll', () => {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const percent = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
  if (progressBar) progressBar.style.transform = `scaleX(${percent / 100})`;
});

const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
revealElements.forEach((el) => observer.observe(el));

const dot = document.querySelector('.cursor-dot');
const ring = document.querySelector('.cursor-ring');
window.addEventListener('mousemove', (event) => {
  const { clientX, clientY } = event;
  if (dot) dot.style.transform = `translate(${clientX}px, ${clientY}px)`;
  if (ring) ring.style.transform = `translate(${clientX}px, ${clientY}px)`;
});

const interactiveElements = document.querySelectorAll('a, button, .card, .btn, img');
document.addEventListener('mousedown', () => {
  if (ring) ring.style.transform += ' scale(0.9)';
});
document.addEventListener('mouseup', () => {
  if (ring) ring.style.transform = ring.style.transform.replace(' scale(0.9)', '');
});
interactiveElements.forEach((el) => {
  el.addEventListener('mouseenter', () => {
    if (ring) ring.style.width = '48px';
    if (ring) ring.style.height = '48px';
  });
  el.addEventListener('mouseleave', () => {
    if (ring) ring.style.width = '34px';
    if (ring) ring.style.height = '34px';
  });
});

// touch-friendly feedback
window.addEventListener('touchstart', () => {
  document.body.classList.add('cursor-hidden');
}, { passive: true });
window.addEventListener('touchend', () => {
  document.body.classList.remove('cursor-hidden');
}, { passive: true });
