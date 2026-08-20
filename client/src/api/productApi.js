import { apiRequest } from "./apiRequest";

export function getProducts(queryString = "") {
    return apiRequest(`/products${queryString}`, {
        method: "GET",
    });
}
