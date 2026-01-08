# PRD: Trang Chi Tiết Sản Phẩm (Product Detail Page)

## 1. Tổng quan

### 1.1. Mục đích
Trang chi tiết sản phẩm cung cấp thông tin đầy đủ về sản phẩm/dịch vụ để:
- Giúp khách hàng hiểu rõ thông số kỹ thuật và ứng dụng
- Thể hiện năng lực gia công của công ty
- Tạo cơ hội chuyển đổi thành yêu cầu báo giá
- Hiển thị các sản phẩm liên quan để tăng engagement

### 1.2. Đối tượng sử dụng
- Khách hàng B2B đang nghiên cứu giải pháp
- Kỹ sư thiết kế cần thông tin kỹ thuật chi tiết
- Nhà mua hàng so sánh specifications

## 2. Yêu cầu chức năng

### 2.1. Breadcrumbs Navigation
**Mục đích:** Context và navigation

**Path:** Trang chủ > Sản phẩm > [Category] > [Product Name]

**Components:**
- Clickable links với hover effect
- Chevron icons giữa items
- Current page: Non-clickable, bold

### 2.2. Product Hero Section
**Layout:** 2-column grid (7:5 ratio)

#### 2.2.1. Left Column: Image Gallery

**Main Image:**
- Aspect ratio: 4:3
- Full width, rounded corners
- Zoom on click (lightbox/modal)
- Badge overlay: "Click để phóng to"
- Background: White/surface color

**Thumbnail Gallery:**
- 4 thumbnails (aspect-square)
- First thumbnail: Active state (primary border)
- Hover: Border color change
- "+2 ảnh" indicator nếu có nhiều hơn 4 ảnh
- Click thumbnail: Update main image

**Image Features:**
- Lazy loading
- Alt text cho accessibility
- High-res images cho zoom

#### 2.2.2. Right Column: Product Information

**Status Badges:**
- "Có thể gia công theo yêu cầu" (green badge, pulse animation)
- "Tiêu chuẩn ISO 9001:2015" (blue badge, verified icon)

**Product Title:**
- Font: Bold, 3xl-4xl responsive
- Color: Text main

**Description:**
- Paragraph mô tả sản phẩm
- Border bottom separator
- Text: Secondary color

**Technical Specifications Card:**
- Background: Surface color, border, rounded
- Header: "Thông số kỹ thuật" với settings icon
- Grid layout: 2 columns (responsive: 1 column mobile)
- Fields:
  - Vật liệu
  - Độ cứng
  - Kích thước tối đa
  - Dung sai gia công
  - Công nghệ

**Call-to-Action Area:**
- Info box: "Lưu ý" về gia công theo yêu cầu
- 2 CTA buttons:
  - Primary: "Liên hệ báo giá" (primary bg, request_quote icon)
  - Secondary: "Trao đổi yêu cầu" (outline, chat icon)

### 2.3. Product Details Section
**Layout:** 2-column (2:1 ratio)

#### 2.3.1. Left Column: Detailed Information

**Section Title:**
- "Chi tiết ứng dụng & Công năng"
- Font: Bold, 2xl

**Content:**
- Multiple paragraphs mô tả chi tiết
- Use cases và applications
- Technical details

**Quality Control Process:**
- Subsection: "Quy trình kiểm soát chất lượng"
- Grid: 2 columns (responsive: 1 column mobile)
- List items với check_circle icons:
  - Kiểm tra vật liệu đầu vào
  - Đo đạc 3D CMM
  - Kiểm tra độ cứng và vết nứt
  - Test chạy thử nghiệm tải trọng

#### 2.3.2. Right Column: Why Choose Us (Sticky)

**Card:**
- Background: Light background, border, rounded
- Sticky position: top-24
- Padding: 24px

**Content:**
- Title: "Tại sao chọn Quang Hiền Phát?"
- 3 feature items với icons:
  1. Hệ thống máy hiện đại (factory icon)
  2. Đội ngũ kỹ sư 10+ năm (engineering icon)
  3. Tiến độ cam kết (schedule icon)

**Contact Info:**
- Border top separator
- "Cần hỗ trợ kỹ thuật ngay?"
- Phone number với call icon
- Clickable link

### 2.4. Related Products Section
**Mục đích:** Tăng engagement và cross-sell

**Header:**
- Title: "Năng lực gia công liên quan"
- Link: "Xem tất cả danh mục" với arrow icon

**Product Grid:**
- Layout: 4 columns desktop, 2 tablet, 1 mobile
- Gap: 24px

**Product Cards:**
- Similar to listing page cards
- Smaller size
- Badge overlay: Process type (e.g., "Phay CNC")
- Title, short description
- Specs preview (size, material)
- "Chi tiết" link

