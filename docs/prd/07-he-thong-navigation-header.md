# PRD: Hệ Thống Navigation & Header

## 1. Tổng quan

### 1.1. Mục đích
Hệ thống navigation và header cung cấp:
- Điều hướng chính giữa các trang
- Brand identity và logo
- Quick actions (search, CTA buttons)
- Responsive menu cho mobile

### 1.2. Đối tượng sử dụng
- Tất cả người dùng website
- Khách hàng tìm kiếm thông tin
- Người dùng mobile cần menu dễ sử dụng

## 2. Yêu cầu chức năng

### 2.1. Header Structure
**Layout:** Horizontal bar, sticky top

**Components:**
1. Logo section (left)
2. Navigation links (center, desktop)
3. Actions (right)

### 2.2. Logo Section
**Mục đích:** Brand identity

**Components:**
- **Icon:** precision_manufacturing (Material Symbol)
  - Size: 32px
  - Color: Primary (#1152d4)
  - Background: Primary/10 (rounded)
- **Text:** "Quang Hiền Phát"
  - Font: Bold, lg-xl
  - Color: Text main
  - Tracking: Tight

**Behavior:**
- Click: Navigate to homepage
- Hover: Slight scale effect (optional)

### 2.3. Navigation Links (Desktop)
**Mục đích:** Main navigation

**Links:**
1. Trang chủ
2. Giới thiệu
3. Sản phẩm
4. Năng lực (hoặc "Dịch vụ")
5. Về chúng tôi
6. Liên hệ

**Design:**
- Font: Medium, sm size
- Color: Text secondary
- Hover: Primary color
- Active: Primary color, bold (hoặc underline)
- Spacing: Gap 8-9 (32-36px)

**States:**
- **Default:** Secondary text color
- **Hover:** Primary color, transition
- **Active:** Primary color, bold/underline
- **Focus:** Outline ring (accessibility)

### 2.4. Search Bar (Desktop)
**Mục đích:** Tìm kiếm sản phẩm

**Component:**
- **Container:** Relative, group
- **Icon:** search (left, absolute)
  - Color: Text secondary
  - Focus: Primary color
- **Input:**
  - Placeholder: "Tìm kiếm sản phẩm..."
  - Border: Light, rounded
  - Focus: Ring primary, border primary
  - Background: Background light
- **Width:** Auto, hidden on mobile

**Behavior:**
- Focus: Icon color change
- Submit: Enter key hoặc icon click
- Results: Dropdown hoặc redirect to search page

### 2.5. CTA Button
**Mục đích:** Quick action để báo giá

**Desktop:**
- **Text:** "Báo giá nhanh" hoặc "Nhận báo giá"
- **Style:** Primary background, white text
- **Size:** Medium (h-10, px-4-5)
- **Icon:** Optional (request_quote)
- **Hover:** Background darken

**Mobile:**
- Hidden hoặc icon-only

### 2.6. Mobile Menu
**Mục đích:** Navigation trên mobile

**Components:**
- **Toggle Button:**
  - Icon: menu (Material Symbol)
  - Visible: Hidden on desktop (lg:hidden)
  - Position: Right side
- **Menu Drawer/Modal:**
  - Full screen hoặc slide-in từ right
  - Background: White/dark surface
  - Overlay: Dark backdrop
  - Close button: X icon hoặc close

**Menu Items:**
- All navigation links
- Search bar (mobile version)
- CTA button
- Contact info (optional)

**Animation:**
- Slide-in từ right
- Fade overlay
- Smooth transitions

### 2.7. Sticky Behavior
**Mục đích:** Luôn accessible khi scroll

**Implementation:**
- Position: sticky, top-0
- Z-index: 50 (high)
- Background: White/95 với backdrop-blur
- Border: Bottom border
- Shadow: Subtle shadow khi scroll

## 3. Yêu cầu UI/UX

### 3.1. Visual Design
- **Height:** 64px (h-16) standard
- **Background:** White/95 với blur (glass effect)
- **Border:** Bottom border, light color
- **Shadow:** Subtle khi scroll
- **Spacing:** Consistent padding (px-4 md:px-10)

### 3.2. Responsive Breakpoints
- **Mobile:** < 640px
  - Logo + Menu button
  - Search hidden
  - CTA hidden hoặc icon-only
- **Tablet:** 640px - 1024px
  - Logo + Nav links + Menu button
  - Search optional
- **Desktop:** > 1024px
  - Full navigation
  - Search bar visible
  - All CTAs visible

### 3.3. Accessibility
- **Keyboard navigation:** Tab through links
- **Focus indicators:** Visible outline
- **ARIA labels:** For icons và buttons
- **Screen readers:** Semantic HTML
- **Skip link:** Jump to main content

### 3.4. Performance
- **Sticky header:** GPU-accelerated
- **Smooth scrolling:** When clicking nav links
- **Lazy load:** Menu content (if needed)

## 4. Yêu cầu kỹ thuật

### 4.1. HTML Structure
```html
<header class="sticky top-0 z-50">
  <div class="container">
    <div class="logo">...</div>
    <nav class="desktop-nav">...</nav>
    <div class="actions">
      <search-bar />
      <cta-button />
      <mobile-menu-toggle />
    </div>
  </div>
  <mobile-menu-drawer />
</header>
```

### 4.2. State Management
- **Active page:** Highlight current page
- **Menu open/close:** Toggle state
- **Search focus:** Focus state
- **Scroll state:** Add shadow khi scroll

### 4.3. JavaScript Functionality
- **Menu toggle:** Open/close mobile menu
- **Smooth scroll:** To sections (if needed)
- **Search:** Handle search input
- **Sticky header:** Add shadow on scroll

### 4.4. SEO
- **Semantic HTML:** `<header>`, `<nav>`
- **Links:** Proper href attributes
- **Alt text:** For logo image (if image)

## 5. User Stories

### 5.1. Điều hướng giữa các trang
**As a** người dùng  
**I want to** dễ dàng điều hướng giữa các trang  
**So that** tôi có thể tìm thông tin cần thiết

### 5.2. Tìm kiếm sản phẩm
**As a** khách hàng  
**I want to** tìm kiếm sản phẩm từ header  
**So that** tôi không cần vào trang sản phẩm

### 5.3. Quick action
**As a** khách hàng tiềm năng  
**I want to** nhanh chóng báo giá từ bất kỳ trang nào  
**So that** tôi có thể liên hệ ngay

### 5.4. Mobile navigation
**As a** người dùng mobile  
**I want to** menu dễ sử dụng trên mobile  
**So that** tôi có thể điều hướng dễ dàng

## 6. Success Metrics

### 6.1. Usability
- Navigation click rate: > 40%
- Search usage: > 15%
- CTA click rate: > 5%
- Mobile menu usage: > 60% (mobile users)

### 6.2. Performance
- Header load time: < 100ms
- Menu open/close: < 200ms
- Search response: < 500ms

### 6.3. Accessibility
- Keyboard navigation: 100% functional
- Screen reader compatibility: Pass
- Focus indicators: Visible

## 7. Dependencies

### 7.1. Components
- Logo component
- Navigation link component
- Search bar component
- CTA button component
- Mobile menu drawer component

### 7.2. Services
- Search service (if search functionality)
- Analytics tracking
- Route management

## 8. Future Enhancements

### 8.1. Phase 2
- Mega menu với categories
- User account menu (nếu có login)
- Notification badge
- Language switcher
- Dark mode toggle

### 8.2. Phase 3
- Personalized navigation
- Breadcrumb integration
- Quick links dropdown
- Recent searches
- Voice search (mobile)

## 9. Acceptance Criteria

- [ ] Logo hiển thị và clickable
- [ ] Navigation links hoạt động
- [ ] Active state highlight đúng trang
- [ ] Search bar hoạt động (desktop)
- [ ] CTA button hoạt động
- [ ] Mobile menu toggle hoạt động
- [ ] Sticky header với shadow khi scroll
- [ ] Responsive trên tất cả breakpoints
- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] Screen reader compatible
- [ ] Performance: < 100ms load

## 10. Notes

- Consistency: Header phải giống nhau trên tất cả trang
- Performance: Minimize JavaScript, use CSS khi có thể
- Accessibility: Critical cho compliance
- Mobile UX: Menu phải dễ sử dụng, không frustrate users
- Consider A/B testing cho CTA placement và copy
