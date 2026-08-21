import { useState } from "react";
import { Star } from "lucide-react";

const tabs = ["Description", "Reviews"];

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

                        <ul className="list-disc space-y-2 pl-6 text-gray-600">
                            <li>Category: {product.category?.name}</li>
                            <li>Unit: {product.unitLabel}</li>
                            <li>
                                {product.isFeatured
                                    ? "Featured product"
                                    : "Standard product"}
                            </li>
                        </ul>
                    </div>
                )}

                {activeTab === "Reviews" && (
                    <div className="flex flex-col items-center gap-3 py-6 text-center">
                        <div className="flex text-yellow-400">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <Star
                                    key={index}
                                    size={20}
                                    fill={
                                        index < Math.round(product.avgRating)
                                            ? "currentColor"
                                            : "none"
                                    }
                                />
                            ))}
                        </div>

                        <p className="text-lg font-medium">
                            {product.avgRating.toFixed(1)} out of 5
                        </p>

                        <p className="text-sm text-gray-500">
                            Based on {product.numReviews}{" "}
                            {product.numReviews === 1 ? "review" : "reviews"}
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProductTabs;