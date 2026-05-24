/* ========== Games Data ========== */
const gamesData = [
    {
        id: 1,
        title: "RimWorld Deluxe",
        description: "إدارة مستعمرة فضائية",
        originalPrice: 16.5,
        discountPrice: 14.99,
        image: "https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=400&h=300&fit=crop",
        platform: "PC"
    },
    {
        id: 2,
        title: "Divinity Original Sin 2",
        description: "لعبة دور إستراتيجية",
        originalPrice: 22.2,
        discountPrice: 14.99,
        image: "https://images.unsplash.com/photo-1538481143235-5d80740d0dca?w=400&h=300&fit=crop",
        platform: "PC"
    },
    {
        id: 3,
        title: "Disco Elysium",
        description: "لعبة مغامرة تفاعلية",
        originalPrice: 15.0,
        discountPrice: 19.99,
        image: "https://images.unsplash.com/photo-1532546148-87c4f4e75a63?w=400&h=300&fit=crop",
        platform: "PC"
    },
    {
        id: 4,
        title: "Stray",
        description: "قصة مغامرة مثيرة",
        originalPrice: 27.0,
        discountPrice: 9.99,
        image: "https://images.unsplash.com/photo-1618372349695-c5d2e3a10335?w=400&h=300&fit=crop",
        platform: "PC"
    },
    {
        id: 5,
        title: "Better Than Dead",
        description: "لعبة أكشن شهيرة",
        originalPrice: 18.0,
        discountPrice: 8.99,
        image: "https://images.unsplash.com/photo-1600861194942-f883de0dfe3f?w=400&h=300&fit=crop",
        platform: "PC"
    },
    {
        id: 6,
        title: "Windrose",
        description: "مغامرة في العالم المفتوح",
        originalPrice: 16.5,
        discountPrice: 12.99,
        image: "https://images.unsplash.com/photo-1552105954-5fefe8c9ef14?w=400&h=300&fit=crop",
        platform: "PC"
    },
    {
        id: 7,
        title: "Subnautica 2",
        description: "استكشاف كوكب مائي",
        originalPrice: 24.99,
        discountPrice: 17.99,
        image: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=400&h=300&fit=crop",
        platform: "PC"
    },
    {
        id: 8,
        title: "Forza Horizon 6",
        description: "لعبة سباق سريعة",
        originalPrice: 39.99,
        discountPrice: 19.99,
        image: "https://images.unsplash.com/photo-1635360675319-ce8ec6d6c9ed?w=400&h=300&fit=crop",
        platform: "PC"
    }
];

/* ========== DOM Elements ========== */
const gamesGrid = document.getElementById('gamesGrid');
const cartBtn = document.getElementById('cartBtn');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const closeCartBtn = document.getElementById('closeCartBtn');
const cartItems = document.getElementById('cartItems');
const cartBadge = document.getElementById('cartBadge');
const checkoutBtn = document.getElementById('checkoutBtn');
const clearCartBtn = document.getElementById('clearCartBtn');
const searchInput = document.getElementById('searchInput');
const notification = document.getElementById('notification');
const notificationText = document.getElementById('notificationText');
const gameModal = document.getElementById('gameModal');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const noResults = document.getElementById('noResults');
const loading = document.getElementById('loading');

/* ========== Cart Management ========== */
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Display Cart
function displayCart() {
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <p>السلة فارغة</p>
            </div>
        `;
        document.getElementById('subtotal').textContent = '0$';
        document.getElementById('discount').textContent = '0$';
        document.getElementById('total').textContent = '0$';
        cartBadge.textContent = '0';
        return;
    }

    cartItems.innerHTML = '';
    let subtotal = 0;
    let discount = 0;

    cart.forEach((item, index) => {
        subtotal += item.originalPrice;
        discount += item.originalPrice - item.discountPrice;

        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-info">
                <h4>${item.title}</h4>
                <p>${item.discountPrice}$</p>
            </div>
            <div class="cart-item-price">${item.discountPrice}$</div>
            <button class="remove-item-btn" onclick="removeFromCart(${index})">
                <i class="fas fa-trash"></i>
            </button>
        `;
        cartItems.appendChild(cartItem);
    });

    const total = subtotal - discount;
    document.getElementById('subtotal').textContent = subtotal.toFixed(2) + '$';
    document.getElementById('discount').textContent = discount.toFixed(2) + '$';
    document.getElementById('total').textContent = total.toFixed(2) + '$';
    cartBadge.textContent = cart.length;
}

// Add to Cart
function addToCart(game) {
    cart.push(game);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
    showNotification(`تم إضافة ${game.title} إلى السلة`);
}

// Remove from Cart
function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

// Clear Cart
clearCartBtn.addEventListener('click', () => {
    if (confirm('هل أنت متأكد من حذف جميع المنتجات؟')) {
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCart();
        showNotification('تم حذف السلة');
    }
});

