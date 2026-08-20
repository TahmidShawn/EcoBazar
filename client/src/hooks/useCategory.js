import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { getCategories, createCategory } from "../api/categoryApi";

export function useCategories() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchCategories() {
            setLoading(true);
            try {
                const data = await getCategories();
                setCategories(data.data);
            } catch (error) {
                toast.error(error.message || "Failed to load categories");
            } finally {
                setLoading(false);
            }
        }

        fetchCategories();
    }, []);

    const handleCreateCategory = async (categoryData) => {
        setLoading(true);
        try {
            const data = await createCategory(categoryData);
            setCategories((prev) => [...prev, data.data]);
            toast.success("Category created!");
            return data;
        } catch (error) {
            toast.error(error.message || "Failed to create category");
            return null;
        } finally {
            setLoading(false);
        }
    };

    return {
        categories,
        loading,
        handleCreateCategory,
    };
}
