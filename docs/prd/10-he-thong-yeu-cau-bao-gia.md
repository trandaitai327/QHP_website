# PRD: Hệ Thống Yêu Cầu Báo Giá (Quote Request System)

## 1. Tổng quan

### 1.1. Mục đích
Hệ thống yêu cầu báo giá cho phép:
- Khách hàng gửi yêu cầu báo giá từ nhiều điểm trên website
- Upload bản vẽ kỹ thuật và tài liệu
- Mô tả yêu cầu chi tiết
- Nhận confirmation và tracking

### 1.2. Đối tượng sử dụng
- Khách hàng B2B cần báo giá
- Kỹ sư gửi bản vẽ để quote
- Nhà mua hàng so sánh giá

## 2. Yêu cầu chức năng

### 2.1. Entry Points
**Mục đích:** Multiple ways to request quote

**Locations:**
1. **Header CTA:** "Báo giá nhanh" button
2. **Homepage CTA:** "Gửi yêu cầu báo giá"
3. **Product listing:** "Báo giá" button trên product cards
4. **Product detail:** "Liên hệ báo giá" button
5. **Contact page:** Main contact form
6. **Floating widget:** (Optional) Always visible

### 2.2. Quote Request Form
**Mục đích:** Thu thập thông tin cần thiết

**Form Sections:**

#### 2.2.1. Personal Information
- **Họ và tên** (required, text)
- **Công ty / Tổ chức** (required, text)
- **Chức vụ** (optional, text)
- **Email công việc** (required, email)
- **Số điện thoại** (required, tel)
- **Địa chỉ** (optional, textarea)

#### 2.2.2. Project Information
- **Tên dự án** (optional, text)
- **Loại dịch vụ** (required, select)
  - Phay CNC Chính xác
  - Tiện CNC
  - Cắt dây EDM
  - Mài phẳng / Mài tròn
  - Gia công theo bản vẽ
  - Chế tạo đồ gá (Jig)
  - Hàn & Kết cấu
  - Khác
- **Số lượng** (optional, number)
- **Thời gian cần** (optional, date picker)

#### 2.2.3. Technical Requirements
- **Vật liệu** (optional, select hoặc text)
- **Kích thước** (optional, text)
- **Dung sai yêu cầu** (optional, text)
- **Yêu cầu kỹ thuật chi tiết** (optional, textarea)
  - Placeholder: "Mô tả về vật liệu, số lượng, dung sai yêu cầu..."

#### 2.2.4. File Attachments
- **Bản vẽ kỹ thuật** (optional, file upload)
  - Accepted: PDF, DWG, DXF, STEP, STP, IGS
  - Max size: 25MB per file
  - Max files: 5 files
  - Drag & drop support
- **Tài liệu khác** (optional, file upload)
  - Accepted: PDF, DOC, DOCX, XLS, XLSX
  - Max size: 10MB per file

**File Upload Features:**
- Preview uploaded files
- Show file size và type
- Remove files
- Upload progress (if needed)
- Error handling

#### 2.2.5. Additional Information
- **Nguồn thông tin** (optional, select)
  - Google Search
  - Facebook
  - LinkedIn
  - Giới thiệu
  - Khác
- **Ghi chú** (optional, textarea)

### 2.3. Form Validation
**Client-side:**
- Required fields: Visual indicator (*)
- Email format validation
- Phone format validation
- File type validation
- File size validation
- Real-time validation on blur

**Server-side:**
- Duplicate validation
- Security checks
- File scanning (virus, etc.)

**Error Messages:**
- Inline, below fields
- Clear và helpful
- Vietnamese language

### 2.4. Form Submission
**Process:**
1. Validate all fields
2. Upload files (if any)
3. Submit form data
4. Show loading state
5. Success confirmation
6. Send emails (user + admin)
7. Create CRM lead (if integrated)

**Success State:**
- Success message
- Reference number
- Next steps information
- Estimated response time

**Error State:**
- Error message
- Retry option
- Support contact

### 2.5. Email Notifications

#### 2.5.1. User Confirmation Email
**To:** User email

**Content:**
- Thank you message
- Reference number
- Summary of request
- Next steps
- Contact information
- Link to track status (if implemented)

#### 2.5.2. Admin Notification Email
**To:** Sales team

**Content:**
- New quote request alert
- Reference number
- All form data
- Links to uploaded files
- Quick action buttons (if email client supports)

### 2.6. Quick Quote (Simplified Form)
**Mục đích:** Faster submission cho simple requests

**Fields:**
- Name (required)
- Email (required)
- Phone (required)
- Service type (required)
- Brief description (optional)
- File upload (optional)

**Use case:** From product cards, quick actions

## 3. Yêu cầu UI/UX

### 3.1. Form Design
- **Layout:** Single column (mobile), 2-column where appropriate
- **Spacing:** Consistent gaps
- **Labels:** Clear, descriptive
- **Placeholders:** Helpful examples
- **Required indicator:** Asterisk (*)

