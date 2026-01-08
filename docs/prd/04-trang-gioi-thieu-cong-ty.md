# PRD: Trang Giới Thiệu Công Ty (About Us Page)

## 1. Tổng quan

### 1.1. Mục đích
Trang giới thiệu công ty nhằm:
- Xây dựng niềm tin và uy tín với khách hàng
- Thể hiện lịch sử, triết lý và giá trị cốt lõi
- Showcase năng lực sản xuất và máy móc
- Tạo kết nối cảm xúc với đối tác B2B

### 1.2. Đối tượng sử dụng
- Khách hàng tiềm năng muốn hiểu về công ty
- Đối tác hiện tại tìm hiểu thêm
- Nhà đầu tư đánh giá công ty
- Nhân viên/candidates tìm hiểu văn hóa

## 2. Yêu cầu chức năng

### 2.1. Hero Section
**Mục đích:** Tạo ấn tượng mạnh mẽ đầu trang

**Background:**
- Full-width image: CNC machine với sparks
- Dark overlay gradient (slate-900)
- Parallax effect (optional)

**Content:**
- Badge: "Định hướng tầm nhìn 2026" (orange accent, pulse animation)
- Headline: "Kiến tạo giải pháp cơ khí chính xác"
  - Highlight: "cơ khí chính xác" (gradient text)
- Description: Triết lý "Làm chuẩn ngay từ đầu"
- 2 CTAs:
  - Primary: "Xem hồ sơ năng lực"
  - Secondary: "Liên hệ hợp tác" (link với arrow icon)

### 2.2. Stats Bar
**Mục đích:** Thể hiện số liệu ấn tượng

