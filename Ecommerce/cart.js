// import { createHorizontalProductCard } from "./horizontalCard/createHorizontalCard.js";
import { createHorizontalProductCard } from "./createProductCard.js";
import { findProductInCart } from "./utils/findProductInCart.js";

let cartContainer = document.getElementById("cart");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

cartContainer.addEventListener("click", (event) => {
    if (event.target.dataset.id) {
        cart = cart.filter(({ _id }) => _id !== event.target.dataset.id);
        cartContainer.innerHTML = "";
        createHorizontalProductCard(cart, cartContainer, findProductInCart, "cart");
        localStorage.setItem("cart", JSON.stringify(cart));
    }
});

createHorizontalProductCard(cart, cartContainer, findProductInCart, "cart");
