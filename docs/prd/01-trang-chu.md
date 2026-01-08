# PRD: Trang Chủ (Homepage)

## 1. Tổng quan

### 1.1. Mục đích
Trang chủ là điểm tiếp xúc đầu tiên của khách hàng với website Quang Hiền Phát, có nhiệm vụ:
- Giới thiệu tổng quan về công ty và dịch vụ
- Thu hút và tạo ấn tượng chuyên nghiệp
- Dẫn dắt người dùng đến các trang chức năng khác
- Tối ưu hóa chuyển đổi (conversion) thành yêu cầu báo giá

### 1.2. Đối tượng sử dụng
- Khách hàng B2B tiềm năng (doanh nghiệp sản xuất)
- Đối tác hiện tại tìm kiếm thông tin
- Nhà đầu tư và đối tác chiến lược

## 2. Yêu cầu chức năng

### 2.1. Hero Section
**Mục đích:** Tạo ấn tượng mạnh mẽ ngay từ đầu

**Nội dung:**
- Headline chính: "Gia công & cung cấp thiết bị công nghiệp chính xác cao"
- Sub-headline: Mô tả ngắn gọn về công ty và định vị B2B
- Hình ảnh nền: Máy CNC đang hoạt động, ánh sáng công nghiệp
- Badge tin cậy: "Đối tác gia công cơ khí tin cậy"
- Floating card: Hiển thị độ chính xác ±0.005mm

**Call-to-Action (CTA):**
- Nút chính: "Liên hệ trao đổi" (màu primary, icon phone)
- Nút phụ: "Xem danh mục sản phẩm" (outline style)

**Trust Indicators:**
- ISO 9001:2015 certification badge
- "Giao hàng đúng hạn" indicator

**Yêu cầu kỹ thuật:**
- Responsive: Mobile-first design
- Image optimization: Lazy loading, WebP format
- Animation: Fade-in cho text, hover effect cho floating card

### 2.2. Features/Stats Section
**Mục đích:** Thể hiện năng lực sản xuất vượt trội

**Layout:** Grid 4 cột (responsive: 1 cột mobile, 2 cột tablet, 4 cột desktop)

**4 Feature Cards:**
1. **Độ chính xác cao**
   - Icon: crossword/material symbol
   - Mô tả: Hệ thống máy CNC hiện đại, dung sai thấp nhất
   
2. **Quy mô công nghiệp**
   - Icon: factory
   - Mô tả: Sản xuất hàng loạt, quy trình tối ưu
   
3. **Chuẩn chất lượng**
   - Icon: verified
   - Mô tả: Kiểm soát QC nghiêm ngặt từng công đoạn
   
4. **Giá cả cạnh tranh**
   - Icon: handshake
   - Mô tả: Chi phí tối ưu, chiết khấu hợp đồng dài hạn

**Yêu cầu:**
- Hover effect: Shadow tăng, scale nhẹ
- Icon animation: Color transition khi hover

### 2.3. Featured Products Section
**Mục đích:** Showcase sản phẩm tiêu biểu

**Header:**
- Section label: "Danh mục" (uppercase, tracking-wide)
- Title: "Sản phẩm tiêu biểu"
- Link "Xem tất cả sản phẩm" (desktop only)

**Product Grid:**
- Layout: 4 cột desktop, 2 cột tablet, 1 cột mobile
- Số lượng: 8 sản phẩm hiển thị
- Mỗi product card bao gồm:
  - Hình ảnh (aspect-square, hover scale)
  - Tên sản phẩm (hover: đổi màu primary)
  - Mô tả ngắn (1 dòng)

**Sản phẩm mẫu:**
1. Trục máy công nghiệp
2. Bánh răng chính xác
3. Chi tiết phay CNC
4. Khuôn mẫu kim loại
5. Linh kiện lắp ráp
6. Chi tiết tiện tự động
7. Cắt Laser & Chấn gấp
8. Dịch vụ Hàn & Kết cấu

**Mobile CTA:**
- Button "Xem tất cả sản phẩm" (full width, center)

### 2.4. Call-to-Action Section
**Mục đích:** Chuyển đổi khách hàng thành lead

**Background:** Dark theme (neutral-900) với gradient overlay

