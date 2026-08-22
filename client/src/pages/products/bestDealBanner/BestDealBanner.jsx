import PrimaryButton from "../../../components/ui/PrimaryButton";
import img from "../../../assets/banner/best_deal.png";
import Breadcrumb from "../../../components/ui/Breadcrumb";
const BestDealBanner = () => {
    return (
        <div className="wrapper">
            <Breadcrumb
                items={[
                    {
                        label: "Products",
                        href: "/products",
                    },
                    {
                        label: "Vegetables",
                    },
                ]}
            />
            <div className="relative h-80 text-white ">
                <img src={img} alt="" className="w-full h-full object-cover" />
                <div className="absolute top-1/2 -translate-y-1/2 left-14">
                    <p className="uppercase text-sm">Best Deals</p>
                    <h2 className="text-4xl mt-2 font-semibold">
                        Sale of the Month
                    </h2>
                    <h3 className="text-2xl text-primary my-4">00:00:00:00</h3>
                    <PrimaryButton />
                </div>
            </div>
        </div>
    );
};

export default BestDealBanner;
