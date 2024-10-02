var item = 0;

const toggleCart = () => {
    document.getElementsByClassName("cart-empty")[0].classList.remove("active");
    document.getElementsByClassName("cart-filled")[0].classList.add("active");
}

const clearCart = () => {
    item = 0;
    document.getElementsByClassName("cart-empty")[0].classList.add("active");
    document.getElementsByClassName("cart-filled")[0].classList.remove("active");
    updateValue();
    updateCart();
}

const updateCart = () => {
    const doc = document.getElementsByClassName("item-price")[0];
    doc.innerHTML = `$125.00 x ${item} <span style="font-weight: 700; color: black;">$${item*125}.00</span>`;
    doc.style.display = "inline";
}

const updateValue = () => {
    document.getElementsByClassName("product-counter-value")[0].textContent = item.toString();
}

const addItem = () => {
    if (item == 0) {
        toggleCart();
    }
    item += 1;
    updateValue();
    updateCart();
}

const removeItem = () => {
    if (item <= 0) {
        return;
    }
    item -= 1;
    if (item == 0) {
        clearCart();
        
    }
    updateCart();
    updateValue();
}