import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { getOrderById } from "../api/orderApi";

export function useOrder(id) {
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchOrder() {
            setLoading(true);
            try {
                const data = await getOrderById(id);
                setOrder(data.data);
            } catch (error) {
                toast.error(error.message || "Failed to load order");
            } finally {
                setLoading(false);
            }
        }

        if (id) {
            fetchOrder();
        }
    }, [id]);

    return { order, loading };
}
