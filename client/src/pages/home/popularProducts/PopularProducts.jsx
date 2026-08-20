import SectionTitle from "../../../components/shared/sectionTitle/SectionTitle";
import ProductCard from "../../../components/shared/productCard/ProductCard";
import { usePopularProducts } from "../../../hooks/usePopularProducts";

const PopularProducts = () => {
    const POPULAR_PRODUCTS_LIMIT = 5;
    const { products, loading } = usePopularProducts(POPULAR_PRODUCTS_LIMIT);
    console.log(products);
    return (
        <div className="my-6 wrapper space-y-6">
            {/* title section  */}
            <SectionTitle
                categoryName="Popular Products"
                categoryLink="/popular-products"
            />
            {/* contain section  */}
            <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {loading ? (
                    <p className="col-span-full text-center py-10">
                        Loading products...
                    </p>
                ) : (
                    products?.map((product) => (
                        <ProductCard
                            key={product._id}
                            product={product}
                        ></ProductCard>
                    ))
                )}
            </section>
        </div>
    );
};

export default PopularProducts;
