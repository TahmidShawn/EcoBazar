import { useState, useEffect, useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";
import {
    addToCart,
    getCart,
    updateCartItem,
    removeFromCart,
    clearCart,
} from "../api/cartApi";

export function useCart() {
    const { user } = useContext(AuthContext);
    const [cart, setCart] = useState({ items: [] });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchCart() {
            if (!user) return;

            setLoading(true);
            try {
                const data = await getCart();
                setCart(data.data);
            } catch (error) {
                toast.error(error.message || "Failed to load cart");
            } finally {
                setLoading(false);
            }
        }

        fetchCart();
    }, [user]);

    const handleAddToCart = async (productId, quantity = 1) => {
        if (!user) {
            toast.error("Please login to add items to cart");
            return null;
        }
        setLoading(true);
        try {
            const data = await addToCart(productId, quantity);
            setCart(data.data);
            toast.success("Added to cart");
            return data;
        } catch (error) {
            toast.error(error.message || "Failed to add to cart");
            return null;
        } finally {
            setLoading(false);
        }
    };

    const handleUpdateCartItem = async (productId, quantity) => {
        setLoading(true);
        try {
            const data = await updateCartItem(productId, quantity);
            setCart(data.data);
            return data;
        } catch (error) {
            toast.error(error.message || "Failed to update cart");
            return null;
        } finally {
            setLoading(false);
        }
    };

    const handleRemoveFromCart = async (productId) => {
        setLoading(true);
        try {
            const data = await removeFromCart(productId);
            setCart(data.data);
            toast.success("Item removed from cart");
        } catch (error) {
            toast.error(error.message || "Failed to remove item");
        } finally {
            setLoading(false);
        }
    };

    const handleClearCart = async () => {
        setLoading(true);
        try {
            await clearCart();
            setCart({ items: [] });
            toast.success("Cart cleared");
        } catch (error) {
            toast.error(error.message || "Failed to clear cart");
        } finally {
            setLoading(false);
        }
    };

    return {
        cart,
        loading,
        handleAddToCart,
        handleUpdateCartItem,
        handleRemoveFromCart,
        handleClearCart,
    };
}
