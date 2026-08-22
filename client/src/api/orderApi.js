import { apiRequest } from "./apiRequest";

export function createOrder(orderData) {
    return apiRequest("/orders", {
        method: "POST",
        body: JSON.stringify(orderData),
    });
}

export function getMyOrders() {
    return apiRequest("/orders/my", {
        method: "GET",
    });
}

export function getOrderById(id) {
    return apiRequest(`/orders/${id}`, {
        method: "GET",
    });
}

export function cancelOrder(id) {
    return apiRequest(`/orders/${id}/cancel`, {
        method: "PUT",
    });
}