**Nội dung:**
- Headline: "Bạn cần báo giá gia công theo yêu cầu?"
- Mô tả: Thông tin về quy trình (24h phản hồi, bảo mật bản vẽ)
- 2 CTA buttons:
  - Primary: "Gửi yêu cầu báo giá" (icon mail)
  - Secondary: "Hotline: 0909 123 456" (icon call)

**Trust badges:**
- "Phản hồi trong vòng 24h" (icon check_circle)
- "Bảo mật bản vẽ tuyệt đối" (icon shield)

## 3. Yêu cầu UI/UX

### 3.1. Design System
- **Primary Color:** #1152d4 (Blue)
- **Background:** #f6f6f8 (Light), #101622 (Dark)
- **Typography:** Inter font family
- **Spacing:** Consistent 8px grid system
- **Border Radius:** 0.25rem - 0.75rem

### 3.2. Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

### 3.3. Performance Requirements
- First Contentful Paint (FCP): < 1.8s
- Largest Contentful Paint (LCP): < 2.5s
- Cumulative Layout Shift (CLS): < 0.1
- Time to Interactive (TTI): < 3.5s

### 3.4. Accessibility
- WCAG 2.1 Level AA compliance
- Keyboard navigation support
- Screen reader friendly
- Alt text cho tất cả images
- Color contrast ratio ≥ 4.5:1

## 4. Yêu cầu kỹ thuật

### 4.1. Frontend
- Framework: HTML5, Tailwind CSS (CDN)
- Icons: Material Symbols Outlined
- Fonts: Google Fonts (Inter)
- Dark mode: Class-based toggle

### 4.2. SEO
- Meta title: "Trang chủ Quang Hiền Phát - Gia công cơ khí chính xác"
- Meta description: Tối ưu 155-160 ký tự
- Structured data: Organization, LocalBusiness schema
- Open Graph tags cho social sharing

### 4.3. Analytics
- Track page views
- Track CTA button clicks
- Track scroll depth
- Track time on page

## 5. User Stories

### 5.1. Khách hàng mới
**As a** khách hàng tiềm năng  
**I want to** hiểu rõ về công ty và dịch vụ  
**So that** tôi có thể quyết định có hợp tác hay không

### 5.2. Khách hàng hiện tại
**As a** đối tác hiện tại  
**I want to** nhanh chóng tìm thông tin liên hệ  
**So that** tôi có thể đặt hàng hoặc yêu cầu hỗ trợ

### 5.3. Nhà đầu tư
**As a** nhà đầu tư  
**I want to** đánh giá năng lực và quy mô công ty  
**So that** tôi có thể quyết định đầu tư

## 6. Success Metrics

### 6.1. Engagement Metrics
- Bounce rate: < 40%
- Average session duration: > 2 phút
- Pages per session: > 2.5

### 6.2. Conversion Metrics
- CTA click rate: > 5%
- Form submission rate: > 2%
- Contact form completion: > 80%

### 6.3. Technical Metrics
- Page load time: < 3s
- Mobile usability score: 100/100
- SEO score: > 90/100

## 7. Dependencies

### 7.1. External
- Google Fonts API
- Material Symbols CDN
- Tailwind CSS CDN
- Image hosting/CDN

### 7.2. Internal
- Product database/API
- Contact form backend
- Analytics integration

## 8. Future Enhancements

### 8.1. Phase 2
- Video background trong hero section
- Interactive 3D product viewer
- Live chat widget
- Multi-language support (English)

### 8.2. Phase 3
- Personalization dựa trên user behavior
- A/B testing cho CTAs
- Advanced analytics dashboard

## 9. Acceptance Criteria

- [ ] Hero section hiển thị đầy đủ trên tất cả devices
- [ ] Tất cả CTAs hoạt động và redirect đúng trang
- [ ] Product cards có hover effects mượt mà
- [ ] Page load time < 3s trên 3G connection
- [ ] Pass Lighthouse audit với score > 90
- [ ] Responsive trên tất cả breakpoints
- [ ] Dark mode toggle hoạt động
- [ ] SEO meta tags đầy đủ
- [ ] Analytics tracking được implement
- [ ] Accessibility audit pass WCAG AA

## 10. Notes

- Ưu tiên performance và user experience
- Đảm bảo brand consistency với các trang khác
- Hình ảnh phải chất lượng cao, thể hiện tính chuyên nghiệp
- Copywriting tập trung vào lợi ích B2B, không chỉ features
