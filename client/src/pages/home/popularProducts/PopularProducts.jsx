import SectionTitle from "../../../components/shared/sectionTitle/SectionTitle";
import { popularProducts } from "../../../data/data";
import ProductCard from "../../../components/shared/productCard/ProductCard";

const PopularProducts = () => {
    return (
        <div className="my-6 wrapper space-y-6">
            {/* title section  */}
            <SectionTitle
                categoryName="Popular Products"
                categoryLink="/popular-products"
            />
            {/* contain section  */}
            <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {popularProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </section>
        </div>
    );
};

export default PopularProducts;
