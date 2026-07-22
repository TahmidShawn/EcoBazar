import offerBanner1 from "../../../assets/banner/offer-banner-1.png";
import offerBanner2 from "../../../assets/banner/offer-banner-2.png";
import offerBanner3 from "../../../assets/banner/offer-banner-3.png";
import PrimaryButton from "../../../components/ui/PrimaryButton";

const OfferBanner = () => {
    return (
        <div className="wrapper mt-14 flex flex-col items-center justify-center gap-8 md:flex-row">
            {/* Banner 1 */}
            <div className="relative ">
                <img src={offerBanner1} alt="Sale of the Month" />

                <div className="absolute inset-0 flex flex-col items-center px-6 pt-16 text-center text-white">
                    <p className="tracking-wider">Best Deals</p>

                    <h2 className="my-4 text-3xl font-semibold tracking-wider">
                        Sale of the Month
                    </h2>

                    <p className="text-4xl font-extralight tracking-widest">
                        00:00:00:00
                    </p>

                    <div className="mt-10 pb-10">
                        <PrimaryButton />
                    </div>
                </div>
            </div>

            {/* Banner 2 */}
            <div className="relative">
                <img src={offerBanner2} alt="Low-Fat Meat" />

                <div className="absolute inset-0 flex flex-col items-center px-6 pt-16 text-center text-white">
                    <p className="tracking-wider">85% Fat Free</p>

                    <h2 className="my-4 text-3xl font-semibold tracking-wider">
                        Low-Fat Meat
                    </h2>

                    <p>Started at $99</p>

                    <div className="mt-10 pb-10">
                        <PrimaryButton />
                    </div>
                </div>
            </div>

            {/* Banner 3 */}
            <div className="relative">
                <img src={offerBanner3} alt="100% Fresh Fruit" />

                <div className="absolute inset-0 flex flex-col items-center px-6 pt-16 text-center text-black">
                    <p className="tracking-wider">Summer Sale</p>

                    <h2 className="my-4 text-3xl font-semibold tracking-wider">
                        100% Fresh Fruit
                    </h2>

                    <p>Up to 64% off</p>

                    <div className="mt-10 pb-10">
                        <PrimaryButton />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OfferBanner;