**Products to Show:**
- Same category
- Similar materials
- Related applications
- Algorithm-based recommendations

## 3. Yêu cầu UI/UX

### 3.1. Image Gallery
- **Lightbox:** Full-screen view khi click main image
- **Navigation:** Previous/Next arrows trong lightbox
- **Keyboard:** Arrow keys để navigate
- **Touch gestures:** Swipe trên mobile

### 3.2. Sticky Sidebar
- **Desktop:** Sticky khi scroll
- **Mobile:** Normal flow, không sticky
- **Breakpoint:** lg và above

### 3.3. Responsive Behavior
- **Mobile:** Single column, stacked layout
- **Tablet:** 2-column hero, single column details
- **Desktop:** Full 2-column layout

### 3.4. Loading States
- **Skeleton screens:** Cho images và content
- **Progressive loading:** Load critical content first
- **Image placeholders:** Blur-up effect

## 4. Yêu cầu kỹ thuật

### 4.1. Data Structure
```javascript
ProductDetail {
  id: string
  name: string
  code: string
  description: string
  longDescription: string
  images: string[]
  category: string
  status: 'available' | 'custom' | 'out_of_stock'
  badges: string[]
  specifications: {
    material: string
    hardness: string
    maxSize: string
    tolerance: string
    technology: string[]
  }
  applications: string[]
  qualityControl: string[]
  relatedProducts: string[] // IDs
}
```

### 4.2. Image Optimization
- **Formats:** WebP với fallback JPEG
- **Sizes:** Multiple sizes cho responsive
- **Lazy loading:** Intersection Observer API
- **CDN:** Fast image delivery

### 4.3. SEO
- **Meta title:** Product name + company
- **Meta description:** Product description (155-160 chars)
- **Structured data:** Product schema (JSON-LD)
- **Open Graph:** Product images và details
- **Canonical URL:** Prevent duplicate content

## 5. User Stories

### 5.1. Xem chi tiết kỹ thuật
**As a** kỹ sư thiết kế  
**I want to** xem thông số kỹ thuật chi tiết  
**So that** tôi có thể đánh giá sản phẩm phù hợp với dự án

### 5.2. Xem nhiều hình ảnh
**As a** nhà mua hàng  
**I want to** xem nhiều góc độ của sản phẩm  
**So that** tôi có thể đánh giá chất lượng gia công

### 5.3. Liên hệ báo giá
**As a** khách hàng tiềm năng  
**I want to** dễ dàng liên hệ để báo giá  
**So that** tôi có thể nhận quote nhanh chóng

### 5.4. Xem sản phẩm liên quan
**As a** khách hàng  
**I want to** xem các sản phẩm tương tự  
**So that** tôi có thể khám phá thêm options

## 6. Success Metrics

### 6.1. Engagement
- Average time on page: > 2 phút
- Scroll depth: > 75%
- Image gallery interactions: > 40%
- Related products click rate: > 15%

### 6.2. Conversion
- CTA click rate: > 12%
- Contact form submissions: > 5%
- Phone number clicks: > 3%

### 6.3. Technical
- Page load time: < 2.5s
- Image load time: < 1s
- Lighthouse score: > 90

## 7. Dependencies

### 7.1. Components
- Image gallery/lightbox component
- Product card component (reuse từ listing)
- CTA button components
- Sticky sidebar component

### 7.2. Services
- Product API/database
- Image CDN
- Analytics tracking
- Contact form backend

## 8. Future Enhancements

### 8.1. Phase 2
- 3D product viewer
- AR preview (mobile)
- Product configurator
- Download technical drawings (PDF)
- Video demonstrations

### 8.2. Phase 3
- Customer reviews/testimonials
- Case studies per product
- Interactive specifications calculator
- Real-time availability status
- Live chat integration

## 9. Acceptance Criteria

- [ ] Image gallery hoạt động với lightbox
- [ ] Thumbnail click updates main image
- [ ] Technical specs hiển thị đầy đủ
- [ ] Sticky sidebar hoạt động trên desktop
- [ ] Related products hiển thị đúng
- [ ] CTAs hoạt động và redirect đúng
- [ ] Responsive trên tất cả devices
- [ ] SEO meta tags đầy đủ
- [ ] Structured data implemented
- [ ] Page load time < 2.5s
- [ ] Images lazy load correctly
- [ ] Keyboard navigation works

## 10. Notes

- Ưu tiên image quality: High-res cho zoom
- Technical specs phải chính xác và cập nhật
- Related products algorithm cần optimize
- Consider A/B testing cho CTA placement và copy
- Track which related products convert best