### 3.2. File Upload UX
- **Drag & drop:** Visual feedback
- **Click to upload:** Alternative method
- **Preview:** Show file names, sizes
- **Progress:** Upload progress bar
- **Error handling:** Clear error messages

### 3.3. Form States
- **Default:** Empty form
- **Focused:** Field highlight
- **Error:** Red border, error message
- **Success:** Success message
- **Loading:** Disabled form, spinner

### 3.4. Responsive Design
- **Mobile:** Single column, full width
- **Tablet:** 2-column for name/company, email/phone
- **Desktop:** Full layout với sidebar (optional)

### 3.5. Accessibility
- **Labels:** Proper label associations
- **Keyboard navigation:** Tab through fields
- **Screen readers:** ARIA labels
- **Error announcements:** Screen reader friendly

## 4. Yêu cầu kỹ thuật

### 4.1. Data Structure
```javascript
QuoteRequest {
  id: string
  referenceNumber: string
  personalInfo: {
    name: string
    company: string
    position?: string
    email: string
    phone: string
    address?: string
  }
  projectInfo: {
    projectName?: string
    serviceType: string
    quantity?: number
    deadline?: date
  }
  technicalRequirements: {
    material?: string
    size?: string
    tolerance?: string
    details?: string
  }
  files: File[]
  additionalInfo: {
    source?: string
    notes?: string
  }
  status: 'pending' | 'reviewing' | 'quoted' | 'closed'
  createdAt: date
  updatedAt: date
}
```

### 4.2. File Upload
- **Storage:** Backend storage hoặc cloud (S3, Azure Blob, etc.)
- **Security:** File type validation, size limits, virus scanning
- **Naming:** Unique filenames, preserve original name in metadata
- **Access:** Secure URLs, expiration (optional)

### 4.3. Backend API
```
POST /api/quote/request
GET /api/quote/status/:referenceNumber
GET /api/quote/:id (admin only)
```

### 4.4. Email Service
- **Provider:** SendGrid, Mailgun, AWS SES, etc.
- **Templates:** HTML email templates
- **Tracking:** Open rates, click rates (optional)

### 4.5. CRM Integration (Optional)
- **Systems:** Salesforce, HubSpot, Pipedrive, etc.
- **Data sync:** Create lead/opportunity
- **Fields mapping:** Map form fields to CRM fields

## 5. User Stories

### 5.1. Gửi yêu cầu báo giá
**As a** khách hàng tiềm năng  
**I want to** gửi yêu cầu báo giá với bản vẽ  
**So that** tôi có thể nhận quote nhanh chóng

### 5.2. Quick quote
**As a** khách hàng  
**I want to** gửi quick quote từ product card  
**So that** tôi không cần điền form dài

### 5.3. Track status
**As a** khách hàng  
**I want to** track status của quote request  
**So that** tôi biết khi nào nhận được quote

### 5.4. Upload multiple files
**As a** kỹ sư  
**I want to** upload nhiều bản vẽ  
**So that** tôi có thể cung cấp đầy đủ thông tin

## 6. Success Metrics

### 6.1. Conversion
- Form submission rate: > 15%
- Form completion rate: > 80%
- File upload success: > 95%
- Email open rate: > 60%

### 6.2. Performance
- Form load time: < 1s
- File upload time: < 10s per file
- Form submission time: < 3s
- Email delivery: < 1 minute

### 6.3. Quality
- Error rate: < 5%
- Duplicate submissions: < 2%
- Spam rate: < 1%

## 7. Dependencies

### 7.1. Backend
- Quote request API
- File upload service
- Email service
- Database/storage

### 7.2. Third-party
- File validation library
- Form validation library
- Email service provider
- CRM system (optional)

### 7.3. Components
- Form input components
- File upload component
- Form validation component
- Success/error message components

## 8. Future Enhancements

### 8.1. Phase 2
- Quote status tracking page
- Quote history (logged-in users)
- Auto-quote for standard products
- Chat integration during quote process
- Video call scheduling

### 8.2. Phase 3
- AI-powered quote estimation
- 3D model viewer integration
- Real-time collaboration
- Quote comparison tool
- Automated follow-ups

## 9. Acceptance Criteria

- [ ] Form hiển thị đầy đủ fields
- [ ] Validation hoạt động (client + server)
- [ ] File upload với drag & drop
- [ ] Multiple file support
- [ ] Form submission thành công
- [ ] Email notifications được gửi
- [ ] Success message với reference number
- [ ] Error handling đầy đủ
- [ ] Responsive trên tất cả devices
- [ ] Accessibility compliance
- [ ] CRM integration (nếu có)
- [ ] Performance: < 3s submission

## 10. Notes

- Ưu tiên UX: Form phải dễ điền, ít friction
- File upload phải reliable và user-friendly
- Consider auto-save để tránh mất data
- Track form abandonment để optimize
- A/B test form length và field order
- Ensure GDPR/privacy compliance
- Consider CAPTCHA để prevent spam
