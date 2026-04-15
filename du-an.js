// ===== DU-AN.JS =====

const projectsData = [
  { id: 1, name: "Biệt thự Vinhomes Riverside", cat: "biet-thu", catLabel: "Biệt thự", area: "450 m²", year: "2024", size: "tall", img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80" },
  { id: 2, name: "Penthouse Sky Residences", cat: "chung-cu", catLabel: "Chung cư", area: "320 m²", year: "2024", size: "", img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80" },
  { id: 3, name: "Văn phòng Công ty ABC Tech", cat: "van-phong", catLabel: "Văn phòng", area: "280 m²", year: "2024", size: "", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80" },
  { id: 4, name: "Nhà phố Quận 7 TP.HCM", cat: "nha-pho", catLabel: "Nhà phố", area: "180 m²", year: "2023", size: "wide", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80" },
  { id: 5, name: "Café The Botanist Garden", cat: "nha-hang", catLabel: "Nhà hàng & Café", area: "220 m²", year: "2023", size: "", img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80" },
  { id: 6, name: "Biệt thự The Manor Hà Nội", cat: "biet-thu", catLabel: "Biệt thự", area: "600 m²", year: "2023", size: "", img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80" },
  { id: 7, name: "Căn hộ Masteri Millennium", cat: "chung-cu", catLabel: "Chung cư", area: "110 m²", year: "2023", size: "tall", img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80" },
  { id: 8, name: "Nhà hàng Fusion Kitchen", cat: "nha-hang", catLabel: "Nhà hàng & Café", area: "350 m²", year: "2022", size: "", img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80" },
  { id: 9, name: "Văn phòng co-working HubWork", cat: "van-phong", catLabel: "Văn phòng", area: "500 m²", year: "2022", size: "wide", img: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80" },
  { id: 10, name: "Nhà phố hiện đại Thảo Điền", cat: "nha-pho", catLabel: "Nhà phố", area: "250 m²", year: "2022", size: "", img: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80" },
  { id: 11, name: "Biệt thự Ecopark Hưng Yên", cat: "biet-thu", catLabel: "Biệt thự", area: "380 m²", year: "2022", size: "", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80" },
  { id: 12, name: "Căn hộ Vinhomes Grand Park", cat: "chung-cu", catLabel: "Chung cư", area: "90 m²", year: "2021", size: "", img: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=600&q=80" },
];

let currentFilter = 'all';

function renderProjects(filter) {
  const grid = document.getElementById('projectsGrid');
  const filtered = filter === 'all' ? projectsData : projectsData.filter(p => p.cat === filter);

  grid.innerHTML = filtered.map((p, i) => `
    <div class="project-item ${p.size} animate-in" 
         data-cat="${p.cat}"
         style="animation-delay: ${i * 80}ms">
      <img class="project-item-img" src="${p.img}" alt="${p.name}" loading="lazy" />
      <div class="project-item-overlay">
        <div class="project-item-cat">${p.catLabel}</div>
        <div class="project-item-name">${p.name}</div>
        <div class="project-item-meta">
          <span><i class="fa fa-ruler-combined"></i> ${p.area}</span>
          <span><i class="fa fa-calendar"></i> ${p.year}</span>
        </div>
      </div>
    </div>
  `).join('');

  // Re-observe animations
  grid.querySelectorAll('.animate-in').forEach(el => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('visible'), 50);
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.05 });
    obs.observe(el);
  });
}

// Filter tabs
document.querySelectorAll('.filter-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    currentFilter = tab.dataset.filter;
    renderProjects(currentFilter);
  });
});

// Init
renderProjects('all');
