// Tạo dữ liệu: sử dụng JSON
const productsData = [
  {
    id: 1, name: "Sofa góc chữ L Premium",
    category: "phong-khach", catLabel: "Phòng khách",
    price: 28500000, originalPrice: 35000000,
    badge: "hot",
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
    desc: "Sofa góc chữ L cao cấp với khung gỗ thịt tự nhiên, nệm mút đặc biệt 30D, bọc da thật nhập khẩu Italia.",
    details: { "Chất liệu": "Gỗ tự nhiên + Da bò Italia", "Kích thước": "280 x 180 x 85 cm", "Màu sắc": "Nâu café / Kem", "Bảo hành": "36 tháng" }
  },
  {
    id: 2, name: "Bàn ăn oval gỗ óc chó",
    category: "bep", catLabel: "Bếp & Ăn",
    price: 18900000,
    badge: "new",
    img: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&q=80",
    desc: "Bàn ăn oval từ gỗ óc chó nguyên khối, vân gỗ đẹp tự nhiên, chân inox mạ vàng hồng sang trọng.",
    details: { "Chất liệu": "Gỗ óc chó + Inox mạ vàng", "Kích thước": "180 x 90 x 76 cm", "Số ghế": "6-8 người", "Bảo hành": "24 tháng" }
  },
  {
    id: 3, name: "Giường ngủ King Size Nordic",
    category: "phong-ngu", catLabel: "Phòng ngủ",
    price: 22000000, originalPrice: 26000000,
    badge: null,
    img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80",
    desc: "Giường ngủ phong cách Nordic tối giản, đầu giường nệm bọc vải lanh, chân gỗ sồi tự nhiên.",
    details: { "Chất liệu": "Gỗ sồi + Vải lanh", "Kích thước": "200 x 180 cm (King)", "Màu sắc": "Trắng ngà / Xám xanh", "Bảo hành": "24 tháng" }
  },
  {
    id: 4, name: "Tủ sách mở Modular",
    category: "van-phong", catLabel: "Văn phòng",
    price: 15600000,
    badge: null,
    img: "https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&q=80",
    desc: "Kệ sách modular linh hoạt, có thể kết hợp nhiều mô-đun theo không gian, phủ sơn bền màu.",
    details: { "Chất liệu": "MDF phủ sơn PU", "Kích thước": "120 x 40 x 200 cm", "Màu sắc": "Trắng / Đen / Walnut", "Bảo hành": "18 tháng" }
  },
  {
    id: 5, name: "Ghế armchair Bắc Âu",
    category: "phong-khach", catLabel: "Phòng khách",
    price: 8900000,
    badge: "new",
    img: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&q=80",
    desc: "Ghế armchair phong cách Scandinavia, khung gỗ sồi cong uốn, nệm êm ái bọc vải bố cao cấp.",
    details: { "Chất liệu": "Gỗ sồi + Vải bố", "Kích thước": "72 x 68 x 82 cm", "Màu sắc": "Nhiều tùy chọn", "Bảo hành": "24 tháng" }
  },
  {
    id: 6, name: "Tủ bếp mở Island",
    category: "bep", catLabel: "Bếp & Ăn",
    price: 45000000,
    badge: null,
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
    desc: "Hệ tủ bếp island thiết kế tùy chỉnh, mặt đá marble tự nhiên, khung tủ gỗ công nghiệp chống ẩm.",
    details: { "Chất liệu": "Acrylic + Đá marble", "Kích thước": "Tùy chỉnh", "Màu sắc": "Trắng sữa", "Bảo hành": "36 tháng" }
  },
  {
    id: 7, name: "Bàn làm việc Executive",
    category: "van-phong", catLabel: "Văn phòng",
    price: 12500000, originalPrice: 15000000,
    badge: "hot",
    img: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&q=80",
    desc: "Bàn làm việc executive phong cách hiện đại, mặt bàn gỗ óc chó, chân thép sơn tĩnh điện đen mờ.",
    details: { "Chất liệu": "Gỗ óc chó + Thép", "Kích thước": "160 x 80 x 75 cm", "Màu sắc": "Walnut + Đen", "Bảo hành": "24 tháng" }
  },
  {
    id: 8, name: "Tủ quần áo Walk-in",
    category: "phong-ngu", catLabel: "Phòng ngủ",
    price: 38000000,
    badge: null,
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    desc: "Hệ tủ quần áo walk-in thiết kế tùy chỉnh với ngăn kéo, thanh treo, đèn LED bên trong tinh tế.",
    details: { "Chất liệu": "MDF phủ melamine", "Kích thước": "Tùy chỉnh", "Màu sắc": "Trắng / Ghi", "Bảo hành": "24 tháng" }
  },
  {
    id: 9, name: "Coffee table mặt kính oval",
    category: "phong-khach", catLabel: "Phòng khách",
    price: 6800000,
    badge: null,
    img: "https://images.unsplash.com/photo-1567538096621-38d2284b23ff?w=600&q=80",
    desc: "Bàn trà mặt kính cường lực oval, chân sơn vàng đồng, thiết kế nhẹ nhàng thanh lịch.",
    details: { "Chất liệu": "Kính cường lực + Kim loại mạ vàng", "Kích thước": "120 x 65 x 45 cm", "Màu sắc": "Vàng đồng", "Bảo hành": "12 tháng" }
  },
  {
    id: 10, name: "Giường thấp Japandi",
    category: "phong-ngu", catLabel: "Phòng ngủ",
    price: 16500000,
    badge: "new",
    img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&q=80",
    desc: "Giường nệm thấp phong cách Japandi, gỗ thông tự nhiên, thiết kế gần mặt đất tạo cảm giác thư thái.",
    details: { "Chất liệu": "Gỗ thông tự nhiên", "Kích thước": "200 x 160 cm", "Màu sắc": "Tự nhiên", "Bảo hành": "24 tháng" }
  },
  {
    id: 11, name: "Ghế xoay văn phòng ergonomic",
    category: "van-phong", catLabel: "Văn phòng",
    price: 9200000, originalPrice: 11000000,
    badge: null,
    img: "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=600&q=80",
    desc: "Ghế xoay ergonomic hỗ trợ thắt lưng, điều chỉnh chiều cao, lưng ghế lưới thoáng khí cao cấp.",
    details: { "Chất liệu": "Lưới mesh + Nhựa ABS", "Trọng tải": "150 kg", "Màu sắc": "Đen / Xám", "Bảo hành": "24 tháng" }
  },
  {
    id: 12, name: "Bộ ghế ăn gỗ Japandi",
    category: "bep", catLabel: "Bếp & Ăn",
    price: 32000000,
    badge: null,
    img: "https://images.unsplash.com/photo-1549497538-303791108f95?w=600&q=80",
    desc: "Bộ bàn ăn 4 ghế phong cách Japandi, gỗ tần bì tự nhiên, ghế bọc vải lanh màu trung tính.",
    details: { "Chất liệu": "Gỗ tần bì + Vải lanh", "Kích thước": "140 x 80 cm", "Số ghế": "4 ghế", "Bảo hành": "24 tháng" }
  }
];