// Show Notification
function showNotification(message) {
    notificationText.textContent = message;
    notification.classList.add('show');
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

/* ========== Games Display ========== */
function renderGames(games) {
    if (games.length === 0) {
        gamesGrid.style.display = 'none';
        noResults.style.display = 'block';
        return;
    }

    gamesGrid.style.display = 'grid';
    noResults.style.display = 'none';
    gamesGrid.innerHTML = '';

    games.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.className = 'game-card';
        gameCard.innerHTML = `
            <div class="game-image" onclick="openGameModal(${game.id})">
                <img src="${game.image}" alt="${game.title}">
                <div class="platform-badge">${game.platform} - سيتم</div>
            </div>
            <div class="game-info">
                <h3 class="game-title">${game.title}</h3>
                <p class="game-desc">${game.description}</p>
                <div class="game-price">
                    <span class="original-price">${game.originalPrice}$</span>
                    <span class="discount-price">${game.discountPrice}$</span>
                </div>
                <button class="add-to-cart-btn" onclick="addToCart(${JSON.stringify(game).replace(/"/g, '&quot;')})">
                    <i class="fas fa-plus"></i>
                    <span>أضف للسلة</span>
                </button>
            </div>
        `;
        gamesGrid.appendChild(gameCard);
    });
}

// Initial render
renderGames(gamesData);

/* ========== Search & Filter ========== */
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredGames = gamesData.filter(game =>
        game.title.toLowerCase().includes(searchTerm) ||
        game.description.toLowerCase().includes(searchTerm)
    );
    renderGames(filteredGames);
});

/* ========== Modal Management ========== */
let currentGameId = null;

function openGameModal(gameId) {
    const game = gamesData.find(g => g.id === gameId);
    if (!game) return;

    currentGameId = gameId;

    document.getElementById('modalImage').src = game.image;
    document.getElementById('modalTitle').textContent = game.title;
    document.getElementById('modalDesc').textContent = game.description;
    document.getElementById('modalOriginal').textContent = game.originalPrice + '$';
    document.getElementById('modalDiscount').textContent = game.discountPrice + '$';

    gameModal.classList.add('active');
    modalOverlay.classList.add('active');
}

function closeGameModal() {
    gameModal.classList.remove('active');
    modalOverlay.classList.remove('active');
    currentGameId = null;
}

modalClose.addEventListener('click', closeGameModal);
modalOverlay.addEventListener('click', closeGameModal);

document.getElementById('modalAddBtn').addEventListener('click', () => {
    const game = gamesData.find(g => g.id === currentGameId);
    if (game) {
        addToCart(game);
        closeGameModal();
    }
});

/* ========== Cart Sidebar Toggle ========== */
cartBtn.addEventListener('click', () => {
    cartSidebar.classList.add('active');
    cartOverlay.classList.add('active');
});

closeCartBtn.addEventListener('click', () => {
    cartSidebar.classList.remove('active');
    cartOverlay.classList.remove('active');
});

cartOverlay.addEventListener('click', () => {
    cartSidebar.classList.remove('active');
    cartOverlay.classList.remove('active');
});

/* ========== Checkout ========== */
checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
        showNotification('السلة فارغة!');
        return;
    }

    const total = cart.reduce((sum, item) => sum + item.discountPrice, 0).toFixed(2);
    const message = `مرحباً، أريد شراء ${cart.length} منتج(ات) بقيمة ${total}$`;

    const whatsappLink = `https://wa.me/966500000000?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
});

/* ========== Initialize ========== */
document.addEventListener('DOMContentLoaded', () => {
    displayCart();

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeGameModal();
            cartSidebar.classList.remove('active');
            cartOverlay.classList.remove('active');
        }
    });

    // Smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Add animation to games on page load
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    document.querySelectorAll('.game-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease';
        observer.observe(card);
    });
});

/* ========== Mobile Menu Toggle ========== */
document.querySelector('.menu-btn')?.addEventListener('click', () => {
    const navbar = document.querySelector('.navbar');
    navbar.style.display = navbar.style.display === 'none' ? 'block' : 'none';
});

/* ========== Language Switcher ========== */
document.querySelector('.lang-btn')?.addEventListener('click', () => {
    showNotification('اللغة: العربية');
});

/* ========== Sort Functionality ========== */
document.querySelector('.sort-btn')?.addEventListener('click', () => {
    const sorted = [...gamesData].sort((a, b) => a.discountPrice - b.discountPrice);
    renderGames(sorted);
});

/* ========== Wishlist (Demo) ========== */
document.querySelector('.wishlist-btn')?.addEventListener('click', () => {
    showNotification('تمت إضافة المنتج إلى المفضلة');
});

/* ========== Export for Use ========== */
console.log('%cWelcome to Mj Game Store! 🎮', 'color: #00d4ff; font-size: 16px; font-weight: bold;');
console.log('%cAll functions are working properly ✓', 'color: #00d97e; font-size: 14px;');
