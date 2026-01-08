# PRD: Trang Năng Lực Gia Công & Máy Móc (Capabilities Page)

## 1. Tổng quan

### 1.1. Mục đích
Trang năng lực gia công nhằm:
- Chi tiết hóa các phương thức gia công có sẵn
- Showcase hệ thống máy móc và thiết bị
- Giải thích quy trình làm việc từ A-Z
- Tạo niềm tin về khả năng đáp ứng yêu cầu kỹ thuật

### 1.2. Đối tượng sử dụng
- Kỹ sư thiết kế cần hiểu năng lực gia công
- Nhà mua hàng đánh giá khả năng sản xuất
- Khách hàng tiềm năng tìm hiểu dịch vụ
- Đối tác hiện tại muốn mở rộng hợp tác

## 2. Yêu cầu chức năng

### 2.1. Hero Section
**Mục đích:** Tạo ấn tượng về năng lực

**Background:**
- Full-width image: CNC machine với sparks
- Dark overlay: Gradient từ background-dark
- Opacity: 40% cho image

**Content:**
- Badge: "Đối tác công nghiệp tin cậy" (primary/20 bg, verified icon)
- Headline: "Năng Lực Gia Công Cơ Khí"
  - Highlight: "Gia Công Cơ Khí" (primary color)
- Description: Mô tả hệ thống máy móc và độ chính xác
- 2 CTAs:
  - Primary: "Gửi bản vẽ báo giá" (upload_file icon)
  - Secondary: "Xem hồ sơ năng lực" (outline style)

### 2.2. Capabilities Section (Services)
**Mục đích:** Chi tiết phương thức gia công

**Layout:** 2-column grid (responsive: 1 column mobile)

**Header:**
- Centered title: "Phương Thức Gia Công"
- Subtitle: "Linh hoạt đáp ứng nhu cầu sản xuất đơn chiếc hoặc hàng loạt"

**2 Service Cards:**

#### 2.2.1. Gia công theo bản vẽ
- **Image:** Technical drawing với measuring tools
- **Icon:** architecture (blue background)
- **Title:** "Gia công theo bản vẽ"
- **Description:** Đảm bảo độ chính xác theo thông số kỹ thuật
- **Features list:**
  - Đọc file CAD/CAM đa dạng
  - Dung sai ±0.01mm
  - Vật liệu: Thép, Inox, Nhôm, Đồng...
- **Icons:** check_circle (green)

#### 2.2.2. Gia công theo mẫu
- **Image:** Engineer measuring metal part
- **Icon:** build_circle (orange background)
- **Title:** "Gia công theo mẫu"
- **Description:** Dịch vụ thiết kế ngược (Reverse Engineering)
- **Features list:**
  - Đo đạc chính xác mẫu thực tế
  - Tư vấn cải tiến vật liệu & kết cấu
  - Sản xuất mẫu thử (Prototype)
- **Icons:** check_circle (green)

**Card Features:**
- Hover: Shadow increase, image scale
- Border, rounded corners
- Image aspect-video

### 2.3. Machinery List Section
**Mục đích:** Chi tiết hệ thống máy móc

**Header:**
- Title: "Hệ thống Máy móc & Thiết bị"
- Subtitle: "Đầu tư công nghệ hiện đại từ Nhật Bản & Đức"
- Badge: "Chứng nhận ISO 9001:2015" (verified_user icon)

**Layout:** 3-column grid (responsive: 1 column mobile)

**3 Machine Category Cards:**

#### 2.3.1. Máy Phay CNC
- **Header:**
  - Icon: settings_suggest (blue background)
  - Title: "Máy Phay CNC"
  - Badge: "08 Máy" (gray background)
- **Image:** CNC milling machine interior
- **Specs:**
  - Xuất xứ: Nhật Bản (Mazak, Okuma)
  - Hành trình: 1000 x 600 x 600 mm
  - Độ chính xác: ± 0.005 mm

#### 2.3.2. Máy Tiện CNC
- **Header:**
  - Icon: biotech (blue background)
  - Title: "Máy Tiện CNC"
  - Badge: "05 Máy"
- **Image:** CNC lathe machine turning
- **Specs:**
  - Xuất xứ: Hàn Quốc (Doosan)
  - Đường kính tiện: Max Ø400 mm
  - Chiều dài tiện: Max 1000 mm

#### 2.3.3. Cắt Dây & EDM
- **Header:**
  - Icon: content_cut (blue background)
  - Title: "Cắt Dây & EDM"
  - Badge: "04 Máy"
- **Image:** Wire cutting machine EDM
- **Specs:**
  - Xuất xứ: Nhật Bản (Sodick)
  - Loại gia công: Khuôn mẫu, Chi tiết khó
  - Độ bóng bề mặt: Ra < 0.2µm

**Card Design:**
- Border, rounded corners
- Image aspect-video
- Specs in key-value pairs
- Hover: Shadow increase

**Footer Link:**
- "Xem danh sách đầy đủ thiết bị đo lường (CMM, Projector)"
- Arrow icon, primary color

### 2.4. Workflow Stepper Section
**Mục đích:** Giải thích quy trình làm việc

**Background:** Light background

**Header:**
- Centered title: "Quy Trình Làm Việc"
- Subtitle: "4 bước chuyên nghiệp từ ý tưởng đến bàn giao"

**Layout:** 4-column grid (responsive: 2 columns tablet, 1 mobile)

**Connecting Line:** Horizontal line giữa các steps (desktop only)

**4 Steps:**

