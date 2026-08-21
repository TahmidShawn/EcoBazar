import Filter from "./Filter";
import ProductCard from "../../../components/shared/productCard/ProductCard";
import { useProducts } from "../../../hooks/useProducts";

const ProductCatalog = () => {
    const { products, loading } = useProducts();

    return (
        <section className="wrapper mt-6">
            <Filter />

            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                {loading ? (
                    <p className="col-span-full text-center py-10">
                        Loading products...
                    </p>
                ) : (
                    products?.map((product) => (
                        <ProductCard key={product._id} product={product} />
                    ))
                )}
            </div>
        </section>
    );
};

export default ProductCatalog;
