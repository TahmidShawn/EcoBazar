import { apiRequest } from "./apiRequest";

export function registerUser(userData) {
    return apiRequest("/auth/register", {
        method: "POST",
        body: JSON.stringify(userData),
    });
}

export function loginUser(userData) {
    return apiRequest("/auth/login", {
        method: "POST",
        body: JSON.stringify(userData),
    });
}

export function logoutUser() {
    return apiRequest("/auth/logout", {
        method: "GET",
    });
}

export function getCurrentUser() {
    return apiRequest("/auth/me", {
        method: "GET",
    });
}
