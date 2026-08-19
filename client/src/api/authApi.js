const BASE_URL = "http://localhost:3000/api/v1";

export async function registerUser(userData) {
    const response = await fetch(`${BASE_URL}/auth/register`, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(userData),
    });
    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message || "Registration failed");
    }
    return data;
}

export async function getCurrentUser() {
    const response = await fetch(`${BASE_URL}/me`, {
        method: "GET",
        credentials: "include",
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Not authenticated");
    }

    return data;
}

export async function loginUser(userData) {
    const response = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(userData),
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Login failed");
    }

    return data;
}

export async function logoutUser() {
    const response = await fetch(`${BASE_URL}/auth/logout`, {
        method: "GET",
        credentials: "include",
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Logout failed");
    }

    return data;
}
