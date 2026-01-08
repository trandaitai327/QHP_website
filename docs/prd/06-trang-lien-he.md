# PRD: Trang Liên Hệ (Contact Page)

## 1. Tổng quan

### 1.1. Mục đích
Trang liên hệ là điểm chuyển đổi quan trọng, cho phép:
- Khách hàng dễ dàng liên hệ với công ty
- Gửi yêu cầu báo giá với bản vẽ kỹ thuật
- Tìm thông tin liên hệ (địa chỉ, phone, email)
- Xem vị trí trên bản đồ

### 1.2. Đối tượng sử dụng
- Khách hàng tiềm năng muốn báo giá
- Đối tác hiện tại cần hỗ trợ
- Kỹ sư gửi bản vẽ kỹ thuật
- Nhà mua hàng tìm thông tin liên hệ

## 2. Yêu cầu chức năng

### 2.1. Hero Section
**Mục đích:** Giới thiệu trang và context

**Background:**
- Light background với subtle pattern
- Border bottom separator

**Content:**
- Label: "Kết nối hợp tác" (orange accent, uppercase)
- Title: "Liên hệ Quang Hiền Phát"
- Description: Mô tả dịch vụ tư vấn và báo giá

### 2.2. Contact Information Cards
**Mục đích:** Hiển thị thông tin liên hệ

**Layout:** Grid 3 cards (responsive: stacked mobile)

**3 Information Cards:**

#### 2.2.1. Địa chỉ
- **Icon:** location_on (primary background)
- **Title:** "Nhà máy sản xuất"
- **Content:** 
  - Full address: "Lô B2, Đường số 4, KCN Tân Bình, P. Tây Thạnh, Q. Tân Phú, TP. HCM"
- **Design:** White card, border, shadow, hover effect

#### 2.2.2. Hotline
- **Icon:** call (primary background)
- **Title:** "Hotline Kỹ thuật"
- **Content:**
  - Phone: "0988 123 456" với badge "Hỗ trợ 24/7" (orange)
  - Office: "028 3812 3456 (Văn phòng)"
- **Design:** Same card style

#### 2.2.3. Email
- **Icon:** mail (primary background)
- **Title:** "Email Kinh doanh"
- **Content:**
  - "sales@quanghienphat.com"
  - "support@quanghienphat.com"
- **Design:** Same card style

**Card Features:**
- Hover: Shadow increase
- Icon background: Primary/10
- Clickable: Phone và email links

### 2.3. Map Section
**Mục đích:** Hiển thị vị trí địa lý

**Component:**
- Container: Rounded corners, border, shadow
- Height: 300px
- Background: Google Maps placeholder/image
- Overlay: Dark overlay với hover effect
- Badge: "Xem trên Google Maps" (bottom-left)
  - Icon: place (red)
  - Clickable: Link to Google Maps

**Future:** Integrate Google Maps iframe hoặc embed

### 2.4. Contact Form
**Mục đích:** Thu thập yêu cầu báo giá

**Layout:** Right column, larger than contact info (flex-1.4)

**Container:**
- Background: White/dark surface
- Border, rounded corners, shadow
- Padding: 32-40px responsive

**Form Header:**
- Title: "Gửi yêu cầu báo giá"
- Description: "Vui lòng điền thông tin chi tiết. Kỹ sư của chúng tôi sẽ phản hồi trong vòng 24h."

**Form Fields:**

#### 2.4.1. Personal Information (2 columns)
- **Họ và tên** (required, text input)
- **Công ty / Tổ chức** (required, text input)

#### 2.4.2. Contact Information (2 columns)
- **Email công việc** (required, email input)
- **Số điện thoại** (required, tel input)

#### 2.4.3. Service Selection
- **Loại dịch vụ quan tâm** (select dropdown)
  - Options:
    - Phay CNC Chính xác
    - Tiện CNC
    - Cắt dây EDM
    - Mài phẳng / Mài tròn
    - Gia công theo bản vẽ yêu cầu
- **Design:** Custom select với expand_more icon

#### 2.4.4. File Upload
- **Label:** "Bản vẽ kỹ thuật (PDF, DWG, DXF, STEP)"
- **Component:** Drag & drop zone
  - Border: Dashed, 2px
  - Background: Light gray
  - Icon: cloud_upload (large, primary color)
  - Text: "Bấm để tải lên hoặc kéo thả vào đây"
  - Helper: "Dung lượng tối đa 25MB"
  - Hover: Border color change to primary
- **Functionality:**
  - Multiple file support
  - File type validation
  - Size validation (25MB max)
  - Preview uploaded files

#### 2.4.5. Technical Requirements
- **Label:** "Yêu cầu kỹ thuật chi tiết"
- **Component:** Textarea (4 rows)
- **Placeholder:** "Mô tả về vật liệu, số lượng, dung sai yêu cầu hoặc các ghi chú đặc biệt..."
- **Features:**
  - Resizable (vertical only)
  - Character count (optional)

#### 2.4.6. Submit Button
- **Text:** "Gửi yêu cầu kỹ thuật"
- **Icon:** send
- **Style:** Primary background, white text, full width
- **Hover:** Background darken, shadow increase
- **Active:** Scale down effect

