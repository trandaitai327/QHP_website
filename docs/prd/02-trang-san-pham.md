# PRD: Trang Sản Phẩm (Product Listing Page)

## 1. Tổng quan

### 1.1. Mục đích
Trang danh sách sản phẩm cho phép khách hàng:
- Duyệt và tìm kiếm các sản phẩm/dịch vụ gia công
- Lọc sản phẩm theo nhiều tiêu chí (loại, vật liệu, ứng dụng)
- Xem thông tin tổng quan về từng sản phẩm
- Chuyển đến trang chi tiết để xem thêm thông tin

### 1.2. Đối tượng sử dụng
- Khách hàng B2B tìm kiếm giải pháp gia công
- Kỹ sư thiết kế cần tham khảo năng lực
- Nhà mua hàng (procurement) so sánh nhà cung cấp

## 2. Yêu cầu chức năng

### 2.1. Page Header & Breadcrumbs
**Mục đích:** Navigation và context

**Breadcrumbs:**
- Format: Trang chủ > Sản phẩm
- Clickable links
- Icon chevron_right giữa các items

**Page Title:**
- "Danh mục Sản phẩm & Dịch vụ"
- Font: Black, 3xl-4xl responsive

**Description:**
- Mô tả ngắn về giải pháp gia công
- Max width: 3xl

### 2.2. Sidebar Filters (Desktop)
**Mục đích:** Lọc sản phẩm theo tiêu chí

**Layout:** Fixed width 256px (lg breakpoint), hidden trên mobile

**Filter Groups:**

#### 2.2.1. Loại sản phẩm
- Tất cả sản phẩm (default checked)
- Gia công cơ khí CNC
- Chi tiết máy chính xác
- Linh kiện & Kết cấu
- Khuôn mẫu

#### 2.2.2. Vật liệu
- Thép hợp kim (Alloy Steel)
- Inox (304, 316)
- Nhôm & Hợp kim nhôm
- Nhựa kỹ thuật (POM, PVC)

#### 2.2.3. Ứng dụng
- Công nghiệp ô tô
- Dây chuyền sản xuất
- Xây dựng & Kết cấu

**UI Components:**
- Checkbox style: Rounded, primary color
- Hover effect: Text color change to primary
- Divider lines giữa các groups

### 2.3. Mobile Filter Toggle
**Mục đích:** Hiển thị filters trên mobile

**Component:**
- Button: "Bộ lọc sản phẩm" với icon filter_list
- Full width, border, shadow
- Click: Mở modal/drawer với filter options

### 2.4. Product Grid Toolbar
**Mục đích:** Sorting và view options

**Sorting Chips:**
- "Tất cả" (active state: primary background)
- "Mới nhất"
- "Phổ biến"
- Hover: Border color change

**Product Count:**
- Format: "Hiển thị 12 / 48 sản phẩm"
- Text secondary color

### 2.5. Product Grid
**Mục đích:** Hiển thị danh sách sản phẩm

**Layout:**
- Grid: 3 cột desktop (xl), 2 cột tablet, 1 cột mobile
- Gap: 24px (gap-6)

**Product Card Components:**

#### 2.5.1. Image Section
- Aspect ratio: 4:3
- Background image với hover scale effect
- Badge overlay (top-left):
  - "ISO 9001" (primary background)
  - "Đặt hàng" (accent background)
  - "Heavy Duty" (primary background)

#### 2.5.2. Content Section
- **Title:** Font bold, hover: primary color
- **Specifications:** 2 rows với icons
  - Icon: layers (vật liệu)
  - Icon: settings/precision_manufacturing (độ chính xác)
  - Icon: architecture (kích thước)
  - Icon: compress (áp suất)
  - Icon: water_drop (chống ăn mòn)
  - Icon: engineering (sơn tĩnh điện)
  - Icon: diamond (đánh bóng)

#### 2.5.3. Footer Section
- Product code: Uppercase, small font
- "Chi tiết" link với arrow icon
- Border top separator

**Hover Effects:**
- Card: Shadow increase, border color change
- Image: Scale 1.05
- Title: Color change to primary

### 2.6. Pagination
**Mục đích:** Điều hướng giữa các trang

**Components:**
- Previous button (chevron_left icon)
- Page numbers: 1 (active), 2, 3, ...
- Ellipsis (...)
- Next button (chevron_right icon)

**States:**
- Active: Primary background, white text
- Hover: Border color change
- Disabled: Grayed out (first/last page)

