import { useState } from "react";
import { Heart, Minus, Plus, Star } from "lucide-react";
import { useCart } from "../../hooks/useCart";

const ProductInfo = ({ product }) => {
    const [quantity, setQuantity] = useState(1);
    const { handleAddToCart, loading } = useCart();

    const increaseQuantity = () => {
        if (quantity < product.stock) {
            setQuantity((prev) => prev + 1);
        }
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity((prev) => prev - 1);
        }
    };

    const onAddToCart = () => {
        handleAddToCart(product._id, quantity);
    };

    const hasDiscount = product.discountPercentage > 0;
    const inStock = product.stock > 0;

    return (
        <div>
            <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-3xl font-semibold text-text">
                    {product.name}
                </h1>

                <span
                    className={`rounded-full px-3 py-1 text-sm font-medium ${
                        inStock
                            ? "bg-green-100 text-primary"
                            : "bg-red-100 text-red-500"
                    }`}
                >
                    {inStock ? "In Stock" : "Out of Stock"}
                </span>

                {product.isFeatured && (
                    <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-600">
                        Featured
                    </span>
                )}
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-4">
                <div className="flex text-yellow-400">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <Star
                            key={index}
                            size={18}
                            fill={
                                index < Math.round(product.avgRating)
                                    ? "currentColor"
                                    : "none"
                            }
                            strokeWidth={1.5}
                        />
                    ))}
                </div>

                <p className="text-sm text-gray-500">
                    {product.avgRating.toFixed(1)} Rating
                </p>

                <p className="text-sm text-gray-500">
                    ({product.numReviews} Reviews)
                </p>
            </div>

            <div className="mt-6 flex items-center gap-3 border-b border-gray-200 pb-6">
                <span className="text-3xl font-semibold text-primary">
                    ${product.discountPrice.toFixed(2)}
                </span>

                {hasDiscount && (
                    <>
                        <span className="text-xl text-gray-400 line-through">
                            ${product.price.toFixed(2)}
                        </span>

                        <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-500">
                            Save {product.discountPercentage}%
                        </span>
                    </>
                )}
            </div>

            <div className="mt-6 flex items-center justify-between border-b border-gray-200 pb-6">
                <div>
                    <p className="text-sm text-gray-500">Category</p>
                    <h3 className="mt-1 text-lg font-medium">
                        {product.category?.name}
                    </h3>
                </div>

                <button className="rounded-full border border-gray-200 p-3 transition hover:bg-primary hover:text-white">
                    <Heart size={20} />
                </button>
            </div>

            <p className="mt-6 leading-7 text-gray-500">
                {product.description}
            </p>

            <p className="mt-4 text-sm text-gray-500">
                Sold per:{" "}
                <span className="font-medium text-text">
                    {product.unitLabel}
                </span>
            </p>

            <div className="mt-8 flex flex-col gap-4 border-y border-gray-200 py-6 sm:flex-row">
                <div className="flex items-center rounded-full border border-gray-200">
                    <button
                        onClick={decreaseQuantity}
                        disabled={quantity <= 1}
                        className="p-3 disabled:opacity-40"
                    >
                        <Minus size={18} />
                    </button>

                    <span className="w-14 text-center font-medium">
                        {quantity}
                    </span>

                    <button
                        onClick={increaseQuantity}
                        disabled={quantity >= product.stock}
                        className="p-3 disabled:opacity-40"
                    >
                        <Plus size={18} />
                    </button>
                </div>

                <button
                    onClick={onAddToCart}
                    disabled={!inStock || loading}
                    className="flex-1 rounded-full bg-primary py-3 font-medium text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
                >
                    {!inStock
                        ? "Out of Stock"
                        : loading
                          ? "Adding..."
                          : "Add To Cart"}
                </button>
            </div>

            {inStock && product.stock <= 10 && (
                <p className="mt-4 text-sm text-red-500">
                    Only {product.stock} left in stock — order soon!
                </p>
            )}
        </div>
    );
};

export default ProductInfo;
