import Filter from "./Filter";
import ProductCard from "../../../components/shared/productCard/ProductCard";
import { popularProducts } from "../../../data/data";

const ProductCatalog = () => {
    return (
        <section className="wrapper mt-6">
            <Filter />

            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                {popularProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
};

export default ProductCatalog;
