import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { createOrder, getMyOrders, cancelOrder } from "../api/orderApi";
import { useCart } from "./useCart";

export function useOrders() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const { setCart } = useCart();

    useEffect(() => {
        async function fetchOrders() {
            setLoading(true);
            try {
                const data = await getMyOrders();
                setOrders(data.data);
            } catch (error) {
                toast.error(error.message || "Failed to load orders");
            } finally {
                setLoading(false);
            }
        }

        fetchOrders();
    }, []);

    const handleCreateOrder = async (orderData) => {
        setLoading(true);
        try {
            const data = await createOrder(orderData);
            setOrders((prev) => [data.data, ...prev]);
            setCart({ items: [] });
            toast.success("Order placed successfully!");
            return data;
        } catch (error) {
            toast.error(error.message || "Failed to place order");
            return null;
        } finally {
            setLoading(false);
        }
    };

    const handleCancelOrder = async (id) => {
        setLoading(true);
        try {
            const data = await cancelOrder(id);
            setOrders((prev) =>
                prev.map((order) => (order._id === id ? data.data : order)),
            );
            toast.success("Order cancelled");
            return data;
        } catch (error) {
            toast.error(error.message || "Failed to cancel order");
            return null;
        } finally {
            setLoading(false);
        }
    };

    return { orders, loading, handleCreateOrder, handleCancelOrder };
}
