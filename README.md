# LuxHome — Website Kinh Doanh Nội Thất

## Giới thiệu
**LuxHome** là website kinh doanh nội thất và các dự án căn hộ, chung cư

---

## Cấu trúc tệp

```
luxhome/
├── index.html          # Trang chủ
├── index.css           # CSS trang chủ
├── index.js            # JS trang chủ (slider, counter, testimonials)
│
├── san-pham.html       # Trang sản phẩm
├── san-pham.css        # CSS trang sản phẩm
├── san-pham.js         # JS: lọc, tìm kiếm, sắp xếp, modal
│
├── du-an.html          # Trang dự án
├── du-an.css           # CSS trang dự án
├── du-an.js            # JS: lọc dự án theo danh mục
│
├── gioi-thieu.html     # Trang giới thiệu
├── gioi-thieu.css      # CSS trang giới thiệu
├── gioi-thieu.js       # JS: counter animation
│
├── lien-he.html        # Trang liên hệ
├── lien-he.css         # CSS trang liên hệ
├── lien-he.js          # JS: form validation, FAQ accordion
│
├── global.css          # CSS toàn cục (navbar, footer, utilities)
└── global.js           # JS toàn cục (navbar scroll, mobile menu, animations)
```

---

## Tính năng chính

### Giao diện
- Thiết kế **responsive** — hoạt động tốt trên mobile, tablet, desktop
- Màu sắc chủ đạo: nâu vàng cao cấp (`#7d6741`) — phong cách luxury nội thất
- Font chữ: **Playfair Display** (display) + **DM Sans** (body)
- Navbar cố định với hiệu ứng scroll, menu mobile hamburger
- Animations khi scroll (IntersectionObserver)
- Nút Scroll-to-top

### Trang chủ (`index.html`)
- Hero slider tự động (3 slide, dot navigation)
- Counter animation cho thống kê
- Grid dịch vụ với hover effects
- Dự án nổi bật (grid layout)
- Quy trình F.A.S.T.
- Testimonials slider (responsive)
- CTA section với background parallax

### Trang Sản phẩm (`san-pham.html`)
- **Lọc sản phẩm** theo danh mục (5 danh mục)
- **Tìm kiếm** real-time theo tên/loại
- **Sắp xếp** (giá tăng/giảm, tên A-Z)
- **Modal chi tiết sản phẩm** (click để xem)
- Dữ liệu JSON nội tuyến, render bằng DOM

### Trang Dự án (`du-an.html`)
- **Lọc dự án** theo danh mục (6 loại)
- Masonry grid layout với card tall/wide
- Hover overlay với thông tin dự án

### Trang Giới thiệu (`gioi-thieu.html`)
- Kể câu chuyện công ty
- Counter animation cho số liệu
- Card đội ngũ nhân sự
- Timeline giải thưởng

### Trang Liên hệ (`lien-he.html`)
- **Form validation** đầy đủ:
  - Kiểm tra họ tên (min 3 ký tự)
  - Kiểm tra SĐT (định dạng Việt Nam)
  - Kiểm tra email (nếu nhập)
  - Kiểm tra loại công trình
  - Kiểm tra checkbox đồng ý
  - Real-time validation khi rời ô nhập
- Loading state khi submit
- Thông báo thành công sau submit
- **FAQ accordion** (mở/đóng)

---

## Công nghệ sử dụng

| Phần | Công nghệ |
|------|-----------|
| Markup | HTML5 semantic |
| Style | CSS3 (Flexbox, Grid, CSS Variables, Media Queries) |
| Logic | JavaScript ES6+ (DOM, IntersectionObserver, Fetch simulation) |
| Icons | Font Awesome 6.4.0 (CDN) |
| Fonts | Google Fonts (Playfair Display, DM Sans) |
| Images | Unsplash (free stock photos via URL) |

> **Không sử dụng framework/thư viện JS** (jQuery, Vue, React...). Toàn bộ logic do nhóm tự xây dựng.

---

## Cách chạy

1. Giải nén file `.zip`
2. Mở thư mục `luxhome/`
3. Mở `index.html` bằng trình duyệt (Chrome/Firefox/Edge khuyến nghị)
4. Hoặc dùng Live Server trong VS Code để có trải nghiệm tốt hơn

---

## Kiểm thử

- ✅ Kiểm tra liên kết: tất cả navigation hoạt động đúng
- ✅ Form validation: test với dữ liệu đúng/sai
- ✅ Responsive: test trên 320px, 768px, 1024px, 1440px
- ✅ Cross-browser: Chrome, Firefox, Edge, Safari

---

*© 2025 LuxHome — Bài tập môn Phát triển Ứng dụng Web*
