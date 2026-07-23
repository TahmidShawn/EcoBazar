import img1 from "../../assets/popularProducts/Image.png";
import { X } from "lucide-react";
import BreadcrumbBanner from "../../components/shared/breadcrumbBanner/BreadcrumbBanner";

const wishlistProducts = [
    {
        id: 1,
        name: "Green Capsicum",
        image: img1,
        price: 14.99,

        inStock: true,
    },
    {
        id: 2,
        name: "Chinese Cabbage",
        image: img1,
        price: 45,

        inStock: true,
    },
    {
        id: 3,
        name: "Fresh Sujapuri Mango",
        image: img1,
        price: 9,
        inStock: false,
    },
];
const breadcrumbData = [{ label: "Wishlist" }];

const WishList = () => {
    return (
        <div>
            {/* Breadcrumb */}
            <BreadcrumbBanner items={breadcrumbData} />

            {/* Wishlist */}
            <section className="wrapper py-8 md:py-10">
                <h2 className="mb-8 text-center text-2xl font-semibold md:text-4xl">
                    My Wishlist
                </h2>

                <div className="overflow-hidden rounded-xl border border-border">
                    {/* Header */}

                    <div className="hidden grid-cols-12 border-b border-border bg-gray-50 px-6 py-4 text-sm font-medium uppercase text-muted md:grid">
                        <p className="col-span-5">Product</p>
                        <p className="col-span-2 ml-3">Price</p>
                        <p className="col-span-3 ml-4">Stock</p>
                        <p className="col-span-1"></p>
                        <p className="col-span-1"></p>
                    </div>

                    {wishlistProducts.map((product) => (
                        <div
                            key={product.id}
                            className="relative grid gap-5 border-b border-border p-6 last:border-none md:grid-cols-12 md:items-center"
                        >
                            {/* Product */}

                            <div className="flex items-center gap-4 md:col-span-5">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="h-20 w-20 shrink-0 object-contain"
                                />

                                <div>
                                    <h3 className="font-medium">
                                        {product.name}
                                    </h3>

                                    {/* Mobile Price */}

                                    <div className="mt-2 flex items-center gap-2 md:hidden">
                                        <span className="font-semibold">
                                            ${product.price.toFixed(2)}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Desktop Price */}

                            <div className="hidden items-center gap-2 md:col-span-2 md:flex">
                                <span className="font-semibold">
                                    ${product.price.toFixed(2)}
                                </span>
                            </div>

                            {/* Stock */}

                            <div className="md:col-span-2">
                                {product.inStock ? (
                                    <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-primary">
                                        In Stock
                                    </span>
                                ) : (
                                    <span className="rounded-full bg-red-100 px-3 py-1 text-sm text-red-500">
                                        Out of Stock
                                    </span>
                                )}
                            </div>

                            <div className="md:col-span-2">
                                <button
                                    disabled={!product.inStock}
                                    className={`w-full rounded-full px-4 lg:px-5 py-3 text-xs lg:text-sm font-medium md:w-auto ${
                                        product.inStock
                                            ? "bg-primary text-white"
                                            : "cursor-not-allowed bg-gray-200 text-gray-400"
                                    }`}
                                >
                                    Add to Cart
                                </button>
                            </div>

                            <div className="absolute top-4 right-4 md:static md:col-span-1 md:flex md:justify-center">
                                <button className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-gray-500 transition hover:border-red-500 hover:bg-red-50 hover:text-red-500">
                                    <X size={18} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default WishList;