let filteredProducts = [...productsData];
let currentFilter = 'all';
let currentSearch = '';
let currentSort = 'default';

// Render products
function renderProducts(products) {
  const grid = document.getElementById('productsGrid');
  const noResults = document.getElementById('noResults');
  const resultCount = document.getElementById('resultCount');

  resultCount.textContent = products.length;

  if (products.length === 0) {
    grid.innerHTML = '';
    noResults.style.display = 'block';
    return;
  }

  noResults.style.display = 'none';

  grid.innerHTML = products.map((p, i) => `
    <div class="product-card animate-in" 
         data-id="${p.id}"
         style="animation-delay: ${i * 60}ms">
      <div class="product-img-wrap">
        <img src="${p.img}" alt="${p.name}" loading="lazy" />
        ${p.badge ? `<span class="product-badge ${p.badge}">${p.badge === 'new' ? 'Mới' : 'Hot'}</span>` : ''}
        <div class="product-hover-btn"><span><i class="fa fa-eye"></i> Xem chi tiết</span></div>
      </div>
      <div class="product-info">
        <div class="product-cat-label">${p.catLabel}</div>
        <h3 class="product-name">${p.name}</h3>
        <div class="product-price">
          ${formatPrice(p.price)}
          ${p.originalPrice ? `<span class="original">${formatPrice(p.originalPrice)}</span>` : ''}
        </div>
      </div>
    </div>
  `).join('');

  grid.querySelectorAll('.animate-in').forEach(el => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.05 });
    obs.observe(el);
  });

  grid.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => {
      const product = productsData.find(p => p.id === parseInt(card.dataset.id));
      if (product) openModal(product);
    });
  });
}

