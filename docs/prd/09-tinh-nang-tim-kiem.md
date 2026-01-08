# PRD: Tính Năng Tìm Kiếm Sản Phẩm

## 1. Tổng quan

### 1.1. Mục đích
Tính năng tìm kiếm cho phép người dùng:
- Tìm kiếm sản phẩm theo tên, mã sản phẩm, mô tả
- Tìm kiếm theo thông số kỹ thuật
- Tìm kiếm theo vật liệu, ứng dụng
- Autocomplete và search suggestions

### 1.2. Đối tượng sử dụng
- Khách hàng B2B tìm sản phẩm cụ thể
- Kỹ sư tìm kiếm theo specifications
- Nhà mua hàng so sánh options

## 2. Yêu cầu chức năng

### 2.1. Search Bar (Header)
**Mục đích:** Quick search từ bất kỳ trang nào

**Location:** Header, desktop only (hoặc mobile với icon)

**Components:**
- **Icon:** search (left, absolute)
- **Input:** Text input
  - Placeholder: "Tìm kiếm sản phẩm..."
  - Border: Light, rounded
  - Focus: Ring primary
- **Clear button:** X icon (khi có text)

**Behavior:**
- Focus: Icon color change, border highlight
- Type: Show suggestions dropdown
- Enter: Submit search
- Escape: Close suggestions

### 2.2. Search Suggestions (Autocomplete)
**Mục đích:** Help users find products faster

**Trigger:** Khi user types (after 2+ characters)

**Display:**
- Dropdown below search bar
- Max height: 400px, scrollable
- Background: White/dark surface
- Border: Light, shadow

**Suggestion Types:**

#### 2.2.1. Product Matches
- Product name
- Product code
- Highlight search terms
- Icon: product icon

#### 2.2.2. Category Matches
- Category name
- Count of products
- Icon: category icon

#### 2.2.3. Popular Searches
- "Tìm kiếm phổ biến"
- Top 5 searches
- Click to search

**Interaction:**
- Hover: Highlight background
- Click: Navigate to product/category
- Keyboard: Arrow keys to navigate, Enter to select

### 2.3. Search Results Page
**Mục đích:** Hiển thị kết quả tìm kiếm

**URL:** /search?q=query

**Layout:**
- Header với search bar (pre-filled)
- Results count: "Tìm thấy X kết quả cho 'query'"
- Filters sidebar (same as product listing)
- Results grid (same as product listing)
- Pagination

**Empty State:**
- Icon: search_off
- Message: "Không tìm thấy kết quả"
- Suggestions:
  - Check spelling
  - Try different keywords
  - Browse categories
- Link: "Xem tất cả sản phẩm"

**No Query State:**
- Message: "Nhập từ khóa để tìm kiếm"
- Popular searches
- Browse categories

### 2.4. Search Functionality

#### 2.4.1. Search Scope
**Fields to search:**
- Product name
- Product code
- Description
- Specifications (material, size, etc.)
- Category
- Tags/keywords

**Search Logic:**
- Full-text search
- Partial matches
- Case-insensitive
- Vietnamese diacritics handling (tự động, tự động)

#### 2.4.2. Search Ranking
**Priority order:**
1. Exact match (name)
2. Exact match (code)
3. Partial match (name)
4. Description match
5. Specification match

**Boost factors:**
- Featured products
- Popular products
- Recent products

#### 2.4.3. Filters Integration
- Apply filters từ sidebar
- Update results in real-time
- Show active filters
- Clear filters button

### 2.5. Advanced Search (Optional)
**Mục đích:** Tìm kiếm chi tiết hơn

**Fields:**
- Material dropdown
- Size range (min-max)
- Application dropdown
- Process type
- Price range (nếu có)

**UI:**
- Expandable section
- "Tìm kiếm nâng cao" link
- Form với multiple fields
- "Tìm kiếm" button

## 3. Yêu cầu UI/UX

### 3.1. Search Bar UX
- **Placeholder:** Helpful, not instruction
- **Clear feedback:** Visual khi typing
- **Loading state:** Spinner khi searching
- **Error state:** Clear error messages

### 3.2. Suggestions UX
- **Relevant:** Show most relevant first
- **Fast:** Appear within 300ms
- **Keyboard friendly:** Full keyboard navigation
- **Mobile friendly:** Touch targets đủ lớn

