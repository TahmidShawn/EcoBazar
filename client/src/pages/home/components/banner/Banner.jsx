import bannerImg from "../../../../assets/banner_big.png";
import bannerTop from "../../../../assets/banner_top_right.png";
import bannerBottom from "../../../../assets/banner_bottom_right.png";
import PrimaryButton from "../../../../components/ui/PrimaryButton";

const Banner = () => {
    return (
        <div className="wrapper flex flex-col gap-4 md:h-120 md:flex-row mt-8">
            {/* Left Banner */}
            <div className="relative h-80 overflow-hidden rounded-lg md:h-full md:w-[65%]">
                {/* banner img  */}
                <img
                    src={bannerImg}
                    alt=""
                    className="h-full w-full object-cover"
                />
                {/* overlay  */}
                <div className="absolute  inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent"></div>
                {/* info  */}
                <div className="absolute top-1/2 -translate-y-1/2 left-12 z-10 text-white">
                    <h1 className="text-3xl font-semibold tracking-widest">
                        Fresh & Healthy <br /> Organic Food
                    </h1>

                    <div className="border-l border-gray-300 pl-3 my-6">
                        <p>
                            <span className="tracking-wider">Sale up to</span>
                            <span className="bg-[#ff8a00] px-3 py-1 rounded-md ml-2">
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

            {/* Right Top Banner */}
            <div className="flex gap-4 md:h-full md:flex-1 md:flex-col">
                <div className="relative h-40 flex-1 overflow-hidden rounded-lg md:h-auto">
                    {/* banner top right img */}
                    <img
                        src={bannerTop}
                        alt=""
                        className="h-full w-full object-cover"
                    />
                    {/* info  */}
                    <div className="absolute top-0 left-0">
                        <p>Summer Sale</p>

                        <h2>75% Off</h2>

                        <p>Only Fruit & Vegetable</p>

                        <button>Shop Now</button>
                    </div>
                </div>

                {/* Right Bottom Banner */}
                <div className="relative h-40 flex-1 overflow-hidden rounded-lg md:h-auto">
                    {/* banner bottom right img */}
                    <img
                        src={bannerBottom}
                        alt=""
                        className="h-full w-full object-cover"
                    />
                    {/* info  */}
                    <div className="absolute top-0 left-0">
                        <p>Best Deal</p>

                        <h2>
                            Special Products <br />
                            Deal of the Month
                        </h2>

                        <button>Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
