const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const toggle = document.getElementById('menu-toggle');
const nav = document.getElementById('main-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
}

const filters = Array.from(document.querySelectorAll('.filter'));
const cards = Array.from(document.querySelectorAll('.project-card'));
filters.forEach(button => button.addEventListener('click', () => {
  const category = button.dataset.filter;
  filters.forEach(b => {
    const active = b === button;
    b.classList.toggle('active', active);
    b.setAttribute('aria-pressed', String(active));
  });
  cards.forEach(card => { card.hidden = category !== 'all' && card.dataset.category !== category; });
}));


// Prefer local screenshots; gracefully use the live capture service if they are not available.
document.querySelectorAll('.site-screenshot[data-fallback]').forEach(img => {
  img.addEventListener('error', () => {
    if (img.dataset.triedFallback !== 'true') {
      img.dataset.triedFallback = 'true';
      img.src = img.dataset.fallback;
    } else {
      img.closest('.screenshot-window')?.classList.add('image-unavailable');
    }
  });
});