**Background:** Primary color (#1152d4)

**Layout:** 4-column grid (responsive: 2 columns mobile)

**Stats:**
1. **Dung sai:** ±0.005mm
2. **Kiểm soát QC:** 100%
3. **Kinh nghiệm đội ngũ:** 15+ Năm
4. **Vận hành:** 24/7

**Design:**
- Border separators giữa items
- Label: Small, blue-100 color
- Value: Large, bold, white
- Hover: Slight scale effect

### 2.3. Philosophy Section
**Layout:** 2-column split (image + content)

#### 2.3.1. Left: Image
- Aspect ratio: 4:3
- Rounded corners, shadow
- Image: Engineer checking blueprints
- Floating badge overlay:
  - "Thành lập: 2026"
  - "Định hướng tương lai công nghiệp"
- Decorative border element behind

#### 2.3.2. Right: Content
- Label: "Triết lý kỹ thuật" (primary color)
- Title: "Làm chuẩn ngay từ đầu"
- Description paragraph
- 2 feature items với icons:
  1. **Tập trung kỹ thuật** (architecture icon)
     - Mô tả: Đầu tư máy móc và phần mềm CAD/CAM
  2. **Giảm thiểu lãng phí** (verified icon)
     - Mô tả: Quy trình tối ưu, tiết kiệm chi phí

### 2.4. Core Values Section
**Mục đích:** Thể hiện giá trị cốt lõi

**Background:** Slate-50 với technical grid pattern

**Layout:** 3-column grid (responsive: 1 column mobile)

**Header:**
- Centered title: "Giá trị cốt lõi"
- Subtitle: "Những nguyên tắc định hình mọi sản phẩm"

**3 Value Cards:**

1. **Chính xác tuyệt đối**
   - Large icon: straighten (primary color)
   - Background icon: Faded, top-right
   - Description: Sai số thấp nhất, chuẩn mực cao nhất

2. **Trách nhiệm**
   - Large icon: handshake (orange accent)
   - Description: Cam kết tiến độ và chất lượng

3. **Hợp tác lâu dài**
   - Large icon: trending_up (primary color)
   - Description: Đồng hành cùng sự phát triển

**Card Features:**
- Hover: Shadow increase, translate up
- Background icon opacity animation
- Rounded corners, border, shadow

### 2.5. Machinery & Factory Showcase
**Mục đích:** Thể hiện năng lực sản xuất

**Layout:** Grid 4 columns, 2 rows (complex grid)

**Grid Structure:**
- Large image: 2 columns x 2 rows (CNC center)
- Medium images: 1 column x 1 row (QC, Raw materials)
- Wide image: 2 columns x 1 row (Factory floor)

**Images:**
1. **Trung tâm gia công CNC** (large)
   - Overlay gradient: Black to transparent
   - Text overlay: Title + description
   
2. **Kiểm soát chất lượng (QC)** (medium)
   - Dark overlay: 40% opacity
   - Text: "Kiểm soát chất lượng (QC)"
   
3. **Kho nguyên liệu chuẩn** (medium)
   - Text: "Kho nguyên liệu chuẩn"
   
4. **Quy trình vận hành tiêu chuẩn** (wide)
   - Text: "Quy trình vận hành tiêu chuẩn"

**Hover Effects:**
- Image scale: 1.1
- Overlay opacity change
- Smooth transitions

**CTA:**
- Link: "Xem danh sách thiết bị" với arrow icon

### 2.6. Call-to-Action Section
**Mục đích:** Chuyển đổi thành lead

**Background:** Slate-900 với abstract pattern

**Content:**
- Title: "Sẵn sàng cho dự án tiếp theo?"
- Description: Mô tả quy trình tư vấn
- 2 CTAs:
  - Primary: "Gửi yêu cầu báo giá"
  - Secondary: "Liên hệ tư vấn kỹ thuật"

**Trust Badges:**
- "Phản hồi trong vòng 24h" (check_circle icon)
- "Bảo mật bản vẽ tuyệt đối" (shield icon)

## 3. Yêu cầu UI/UX

### 3.1. Visual Hierarchy
- **Hero:** Largest, most prominent
- **Stats:** Eye-catching, primary color
- **Philosophy:** Balanced split layout
- **Values:** Equal weight, grid layout
- **Showcase:** Visual impact với images

### 3.2. Typography
- **Headlines:** Bold, large (3xl-6xl)
- **Body:** Normal weight, readable size
- **Labels:** Small, uppercase, tracking-wide
- **Font:** Inter (consistent với site)

### 3.3. Color Scheme
- **Primary:** #1152d4 (Blue)
- **Accent:** #f97316 (Orange)
- **Background:** Light/Dark modes
- **Text:** High contrast ratios

### 3.4. Animations
- **Fade-in:** Content appears on scroll
- **Hover effects:** Cards và images
- **Pulse:** Badge animations
- **Smooth transitions:** All interactions

## 4. Yêu cầu kỹ thuật

### 4.1. Performance
- **Image optimization:** WebP format, lazy loading
- **Grid layout:** CSS Grid với fallbacks
- **Parallax:** Optional, không ảnh hưởng performance
- **Page load:** < 3s

### 4.2. SEO
- **Meta title:** "Giới thiệu Công ty - Quang Hiền Phát"
- **Meta description:** Company overview (155-160 chars)
- **Structured data:** Organization schema
- **Open Graph:** Company logo và description

### 4.3. Accessibility
- **Alt text:** Tất cả images
- **Color contrast:** WCAG AA compliance
- **Keyboard navigation:** Full support
- **Screen readers:** Semantic HTML

## 5. User Stories

### 5.1. Hiểu về công ty
**As a** khách hàng tiềm năng  
**I want to** hiểu về lịch sử và triết lý công ty  
**So that** tôi có thể đánh giá độ tin cậy

### 5.2. Xem năng lực sản xuất
**As a** nhà mua hàng  
**I want to** xem máy móc và nhà xưởng  
**So that** tôi có thể đánh giá năng lực sản xuất

### 5.3. Tìm hiểu giá trị
**As a** đối tác tiềm năng  
**I want to** hiểu giá trị cốt lõi của công ty  
**So that** tôi có thể đánh giá sự phù hợp

## 6. Success Metrics

### 6.1. Engagement
- Average time on page: > 3 phút
- Scroll depth: > 80%
- CTA click rate: > 10%
- Image gallery interactions: > 30%

### 6.2. Conversion
- Contact form submissions: > 5%
- "Xem hồ sơ năng lực" clicks: > 15%
- Phone number clicks: > 3%

### 6.3. Technical
- Page load time: < 3s
- Lighthouse score: > 90
- Mobile usability: 100/100

## 7. Dependencies

### 7.1. Content
- Company history và philosophy text
- High-quality images (machinery, factory)
- Stats và metrics data
- Team photos (optional)

### 7.2. Components
- Hero section component
- Stats bar component
- Value cards component
- Image grid component
- CTA section component

## 8. Future Enhancements

### 8.1. Phase 2
- Timeline của công ty
- Team members section
- Certifications và awards gallery
- Video tour của nhà xưởng
- Customer testimonials

### 8.2. Phase 3
- Interactive factory map
- Virtual tour (360°)
- Case studies showcase
- Sustainability report
- News và updates section

## 9. Acceptance Criteria

- [ ] Hero section với gradient text effect
- [ ] Stats bar hiển thị đúng 4 metrics
- [ ] Philosophy section với image và content
- [ ] 3 value cards với hover effects
- [ ] Machinery grid với complex layout
- [ ] All CTAs hoạt động
- [ ] Responsive trên tất cả devices
- [ ] Images optimized và lazy loaded
- [ ] SEO meta tags đầy đủ
- [ ] Page load time < 3s
- [ ] Accessibility audit pass
- [ ] Dark mode support

## 10. Notes

- Ưu tiên storytelling: Kể câu chuyện công ty một cách hấp dẫn
- Images phải chất lượng cao, thể hiện tính chuyên nghiệp
- Stats phải chính xác và cập nhật thường xuyên
- Consider video content để tăng engagement
- Track which sections users spend most time on