1. **Tiếp nhận yêu cầu**
   - Number badge: "01" (primary border, white bg)
   - Title: "Tiếp nhận yêu cầu"
   - Description: Nhận bản vẽ hoặc mẫu vật, đánh giá tính khả thi

2. **Tư vấn & Báo giá**
   - Number badge: "02" (gray border, hover: primary)
   - Title: "Tư vấn & Báo giá"
   - Description: Tư vấn giải pháp, gửi bảng báo giá

3. **Gia công & QC**
   - Number badge: "03" (gray border, hover: primary)
   - Title: "Gia công & QC"
   - Description: Sản xuất, kiểm tra chất lượng nghiêm ngặt

4. **Bàn giao & Hậu mãi**
   - Number badge: "04" (gray border, hover: primary)
   - Title: "Bàn giao & Hậu mãi"
   - Description: Đóng gói, giao hàng, hỗ trợ kỹ thuật

**Step Features:**
- Circular number badges
- Hover: Border color change, scale effect
- Centered text alignment
- Shadow on badges

### 2.5. CTA Footer Section
**Mục đích:** Chuyển đổi thành lead

**Background:** Primary color với gradient blurs

**Layout:** Flex row (responsive: column mobile)

**Content:**
- Left: Text content
  - Title: "Sẵn sàng cho dự án tiếp theo?"
  - Description: Mô tả về báo giá cạnh tranh
- Right: 2 CTA buttons
  - Primary: "Liên hệ ngay" (white bg, primary text)
  - Secondary: "0909 123 456" (outline, call icon)

## 3. Yêu cầu UI/UX

### 3.1. Visual Hierarchy
- **Hero:** Most prominent, dark theme
- **Capabilities:** Balanced 2-column layout
- **Machinery:** Equal weight cards
- **Workflow:** Clear step progression
- **CTA:** Strong call-to-action

### 3.2. Information Architecture
- **Top-down flow:** Từ tổng quan đến chi tiết
- **Logical grouping:** Related content together
- **Clear sections:** Visual separators

### 3.3. Interactive Elements
- **Hover effects:** Cards, images, buttons
- **Smooth transitions:** All interactions
- **Visual feedback:** Clear states

### 3.4. Responsive Design
- **Mobile:** Single column, stacked
- **Tablet:** 2-column where appropriate
- **Desktop:** Full multi-column layout

## 4. Yêu cầu kỹ thuật

### 4.1. Data Structure
```javascript
Capability {
  id: string
  name: string
  description: string
  image: string
  icon: string
  features: string[]
}

Machine {
  id: string
  category: string
  name: string
  count: number
  image: string
  icon: string
  specs: {
    origin: string
    [key: string]: string
  }
}

WorkflowStep {
  number: number
  title: string
  description: string
}
```

### 4.2. Performance
- **Image optimization:** WebP, lazy loading
- **Grid layouts:** CSS Grid với fallbacks
- **Page load:** < 3s
- **Smooth animations:** GPU-accelerated

### 4.3. SEO
- **Meta title:** "Năng lực Gia công & Máy móc - Quang Hiền Phát"
- **Meta description:** Capabilities overview
- **Structured data:** Service schema
- **Keywords:** Gia công CNC, máy móc, thiết bị

## 5. User Stories

### 5.1. Tìm hiểu phương thức gia công
**As a** kỹ sư thiết kế  
**I want to** hiểu các phương thức gia công có sẵn  
**So that** tôi có thể thiết kế phù hợp với năng lực

### 5.2. Xem máy móc
**As a** nhà mua hàng  
**I want to** xem chi tiết máy móc và thiết bị  
**So that** tôi có thể đánh giá năng lực sản xuất

### 5.3. Hiểu quy trình
**As a** khách hàng tiềm năng  
**I want to** hiểu quy trình làm việc  
**So that** tôi biết được timeline và process

## 6. Success Metrics

### 6.1. Engagement
- Average time on page: > 4 phút
- Scroll depth: > 85%
- Section views: All sections viewed
- CTA click rate: > 12%

### 6.2. Conversion
- "Gửi bản vẽ" clicks: > 8%
- Contact form submissions: > 5%
- Phone number clicks: > 4%

### 6.3. Technical
- Page load time: < 3s
- Image load performance: < 1s
- Lighthouse score: > 90

## 7. Dependencies

### 7.1. Content
- Capabilities descriptions
- Machine specifications (accurate)
- High-quality machinery images
- Workflow process details

### 7.2. Components
- Hero section component
- Service card component
- Machine card component
- Workflow stepper component
- CTA section component

## 8. Future Enhancements

### 8.1. Phase 2
- Interactive machinery catalog
- 3D models của máy móc
- Video demonstrations
- Real-time machine availability
- Capacity calculator

### 8.2. Phase 3
- AR/VR factory tour
- Live machine status dashboard
- Automated quote based on specs
- Integration với CAD software
- Machine learning recommendations

## 9. Acceptance Criteria

- [ ] Hero section với dark theme
- [ ] 2 capability cards với images và features
- [ ] 3 machine category cards với specs
- [ ] Workflow stepper với 4 steps
- [ ] Connecting line giữa steps (desktop)
- [ ] All CTAs hoạt động
- [ ] Responsive trên tất cả devices
- [ ] Images optimized và lazy loaded
- [ ] Hover effects mượt mà
- [ ] Page load time < 3s
- [ ] SEO meta tags đầy đủ
- [ ] Accessibility compliance

## 10. Notes

- Specs phải chính xác và cập nhật thường xuyên
- Images máy móc phải chất lượng cao, professional
- Workflow phải rõ ràng và dễ hiểu
- Consider adding machine availability status
- Track which capabilities get most interest
