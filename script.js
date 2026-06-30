// Typed text animation
const phrases = [
  'SDET Engineer',
  'Flutter Developer',
  'React Developer',
  'Test Automation Expert',
  'Full-Stack Engineer',
];

let phraseIdx = 0;
let charIdx = 0;
let deleting = false;
const el = document.getElementById('typedText');

function type() {
  const current = phrases[phraseIdx];
  if (deleting) {
    el.textContent = current.slice(0, --charIdx);
  } else {
    el.textContent = current.slice(0, ++charIdx);
  }

  let delay = deleting ? 60 : 100;

  if (!deleting && charIdx === current.length) {
    delay = 1800;
    deleting = true;
  } else if (deleting && charIdx === 0) {
    deleting = false;
    phraseIdx = (phraseIdx + 1) % phrases.length;
    delay = 300;
  }

  setTimeout(type, delay);
}
type();

// Mobile hamburger
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

// Close mobile menu on link click
mobileMenu.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

// Scroll-based fade-in
const observer = new IntersectionObserver(
  entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
  { threshold: 0.1 }
);

document.querySelectorAll(
  '.skill-card, .project-card, .timeline-item, .contact-card, .about-grid'
).forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// Navbar scroll shadow
window.addEventListener('scroll', () => {
  document.getElementById('navbar').style.boxShadow =
    window.scrollY > 10 ? '0 4px 24px rgba(0,0,0,0.3)' : '';
});
