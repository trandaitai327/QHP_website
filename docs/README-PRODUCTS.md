# Hướng Dẫn Quản Lý Sản Phẩm - Website Quang Hiền Phát

## Tổng Quan

Website sử dụng **static files** với dữ liệu sản phẩm được quản lý tập trung trong **1 file duy nhất**: `assets/js/products.js`

## Cấu Trúc Files

```
/
├── products.html                    # Trang danh sách sản phẩm
├── product-detail.html             # Trang chi tiết sản phẩm
├── assets/
│   └── js/
│       ├── products.js             # ⭐ FILE QUẢN LÝ DỮ LIỆU (DUY NHẤT)
│       ├── render-products.js      # Script render danh sách
│       └── render-product-detail.js # Script render chi tiết
```

## Quy Trình Thêm Sản Phẩm Mới

### Bước 1: Mở file `assets/js/products.js`

### Bước 2: Copy một object sản phẩm mẫu

```javascript
{
  id: "sp-06",  // ⚠️ QUAN TRỌNG: id phải là DUY NHẤT
  name: "Tên sản phẩm mới",
  code: "CODE-01",
  category: "Gia công cơ khí CNC",
  shortDescription: "Mô tả ngắn",
  description: "Mô tả chi tiết đầy đủ...",
  material: "Thép / Inox / Nhôm",
  application: "Công nghiệp ô tô, Dây chuyền sản xuất",
  specifications: {
    accuracy: "Độ chính xác cấp 6-7",
    hardness: "58-62 HRC",
    tolerance: "±0.005mm"
  },
  images: [
    "https://example.com/image1.jpg",
    "https://example.com/image2.jpg"
  ],
  badges: ["ISO 9001"],  // Optional: ["ISO 9001", "Đặt hàng", "Heavy Duty"]
  featured: true  // true = hiển thị trong "Nổi bật"
}
```

### Bước 3: Điền thông tin mới và thêm vào mảng `products`

```javascript
const products = [
  // ... sản phẩm cũ ...
  {
    id: "sp-06",  // ← ID mới, không trùng
    name: "Sản phẩm mới",
    // ... các thông tin khác
  }
];
```

### Bước 4: Lưu file

**XONG!** Sản phẩm sẽ tự động xuất hiện trên:
- Trang danh sách (`products.html`)
- Trang chi tiết (khi click vào sản phẩm)

## Cấu Trúc Dữ Liệu Sản Phẩm

### Các Trường Bắt Buộc

- `id` (string): ID duy nhất, ví dụ: "sp-01", "sp-02"
- `name` (string): Tên sản phẩm
- `category` (string): Danh mục sản phẩm

### Các Trường Khuyến Nghị

- `code` (string): Mã sản phẩm
- `shortDescription` (string): Mô tả ngắn (hiển thị trong danh sách)
- `description` (string): Mô tả chi tiết (hiển thị trong trang chi tiết)
- `material` (string): Vật liệu
- `application` (string): Ứng dụng
- `images` (array): Mảng URL hình ảnh
- `specifications` (object): Thông số kỹ thuật
- `badges` (array): Badge hiển thị (["ISO 9001", "Đặt hàng", etc.])
- `featured` (boolean): true = sản phẩm nổi bật

### Ví Dụ Đầy Đủ

```javascript
{
  id: "sp-06",
  name: "Bánh răng công nghiệp",
  code: "GR-205",
  category: "Gia công cơ khí CNC",
  shortDescription: "Bánh răng công nghiệp thép hợp kim chất lượng cao",
  description: "Mô tả chi tiết về sản phẩm, quy trình gia công, ứng dụng...",
  material: "Thép hợp kim, Tôi cao tần",
  application: "Công nghiệp ô tô, Dây chuyền sản xuất",
  specifications: {
    accuracy: "Độ chính xác cấp 6-7",
    hardness: "58-62 HRC",
    maxSize: "Ø200mm - Ø800mm",
    tolerance: "±0.005mm"
  },
  images: [
    "https://example.com/image1.jpg",
    "https://example.com/image2.jpg"
  ],
  badges: ["ISO 9001"],
  featured: true
}
```

