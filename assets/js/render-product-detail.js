/**
 * RENDER PRODUCT DETAIL
 * 
 * Script này render chi tiết sản phẩm từ products.js
 * Đọc id từ query string và tìm sản phẩm tương ứng
 */

(function() {
    'use strict';

    /**
     * Lấy product ID từ URL query string
     */
    function getProductIdFromURL() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('id');
    }

    /**
     * Tìm sản phẩm theo ID
     */
    function findProductById(id) {
        const productsData = window.productsData || { products: [] };
        const products = productsData.products || [];
        return products.find(p => p.id === id);
    }

    /**
     * Render chi tiết sản phẩm
     */
    function renderProductDetail(product) {
        const contentContainer = document.getElementById('productContent');
        if (!contentContainer) return;

        const mainImage = product.images && product.images.length > 0 
            ? product.images[0] 
            : 'https://via.placeholder.com/800x600?text=No+Image';
        
        const thumbnailImages = product.images && product.images.length > 1 
            ? product.images.slice(1, 5) 
            : [];

        // Badges
        const badgesHTML = product.badges && product.badges.length > 0
            ? product.badges.map(badge => {
                const badgeClass = badge === 'ISO 9001' 
                    ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 border-green-200 dark:border-green-800'
                    : 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 border-blue-100 dark:border-blue-800';
                const icon = badge === 'ISO 9001' ? 'verified' : 'info';
                return `
                    <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${badgeClass} border">
                        <span class="material-symbols-outlined text-[14px]">${icon}</span>
                        ${badge}
                    </span>
                `;
            }).join('')
            : '';

        // Specifications HTML
        const specs = product.specifications || {};
        const specsHTML = Object.keys(specs).length > 0
            ? Object.entries(specs).map(([key, value]) => {
                const labelMap = {
                    accuracy: 'Độ chính xác',
                    hardness: 'Độ cứng',
                    maxSize: 'Kích thước tối đa',
                    diameter: 'Đường kính',
                    tolerance: 'Dung sai gia công',
                    material: 'Vật liệu',
                    surface: 'Bề mặt',
                    pressure: 'Áp suất',
                    process: 'Quy trình',
                    thickness: 'Độ dày'
                };
                const label = labelMap[key] || key;
                return `
                    <div class="col-span-2 sm:col-span-1">
                        <span class="block text-text-secondary dark:text-gray-500 mb-1">${label}</span>
                        <span class="font-semibold text-text-main dark:text-white">${value}</span>
                    </div>
                `;
            }).join('')
            : `
                <div class="col-span-2 sm:col-span-1">
                    <span class="block text-text-secondary dark:text-gray-500 mb-1">Vật liệu</span>
                    <span class="font-semibold text-text-main dark:text-white">${product.material || 'N/A'}</span>
                </div>
                <div class="col-span-2 sm:col-span-1">
                    <span class="block text-text-secondary dark:text-gray-500 mb-1">Ứng dụng</span>
                    <span class="font-semibold text-text-main dark:text-white">${product.application || 'N/A'}</span>
                </div>
            `;

        // Thumbnail gallery HTML
        const thumbnailHTML = thumbnailImages.length > 0
            ? thumbnailImages.map((img, index) => `
                <button class="aspect-square rounded-lg border border-border-light dark:border-border-dark overflow-hidden bg-white dark:bg-surface-dark p-2 hover:border-primary transition-colors" 
                        onclick="changeMainImage('${img}')">
                    <div class="w-full h-full bg-center bg-no-repeat bg-cover" style="background-image: url('${img}');"></div>
                </button>
            `).join('')
            : '';

        const moreImagesCount = product.images && product.images.length > 5 
            ? product.images.length - 5 
            : 0;
        const moreImagesHTML = moreImagesCount > 0
            ? `<div class="aspect-square rounded-lg bg-border-light dark:bg-surface-dark flex items-center justify-center text-text-secondary cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                <span class="font-medium">+${moreImagesCount} ảnh</span>
            </div>`
            : '';

        const html = `
            <!-- Product Hero Section -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
                <!-- Left Column: Gallery -->
                <div class="lg:col-span-7 flex flex-col gap-4">
                    <div class="w-full aspect-[4/3] bg-white dark:bg-surface-dark rounded-xl overflow-hidden border border-border-light dark:border-border-dark shadow-sm relative group">
                        <div class="w-full h-full bg-center bg-no-repeat bg-contain p-8" 
                             id="mainProductImage"
                             style="background-image: url('${mainImage}');"
                             alt="${product.name}">
                        </div>
                        <div class="absolute top-4 left-4 bg-primary/10 backdrop-blur-sm text-primary dark:text-white dark:bg-primary/80 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                            <span class="material-symbols-outlined text-sm">zoom_in</span> Click để phóng to
                        </div>
                    </div>
                    ${thumbnailImages.length > 0 || moreImagesCount > 0 ? `
                    <div class="grid grid-cols-4 gap-3">
                        <button class="aspect-square rounded-lg border-2 border-primary overflow-hidden bg-white dark:bg-surface-dark p-2" 
                                onclick="changeMainImage('${mainImage}')">
                            <div class="w-full h-full bg-center bg-no-repeat bg-cover" style="background-image: url('${mainImage}');"></div>
                        </button>
                        ${thumbnailHTML}
                        ${moreImagesHTML}
                    </div>
                    ` : ''}
                </div>

                <!-- Right Column: Product Info -->
                <div class="lg:col-span-5 flex flex-col h-full">
                    ${badgesHTML ? `<div class="flex items-center gap-3 mb-4">${badgesHTML}</div>` : ''}
                    
                    <h1 class="text-3xl md:text-4xl font-bold text-text-main dark:text-white mb-3 tracking-tight">
                        ${product.name}
                    </h1>
                    
                    <p class="text-text-secondary dark:text-gray-400 text-base leading-relaxed mb-8 border-b border-border-light dark:border-border-dark pb-6">
                        ${product.description || product.shortDescription || 'Không có mô tả'}
                    </p>

                    <!-- Technical Specs Table -->
                    <div class="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-xl p-5 mb-8 shadow-sm">
                        <h3 class="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4 flex items-center gap-2">
                            <span class="material-symbols-outlined text-lg">settings</span> Thông số kỹ thuật
                        </h3>
                        <div class="grid grid-cols-2 gap-y-4 text-sm">
                            ${specsHTML}
                        </div>
                    </div>

                    <!-- Call to Action Area -->
                    <div class="mt-auto">
                        <div class="bg-blue-50 dark:bg-primary/10 border border-blue-100 dark:border-primary/20 rounded-lg p-4 mb-6">
                            <div class="flex items-start gap-3">
                                <span class="material-symbols-outlined text-primary mt-0.5">info</span>
                                <p class="text-sm text-text-main dark:text-gray-300">
                                    <strong>Lưu ý:</strong> Sản phẩm mẫu minh họa năng lực. Chúng tôi nhận gia công theo bản vẽ kỹ thuật riêng của quý khách.
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-col sm:flex-row gap-4">
                            <a href="contact.html" class="flex-1 bg-primary hover:bg-primary-dark text-white font-semibold py-3.5 px-6 rounded-lg transition-all shadow-lg shadow-primary/30 flex items-center justify-center gap-2">
                                <span class="material-symbols-outlined">request_quote</span>
                                Liên hệ báo giá
                            </a>
                            <a href="contact.html" class="flex-1 bg-white dark:bg-surface-dark border border-border-light dark:border-border-dark hover:border-primary dark:hover:border-primary text-text-main dark:text-white font-medium py-3.5 px-6 rounded-lg transition-all flex items-center justify-center gap-2">
                                <span class="material-symbols-outlined text-text-secondary">chat</span>
                                Trao đổi yêu cầu
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Details Section -->
            <div class="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-border-light dark:border-border-dark pt-16">
                <div class="md:col-span-2">
                    <h2 class="text-2xl font-bold text-text-main dark:text-white mb-6">Chi tiết ứng dụng & Công năng</h2>
                    <div class="space-y-6 text-text-secondary dark:text-gray-400 leading-relaxed">
                        <p>${product.description || product.shortDescription || 'Không có thông tin chi tiết.'}</p>
                        ${product.application ? `<p><strong>Ứng dụng:</strong> ${product.application}</p>` : ''}
                    </div>
                </div>
                <div class="md:col-span-1">
                    <div class="bg-background-light dark:bg-surface-dark/50 rounded-xl p-6 border border-border-light dark:border-border-dark sticky top-24">
                        <h3 class="text-lg font-bold text-text-main dark:text-white mb-4">Thông tin sản phẩm</h3>
                        <div class="space-y-4 text-sm">
                            ${product.code ? `<div><span class="text-text-secondary">Mã sản phẩm:</span> <span class="font-semibold">${product.code}</span></div>` : ''}
                            ${product.category ? `<div><span class="text-text-secondary">Danh mục:</span> <span class="font-semibold">${product.category}</span></div>` : ''}
                            ${product.material ? `<div><span class="text-text-secondary">Vật liệu:</span> <span class="font-semibold">${product.material}</span></div>` : ''}
                        </div>
                    </div>
                </div>
            </div>
        `;

        contentContainer.innerHTML = html;

        // Update breadcrumbs
        const breadcrumbCategory = document.getElementById('breadcrumbCategory');
        const breadcrumbName = document.getElementById('breadcrumbName');
        if (breadcrumbCategory) breadcrumbCategory.textContent = product.category || 'Sản phẩm';
        if (breadcrumbName) breadcrumbName.textContent = product.name;

        // Update page title
        document.title = `${product.name} - Quang Hiền Phát`;
    }

    /**
     * Hiển thị lỗi khi không tìm thấy sản phẩm
     */
    function showError() {
        const contentContainer = document.getElementById('productContent');
        const errorState = document.getElementById('errorState');
        
        if (contentContainer) {
            contentContainer.innerHTML = '';
        }
        
        if (errorState) {
            errorState.classList.remove('hidden');
        }
    }

    /**
     * Change main image (for thumbnail click)
     */
    window.changeMainImage = function(imageUrl) {
        const mainImageElement = document.getElementById('mainProductImage');
        if (mainImageElement) {
            mainImageElement.style.backgroundImage = `url('${imageUrl}')`;
        }
    };

    /**
     * Initialize
     */
    function init() {
        const productId = getProductIdFromURL();
        
        if (!productId) {
            showError();
            return;
        }

        const product = findProductById(productId);
        
        if (!product) {
            showError();
            return;
        }

        renderProductDetail(product);
    }

    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
