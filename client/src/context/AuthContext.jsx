import { useState, useEffect } from "react";
import { getCurrentUser } from "../api/authApi";
import { AuthContext } from "./AuthContextObject";

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [authLoading, setAuthLoading] = useState(true);

    useEffect(() => {
        async function checkAuth() {
            try {
                const data = await getCurrentUser();
                setUser(data.data);
            } catch (error) {
                setUser(null);
                console.log(error);
            } finally {
                setAuthLoading(false);
            }
        }

        checkAuth();
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser, authLoading }}>
            {children}
        </AuthContext.Provider>
    );
}
