import { featuresData } from "../../../../data/data";

const Features = () => {
    return (
        <div className="wrapper py-10">
            <div className="overflow-hidden rounded-lg  shadow-[8px_4px_30px_rgba(0,0,0,0.15)] py-2 md:py-4">
                <div className="grid grid-cols-2 lg:grid-cols-4">
                    {featuresData.map((feature) => (
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
