let currentCategory = 'all';
let currentSort = 'default';

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

function filterCategory(category) {
    currentCategory = category;
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('bg-primary', 'text-white');
        btn.classList.add('bg-gray-100', 'text-gray-700');
    });
    event.currentTarget.classList.remove('bg-gray-100', 'text-gray-700');
    event.currentTarget.classList.add('bg-primary', 'text-white');
    renderProducts();
}

function sortProducts() {
    currentSort = document.getElementById('sort-select').value;
    renderProducts();
}

function renderProducts() {
    const grid = document.getElementById('product-grid');
    let filteredProducts = getProductsByCategory(currentCategory);
    
    if (currentSort === 'price-asc') {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (currentSort === 'price-desc') {
        filteredProducts.sort((a, b) => b.price - a.price);
    } else if (currentSort === 'sales') {
        filteredProducts.sort((a, b) => b.sales - a.sales);
    }
    
    grid.innerHTML = filteredProducts.map(product => `
        <div class="bg-white rounded-xl shadow-sm overflow-hidden card-hover cursor-pointer" onclick="goToProduct(${product.id})">
            <div class="aspect-square bg-gray-100 relative">
                <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;200&quot; height=&quot;200&quot; viewBox=&quot;0 0 200 200&quot;%3E%3Crect fill=&quot;%23f3f4f6&quot; width=&quot;200&quot; height=&quot;200&quot;/%3E%3Ctext fill=&quot;%239ca3af&quot; font-family=&quot;sans-serif&quot; font-size=&quot;14&quot; x=&quot;50%25&quot; y=&quot;50%25&quot; text-anchor=&quot;middle&quot; dominant-baseline=&quot;middle&quot;%3E鍟嗗搧鍥剧墖%3C/text%3E%3C/svg%3E'">
                <div class="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                    鎵瑰彂浠?                </div>
            </div>
            <div class="p-4">
                <h4 class="font-semibold text-gray-900 mb-2 line-clamp-2">${product.name}</h4>
                <div class="flex items-baseline gap-2 mb-2">
                    <span class="text-primary text-xl font-bold">楼${product.price}</span>
                    <span class="text-gray-400 text-sm line-through">楼${product.originalPrice}</span>
                    <span class="text-gray-500 text-sm">/${product.unit}</span>
                </div>
                <div class="flex items-center justify-between text-sm text-gray-500">
                    <span>璧疯閲? ${product.minOrder}${product.unit}</span>
                    <span>閿€閲? ${product.sales}</span>
                </div>
                <button class="btn-primary w-full mt-3 py-2 rounded-lg text-white text-sm font-semibold hover:opacity-90 transition-opacity">
                    鏌ョ湅璇︽儏
                </button>
            </div>
        </div>
    `).join('');
}

function goToProduct(id) {
    window.location.href = `product.html?id=${id}`;
}

function handleContactForm(e) {
    e.preventDefault();
    alert('鎰熻阿鎮ㄧ殑鐣欒█锛佹垜浠細灏藉揩涓庢偍鑱旂郴銆?);
    e.target.reset();
}

document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
});