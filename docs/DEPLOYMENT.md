# Hướng dẫn Deployment

## 🚀 Deploy lên Vercel

### Cách 1: Deploy qua GitHub (Khuyến nghị)

1. **Push code lên GitHub:**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/your-username/quang-hien-phat-website.git
git push -u origin main
```

2. **Import vào Vercel:**
   - Truy cập [vercel.com](https://vercel.com)
   - Đăng nhập và chọn "New Project"
   - Import repository từ GitHub
   - Vercel sẽ tự động detect cấu hình từ `vercel.json`
   - Click "Deploy"

3. **Tự động deploy:**
   - Mỗi lần push code lên GitHub, Vercel sẽ tự động deploy
   - Có thể setup preview deployments cho mỗi pull request

### Cách 2: Deploy bằng Vercel CLI

1. **Cài đặt Vercel CLI:**
```bash
npm i -g vercel
```

2. **Login:**
```bash
vercel login
```

3. **Deploy:**
```bash
vercel
```

4. **Deploy production:**
```bash
vercel --prod
```

## 🌐 Deploy lên GitHub Pages

1. **Push code lên GitHub** (như trên)

2. **Cấu hình GitHub Pages:**
   - Vào repository Settings > Pages
   - Source: Deploy from a branch
   - Branch: `main`
   - Folder: `/ (root)`
   - Click Save

3. **Truy cập website:**
   - URL sẽ là: `https://your-username.github.io/quang-hien-phat-website/`

**Lưu ý:** GitHub Pages không hỗ trợ server-side redirects, nên một số tính năng có thể không hoạt động như trên Vercel.

## 📦 Deploy lên Netlify

1. **Push code lên GitHub**

2. **Import vào Netlify:**
   - Truy cập [netlify.com](https://netlify.com)
   - Chọn "Add new site" > "Import an existing project"
   - Connect với GitHub repository
   - Build settings:
     - Build command: (để trống)
     - Publish directory: `.` (root)
   - Click "Deploy site"

3. **Cấu hình redirects (nếu cần):**
   - Tạo file `_redirects` trong root:
```
/*    /index.html   200
```

## 🔧 Cấu hình Custom Domain

### Vercel
1. Vào Project Settings > Domains
2. Thêm domain của bạn
3. Follow hướng dẫn để cấu hình DNS

### GitHub Pages
1. Vào repository Settings > Pages
2. Nhập custom domain
3. Cấu hình DNS theo hướng dẫn

## ✅ Checklist trước khi deploy

- [ ] Kiểm tra tất cả các link navigation hoạt động đúng
- [ ] Test responsive trên mobile và desktop
- [ ] Kiểm tra console không có lỗi JavaScript
- [ ] Đảm bảo tất cả ảnh sản phẩm load được
- [ ] Test form liên hệ (nếu có backend)
- [ ] Kiểm tra SEO meta tags
- [ ] Test dark mode (nếu có)

## 🐛 Troubleshooting

### Vercel: 404 trên các route
- Đảm bảo file `vercel.json` có rewrite rules đúng
- Kiểm tra routing configuration

### GitHub Pages: 404 trên các route
- GitHub Pages không hỗ trợ SPA routing mặc định
- Cần thêm file `404.html` với JavaScript redirect hoặc sử dụng hash routing

### Assets không load
- Kiểm tra đường dẫn assets (phải là relative paths)
- Đảm bảo file `vercel.json` có cache headers đúng

## 📚 Tài liệu tham khảo

- [Vercel Documentation](https://vercel.com/docs)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Netlify Documentation](https://docs.netlify.com/)
