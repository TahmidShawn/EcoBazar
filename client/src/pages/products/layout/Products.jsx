import Breadcrumb from "../../../components/ui/Breadcrumb";
import BestDealBanner from "../components/bestDealBanner/BestDealBanner";
import ProductListing from "../components/productListing/ProductListing";

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
            <ProductListing />
        </div>
    );
};

export default Products;
