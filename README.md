# Website Quang Hiền Phát

Website trưng bày sản phẩm gia công, máy móc và thiết bị của công ty Quang Hiền Phát.

## 🚀 Tech Stack

- **HTML5** - Semantic markup
- **Tailwind CSS** - Utility-first CSS framework (via CDN)
- **Vanilla JavaScript** - No frameworks, pure JS
- **Material Symbols** - Icon library

## 📁 Cấu trúc Dự án

```
/
├── index.html              # Trang chủ
├── about.html              # Giới thiệu công ty
├── products.html           # Danh sách sản phẩm
├── product-detail.html     # Chi tiết sản phẩm
├── capabilities.html       # Năng lực gia công
├── contact.html            # Trang liên hệ
├── assets/
│   ├── js/
│   │   ├── products.js              # Dữ liệu sản phẩm (tập trung)
│   │   ├── render-products.js       # Render danh sách sản phẩm
│   │   └── render-product-detail.js  # Render chi tiết sản phẩm
│   ├── css/                # Custom CSS (nếu có)
│   └── images/             # Hình ảnh sản phẩm
├── docs/
│   ├── ui-designs/         # Các file UI gốc (tham khảo)
│   ├── prd/                # Tài liệu Product Requirements
│   └── README-PRODUCTS.md  # Hướng dẫn quản lý sản phẩm
├── .gitignore
├── vercel.json
└── README.md
```

## 🎯 Tính năng

- ✅ Trang chủ với hero section và featured products
- ✅ Trang danh sách sản phẩm với filter và search
- ✅ Trang chi tiết sản phẩm với gallery và specs
- ✅ Trang giới thiệu công ty
- ✅ Trang năng lực gia công & máy móc
- ✅ Trang liên hệ với form báo giá
- ✅ Responsive design (mobile-first)
- ✅ Dark mode support
- ✅ Quản lý sản phẩm tập trung trong `assets/js/products.js`

## 📦 Quản lý Sản phẩm

Tất cả dữ liệu sản phẩm được quản lý tập trung trong file **`assets/js/products.js`**.

### Thêm sản phẩm mới

1. Mở file `assets/js/products.js`
2. Copy một object sản phẩm mẫu
3. Điền thông tin mới (đảm bảo `id` là duy nhất)
4. Thêm vào mảng `products`
5. Lưu file - sản phẩm sẽ tự động xuất hiện trên website

**Xem chi tiết:** [docs/README-PRODUCTS.md](./docs/README-PRODUCTS.md)

## 🛠️ Development

### Chạy local

1. Clone repository:
```bash
git clone <repository-url>
cd web-QHP
```

2. Mở file HTML trực tiếp trong browser:
```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

Hoặc sử dụng local server:
```bash
# Python
python -m http.server 8000

# Node.js (nếu có http-server)
npx http-server
```

3. Truy cập: `http://localhost:8000`

### Cấu trúc dữ liệu sản phẩm

```javascript
{
  id: "sp-01",                    // ID duy nhất
  name: "Tên sản phẩm",
  code: "Mã sản phẩm",
  category: "Danh mục",
  shortDescription: "Mô tả ngắn",
  description: "Mô tả chi tiết",
  material: "Vật liệu",
  application: "Ứng dụng",
  specifications: {              // Thông số kỹ thuật
    "Thông số 1": "Giá trị 1",
    "Thông số 2": "Giá trị 2"
  },
  images: [                       // Mảng URL ảnh
    "url-1",
    "url-2"
  ],
  badges: ["ISO 9001"],           // Badges (optional)
  featured: true                  // Sản phẩm nổi bật (optional)
}
```

## 🚀 Deployment

### Vercel

1. Push code lên GitHub
2. Import project vào Vercel
3. Vercel sẽ tự động detect và deploy

Hoặc sử dụng Vercel CLI:
```bash
npm i -g vercel
vercel
```

### GitHub Pages

1. Push code lên GitHub
2. Vào Settings > Pages
3. Chọn branch `main` và folder `/ (root)`
4. Save - GitHub Pages sẽ tự động deploy

## 📝 Tài liệu

- [PRD Documents](./docs/prd/) - Product Requirements Documents
- [UI Designs](./docs/ui-designs/) - Original UI design files
- [Products Guide](./docs/README-PRODUCTS.md) - Hướng dẫn quản lý sản phẩm

## 🔧 Cấu hình

### Vercel Configuration

File `vercel.json` đã được cấu hình để:
- Redirect tất cả routes về `index.html` (SPA-like behavior)
- Set proper headers cho static assets
- Enable compression

### Customization

- **Colors**: Sửa trong Tailwind config (trong `<script>` tag của mỗi HTML)
- **Fonts**: Thay đổi Google Fonts link trong `<head>`
- **Icons**: Material Symbols đã được tích hợp sẵn

## 📄 License

© 2024 Công ty TNHH Quang Hiền Phát. All rights reserved.

## 👥 Contact

- **Website**: [quanghienphat.com](https://quanghienphat.com)
- **Email**: info@quanghienphat.com
- **Phone**: 0909 123 456

---

**Built with ❤️ for Quang Hiền Phát**
