import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { getProducts } from "../api/productApi";

export function useProducts(queryString = "") {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProducts() {
            setLoading(true);
            try {
                const data = await getProducts(queryString);
                setProducts(data.data);
            } catch (error) {
                toast.error(error.message || "Failed to load products");
            } finally {
                setLoading(false);
            }
        }

        fetchProducts();
    }, [queryString]);

    return { products, loading };
}
