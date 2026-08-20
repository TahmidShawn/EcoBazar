import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import {
    getCategories,
    createCategory,
    updateCategory,
    deleteCategory,
} from "../api/categoryApi";

export function useCategories() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [actionLoading, setActionLoading] = useState(false);

    useEffect(() => {
        async function fetchCategories() {
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
        setActionLoading(true);
        try {
            const data = await createCategory(categoryData);
            setCategories((prev) => [...prev, data.data]);
            toast.success("Category created!");
            return data;
        } catch (error) {
            toast.error(error.message || "Failed to create category");
            return null;
        } finally {
            setActionLoading(false);
        }
    };

    const handleUpdateCategory = async (id, categoryData) => {
        setActionLoading(true);
        try {
            const data = await updateCategory(id, categoryData);
            setCategories((prev) =>
                prev.map((cat) => (cat._id === id ? data.data : cat)),
            );
            toast.success("Category updated!");
            return data;
        } catch (error) {
            toast.error(error.message || "Failed to update category");
            return null;
        } finally {
            setActionLoading(false);
        }
    };

    const handleDeleteCategory = async (id) => {
        setActionLoading(true);
        try {
            await deleteCategory(id);
            setCategories((prev) => prev.filter((cat) => cat._id !== id));
            toast.success("Category deleted!");
        } catch (error) {
            toast.error(error.message || "Failed to delete category");
        } finally {
            setActionLoading(false);
        }
    };

    return {
        categories,
        loading,
        actionLoading,
        handleCreateCategory,
        handleUpdateCategory,
        handleDeleteCategory,
    };
}
