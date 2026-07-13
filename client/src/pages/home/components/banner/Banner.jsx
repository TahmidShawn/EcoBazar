import bannerImg from "../../../../assets/banner_big.png";
import bannerTop from "../../../../assets/banner_top_right.png";
import bannerBottom from "../../../../assets/banner_bottom_right.png";

const Banner = () => {
    return (
        <div className="wrapper flex flex-col gap-4 md:h-120 md:flex-row mt-8">
            {/* Left Banner */}
            <div className="relative h-80 overflow-hidden rounded-lg md:h-full md:w-[65%]">
                <img
                    src={bannerImg}
                    alt=""
                    className="h-full w-full object-cover"
                />

                <div className="absolute top-0 left-0">
                    <h1>
                        Fresh & Healthy <br /> Organic Food
                    </h1>

                    <div>
                        <p>
                            Sale up to <span>30% off</span>
                        </p>

                        <p>Free shipping on all your order.</p>
                    </div>

                    <button>Shop now</button>
                </div>
            </div>

            {/* Right Column */}
            <div className="flex gap-4 md:h-full md:flex-1 md:flex-col">
                {/* Top Banner */}
                <div className="relative h-40 flex-1 overflow-hidden rounded-lg md:h-auto">
                    <img
                        src={bannerTop}
                        alt=""
                        className="h-full w-full object-cover"
                    />

                    <div className="absolute top-0 left-0">
                        <p>Summer Sale</p>

                        <h2>75% Off</h2>

                        <p>Only Fruit & Vegetable</p>

                        <button>Shop Now</button>
                    </div>
                </div>

                {/* Bottom Banner */}
                <div className="relative h-40 flex-1 overflow-hidden rounded-lg md:h-auto">
                    <img
                        src={bannerBottom}
                        alt=""
                        className="h-full w-full object-cover"
                    />

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
