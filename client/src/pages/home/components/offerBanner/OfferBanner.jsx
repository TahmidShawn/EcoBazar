import offerBanner1 from "../../../../assets/banner/offer-banner-1.png";
import offerBanner2 from "../../../../assets/banner/offer-banner-2.png";
import offerBanner3 from "../../../../assets/banner/offer-banner-3.png";
import PrimaryButton from "../../../../components/ui/PrimaryButton";

const OfferBanner = () => {
    const banners = [
        {
            img: offerBanner1,
            alt: "Sale of the Month",
            top: "Best Deals",
            title: "Sale of the Month",
            desc: "00:00:00:00",
            textColor: "text-white",
        },
        {
            img: offerBanner2,
            alt: "Low-Fat Meat",
            top: "85% Fat Free",
            title: "Low-Fat Meat",
            desc: "Started at $99",
            textColor: "text-white",
        },
        {
            img: offerBanner3,
            alt: "100% Fresh Fruit",
            top: "Summer Sale",
            title: "100% Fresh Fruit",
            desc: "Up to 64% off",
            textColor: "text-black",
        },
    ];

    return (
        <div className="wrapper mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {banners.map((banner) => (
                <div
                    key={banner.title}
                    className="relative h-105 overflow-hidden rounded-lg"
                >
                    <img
                        src={banner.img}
                        alt={banner.alt}
                        className="h-full w-full object-cover"
                    />

                    <div
                        className={`absolute inset-0 flex flex-col justify-between p-6 text-center ${banner.textColor}`}
                    >
                        <div>
                            <p className="text-xs font-medium uppercase tracking-[0.2em] sm:text-sm">
                                {banner.top}
                            </p>

                            <h2 className="mt-3 text-2xl font-semibold leading-tight sm:text-3xl lg:text-[2rem]">
                                {banner.title}
                            </h2>

                            <p
                                className={`mt-4 ${
                                    banner.title === "Sale of the Month"
                                        ? "text-2xl font-light tracking-widest sm:text-3xl"
                                        : "text-base sm:text-lg"
                                }`}
                            >
                                {banner.desc}
                            </p>
                        </div>

                        <div className="flex justify-center">
                            <PrimaryButton />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default OfferBanner;
