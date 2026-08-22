import { Link } from "react-router";
import BreadcrumbBanner from "../../components/shared/breadcrumbBanner/BreadcrumbBanner";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import { useCart } from "../../hooks/useCart";

const breadcrumbItems = [{ label: "Shopping Cart" }];

const Cart = () => {
    const { cart, loading } = useCart();

    if (loading) {
        return (
            <div>
                <BreadcrumbBanner items={breadcrumbItems} />
                <p className="text-center py-20">Loading cart...</p>
            </div>
        );
    }

    if (cart.items.length === 0) {
        return (
            <div>
                <BreadcrumbBanner items={breadcrumbItems} />
                <div className="wrapper py-20 text-center">
                    <p className="text-lg text-gray-500 mb-6">
                        Your cart is empty.
                    </p>
                    <Link
                        to="/products"
                        className="rounded-full bg-primary px-8 py-3 font-medium text-white transition hover:opacity-90"
                    >
                        Continue Shopping
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div>
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

                        {cart.items.map((item) => (
                            <CartItem key={item.product._id} item={item} />
                        ))}
                    </div>

                    <CartSummary cart={cart} />
                </div>

                <div className="mt-8 flex flex-col gap-8">
                    <div className="flex flex-col gap-4 rounded-xl border border-border p-5 sm:flex-row sm:items-center sm:justify-between">
                        <Link
                            to="/products"
                            className="rounded-full border bg-gray-100 border-border px-8 py-3 text-center font-medium transition hover:bg-gray-200"
                        >
                            Return to Shop
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Cart;
