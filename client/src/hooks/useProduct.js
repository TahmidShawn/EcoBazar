import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { getProductById } from "../api/productApi";

export function useProduct(id) {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProduct() {
            setLoading(true);
            try {
                const data = await getProductById(id);
                setProduct(data.data);
            } catch (error) {
                toast.error(error.message || "Failed to load product");
            } finally {
                setLoading(false);
            }
        }

        if (id) {
            fetchProduct();
        }
    }, [id]);

    return { product, loading };
}
