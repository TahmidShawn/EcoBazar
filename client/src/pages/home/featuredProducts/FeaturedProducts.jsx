import SectionTitle from "../../../components/shared/sectionTitle/SectionTitle";
import { featuredProducts } from "../../../data/data";
import ProductCard from "../../../components/shared/productCard/ProductCard";

const FeaturedProducts = () => {
    return (
        <div className="my-6 wrapper space-y-6">
            {/* title section  */}
            <SectionTitle
                categoryName="Featured Products"
                categoryLink="/featured-products"
            />
            {/* contain section  */}
            <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {featuredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </section>
        </div>
    );
};

export default FeaturedProducts;
