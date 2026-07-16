import feature1 from "./../../../../assets/feature/delivery-truck.png";
import feature2 from "./../../../../assets/feature/headphones.png";
import feature3 from "./../../../../assets/feature/package.png";
import feature4 from "./../../../../assets/feature/shopping-bag.png";

const features = [
    {
        id: 1,
        image: feature1,
        title: "Free Shipping",
        description: "Free shipping on all your orders",
    },
    {
        id: 2,
        image: feature2,
        title: "Customer Support 24/7",
        description: "Instant access to Support",
    },
    {
        id: 3,
        image: feature3,
        title: "100% Secure Payment",
        description: "We ensure your money is safe",
    },
    {
        id: 4,
        image: feature4,
        title: "Money-Back Guarantee",
        description: "30 Days Money-Back Guarantee",
    },
];

const Features = () => {
    return (
        <div className="wrapper py-10">
            <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm py-2 md:py-4">
                <div className="grid grid-cols-2 lg:grid-cols-4">
                    {features.map((feature) => (
                        <div
                            key={feature.id}
                            className="flex items-center gap-4 p-3 md:p-6"
                        >
                            <img
                                src={feature.image}
                                alt={feature.title}
                                className="object-contain w-12 h-8"
                            />

                            <div>
                                <h3 className="font-semibold">
                                    {feature.title}
                                </h3>

                                <p className="mt-1 text-xs text-gray-500">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Features;
