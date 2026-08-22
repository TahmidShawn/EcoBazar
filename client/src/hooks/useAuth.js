import { useState, useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContextObject";
import { registerUser, logoutUser, loginUser } from "../api/authApi";

export function useAuth() {
    const { user, setUser, authLoading } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);

    const handleRegister = async (formData) => {
        setLoading(true);
        try {
            const data = await registerUser(formData);
            setUser(data.data);
            toast.success(data.message || "Registration successful!");
            return data;
        } catch (error) {
            toast.error(error.message || "Something went wrong");
            return null;
        } finally {
            setLoading(false);
        }
    };
    const handleLogin = async (credentials) => {
        setLoading(true);
        try {
            const data = await loginUser(credentials);
            setUser(data.data);
            toast.success(data.message || "Login successful!");
            return data;
        } catch (error) {
            toast.error(error.message || "Login failed");
            return null;
        } finally {
            setLoading(false);
        }
    };
    const handleLogout = async () => {
        try {
            await logoutUser();
            setUser(null);
            toast.success("Logged out successfully");
        } catch (error) {
            toast.error(error.message || "Logout failed");
        }
    };

    return {
        handleRegister,
        loading,
        user,
        authLoading,
        handleLogout,
        handleLogin,
    };
}
