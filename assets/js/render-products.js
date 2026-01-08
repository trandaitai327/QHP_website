/**
 * RENDER PRODUCTS LIST
 * 
 * Script này render danh sách sản phẩm từ products.js
 * Không hard-code dữ liệu, tất cả lấy từ products.js
 */

(function() {
    'use strict';

    // Lấy dữ liệu sản phẩm
    const productsData = window.productsData || { products: [] };
    const products = productsData.products || [];

    // State management
    let filteredProducts = [...products];
    let activeFilters = {
        category: [],
        material: [],
        search: '',
        sort: 'all'
    };

    /**
     * Tạo HTML cho một product card
     */
    function createProductCard(product) {
        const mainImage = product.images && product.images.length > 0 
            ? product.images[0] 
            : 'https://via.placeholder.com/400x300?text=No+Image';
        
        const badgeHTML = product.badges && product.badges.length > 0
            ? product.badges.map(badge => {
                const badgeClass = badge === 'ISO 9001' || badge === 'Heavy Duty' 
                    ? 'bg-primary/90' 
                    : 'bg-accent';
                return `<span class="${badgeClass} text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide">${badge}</span>`;
            }).join('')
            : '';

        // Lấy thông tin specs để hiển thị
        const spec1 = product.material || 'N/A';
        const spec2 = product.specifications?.accuracy || product.specifications?.diameter || product.specifications?.pressure || 'N/A';

        return `
            <div class="group flex flex-col bg-white rounded-xl overflow-hidden border border-border-light hover:shadow-lg hover:border-primary/50 transition-all duration-300 stagger-item hover-lift animate-on-scroll animate-fade-up">
                <div class="relative w-full aspect-[4/3] bg-background-light overflow-hidden">
                    ${badgeHTML ? `<div class="absolute top-3 left-3 z-10 flex gap-2">${badgeHTML}</div>` : ''}
                    <div class="w-full h-full bg-center bg-cover transition-transform duration-500 group-hover:scale-105" 
                         style="background-image: url('${mainImage}');"
                         alt="${product.name}">
                    </div>
                </div>
                <div class="p-4 flex flex-col gap-2 flex-1">
                    <h3 class="text-text-main text-lg font-bold leading-tight group-hover:text-primary transition-colors">
                        ${product.name}
                    </h3>
                    <div class="flex flex-col gap-1 text-sm text-text-secondary mt-1">
                        <div class="flex items-center gap-2">
                            <span class="material-symbols-outlined text-[16px]">layers</span>
                            <span>${spec1}</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <span class="material-symbols-outlined text-[16px]">settings</span>
                            <span>${spec2}</span>
                        </div>
                    </div>
                    <div class="mt-auto pt-4 flex items-center justify-between border-t border-border-light/50">
                        <span class="text-xs font-medium text-text-secondary uppercase">Mã: ${product.code || product.id}</span>
                        <a href="product-detail.html?id=${product.id}" 
                           class="text-primary text-sm font-semibold flex items-center gap-1 hover:underline">
                            Chi tiết 
                            <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
                        </a>
                    </div>
                </div>
            </div>
        `;
    }

    /**
     * Render danh sách sản phẩm
     */
    function renderProducts(productsToRender) {
        const grid = document.getElementById('productGrid');
        const emptyState = document.getElementById('emptyState');
        
        if (!grid) return;

        if (productsToRender.length === 0) {
            grid.innerHTML = '';
            if (emptyState) {
                emptyState.classList.remove('hidden');
            }
            updateProductCount(0, products.length);
            return;
        }

        if (emptyState) {
            emptyState.classList.add('hidden');
        }

        grid.innerHTML = productsToRender.map(product => createProductCard(product)).join('');
        updateProductCount(productsToRender.length, products.length);
        
        // Re-initialize animations for new elements
        if (window.initScrollAnimations) {
            window.initScrollAnimations();
        }
    }

    /**
     * Cập nhật số lượng sản phẩm hiển thị
     */
    function updateProductCount(displayed, total) {
        const countElement = document.getElementById('productCount');
        if (countElement) {
            countElement.textContent = `Hiển thị ${displayed} / ${total} sản phẩm`;
        }
    }

    /**
     * Lọc sản phẩm theo filters
     */
    function filterProducts() {
        let result = [...products];

        // Filter by category
        if (activeFilters.category.length > 0) {
            result = result.filter(p => activeFilters.category.includes(p.category));
        }

        // Filter by material
        if (activeFilters.material.length > 0) {
            result = result.filter(p => {
                const materialStr = (p.material || '').toLowerCase();
                return activeFilters.material.some(m => materialStr.includes(m.toLowerCase()));
            });
        }

        // Filter by search
        if (activeFilters.search.trim()) {
            const searchTerm = activeFilters.search.toLowerCase();
            result = result.filter(p => 
                p.name.toLowerCase().includes(searchTerm) ||
                (p.code && p.code.toLowerCase().includes(searchTerm)) ||
                (p.shortDescription && p.shortDescription.toLowerCase().includes(searchTerm)) ||
                (p.description && p.description.toLowerCase().includes(searchTerm))
            );
        }

        // Sort
        if (activeFilters.sort === 'featured') {
            result = result.filter(p => p.featured === true);
        }

        filteredProducts = result;
        renderProducts(filteredProducts);
    }

    /**
     * Tạo filter checkboxes
     */
    function setupFilters() {
        // Get unique categories
        const categories = [...new Set(products.map(p => p.category))].filter(Boolean);
        const categoryContainer = document.getElementById('categoryFilters');
        
        if (categoryContainer) {
            // Add "Tất cả" option
            const allCategoryHTML = `
                <label class="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" class="category-filter size-4 rounded border-border-light text-primary focus:ring-primary" 
                           value="all" checked>
                    <span class="text-sm text-text-main group-hover:text-primary transition-colors">Tất cả sản phẩm</span>
                </label>
            `;
            
            const categoryHTML = categories.map(cat => `
                <label class="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" class="category-filter size-4 rounded border-border-light text-primary focus:ring-primary" 
                           value="${cat}">
                    <span class="text-sm text-text-main group-hover:text-primary transition-colors">${cat}</span>
                </label>
            `).join('');
            
            categoryContainer.innerHTML = allCategoryHTML + categoryHTML;
        }

        // Get unique materials (extract from material string)
        const materials = [...new Set(products.map(p => {
            const mat = p.material || '';
            // Extract main materials (Thép, Inox, Nhôm, etc.)
            if (mat.includes('Thép')) return 'Thép';
            if (mat.includes('Inox')) return 'Inox';
            if (mat.includes('Nhôm')) return 'Nhôm';
            return null;
        }))].filter(Boolean);

        const materialContainer = document.getElementById('materialFilters');
        if (materialContainer) {
            const materialHTML = materials.map(mat => `
                <label class="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" class="material-filter size-4 rounded border-border-light text-primary focus:ring-primary" 
                           value="${mat}">
                    <span class="text-sm text-text-main group-hover:text-primary transition-colors">${mat}</span>
                </label>
            `).join('');
            
            materialContainer.innerHTML = materialHTML;
        }

        // Add event listeners
        document.querySelectorAll('.category-filter').forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                if (this.value === 'all' && this.checked) {
                    // Uncheck all others
                    document.querySelectorAll('.category-filter').forEach(cb => {
                        if (cb.value !== 'all') cb.checked = false;
                    });
                    activeFilters.category = [];
                } else if (this.value !== 'all') {
                    // Uncheck "all"
                    const allCheckbox = document.querySelector('.category-filter[value="all"]');
                    if (allCheckbox) allCheckbox.checked = false;
                    
                    activeFilters.category = Array.from(document.querySelectorAll('.category-filter:checked'))
                        .map(cb => cb.value)
                        .filter(v => v !== 'all');
                }
                filterProducts();
            });
        });

        document.querySelectorAll('.material-filter').forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                activeFilters.material = Array.from(document.querySelectorAll('.material-filter:checked'))
                    .map(cb => cb.value);
                filterProducts();
            });
        });
    }

    /**
     * Setup search
     */
    function setupSearch() {
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            let searchTimeout;
            searchInput.addEventListener('input', function() {
                clearTimeout(searchTimeout);
                searchTimeout = setTimeout(() => {
                    activeFilters.search = this.value;
                    filterProducts();
                }, 300); // Debounce 300ms
            });
        }
    }

    /**
     * Setup sort buttons
     */
    function setupSort() {
        document.querySelectorAll('[data-sort]').forEach(button => {
            button.addEventListener('click', function() {
                // Update active state
                document.querySelectorAll('[data-sort]').forEach(btn => {
                    btn.classList.remove('bg-primary', 'text-white');
                    btn.classList.add('bg-white', 'border', 'border-border-light', 'text-text-secondary');
                });
                
                this.classList.remove('bg-white', 'border', 'border-border-light', 'text-text-secondary');
                this.classList.add('bg-primary', 'text-white');
                
                activeFilters.sort = this.dataset.sort;
                filterProducts();
            });
        });
    }

    /**
     * Initialize
     */
    function init() {
        if (products.length === 0) {
            console.warn('No products found in products.js');
            return;
        }

        setupFilters();
        setupSearch();
        setupSort();
        renderProducts(products);
    }

    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
