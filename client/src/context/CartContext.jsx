import { useState, useEffect, useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "./AuthContextObject";
import { CartContext } from "./CartContextObject";
import { getCart } from "../api/cartApi";

export function CartProvider({ children }) {
    const { user } = useContext(AuthContext);
    const [cart, setCart] = useState({ items: [] });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchCart() {
            if (!user) {
                setCart({ items: [] });
                return;
            }
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

    return (
        <CartContext.Provider value={{ cart, setCart, loading, setLoading }}>
            {children}
        </CartContext.Provider>
    );
}