## Tính Năng

### Trang Danh Sách (`products.html`)

- ✅ Hiển thị tất cả sản phẩm từ `products.js`
- ✅ Lọc theo danh mục (Category)
- ✅ Lọc theo vật liệu (Material)
- ✅ Tìm kiếm theo tên, mã, mô tả
- ✅ Sắp xếp: Tất cả / Nổi bật
- ✅ Click vào sản phẩm → chuyển đến `product-detail.html?id=sp-01`

### Trang Chi Tiết (`product-detail.html`)

- ✅ Đọc ID từ URL: `?id=sp-01`
- ✅ Tìm sản phẩm trong `products.js`
- ✅ Hiển thị đầy đủ thông tin
- ✅ Gallery hình ảnh
- ✅ Thông số kỹ thuật
- ✅ Nút liên hệ báo giá
- ✅ Hiển thị lỗi nếu không tìm thấy sản phẩm

## Lưu Ý Quan Trọng

### ✅ NÊN LÀM

- Chỉ sửa file `products.js` để thêm/sửa sản phẩm
- Đảm bảo `id` là duy nhất
- Sử dụng format nhất quán cho dữ liệu
- Test sau khi thêm sản phẩm mới

### ❌ KHÔNG NÊN

- ❌ Hard-code dữ liệu trong HTML
- ❌ Sửa file `render-products.js` hoặc `render-product-detail.js` (trừ khi cần thay đổi logic render)
- ❌ Tạo nhiều file dữ liệu
- ❌ Sử dụng database hoặc backend

## Troubleshooting

### Sản phẩm không hiển thị?

1. Kiểm tra `id` có trùng với sản phẩm khác không
2. Kiểm tra cú pháp JavaScript (dấu phẩy, ngoặc nhọn)
3. Mở Console (F12) xem có lỗi không
4. Đảm bảo file `products.js` được load đúng

### Lỗi "Sản phẩm không tồn tại"?

1. Kiểm tra ID trong URL có đúng không: `product-detail.html?id=sp-01`
2. Kiểm tra sản phẩm có tồn tại trong `products.js` với ID đó không
3. Kiểm tra chính tả ID (case-sensitive)

### Hình ảnh không hiển thị?

1. Kiểm tra URL hình ảnh có đúng không
2. Kiểm tra hình ảnh có accessible không (CORS, 404)
3. Sử dụng URL đầy đủ hoặc đường dẫn tương đối đúng

## Ví Dụ Thêm Sản Phẩm

### Thêm sản phẩm mới vào cuối mảng:

```javascript
const products = [
  // ... các sản phẩm hiện có ...
  
  // Sản phẩm mới
  {
    id: "sp-06",
    name: "Trục máy công nghiệp",
    code: "SHAFT-001",
    category: "Chi tiết máy chính xác",
    shortDescription: "Trục máy gia công từ thép hợp kim",
    description: "Trục máy được gia công chính xác từ thép hợp kim SCM440, qua quy trình nhiệt luyện để đạt độ cứng và độ bền cao.",
    material: "Thép hợp kim SCM440",
    application: "Công nghiệp ô tô, Máy móc công nghiệp",
    specifications: {
      accuracy: "Dung sai ±0.01mm",
      hardness: "45-50 HRC",
      maxSize: "Ø150mm x 1000mm",
      tolerance: "±0.01mm"
    },
    images: [
      "https://example.com/shaft-1.jpg"
    ],
    badges: [],
    featured: false
  }
];
```

## Hỗ Trợ

Nếu gặp vấn đề, kiểm tra:
1. Console browser (F12) để xem lỗi JavaScript
2. Network tab để xem file `products.js` có load được không
3. Đảm bảo cấu trúc thư mục đúng

---

**Lưu ý:** Tất cả dữ liệu sản phẩm phải được quản lý trong `assets/js/products.js`. Không hard-code trong HTML!
