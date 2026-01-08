# Cấu trúc Dự án

## 📂 Tổng quan

```
quang-hien-phat-website/
├── 📄 HTML Files (Root)
│   ├── index.html              # Trang chủ
│   ├── about.html              # Giới thiệu công ty
│   ├── products.html           # Danh sách sản phẩm
│   ├── product-detail.html     # Chi tiết sản phẩm
│   ├── capabilities.html       # Năng lực gia công
│   └── contact.html            # Trang liên hệ
│
├── 📁 assets/                  # Tài nguyên tĩnh
│   ├── js/
│   │   ├── products.js              # ⭐ Dữ liệu sản phẩm (tập trung)
│   │   ├── render-products.js       # Logic render danh sách
│   │   └── render-product-detail.js # Logic render chi tiết
│   ├── css/                    # Custom CSS (nếu có)
│   └── images/                 # Hình ảnh sản phẩm
│
├── 📁 docs/                    # Tài liệu
│   ├── prd/                    # Product Requirements Documents
│   ├── ui-designs/             # UI designs gốc (tham khảo)
│   ├── README.md               # Tài liệu docs
│   ├── README-PRODUCTS.md      # Hướng dẫn quản lý sản phẩm
│   └── DEPLOYMENT.md           # Hướng dẫn deployment
│
├── 📄 Configuration Files
│   ├── .gitignore              # Git ignore rules
│   ├── package.json            # Project metadata
│   ├── vercel.json            # Vercel deployment config
│   ├── LICENSE                # License file
│   └── README.md              # Main README
│
└── 📁 .git/                    # Git repository (nếu đã init)
```

## 🎯 Quy tắc Tổ chức

### Root Directory
- **Chỉ chứa các file HTML chính** - Các trang chính của website
- **File cấu hình** - `.gitignore`, `package.json`, `vercel.json`, etc.
- **README.md** - Tài liệu chính của project

### `/assets/`
- **`js/`** - Tất cả JavaScript files
  - `products.js` - ⭐ **File quan trọng nhất**: Quản lý tất cả dữ liệu sản phẩm
  - `render-*.js` - Các file render UI
- **`css/`** - Custom CSS (hiện tại dùng Tailwind CDN)
- **`images/`** - Hình ảnh sản phẩm, logo, etc.

### `/docs/`
- **`prd/`** - Tài liệu Product Requirements (tham khảo)
- **`ui-designs/`** - Các file UI design gốc (không sử dụng trực tiếp)
- **`README-PRODUCTS.md`** - Hướng dẫn chi tiết về quản lý sản phẩm
- **`DEPLOYMENT.md`** - Hướng dẫn deployment

## 📝 Quy tắc Đặt tên

### Files
- **HTML files**: lowercase, kebab-case (ví dụ: `product-detail.html`)
- **JavaScript files**: lowercase, kebab-case (ví dụ: `render-products.js`)
- **Markdown files**: UPPERCASE cho README, lowercase cho các file khác

### Directories
- **Lowercase** với kebab-case hoặc snake_case
- **Không dùng** spaces trong tên thư mục

## 🔗 Đường dẫn

### Relative Paths
- Tất cả assets sử dụng **relative paths** từ root
- Ví dụ: `assets/js/products.js` từ bất kỳ file HTML nào

### Navigation Links
- Tất cả navigation links sử dụng **relative paths**
- Ví dụ: `href="products.html"` thay vì `href="/products.html"`

## 🚫 Files không nên commit

- `node_modules/` (nếu có)
- `.vercel/` (Vercel cache)
- `*.log` files
- `.DS_Store`, `Thumbs.db` (OS files)
- Environment files (`.env`, `.env.local`)

Xem chi tiết trong `.gitignore`

## 📦 Dependencies

### External (CDN)
- **Tailwind CSS** - `https://cdn.tailwindcss.com`
- **Material Symbols** - `https://fonts.googleapis.com`
- **Google Fonts (Inter)** - `https://fonts.googleapis.com`

### Local
- Không có dependencies cần install
- Chạy được ngay khi mở file HTML

## 🔄 Workflow

### Thêm sản phẩm mới
1. Mở `assets/js/products.js`
2. Thêm object sản phẩm mới vào mảng `products`
3. Commit và push
4. Website tự động cập nhật

### Thay đổi UI
1. Sửa trực tiếp trong các file HTML
2. Test local
3. Commit và push
4. Vercel tự động deploy

### Thêm trang mới
1. Tạo file HTML mới ở root
2. Copy navigation từ file HTML khác
3. Sửa links navigation trong tất cả các file
4. Commit và push

## 📚 Tài liệu liên quan

- [README.md](../README.md) - Tài liệu chính
- [docs/README-PRODUCTS.md](./README-PRODUCTS.md) - Hướng dẫn quản lý sản phẩm
- [docs/DEPLOYMENT.md](./DEPLOYMENT.md) - Hướng dẫn deployment
- [docs/prd/](./prd/) - Product Requirements Documents
