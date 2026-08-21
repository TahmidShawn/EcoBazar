import { apiRequest } from "./apiRequest";

export function getProducts(queryString = "") {
    return apiRequest(`/products${queryString}`, {
        method: "GET",
    });
}

export function getProductById(id) {
    return apiRequest(`/products/${id}`, {
        method: "GET",
    });
}
