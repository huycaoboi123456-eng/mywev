// ===== GLOBAL JS - LuxHome =====

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar?.classList.add('scrolled');
    scrollTopBtn?.classList.add('visible');
  } else {
    navbar?.classList.remove('scrolled');
    scrollTopBtn?.classList.remove('visible');
  }
});

// Scroll to top
scrollTopBtn?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Hamburger menu
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

hamburger?.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu?.classList.toggle('open');
});

// Close mobile menu on link click
mobileMenu?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger?.classList.remove('open');
    mobileMenu?.classList.remove('open');
  });
});

// Active nav link
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.navbar-nav a, .mobile-menu a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});

// Intersection Observer for animations
const animateElements = document.querySelectorAll('.animate-in');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

animateElements.forEach(el => observer.observe(el));
