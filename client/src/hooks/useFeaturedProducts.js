import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { getProducts } from "../api/productApi";

export function useFeaturedProducts(limit = 5) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchFeaturedProducts() {
            setLoading(true);
            try {
                const data = await getProducts(`?featured=true&limit=${limit}`);
                setProducts(data.data);
            } catch (error) {
                toast.error(error.message || "Failed to load products");
            } finally {
                setLoading(false);
            }
        }

        fetchFeaturedProducts();
    }, [limit]);

    return { products, loading };
}