### 3.3. Results UX
- **Clear results:** Easy to scan
- **Highlighting:** Highlight search terms
- **Pagination:** Clear page numbers
- **Sorting:** Sort by relevance, name, date

### 3.4. Performance
- **Fast response:** < 500ms for suggestions
- **Debouncing:** Wait 300ms after typing stops
- **Caching:** Cache popular searches
- **Lazy loading:** Load results as needed

## 4. Yêu cầu kỹ thuật

### 4.1. Search Implementation

#### Option 1: Client-side
- **Pros:** Fast, no server calls
- **Cons:** Limited với large datasets
- **Use case:** < 1000 products

#### Option 2: Server-side API
- **Pros:** Scalable, powerful
- **Cons:** Requires backend
- **Use case:** Large datasets

#### Option 3: Search Service
- **Algolia, Elasticsearch, etc.**
- **Pros:** Powerful, fast, features
- **Cons:** Cost, external dependency

### 4.2. Data Structure
```javascript
SearchResult {
  products: Product[]
  categories: Category[]
  total: number
  query: string
  filters: FilterState
  pagination: {
    page: number
    perPage: number
    totalPages: number
  }
}

SearchSuggestion {
  type: 'product' | 'category' | 'popular'
  text: string
  highlight: string
  url: string
  count?: number
}
```

### 4.3. API Endpoints
```
GET /api/search?q=query&page=1&limit=12
GET /api/search/suggestions?q=query
GET /api/search/popular
```

### 4.4. Vietnamese Text Handling
- **Diacritics:** Normalize (tự động = tu dong)
- **Tokenization:** Split words correctly
- **Stop words:** Filter common words
- **Synonyms:** Handle synonyms (CNC = máy CNC)

## 5. User Stories

### 5.1. Tìm sản phẩm theo tên
**As a** khách hàng  
**I want to** tìm sản phẩm bằng tên  
**So that** tôi có thể tìm nhanh sản phẩm cần

### 5.2. Tìm theo mã sản phẩm
**As a** nhà mua hàng  
**I want to** tìm bằng mã sản phẩm  
**So that** tôi có thể tìm chính xác sản phẩm

### 5.3. Tìm với suggestions
**As a** người dùng  
**I want to** xem suggestions khi gõ  
**So that** tôi có thể tìm nhanh hơn

### 5.4. Tìm kiếm nâng cao
**As a** kỹ sư  
**I want to** tìm với nhiều filters  
**So that** tôi có thể tìm chính xác theo yêu cầu

## 6. Success Metrics

### 6.1. Usage
- Search usage rate: > 20%
- Average searches per session: > 1.5
- Search-to-click rate: > 30%
- Suggestions click rate: > 15%

### 6.2. Performance
- Search response time: < 500ms
- Suggestions response: < 300ms
- Results page load: < 2s

### 6.3. Quality
- Zero results rate: < 10%
- Search accuracy: > 90%
- User satisfaction: > 4/5

## 7. Dependencies

### 7.1. Backend
- Search API/service
- Product database
- Indexing service (if needed)

### 7.2. Frontend
- Search bar component
- Suggestions dropdown component
- Results page component
- Search service/utility

### 7.3. Third-party (Optional)
- Algolia
- Elasticsearch
- Search UI library

## 8. Future Enhancements

### 8.1. Phase 2
- Voice search (mobile)
- Image search (upload image)
- Search history
- Saved searches
- Search analytics

### 8.2. Phase 3
- AI-powered search
- Natural language queries
- Search personalization
- Related searches
- Search trends

## 9. Acceptance Criteria

- [ ] Search bar hiển thị trong header
- [ ] Suggestions dropdown hoạt động
- [ ] Search results page hiển thị đúng
- [ ] Highlighting search terms
- [ ] Filters integration hoạt động
- [ ] Pagination hoạt động
- [ ] Empty state hiển thị đúng
- [ ] Keyboard navigation works
- [ ] Mobile search hoạt động
- [ ] Performance: < 500ms response
- [ ] Vietnamese text handling
- [ ] Error handling đầy đủ

## 10. Notes

- Ưu tiên speed: Search phải nhanh
- Relevance: Results phải relevant
- UX: Make it easy to find what users need
- Consider search analytics để improve
- A/B test search placement và UI
