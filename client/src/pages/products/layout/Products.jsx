import Breadcrumb from "../../../components/ui/Breadcrumb";
import BestDealBanner from "../components/bestDealBanner/BestDealBanner";
import ProductCatalog from "../components/productCatalog/ProductCatalog";

const Products = () => {
    return (
        <div>
            <Breadcrumb
                items={[
                    {
                        label: "Categories",
                        href: "/categories",
                    },
                    {
                        label: "Vegetables",
                    },
                ]}
            />
            <BestDealBanner />
            <ProductCatalog />
        </div>
    );
};

export default Products;
