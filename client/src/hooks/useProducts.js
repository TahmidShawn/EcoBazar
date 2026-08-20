import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { getProducts } from "../api/productApi";

export function usePopularProducts(limit = 5) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchPopularProducts() {
            setLoading(true);
            try {
                const data = await getProducts(`?sort=popular&limit=${limit}`);
                setProducts(data.data);
            } catch (error) {
                toast.error(error.message || "Failed to load products");
            } finally {
                setLoading(false);
            }
        }

        fetchPopularProducts();
    }, [limit]);

    return { products, loading };
}