#### 2.4.7. Privacy Notice
- **Text:** "Bằng việc gửi form, bạn đồng ý với [Chính sách bảo mật]"
- **Link:** Underlined, hover: primary color
- **Size:** Small text, centered

**Form Validation:**
- Required fields: Visual indicator (*)
- Email format validation
- Phone format validation
- File type và size validation
- Error messages: Inline, below fields
- Success message: After submission

**Form States:**
- **Default:** All fields empty
- **Focused:** Field highlight (ring primary)
- **Error:** Red border, error message
- **Success:** Success message, form reset
- **Loading:** Button disabled, spinner

## 3. Yêu cầu UI/UX

### 3.1. Layout
- **Desktop:** 2-column (contact info + form)
- **Tablet:** Stacked (contact info top, form bottom)
- **Mobile:** Single column, full width

### 3.2. Form UX
- **Progressive disclosure:** Show relevant fields
- **Auto-save:** Save draft to localStorage (optional)
- **Clear labels:** Descriptive, helpful
- **Placeholders:** Examples, not instructions
- **Error prevention:** Validation on blur
- **Success feedback:** Clear confirmation

### 3.3. File Upload UX
- **Drag & drop:** Visual feedback
- **File preview:** Show file names, sizes
- **Remove files:** Easy deletion
- **Progress indicator:** Upload progress (if needed)
- **Error handling:** Clear error messages

### 3.4. Responsive Behavior
- **Mobile:** Stacked layout, full-width inputs
- **Tablet:** 2-column for name/company, email/phone
- **Desktop:** Full 2-column layout

## 4. Yêu cầu kỹ thuật

### 4.1. Form Handling
```javascript
ContactForm {
  name: string (required)
  company: string (required)
  email: string (required, email format)
  phone: string (required, tel format)
  serviceType: string (optional)
  files: File[] (optional, max 25MB total)
  requirements: string (optional)
}
```

### 4.2. File Upload
- **Accepted types:** PDF, DWG, DXF, STEP
- **Max size:** 25MB per file
- **Max files:** 5 files
- **Storage:** Backend storage hoặc cloud (S3, etc.)
- **Security:** File type validation, virus scanning (optional)

### 4.3. Backend Integration
- **API endpoint:** POST /api/contact/submit
- **Email notification:** Send to sales team
- **Auto-reply:** Confirmation email to user
- **CRM integration:** Create lead in CRM system
- **Data storage:** Save to database

### 4.4. Map Integration
- **Option 1:** Google Maps Embed API
- **Option 2:** Static image với link to Google Maps
- **Coordinates:** Latitude, Longitude
- **Marker:** Company location

## 5. User Stories

### 5.1. Gửi yêu cầu báo giá
**As a** khách hàng tiềm năng  
**I want to** gửi bản vẽ và yêu cầu báo giá  
**So that** tôi có thể nhận quote nhanh chóng

### 5.2. Tìm thông tin liên hệ
**As a** đối tác hiện tại  
**I want to** tìm số điện thoại và email  
**So that** tôi có thể liên hệ trực tiếp

### 5.3. Xem địa chỉ
**As a** khách hàng  
**I want to** xem địa chỉ nhà máy trên bản đồ  
**So that** tôi có thể đến thăm hoặc gửi hàng

## 6. Success Metrics

### 6.1. Conversion
- Form submission rate: > 15%
- Form completion rate: > 80%
- File upload success rate: > 95%
- Phone/email click rate: > 20%

### 6.2. Engagement
- Average time on page: > 2 phút
- Form field completion: > 90%
- Map interaction: > 30%

### 6.3. Technical
- Form submission time: < 3s
- File upload time: < 10s (per file)
- Page load time: < 2s
- Error rate: < 5%

## 7. Dependencies

### 7.1. Backend
- Contact form API
- File upload service
- Email service (SMTP/SendGrid)
- CRM integration (optional)

### 7.2. Third-party
- Google Maps API (optional)
- File validation library
- Form validation library

### 7.3. Components
- Contact card component
- Form input components
- File upload component
- Map component

## 8. Future Enhancements

### 8.1. Phase 2
- Live chat widget
- WhatsApp integration
- Calendar booking (schedule meeting)
- Multi-language form
- Form analytics dashboard

### 8.2. Phase 3
- AI-powered form assistance
- Auto-fill từ previous submissions
- Real-time form validation
- Video call scheduling
- Automated quote generation

## 9. Acceptance Criteria

- [ ] Contact info cards hiển thị đầy đủ
- [ ] Map section với placeholder hoặc Google Maps
- [ ] Form với tất cả fields
- [ ] File upload với drag & drop
- [ ] Form validation hoạt động
- [ ] Submit button gửi form thành công
- [ ] Email notifications được gửi
- [ ] Responsive trên tất cả devices
- [ ] Error handling đầy đủ
- [ ] Success message hiển thị
- [ ] Phone và email links hoạt động
- [ ] Privacy policy link hoạt động

## 10. Notes

- Ưu tiên form UX: Dễ điền, ít friction
- File upload phải reliable và user-friendly
- Consider auto-save để tránh mất data
- Track form abandonment để optimize
- A/B test form length và field order
- Ensure GDPR/privacy compliance
