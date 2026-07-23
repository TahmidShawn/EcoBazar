import BreadcrumbBanner from "../../components/shared/breadcrumbBanner/BreadcrumbBanner";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";

import img1 from "../../assets/popularProducts/Image (1).png";
import img2 from "../../assets/popularProducts/Image.png";

const breadcrumbItems = [{ label: "Shopping Cart" }];

const cartItems = [
    {
        id: 1,
        name: "Green Capsicum",
        image: img1,
        price: 14,
        quantity: 5,
    },
    {
        id: 2,
        name: "Red Capsicum",
        image: img2,
        price: 14,
        quantity: 1,
    },
];

const Cart = () => {
    return (
        <>
            <BreadcrumbBanner items={breadcrumbItems} />

            <section className="wrapper py-14">
                <h2 className="mb-10 text-center text-4xl font-semibold">
                    My Shopping Cart
                </h2>

                <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
                    <div className="overflow-hidden rounded-xl border border-border">
                        <div className="hidden grid-cols-[2.5fr_1fr_1.2fr_1fr_50px] border-b border-border bg-gray-50 px-6 py-4 text-xs font-semibold uppercase tracking-wider text-muted lg:grid">
                            <p>Product</p>
                            <p>Price</p>
                            <p>Quantity</p>
                            <p>Subtotal</p>
                            <p></p>
                        </div>

                        {cartItems.map((item) => (
                            <CartItem key={item.id} item={item} />
                        ))}
                    </div>

                    <CartSummary />
                </div>

                <div className="mt-8 flex flex-col gap-8">
                    <div className="flex flex-col gap-4 rounded-xl border border-border p-5 sm:flex-row sm:items-center sm:justify-between">
                        <button className="rounded-full border bg-gray-100 border-border px-8 py-3 font-medium transition hover:bg-gray-200">
                            Return to Shop
                        </button>

                        <button className="rounded-full border border-border bg-gray-100 px-8 py-3 font-medium transition hover:bg-gray-200">
                            Update Cart
                        </button>
                    </div>

                    <div className="rounded-xl border border-border p-6">
                        <h3 className="mb-5 text-xl font-semibold">
                            Coupon Code
                        </h3>

                        <div className="flex flex-col gap-4 md:flex-row">
                            <input
                                type="text"
                                placeholder="Enter coupon code..."
                                className="flex-1 rounded-full border border-border px-5 py-3 outline-none transition focus:border-primary"
                            />

                            <button className="rounded-full bg-[#333333] px-8 py-3 font-medium text-white transition hover:bg-black">
                                Apply Coupon
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Cart;
