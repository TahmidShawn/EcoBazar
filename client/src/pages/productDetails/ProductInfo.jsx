import { useState } from "react";
import { Heart, Minus, Plus, Star, StarCheck } from "lucide-react";

const ProductInfo = ({ product }) => {
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => {
        setQuantity((prev) => prev + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity((prev) => prev - 1);
        }
    };

    return (
        <div>
            <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-3xl font-semibold text-text">
                    {product.name}
                </h1>

                <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-primary">
                    {product.stock}
                </span>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-4">
                <div className="flex text-yellow-400">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <Star
                            key={index}
                            size={18}
                            fill="currentColor"
                            strokeWidth={1.5}
                        />
                    ))}
                </div>

                <p className="text-sm text-gray-500">{product.rating} Rating</p>

                <p className="text-sm text-gray-500">
                    ({product.reviewCount} Reviews)
                </p>
            </div>

            <div className="mt-6 flex items-center gap-3 border-b border-gray-200 pb-6">
                <span className="text-3xl font-semibold text-primary">
                    ${product.price}
                </span>

                <span className="text-xl text-gray-400 line-through">
                    ${product.oldPrice}
                </span>

                <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-500">
                    Save{" "}
                    {Math.round(
                        ((product.oldPrice - product.price) /
                            product.oldPrice) *
                            100,
                    )}
                    %
                </span>
            </div>

            <div className="mt-6 flex items-center justify-between border-b border-gray-200 pb-6">
                <div>
                    <p className="text-sm text-gray-500">Brand</p>

                    <h3 className="mt-1 text-lg font-medium">
                        {product.brand}
                    </h3>
                </div>

                <button className="rounded-full border border-gray-200 p-3 transition hover:bg-primary hover:text-white">
                    <Heart size={20} />
                </button>
            </div>

            <p className="mt-6 leading-7 text-gray-500">
                {product.description}
            </p>

            <div className="mt-8 flex flex-col gap-4 border-y border-gray-200 py-6 sm:flex-row">
                <div className="flex items-center rounded-full border border-gray-200">
                    <button onClick={decreaseQuantity} className="p-3">
                        <Minus size={18} />
                    </button>

                    <span className="w-14 text-center font-medium">
                        {quantity}
                    </span>

                    <button onClick={increaseQuantity} className="p-3">
                        <Plus size={18} />
                    </button>
                </div>

                <button className="flex-1 rounded-full bg-primary py-3 font-medium text-white transition hover:opacity-90">
                    Add To Cart
                </button>
            </div>

            <div className="mt-6 space-y-3 text-sm">
                <p>
                    <span className="font-semibold">SKU:</span> {product.sku}
                </p>

                <p>
                    <span className="font-semibold">Category:</span>{" "}
                    {product.category}
                </p>

                <p>
                    <span className="font-semibold">Tags:</span>{" "}
                    {product.tags.join(", ")}
                </p>
            </div>

            <div className="mt-8 flex items-center gap-4">
                <span className="font-medium">Share Item:</span>

                <button className="rounded-full border border-gray-200 p-2 transition hover:bg-primary hover:text-white">
                    <StarCheck size={18} />
                </button>

                <button className="rounded-full border border-gray-200 p-2 transition hover:bg-primary hover:text-white">
                    <StarCheck size={18} />
                </button>

                <button className="rounded-full border border-gray-200 p-2 transition hover:bg-primary hover:text-white">
                    <StarCheck size={18} />
                </button>
            </div>
        </div>
    );
};

export default ProductInfo;
