export const findProductsCart = (cart, productId) => {
    return cart.some(({ id }) => id === productId);
};