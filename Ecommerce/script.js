import { products } from "./Database/product.js";
import { createProductCard } from "./createProductCard.js";
import { findProductsCart } from "./utils/findProductsInCart.js";

// Product Container
let productContainer = document.getElementById("products");
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Function to check if product exists in cart
// const findProductsCart = (cart, productId) => {
//     return cart.some(({ id }) => id === productId);
// };

// Render Product Cards
createProductCard(products, productContainer, findProductsCart, cart);