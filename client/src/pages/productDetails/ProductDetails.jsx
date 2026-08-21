import { useParams } from "react-router";
import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";
import ProductTabs from "./ProductTabs";
import { useProduct } from "../../hooks/useProduct";

const ProductDetails = () => {
    const { id } = useParams();
    const { product, loading } = useProduct(id);

    if (loading) {
        return <p className="text-center py-20">Loading product...</p>;
    }

    if (!product) {
        return <p className="text-center py-20">Product not found.</p>;
    }

    return (
        <section className="wrapper py-12">
            <div className="grid gap-14 lg:grid-cols-2">
                <ProductGallery images={product.images} />
                <ProductInfo product={product} />
            </div>

            <ProductTabs product={product} />
        </section>
    );
};

export default ProductDetails;
