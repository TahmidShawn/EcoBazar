import bannerImg from "../../../../assets/banner_big.png";
import bannerTopImg from "../../../../assets/banner_top_right.png";
import bannerBottomImg from "../../../../assets/banner_bottom_right.png";

import HeroBanner from "./HeroBanner";
import SummerSaleBanner from "./SummerSaleBanner";
import DealBanner from "./DealBanner";

const Banner = () => {
    return (
        <div className="wrapper flex flex-col gap-4 md:h-120 md:flex-row mt-2 md:mt-6">
            {/* Left Banner */}
            <HeroBanner bannerImg={bannerImg} />

            <div className="flex gap-4 md:h-full md:flex-1 md:flex-col">
                {/* Right Top Banner */}
                <SummerSaleBanner bannerTopImg={bannerTopImg} />

                {/* Right Bottom Banner */}
                <DealBanner bannerBottomImg={bannerBottomImg} />
            </div>
        </div>
    );
};

export default Banner;
