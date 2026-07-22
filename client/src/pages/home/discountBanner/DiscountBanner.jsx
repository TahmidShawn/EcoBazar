import discountBanner from "../../../assets/banner/Discount-Banner.png";
import PrimaryButton from "../../../components/ui/PrimaryButton";

const DiscountBanner = () => {
    return (
        <div className="wrapper relative mt-12">
            <img
                src={discountBanner}
                alt="Discount Banner"
                className="h-56 w-full object-cover sm:h-72 md:h-80 lg:h-96]"
            />

            <div className="absolute top-1/2 right-4 -translate-y-1/2 text-white sm:right-8 md:right-12 lg:right-20">
                <p className="text-xs font-semibold uppercase sm:text-sm">
                    Summer Sale
                </p>

                <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">
                    <span className="text-secondary">37%</span> OFF
                </h1>

                <p className="mt-3 max-w-60 text-xs leading-relaxed text-gray-200 sm:max-w-sm sm:text-sm md:max-w-md">
                    Free on all your order, Free Shipping and 30 days money-back
                    guarantee.
                </p>

                <div className="mt-5">
                    <PrimaryButton />
                </div>
            </div>
        </div>
    );
};

export default DiscountBanner;
