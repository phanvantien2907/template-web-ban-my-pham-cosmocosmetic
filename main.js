// Hàm tăng giảm số lượng
function incrementQuantity() {
    let quantity = parseInt(document.getElementById('quantity').value);
    if (quantity < 100) {
        document.getElementById('quantity').value = quantity + 1;
    }
}

function decrementQuantity() {
    let quantity = parseInt(document.getElementById('quantity').value);
    if (quantity > 1) {
        document.getElementById('quantity').value = quantity - 1;
    }
}

// Hàm chuyển trang
function redirectTo(url) {
    window.location.href = url;
}

// Hàm thêm sản phẩm vô cart
function addToCart() {
    const cartCountElement = document.getElementById('cart-count');
    const quantityElement = document.getElementById('quantity');
    let cartCount = parseInt(cartCountElement.textContent) || 0;
    let quantity = parseInt(quantityElement.value);

    if (isNaN(quantity) || quantity <= 0) {
        quantity = 1;
    }

    cartCount += quantity;
    cartCountElement.textContent = cartCount;

    // Reset quantity to 1 after adding to cart
    quantityElement.value = 1;
}

// Event listeners
document.addEventListener('DOMContentLoaded', function () {
    console.log('Script loaded and running!');

    // Gán sự kiện cho nút tăng giảm số lượng
    const quantityLeftMinus = document.querySelector('.quantity-left-minus');
    const quantityRightPlus = document.querySelector('.quantity-right-plus');
    const addToCartButton = document.getElementById('add-to-cart');

    if (quantityLeftMinus) {
        quantityLeftMinus.addEventListener('click', decrementQuantity);
    }

    if (quantityRightPlus) {
        quantityRightPlus.addEventListener('click', incrementQuantity);
    }

    if (addToCartButton) {
        addToCartButton.addEventListener('click', addToCart);
    }

    // Gán sự kiện cho icon cart và các phần tử liên quan
    initializeCart();
});


