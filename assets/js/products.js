/**
 * PRODUCTS DATA - Quang Hiền Phát
 * 
 * Đây là file quản lý tập trung tất cả dữ liệu sản phẩm.
 * 
 * QUY TRÌNH THÊM SẢN PHẨM MỚI:
 * 1. Copy một object sản phẩm bên dưới
 * 2. Điền thông tin mới
 * 3. Đảm bảo id là duy nhất (ví dụ: sp-01, sp-02, ...)
 * 4. Thêm vào mảng products
 * 
 * LƯU Ý:
 * - Không hard-code dữ liệu trong HTML
 * - Tất cả sản phẩm phải có trong file này
 * - id phải là duy nhất
 */

const products = [
  {
    id: "sp-01",
    name: "Bánh răng công nghiệp",
    code: "GR-204",
    category: "Gia công cơ khí CNC",
    shortDescription: "Bánh răng công nghiệp thép hợp kim chất lượng cao",
    description: "Bánh răng công nghiệp được gia công chính xác từ thép hợp kim, qua quy trình tôi cao tần để đạt độ cứng và độ bền cao. Sản phẩm đạt độ chính xác cấp 6-7, phù hợp cho các hệ thống truyền động công nghiệp nặng, hộp giảm tốc, và máy móc công nghiệp.",
    material: "Thép hợp kim, Tôi cao tần",
    application: "Công nghiệp ô tô, Dây chuyền sản xuất",
    specifications: {
      accuracy: "Độ chính xác cấp 6-7",
      hardness: "58-62 HRC",
      maxSize: "Ø200mm - Ø800mm",
      tolerance: "±0.005mm"
    },
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAHSg8qLSn-LOv9JYUfRbGN8CVYq8W3u6yOh6bL8prXj2-vHV-hT7U8UosAulCNhDr5go8rAEoC60YRHX5_93YzkQT_m9lNPfTr-gZT6_CukXlPJ7Qp3MkgvHYsXz0nYrZhRmuL0Zsaula29d5yyFSKGpfCrJ7tmfLqkpGgdkzUbjlpuyR--FCewXzHlvLgH5tzjJetKdRgLaC7zm5NNTJ30OXIHXmQO6aruenibNdOFuowwM13JAs_orCwuUBPJOfY4WYkPz51j_g"
    ],
    badges: ["ISO 9001"],
    featured: true
  },
  {
    id: "sp-02",
    name: "Chi tiết Phay CNC Nhôm",
    code: "AL-CNC-01",
    category: "Chi tiết máy chính xác",
    shortDescription: "Chi tiết nhôm phay CNC chính xác",
    description: "Chi tiết được gia công từ nhôm 6061 hoặc 7075 trên máy phay CNC 5 trục, đạt dung sai ±0.01mm. Bề mặt được anodized để tăng độ bền và chống ăn mòn. Sản phẩm phù hợp cho các ứng dụng trong ngành điện tử, hàng không vũ trụ, và thiết bị y tế.",
    material: "Nhôm 6061, Anodized",
    application: "Công nghiệp điện tử, Hàng không",
    specifications: {
      accuracy: "Dung sai ±0.01mm",
      material: "Nhôm 6061/7075",
      surface: "Anodized",
      tolerance: "±0.01mm"
    },
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCfCT2XTFo4LOSe-17FNfDAEwDmCFyyrQ0ukFoxh5wabWbM1ZzM18BZxIyWTaHiehB2ecDJ0_8Geg_hQ695fA2bdZfXz1lVi-T9i08gCe_W9xKTK38p6wZxMcl-k4mgL5a-d2_m0uXI38J22CQJKa3ouHbfX327xD1P266a8qQzwnynjASXHMEEsdlic8NZSHtRXW0RAmIVNk_Lqz660OcmgKtC4JTPgXny9YDykC0AbGaHRaBNjA1Y7-4H-OwEYhikZ5Pdsj9mq7E"
    ],
    badges: [],
    featured: true
  },
  {
    id: "sp-03",
    name: "Trục vít tải thép",
    code: "SC-45",
    category: "Linh kiện & Kết cấu",
    shortDescription: "Trục vít tải thép công nghiệp",
    description: "Trục vít tải được chế tạo từ thép C45, qua quy trình mạ kẽm để chống ăn mòn. Sản phẩm có đường kính từ 200mm đến 800mm, phù hợp cho các hệ thống vận chuyển vật liệu rời trong ngành xây dựng, nông nghiệp, và công nghiệp thực phẩm.",
    material: "Thép C45, Mạ kẽm",
    application: "Dây chuyền sản xuất, Xây dựng & Kết cấu",
    specifications: {
      diameter: "Đk 200mm - 800mm",
      material: "Thép C45",
      coating: "Mạ kẽm",
      tolerance: "±0.1mm"
    },
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAGXyrSy5q7mu_IzRknPZIn0yDFVzauWTmwjniNUD1CA5ObgmuO8bjrOm7tPModei0X-MORS5yXJnXyA0BW4zsVjbhCgzfTSP1O0fchSZLAIw6APgLxkDMqSQGG3JJgI9OQ559gm3nYp6CifUIkell_aaGMM8ZIVmipNXRaCzwbjn2bjoJhodv-Mlc13iO_ia2Bl4OJaAdS6fxBKLltUQ0BKoRlUVfwYF-DwbVKvBRCC05D65V-Z-3UKX-3otGbBi1llgT2zLLdfxM"
    ],
    badges: ["Đặt hàng"],
    featured: true
  },
  {
    id: "sp-04",
    name: "Giá đỡ kim loại (Bracket)",
    code: "BR-LASER",
    category: "Linh kiện & Kết cấu",
    shortDescription: "Chi tiết giá đỡ kim loại cắt laser",
    description: "Giá đỡ kim loại được chế tạo từ thép tấm, qua quy trình cắt laser và chấn gấp CNC. Sản phẩm có độ chính xác cao, bề mặt phẳng, phù hợp cho các ứng dụng lắp đặt thiết bị, giá đỡ máy móc, và kết cấu công nghiệp.",
    material: "Thép tấm, Cắt Laser",
    application: "Xây dựng & Kết cấu, Lắp đặt thiết bị",
    specifications: {
      process: "Chấn gấp CNC",
      material: "Thép tấm",
      thickness: "2mm - 20mm",
      tolerance: "±0.1mm"
    },
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC6FPLRb2e5_EEfePiuWvv113YRHd7-4kS7fpp7U7JBtvYqShksSn0NvyklsocszeF5ffRYDjeQLiElAy_NqtoU9vcvwSE5VGmyVx7t66oVe05aV-OrjGcSSlgqNQ5GPYOOd3ekvwrLhQT3mcO2IBLZFMD8WqXxr5NTb0UDYsj1UoX4iEDFeegbUDUCctvoBduV5suHr1dnD8GUzuno9DkFB4RmJTDFQaHlk2fXycvLKRZaF20J0sxQEqxaYNVWVqacJ6jRXWw0QHo"
    ],
    badges: [],
    featured: false
  },
  {
    id: "sp-05",
    name: "Vỏ xi lanh thủy lực",
    code: "HYD-CYL",
    category: "Chi tiết máy chính xác",
    shortDescription: "Vỏ xi lanh thủy lực thép đúc",
    description: "Vỏ xi lanh thủy lực được chế tạo từ thép đúc, qua quy trình gia công tinh để đảm bảo độ chính xác và độ bóng bề mặt. Sản phẩm chịu được áp suất cao, phù hợp cho các hệ thống thủy lực trong máy móc công nghiệp, máy xúc, và thiết bị nâng hạ.",
    material: "Thép đúc, Gia công tinh",
    application: "Công nghiệp ô tô, Máy móc công nghiệp",
    specifications: {
      pressure: "Áp suất cao",
      material: "Thép đúc",
      surface: "Gia công tinh",
      tolerance: "±0.02mm"
    },
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDpasygY4amjThyVnjcixVnExkzxdV0OFCsrMQrZrZRD6VzPRIIsbg2_rBRc_PdI-nRwr76K29wVAblT0wm9NrsRtzFO-WCQplxu3UlQcxkQsHIuEWgm2bsOVmpoT8mD3dbThAqiy_-2S_grrIL5F7MGppJY2uJuF62ItbawIy1GmTH0qbwRZHVttuvymvAY3vyCt_Yi6yANR3cL_Xwiht9DMnfyNDVZdW2c_JWe541pjXgVCpr9aoV5cmcBlI62FdccrxwPG_8wjc"
    ],
    badges: [],
    featured: true
  }
];

/**
 * EXPORT DATA
 * 
 * Expose products array để các file khác có thể sử dụng
 */
if (typeof module !== 'undefined' && module.exports) {
  // Node.js environment
  module.exports = { products };
} else {
  // Browser environment - expose to window
  window.productsData = { products };
}
