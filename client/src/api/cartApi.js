import { apiRequest } from "./apiRequest";

export function addToCart(productId, quantity = 1) {
    return apiRequest(`/cart/${productId}`, {
        method: "POST",
        body: JSON.stringify({ quantity }),
    });
}

export function getCart() {
    return apiRequest("/cart", {
        method: "GET",
    });
}

export function updateCartItem(productId, quantity) {
    return apiRequest(`/cart/${productId}`, {
        method: "PUT",
        body: JSON.stringify({ quantity }),
    });
}

export function removeFromCart(productId) {
    return apiRequest(`/cart/${productId}`, {
        method: "DELETE",
    });
}

export function clearCart() {
    return apiRequest("/cart", {
        method: "DELETE",
    });
}
