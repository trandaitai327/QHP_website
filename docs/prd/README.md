# Tài liệu PRD - Website Quang Hiền Phát

## Tổng quan

Bộ tài liệu PRD (Product Requirements Document) này mô tả chi tiết các tính năng của website trưng bày sản phẩm gia công, máy móc và thiết bị của công ty Quang Hiền Phát.

## Danh sách PRD

### 1. [Trang Chủ](./01-trang-chu.md)
Trang chủ là điểm tiếp xúc đầu tiên, giới thiệu tổng quan về công ty và dịch vụ.
- Hero section với CTA
- Features/Stats section
- Featured products showcase
- Call-to-action section

### 2. [Trang Sản Phẩm](./02-trang-san-pham.md)
Trang danh sách sản phẩm với bộ lọc và tìm kiếm.
- Sidebar filters (loại, vật liệu, ứng dụng)
- Product grid với pagination
- Search integration
- Mobile responsive filters

### 3. [Trang Chi Tiết Sản Phẩm](./03-trang-chi-tiet-san-pham.md)
Trang hiển thị thông tin chi tiết về từng sản phẩm.
- Image gallery với lightbox
- Technical specifications
- Application details
- Related products
- CTA buttons

### 4. [Trang Giới Thiệu Công Ty](./04-trang-gioi-thieu-cong-ty.md)
Trang giới thiệu về công ty, triết lý và giá trị cốt lõi.
- Hero section với stats
- Philosophy section
- Core values
- Machinery showcase
- CTA section

### 5. [Trang Năng Lực Gia Công](./05-trang-nang-luc-gia-cong.md)
Trang chi tiết về năng lực gia công và máy móc.
- Capabilities section
- Machinery list với specs
- Workflow stepper
- CTA section

### 6. [Trang Liên Hệ](./06-trang-lien-he.md)
Trang liên hệ với form yêu cầu báo giá.
- Contact information cards
- Map section
- Contact form với file upload
- Form validation

### 7. [Hệ Thống Navigation & Header](./07-he-thong-navigation-header.md)
Hệ thống điều hướng và header trên tất cả trang.
- Logo và brand
- Navigation links
- Search bar
- CTA buttons
- Mobile menu

### 8. [Hệ Thống Footer](./08-he-thong-footer.md)
Footer hiển thị trên tất cả trang.
- Company information
- Quick links
- Contact information
- Newsletter subscription
- Social media links
- Legal links

### 9. [Tính Năng Tìm Kiếm](./09-tinh-nang-tim-kiem.md)
Hệ thống tìm kiếm sản phẩm.
- Search bar trong header
- Autocomplete suggestions
- Search results page
- Advanced search (optional)

### 10. [Hệ Thống Yêu Cầu Báo Giá](./10-he-thong-yeu-cau-bao-gia.md)
Hệ thống thu thập và xử lý yêu cầu báo giá.
- Quote request form
- File upload (bản vẽ kỹ thuật)
- Email notifications
- CRM integration (optional)

## Cấu trúc PRD

Mỗi file PRD bao gồm các phần:

1. **Tổng quan**: Mục đích và đối tượng sử dụng
2. **Yêu cầu chức năng**: Chi tiết các tính năng
3. **Yêu cầu UI/UX**: Design và user experience
4. **Yêu cầu kỹ thuật**: Technical specifications
5. **User Stories**: Use cases từ góc độ người dùng
6. **Success Metrics**: Metrics để đo lường thành công
7. **Dependencies**: Dependencies và integrations
8. **Future Enhancements**: Tính năng tương lai
9. **Acceptance Criteria**: Tiêu chí chấp nhận
10. **Notes**: Ghi chú và considerations

## Design System

### Colors
- **Primary**: #1152d4 (Blue)
- **Accent**: #f97316 (Orange)
- **Background Light**: #f6f6f8
- **Background Dark**: #101622
- **Text Main**: #0d121b
- **Text Secondary**: #4c669a

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold, 3xl-6xl
- **Body**: Normal weight, base-lg
- **Labels**: Small, uppercase, tracking-wide

### Components
- Material Symbols Outlined icons
- Tailwind CSS framework
- Responsive breakpoints: mobile (<640px), tablet (640-1024px), desktop (>1024px)

## Technical Stack

### Frontend
- HTML5
- Tailwind CSS (CDN)
- Material Symbols Icons
- Google Fonts (Inter)
- Vanilla JavaScript (hoặc framework tùy chọn)

### Backend (Recommended)
- RESTful API
- File upload service
- Email service (SendGrid, Mailgun, etc.)
- Database (PostgreSQL, MySQL, etc.)
- CRM integration (optional)

## Development Phases

### Phase 1 (MVP)
- Trang chủ
- Trang sản phẩm (listing)
- Trang chi tiết sản phẩm
- Trang liên hệ
- Navigation & Footer
- Basic search

### Phase 2
- Trang giới thiệu công ty
- Trang năng lực gia công
- Advanced search
- Quote request system
- Newsletter

### Phase 3
- Advanced features
- Personalization
- Analytics dashboard
- Multi-language support

## Notes

- Tất cả PRD được viết bằng tiếng Việt
- Mỗi PRD là độc lập nhưng có liên kết với nhau
- Các tính năng có thể được implement theo thứ tự ưu tiên
- Consider A/B testing cho các CTAs và forms
- Ưu tiên performance và user experience

## Liên hệ

Để cập nhật hoặc chỉnh sửa PRD, vui lòng tham khảo từng file riêng lẻ và cập nhật theo nhu cầu dự án.
