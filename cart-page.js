import { auth } from "./firebase.js";

import {
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

onAuthStateChanged(auth, (user) => {

    if (!user) {

        alert("Please login first");
        window.location.href = "login.html";

    }

});

const cartItems =
document.getElementById("cartItems");

let cart =
JSON.parse(localStorage.getItem("cart")) || [];

displayCart();

function displayCart() {

    cartItems.innerHTML = "";

    let total = 0;

    if (cart.length === 0) {

        cartItems.innerHTML =
        "<p>No Products Added</p>";

        document.getElementById("productTotal").innerText = "0";
        document.getElementById("grandTotal").innerText = "0";

        return;

    }

    cart.forEach(item => {

        const qty = item.quantity || 1;
const price = Number(item.price) || 0;

total += price * qty;

        cartItems.innerHTML += `

        <div class="cart-product">

            <img
                src="${item.image}"
                alt="${item.name}"
                class="cart-img"
            >

            <div class="cart-info">

                <h3>${item.name}</h3>

                <p>₹${item.price}</p>

                <div class="cart-qty">

                    <button onclick="decreaseQty('${item.name}')">
                        -
                    </button>

                    <span>${item.quantity}</span>

                    <button onclick="increaseQty('${item.name}')">
                        +
                    </button>

                </div>

                <button
                    class="delete-btn"
                    onclick="removeItem('${item.name}')">

                    Delete

                </button>

            </div>

        </div>

        `;

    });

    document.getElementById("productTotal")
    .innerText = total;

    document.getElementById("grandTotal")
    .innerText = total + 80;

}

window.removeItem = function(name) {

    cart = cart.filter(
        item => item.name !== name
    );

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    displayCart();

};

window.increaseQty = function(name) {

    const item =
    cart.find(p => p.name === name);

    item.quantity++;

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    displayCart();

};

window.decreaseQty = function(name) {

    const item =
    cart.find(p => p.name === name);

    if (item.quantity > 1) {

        item.quantity--;

    } else {

        cart = cart.filter(
            p => p.name !== name
        );

    }

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    displayCart();

};

// Checkout Button

const placeOrderBtn =
document.getElementById("placeOrderBtn");

if (placeOrderBtn) {

    placeOrderBtn.addEventListener("click", () => {

        window.location.href =
        "checkout.html";

    });

}
