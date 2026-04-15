// ===== INDEX.JS - Homepage =====

// Hero Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');
const dots = document.querySelectorAll('.hero-dot');

function goToSlide(index) {
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');
  currentSlide = (index + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
}

// Auto slide
setInterval(() => goToSlide(currentSlide + 1), 5000);

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    goToSlide(parseInt(dot.dataset.index));
  });
});

// Counter animation
function animateCounter(el) {
  const target = parseInt(el.dataset.count);
  const duration = 1500;
  const start = performance.now();

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target);
    if (progress < 1) requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}

const counters = document.querySelectorAll('.stat-number');
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

counters.forEach(c => counterObserver.observe(c));

// Testimonial mobile slider
let currentTesti = 0;
const testiCards = document.querySelectorAll('.testimonial-card');
const testiPrev = document.getElementById('testiPrev');
const testiNext = document.getElementById('testiNext');

function showTesti(index) {
  testiCards.forEach(c => c.style.display = 'none');
  currentTesti = (index + testiCards.length) % testiCards.length;
  testiCards[currentTesti].style.display = 'block';
}

testiPrev?.addEventListener('click', () => showTesti(currentTesti - 1));
testiNext?.addEventListener('click', () => showTesti(currentTesti + 1));

// Init testimonials for mobile
function initTesti() {
  if (window.innerWidth <= 1024) {
    showTesti(0);
  } else {
    testiCards.forEach(c => c.style.display = 'block');
  }
}

initTesti();
window.addEventListener('resize', initTesti);
