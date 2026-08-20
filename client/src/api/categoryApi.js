import { apiRequest } from "./apiRequest";

export function getCategories() {
    return apiRequest("/categories", {
        method: "GET",
    });
}

export function createCategory(categoryData) {
    return apiRequest("/categories", {
        method: "POST",
        body: JSON.stringify(categoryData),
    });
}
