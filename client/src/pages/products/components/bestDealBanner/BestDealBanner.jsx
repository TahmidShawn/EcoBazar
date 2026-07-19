import PrimaryButton from "../../../../components/ui/PrimaryButton";
import img from "../../../../assets/banner/best_deal.png";

const BestDealBanner = () => {
    return (
        <div className="relative h-80">
            <img src={img} alt="" className="w-full h-full" />
            <div className="absolute top-1/2 -translate-y-1/2 lef-0">
                <p>Best Deals</p>
                <h2>Sale of the Month</h2>
                <h3>00:00:00:00</h3>
                <PrimaryButton />
            </div>
        </div>
    );
};

export default BestDealBanner;
