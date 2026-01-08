# PRD: Hệ Thống Footer

## 1. Tổng quan

### 1.1. Mục đích
Footer cung cấp:
- Thông tin công ty và liên hệ
- Quick links đến các trang quan trọng
- Social media links
- Legal information (privacy, terms)
- Newsletter subscription (optional)

### 1.2. Đối tượng sử dụng
- Tất cả người dùng website
- Khách hàng tìm thông tin liên hệ
- Người dùng muốn subscribe updates

## 2. Yêu cầu chức năng

### 2.1. Footer Structure
**Layout:** Multi-column grid

**Sections:**
1. Company info & description (column 1)
2. Quick links / Navigation (column 2)
3. Services / Products (column 3)
4. Contact information (column 4)
5. Newsletter (optional, column 5)
6. Bottom bar (copyright, legal links)

### 2.2. Company Information Section
**Mục đích:** Brand và mô tả công ty

**Components:**
- **Logo:** 
  - Icon: precision_manufacturing
  - Text: "Quang Hiền Phát"
  - Size: Medium (text-lg)
- **Description:**
  - 1-2 sentences về công ty
  - Text: Small, secondary color
  - Max width: 300px

**Design:**
- Flex column layout
- Gap: 16px (gap-4)

### 2.3. Quick Links Section
**Mục đích:** Navigation shortcuts

**Title:** "Liên kết nhanh" hoặc "Về chúng tôi"

**Links:**
- Về chúng tôi
- Sản phẩm & Dịch vụ
- Năng lực sản xuất
- Dự án tiêu biểu
- Tin tức (nếu có)

**Design:**
- Title: Bold, base size
- Links: Small text, secondary color
- Hover: Primary color
- Layout: Flex column, gap-2

### 2.4. Services/Products Section
**Mục đích:** Link đến các dịch vụ chính

**Title:** "Dịch vụ" hoặc "Sản phẩm"

**Links:**
- Gia công phay CNC
- Gia công tiện CNC
- Chế tạo đồ gá (Jig)
- Xử lý bề mặt
- Khuôn mẫu

**Design:**
- Same style as Quick Links
- Grouped by category (optional)

### 2.5. Contact Information Section
**Mục đích:** Thông tin liên hệ

**Title:** "Thông tin liên hệ" hoặc "Liên hệ"

**Information:**
- **Address:**
  - Icon: location_on
  - Text: Full address
  - Clickable: Link to map
- **Phone:**
  - Icon: call
  - Text: Phone number(s)
  - Clickable: tel: link
- **Email:**
  - Icon: mail
  - Text: Email address(es)
  - Clickable: mailto: link

**Design:**
- Icons: Primary color, lg size
- Text: Small, secondary color
- Flex row layout với gap
- Hover: Text color change

### 2.6. Newsletter Subscription (Optional)
**Mục đích:** Thu thập email cho marketing

**Components:**
- **Title:** "Đăng ký nhận tin"
- **Description:** "Nhận thông tin về năng lực sản xuất mới nhất"
- **Form:**
  - Email input
  - Submit button (icon: send)
  - Placeholder: "Email của bạn"

**Design:**
- Input: Rounded, border, background
  - Background: White/10 (dark mode)
  - Border: Light
  - Placeholder: Gray
- Button: Primary background, icon only
- Layout: Flex row, gap-2

**Functionality:**
- Email validation
- Success/error messages
- Integration với email service

### 2.7. Map Section (Optional)
**Mục đích:** Hiển thị vị trí

**Component:**
- Container: Rounded, border
- Height: 128px (h-32)
- Background: Map image hoặc iframe
- Overlay: "Xem bản đồ" badge
- Clickable: Link to Google Maps

### 2.8. Bottom Bar
**Mục đích:** Copyright và legal links

**Layout:** Flex row, space-between

**Left:**
- Copyright: "© 2024 Quang Hiền Phát. Bảo lưu mọi quyền."
- Text: Small, secondary color

**Right:**
- Legal links:
  - Điều khoản
  - Chính sách bảo mật
- Separator: "•" hoặc "|"
- Hover: Primary color

**Mobile:**
- Stacked layout (flex-col)
- Centered alignment

### 2.9. Social Media Links (Optional)
**Mục đích:** Kết nối social

**Icons:**
- Facebook
- LinkedIn
- YouTube
- Zalo (Vietnam-specific)