### 2.7. CTA Section
**Mục đích:** Chuyển đổi thành lead

**Background:** Primary color (#1152d4)

**Content:**
- Icon: engineering (large, white/20 opacity)
- Headline: "Bạn có bản vẽ kỹ thuật riêng?"
- Description: Mô tả dịch vụ tư vấn
- 2 CTA buttons:
  - Primary: "Gửi yêu cầu báo giá" (white bg, primary text)
  - Secondary: "Tư vấn kỹ thuật" (transparent, white border)

## 3. Yêu cầu UI/UX

### 3.1. Filter Behavior
- **Real-time filtering:** Update results khi check/uncheck
- **Multiple selection:** Cho phép chọn nhiều options
- **Clear filters:** Button để reset tất cả filters
- **Active state:** Highlight selected filters

### 3.2. Product Card States
- **Default:** White background, light border
- **Hover:** Shadow increase, border primary color
- **Loading:** Skeleton screens khi fetch data
- **Empty state:** Message khi không có kết quả

### 3.3. Responsive Behavior
- **Mobile:** Filters trong drawer/modal
- **Tablet:** 2-column grid
- **Desktop:** Sidebar + 3-column grid

### 3.4. Performance
- **Lazy loading:** Images load khi scroll vào viewport
- **Pagination:** Load 12 products per page
- **Caching:** Cache filter states và product data

## 4. Yêu cầu kỹ thuật

### 4.1. Data Structure
```javascript
Product {
  id: string
  name: string
  code: string
  category: string[]
  material: string[]
  application: string[]
  image: string
  specs: {
    material: string
    accuracy: string
    size: string
  }
  badges: string[]
  featured: boolean
  createdAt: date
}
```

### 4.2. Filter Logic
- AND logic giữa các filter groups
- OR logic trong cùng một group
- URL query parameters cho shareable links
- Browser back/forward support

### 4.3. Search Integration
- Search bar trong header
- Search across: name, code, description, specs
- Highlight search terms trong results
- Search suggestions/autocomplete

## 5. User Stories

### 5.1. Tìm sản phẩm theo loại
**As a** kỹ sư thiết kế  
**I want to** lọc sản phẩm theo "Gia công cơ khí CNC"  
**So that** tôi có thể xem các sản phẩm liên quan đến nhu cầu

### 5.2. Tìm theo vật liệu
**As a** nhà mua hàng  
**I want to** tìm sản phẩm làm từ "Inox 304"  
**So that** tôi có thể so sánh với nhà cung cấp khác

### 5.3. Xem chi tiết sản phẩm
**As a** khách hàng tiềm năng  
**I want to** click vào product card  
**So that** tôi có thể xem thông tin chi tiết và liên hệ báo giá

## 6. Success Metrics

### 6.1. Engagement
- Average products viewed per session: > 5
- Filter usage rate: > 60%
- Click-through rate to detail page: > 30%

### 6.2. Performance
- Page load time: < 2s
- Filter response time: < 500ms
- Image load time: < 1s per image

### 6.3. Conversion
- CTA click rate: > 8%
- Detail page views: > 25% of listing views

## 7. Dependencies

### 7.1. Data
- Product database/API
- Image storage/CDN
- Search service (optional)

### 7.2. Components
- Filter component
- Product card component
- Pagination component
- Modal/drawer component (mobile)

## 8. Future Enhancements

### 8.1. Phase 2
- Advanced filters (price range, delivery time)
- Compare products feature
- Save favorites/wishlist
- Product recommendations

### 8.2. Phase 3
- AI-powered product search
- Visual search (upload image to find similar)
- Bulk quote request
- Product configurator

## 9. Acceptance Criteria

- [ ] Filters hoạt động đúng logic (AND/OR)
- [ ] Product grid responsive trên tất cả devices
- [ ] Pagination hoạt động và update URL
- [ ] Search bar tìm kiếm được sản phẩm
- [ ] Product cards có hover effects
- [ ] Mobile filter drawer/modal hoạt động
- [ ] Loading states được implement
- [ ] Empty state message hiển thị khi không có kết quả
- [ ] URL shareable với filter states
- [ ] Performance: < 2s page load

## 10. Notes

- Ưu tiên filter UX: Dễ sử dụng, phản hồi nhanh
- Product images phải chất lượng cao, consistent aspect ratio
- Consider infinite scroll thay vì pagination (future)
- Track filter usage để optimize filter options
