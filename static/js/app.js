function getCart() {
    return JSON.parse(
        localStorage.getItem("cart")
    ) || [];
}

function updateCartCount() {

    const cart = getCart();

    document.getElementById("cart-count")
    .innerText = cart.length;
}

function addToCart(id, name, price) {

    const cart = getCart();

    cart.push({
        id,
        name,
        price
    });

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    updateCartCount();

    alert("장바구니에 추가되었습니다.");
}

updateCartCount();