**Design:**
- Icon size: 24px (w-6 h-6)
- Color: Secondary
- Hover: Primary color
- Layout: Flex row, gap-6

## 3. Yêu cầu UI/UX

### 3.1. Layout
- **Desktop:** 4-column grid
- **Tablet:** 2-column grid
- **Mobile:** 1-column, stacked

### 3.2. Visual Design
- **Background:** Dark theme (background-dark)
- **Text:** White/light colors
- **Icons:** Primary color hoặc white
- **Borders:** Top border separator
- **Spacing:** Consistent padding (pt-16 pb-8)

### 3.3. Typography
- **Titles:** Bold, base size
- **Links:** Small, normal weight
- **Description:** Small, secondary color
- **Copyright:** Extra small, secondary

### 3.4. Responsive Behavior
- **Mobile:** Single column, larger gaps
- **Tablet:** 2 columns
- **Desktop:** 4 columns

## 4. Yêu cầu kỹ thuật

### 4.1. HTML Structure
```html
<footer class="bg-dark">
  <div class="container">
    <div class="grid grid-cols-4">
      <company-info />
      <quick-links />
      <services />
      <contact />
    </div>
    <div class="bottom-bar">
      <copyright />
      <legal-links />
    </div>
  </div>
</footer>
```

### 4.2. Links
- **Internal links:** Relative paths
- **External links:** Full URLs, target="_blank" (optional)
- **Email links:** mailto: protocol
- **Phone links:** tel: protocol
- **Map links:** Google Maps URL

### 4.3. Newsletter Integration
- **API endpoint:** POST /api/newsletter/subscribe
- **Email service:** Integration (SendGrid, Mailchimp, etc.)
- **Validation:** Email format
- **Success/Error:** User feedback

### 4.4. SEO
- **Structured data:** Organization schema
- **Links:** Proper href attributes
- **Alt text:** For social icons (if images)

## 5. User Stories

### 5.1. Tìm thông tin liên hệ
**As a** khách hàng  
**I want to** tìm số điện thoại và email trong footer  
**So that** tôi có thể liên hệ nhanh chóng

### 5.2. Điều hướng nhanh
**As a** người dùng  
**I want to** click vào quick links trong footer  
**So that** tôi có thể đến các trang quan trọng

### 5.3. Subscribe updates
**As a** khách hàng tiềm năng  
**I want to** đăng ký nhận tin từ footer  
**So that** tôi có thể cập nhật về công ty

## 6. Success Metrics

### 6.1. Engagement
- Footer link clicks: > 10%
- Contact info clicks: > 5%
- Newsletter signups: > 2% (if implemented)
- Social media clicks: > 3%

### 6.2. Technical
- Footer load time: < 500ms
- Newsletter form submission: < 2s
- Link accuracy: 100%

## 7. Dependencies

### 7.1. Content
- Company description
- Contact information (accurate)
- Social media URLs
- Legal pages (privacy, terms)

### 7.2. Services
- Newsletter service (if implemented)
- Email service integration
- Analytics tracking

### 7.3. Components
- Footer section components
- Newsletter form component
- Social icons component

## 8. Future Enhancements

### 8.1. Phase 2
- Multi-language footer
- Office locations map
- Opening hours display
- Live chat widget
- Customer testimonials

### 8.2. Phase 3
- Personalized footer content
- Dynamic content based on page
- Footer analytics dashboard
- A/B testing cho newsletter CTA

## 9. Acceptance Criteria

- [ ] Footer hiển thị trên tất cả trang
- [ ] Company info section đầy đủ
- [ ] Quick links hoạt động
- [ ] Contact information chính xác
- [ ] Newsletter form hoạt động (nếu có)
- [ ] Social media links hoạt động (nếu có)
- [ ] Bottom bar với copyright
- [ ] Legal links hoạt động
- [ ] Responsive trên tất cả devices
- [ ] Links có proper href attributes
- [ ] Email và phone links hoạt động
- [ ] Footer load time < 500ms

## 10. Notes

- Consistency: Footer phải giống nhau trên tất cả trang
- Information accuracy: Contact info phải chính xác và cập nhật
- Legal compliance: Privacy policy và terms phải accessible
- Newsletter: Consider GDPR compliance nếu có
- Social media: Chỉ hiển thị nếu có active accounts
