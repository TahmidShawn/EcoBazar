import PrimaryButton from "../../../components/ui/PrimaryButton";

const HeroBanner = ({ bannerImg }) => {
    return (
        <div className="relative h-80 overflow-hidden rounded-lg md:h-full md:w-[65%]">
            <img
                src={bannerImg}
                alt=""
                className="h-full w-full object-cover"
            />
            {/* overlay  */}
            <div className="absolute  inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent"></div>

            <div className="absolute top-1/2 -translate-y-1/2 left-12 z-10 text-white">
                <h1 className="text-2xl md:text-3xl font-semibold tracking-widest">
                    Fresh & Healthy <br /> Organic Food
                </h1>

                <div className="border-l border-gray-300 pl-3 my-6">
                    <p>
                        <span className="tracking-wider">Sale up to</span>
                        <span className="bg-secondary px-3 py-1 rounded-md ml-2">
                            30% OFF
                        </span>
                    </p>

                    <p className="text-xs opacity-80 mt-2 tracking-widest">
                        Free shipping on all your order.
                    </p>
                </div>

                <PrimaryButton />
            </div>
        </div>
    );
};

export default HeroBanner;
