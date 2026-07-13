import SecondaryButton from "../../../../components/ui/SecondaryButton";

const SummerSaleBanner = ({ bannerTopImg }) => {
    return (
        <div className="relative h-40 flex-1 overflow-hidden rounded-lg md:h-auto">
            <img
                src={bannerTopImg}
                alt=""
                className="h-full w-full object-cover"
            />

            <div className="absolute top-6 left-8">
                <p className="uppercase text-sm font-medium">Summer Sale</p>

                <h2 className="text-2xl font-medium tracking-widest">
                    75% OFF
                </h2>

                <p className="text-xs my-3">Only Fruit & Vegetable</p>

                <SecondaryButton text={"Shop Now"} />
            </div>
        </div>
    );
};

export default SummerSaleBanner;
