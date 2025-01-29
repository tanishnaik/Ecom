export const createProductCard = (products, parentElement, findProductsCart, cart) => {
    for (let product of products) {
        // Card Container
        let cardContainer = document.createElement("div");
        cardContainer.classList.add("card", "card-vertical", "d-flex", "direction-column", "relative", "shadow");

        // Card Image Container
        let imageContainer = document.createElement("div");
        imageContainer.classList.add("card-image-container");
        let image = document.createElement("img");
        image.setAttribute("src", product.img);
        image.setAttribute("alt", product.name);
        image.setAttribute("width", "298.4px");
        image.setAttribute("height", "238.71px");
        imageContainer.appendChild(image);
        cardContainer.appendChild(imageContainer);

        // Card Details Container
        let cardDetails = document.createElement("div");
        cardDetails.classList.add("card-details");

        // Title and Description
        let cardTitle = document.createElement("div");
        cardTitle.classList.add("card-title");
        cardTitle.innerText = product.brand;
        cardDetails.appendChild(cardTitle);

        let cardDescriptionContainer = document.createElement("div");
        cardDescriptionContainer.classList.add("card-description");
        let cardDescription = document.createElement("p");
        cardDescription.innerText = product.name;
        cardDescriptionContainer.appendChild(cardDescription);

        // Price and Discount
        let newPrice = document.createElement("p");
        newPrice.classList.add("card-price");
        newPrice.innerHTML = `₹${product.newPrice}`;
        cardDescriptionContainer.appendChild(newPrice);

        let oldPrice = document.createElement("span");
        oldPrice.classList.add("price-strike-through");
        oldPrice.innerText = `₹${product.oldPrice}`;
        newPrice.appendChild(oldPrice);

        let discount = document.createElement("span");
        discount.classList.add("discount");
        discount.innerText = `(${product.discount}% off)`;
        newPrice.appendChild(discount);

        cardDetails.appendChild(cardDescriptionContainer);

        // Rating
        let star = document.createElement("span");
        star.classList.add("material-symbols-outlined");
        star.innerText = "star";
        cardDescriptionContainer.appendChild(star);

        // Button Container
        let buttonContainer = document.createElement("div");
        buttonContainer.classList.add("cta-btn");

        let button = document.createElement("button");
        button.classList.add("button", "btn-primary", "btn-icon", "cart-btn", "d-flex", 
                           "align-center", "justify-center", "gap", "cursor", "btn-margin");
        button.setAttribute("data-id", product.id);

        let isProductInCart = findProductsCart(cart, product.id);
        if (isProductInCart) {
            button.innerHTML = `Go to Cart`;
        } else {
            button.innerHTML = `<figure>
                <img src="https://uilight.netlify.app/assets/cart-white.png" alt="Add to Cart">
            </figure>
            <span>Add to Cart</span>`;
        }

        // Event Listener for Add to Cart Button
        button.addEventListener("click", (event) => {
            let isProductInCart = findProductsCart(cart, product.id);
            if (!isProductInCart) {
                cart.push(product);
                localStorage.setItem("cart", JSON.stringify(cart));
                button.innerHTML = `Go to Cart`;
                // Don't navigate immediately after adding to cart
            } else {
                // If product is already in cart, navigate to cart page
                window.location.href = "cart.html";
            }
        });

        buttonContainer.appendChild(button);
        cardDetails.appendChild(buttonContainer);
        cardContainer.appendChild(cardDetails);
        parentElement.appendChild(cardContainer);
    }
};