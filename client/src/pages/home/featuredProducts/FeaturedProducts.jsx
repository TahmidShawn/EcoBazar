import SectionTitle from "../../../components/shared/sectionTitle/SectionTitle";
import ProductCard from "../../../components/shared/productCard/ProductCard";
import { useFeaturedProducts } from "../../../hooks/useFeaturedProducts";

const FeaturedProducts = () => {
    const { products, loading } = useFeaturedProducts(5);
    return (
        <div className="my-6 wrapper space-y-6">
            {/* title section  */}
            <SectionTitle
                categoryName="Featured Products"
                categoryLink="/featured-products"
            />
            {/* contain section  */}
            <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {loading ? (
                    <p className="col-span-full text-center py-10">
                        Loading products...
                    </p>
                ) : (
                    products?.map((product) => (
                        <ProductCard key={product._id} product={product} />
                    ))
                )}
            </section>
        </div>
    );
};

export default FeaturedProducts;
