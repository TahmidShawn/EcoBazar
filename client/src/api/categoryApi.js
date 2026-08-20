import { apiRequest } from "./apiRequest";

export function getCategories() {
    return apiRequest("/categories", {
        method: "GET",
    });
}

export function getCategoryById(id) {
    return apiRequest(`/categories/${id}`, {
        method: "GET",
    });
}

export function createCategory(categoryData) {
    return apiRequest("/categories", {
        method: "POST",
        body: JSON.stringify(categoryData),
    });
}

export function updateCategory(id, categoryData) {
    return apiRequest(`/categories/${id}`, {
        method: "PUT",
        body: JSON.stringify(categoryData),
    });
}

export function deleteCategory(id) {
    return apiRequest(`/categories/${id}`, {
        method: "DELETE",
    });
}
