import SecondaryButton from "../../../../components/ui/SecondaryButton";

const DealBanner = ({ bannerBottomImg }) => {
    return (
        <div className="relative h-40 flex-1 overflow-hidden rounded-lg md:h-auto">
            <img
                src={bannerBottomImg}
                alt=""
                className="h-full w-full object-cover"
            />

            <div className="flex flex-col items-center absolute top-1/2 left-1/2 whitespace-nowrap -translate-x-1/2 -translate-y-1/2 text-center text-white ">
                <p>Best Deal</p>

                <h2 className="text-lg md:text-2xl font-semibold tracking-wide mt-2">
                    Special Products <br />
                    Deal of the Month
                </h2>

                <div className="mt-4">
                    <SecondaryButton text={"Shop Now"} />
                </div>
            </div>
        </div>
    );
};

export default DealBanner;