function formatPrice(price) {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
}

function applyFiltersAndSort() {
  let result = productsData.filter(p => {
    const matchFilter = currentFilter === 'all' || p.category === currentFilter;
    const matchSearch = p.name.toLowerCase().includes(currentSearch.toLowerCase()) ||
                        p.catLabel.toLowerCase().includes(currentSearch.toLowerCase());
    return matchFilter && matchSearch;
  });

  if (currentSort === 'price-asc') result.sort((a, b) => a.price - b.price);
  else if (currentSort === 'price-desc') result.sort((a, b) => b.price - a.price);
  else if (currentSort === 'name-asc') result.sort((a, b) => a.name.localeCompare(b.name, 'vi'));

  filteredProducts = result;
  renderProducts(result);
}

// Filter tabs
document.querySelectorAll('.filter-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    currentFilter = tab.dataset.filter;
    applyFiltersAndSort();
  });
});

// Search
const searchInput = document.getElementById('searchInput');
const clearBtn = document.getElementById('clearSearch');

searchInput.addEventListener('input', (e) => {
  currentSearch = e.target.value;
  clearBtn.style.display = currentSearch ? 'block' : 'none';
  applyFiltersAndSort();
});

clearBtn.addEventListener('click', () => {
  searchInput.value = '';
  currentSearch = '';
  clearBtn.style.display = 'none';
  applyFiltersAndSort();
});

// Sort
document.getElementById('sortSelect').addEventListener('change', (e) => {
  currentSort = e.target.value;
  applyFiltersAndSort();
});

// Reset
function resetFilters() {
  searchInput.value = '';
  currentSearch = '';
  currentFilter = 'all';
  currentSort = 'default';
  clearBtn.style.display = 'none';
  document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
  document.querySelector('[data-filter="all"]').classList.add('active');
  document.getElementById('sortSelect').value = 'default';
  applyFiltersAndSort();
}

// Modal
function openModal(product) {
  document.getElementById('modalImg').src = product.img;
  document.getElementById('modalImg').alt = product.name;
  document.getElementById('modalCat').textContent = product.catLabel;
  document.getElementById('modalName').textContent = product.name;
  document.getElementById('modalPrice').textContent = formatPrice(product.price);
  document.getElementById('modalDesc').textContent = product.desc;

  const detailsEl = document.getElementById('modalDetails');
  detailsEl.innerHTML = Object.entries(product.details).map(([k, v]) => `
    <div class="modal-detail-row">
      <span>${k}</span>
      <span>${v}</span>
    </div>
  `).join('');

  document.getElementById('productModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('productModal').classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('modalClose2').addEventListener('click', closeModal);
document.getElementById('productModal').addEventListener('click', (e) => {
  if (e.target === document.getElementById('productModal')) closeModal();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

renderProducts(productsData);
