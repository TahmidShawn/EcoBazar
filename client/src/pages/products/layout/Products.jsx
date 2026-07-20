import Breadcrumb from "../../../components/ui/Breadcrumb";
import BestDealBanner from "../components/bestDealBanner/BestDealBanner";

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
        </div>
    );
};

export default Products;
