import { useState } from "react";
import { Star } from "lucide-react";

const tabs = ["Description", "Additional Information", "Reviews"];

const ProductTabs = ({ product }) => {
    const [activeTab, setActiveTab] = useState("Description");

    return (
        <section className="mt-20">
            <div className="flex flex-wrap justify-center border-b border-gray-200">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`border-b-2 px-6 py-4 text-sm font-medium transition ${
                            activeTab === tab
                                ? "border-primary text-primary"
                                : "border-transparent text-gray-500 hover:text-primary"
                        }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div className="mt-10">
                {activeTab === "Description" && (
                    <div className="space-y-5">
                        <p className="leading-8 text-gray-600">
                            {product.description}
                        </p>

                        <p className="leading-8 text-gray-600">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Possimus consequatur labore reprehenderit
                            quaerat dolores asperiores, cupiditate fugit
                            doloremque pariatur officia.
                        </p>

                        <ul className="list-disc space-y-2 pl-6 text-gray-600">
                            <li>100% Organic Product</li>

                            <li>Freshly harvested</li>

                            <li>No artificial chemicals</li>

                            <li>Packed carefully for delivery</li>
                        </ul>
                    </div>
                )}

                {activeTab === "Additional Information" && (
                    <div className="overflow-hidden rounded-lg border border-gray-200">
                        {Object.entries(product.additionalInfo).map(
                            ([key, value]) => (
                                <div
                                    key={key}
                                    className="grid grid-cols-2 border-b border-gray-200 last:border-none"
                                >
                                    <div className="bg-gray-50 px-5 py-4 font-medium">
                                        {key}
                                    </div>

                                    <div className="px-5 py-4 text-gray-600">
                                        {value}
                                    </div>
                                </div>
                            ),
                        )}
                    </div>
                )}

                {activeTab === "Reviews" && (
                    <div className="space-y-8">
                        {product.reviews.map((review) => (
                            <div
                                key={review.id}
                                className="rounded-lg border border-gray-200 p-6"
                            >
                                <div className="flex items-center justify-between">
                                    <h3 className="font-semibold">
                                        {review.name}
                                    </h3>

                                    <div className="flex text-yellow-400">
                                        {Array.from({
                                            length: review.rating,
                                        }).map((_, index) => (
                                            <Star
                                                key={index}
                                                size={16}
                                                fill="currentColor"
                                            />
                                        ))}
                                    </div>
                                </div>

                                <p className="mt-4 leading-7 text-gray-600">
                                    {review.comment}
                                </p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProductTabs;
