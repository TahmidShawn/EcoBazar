import { useState } from "react";
import { useNavigate } from "react-router";
import { useCart } from "../../hooks/useCart";
import { useOrders } from "../../hooks/useOrders";

const initialAddress = {
    street: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    phone: "",
};

const Checkout = () => {
    const { cart, loading: cartLoading } = useCart();
    const { handleCreateOrder, loading: orderLoading } = useOrders();
    const navigate = useNavigate();

    const [shippingAddress, setShippingAddress] = useState(initialAddress);
    const [paymentMethod, setPaymentMethod] = useState("cod");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setShippingAddress((prev) => ({ ...prev, [name]: value }));
    };

    const itemsPrice = cart.items.reduce(
        (sum, item) => sum + item.product.price * item.quantity,
        0,
    );
    const shippingPrice = itemsPrice > 1000 ? 0 : 60;
    const totalPrice = itemsPrice + shippingPrice;

    const handleSubmit = async (e) => {
        e.preventDefault();

        const result = await handleCreateOrder({
            shippingAddress,
            paymentMethod,
        });

        if (result) {
            navigate(`/orders/${result.data._id}`);
        }
    };

    if (cartLoading) {
        return <p className="text-center py-20">Loading cart...</p>;
    }

    if (cart.items.length === 0) {
        return (
            <div className="text-center py-20">
                <p className="text-lg text-gray-500">Your cart is empty.</p>
            </div>
        );
    }

    return (
        <section className="wrapper py-12">
            <h1 className="text-2xl font-semibold mb-8">Checkout</h1>

            <form
                onSubmit={handleSubmit}
                className="grid gap-10 lg:grid-cols-3"
            >
                <div className="lg:col-span-2 space-y-8">
                    <div>
                        <h2 className="text-lg font-medium mb-4">
                            Shipping Address
                        </h2>

                        <div className="grid gap-4 sm:grid-cols-2">
                            <input
                                name="street"
                                value={shippingAddress.street}
                                onChange={handleChange}
                                placeholder="Street Address"
                                required
                                className="border-border rounded-md border px-3 py-3 text-sm outline-none focus:border-primary sm:col-span-2"
                            />

                            <input
                                name="city"
                                value={shippingAddress.city}
                                onChange={handleChange}
                                placeholder="City"
                                required
                                className="border-border rounded-md border px-3 py-3 text-sm outline-none focus:border-primary"
                            />

                            <input
                                name="state"
                                value={shippingAddress.state}
                                onChange={handleChange}
                                placeholder="State"
                                className="border-border rounded-md border px-3 py-3 text-sm outline-none focus:border-primary"
                            />

                            <input
                                name="postalCode"
                                value={shippingAddress.postalCode}
                                onChange={handleChange}
                                placeholder="Postal Code"
                                required
                                className="border-border rounded-md border px-3 py-3 text-sm outline-none focus:border-primary"
                            />

                            <input
                                name="country"
                                value={shippingAddress.country}
                                onChange={handleChange}
                                placeholder="Country"
                                required
                                className="border-border rounded-md border px-3 py-3 text-sm outline-none focus:border-primary"
                            />

                            <input
                                name="phone"
                                value={shippingAddress.phone}
                                onChange={handleChange}
                                placeholder="Phone Number"
                                required
                                className="border-border rounded-md border px-3 py-3 text-sm outline-none focus:border-primary sm:col-span-2"
                            />
                        </div>
                    </div>

                    <div>
                        <h2 className="text-lg font-medium mb-4">
                            Payment Method
                        </h2>

                        <div className="space-y-3">
                            {["cod", "card", "stripe"].map((method) => (
                                <label
                                    key={method}
                                    className={`flex items-center gap-3 rounded-md border p-3 cursor-pointer ${
                                        paymentMethod === method
                                            ? "border-primary"
                                            : "border-border"
                                    }`}
                                >
                                    <input
                                        type="radio"
                                        name="paymentMethod"
                                        value={method}
                                        checked={paymentMethod === method}
                                        onChange={(e) =>
                                            setPaymentMethod(e.target.value)
                                        }
                                    />
                                    <span className="text-sm capitalize">
                                        {method === "cod"
                                            ? "Cash on Delivery"
                                            : method}
                                    </span>
                                </label>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="border-border h-fit rounded-lg border p-6">
                    <h2 className="text-lg font-medium mb-4">Order Summary</h2>

                    <div className="space-y-3 border-b border-gray-200 pb-4">
                        {cart.items.map((item) => (
                            <div
                                key={item.product._id}
                                className="flex justify-between text-sm"
                            >
                                <span>
                                    {item.product.name} × {item.quantity}
                                </span>
                                <span>
                                    $
                                    {(
                                        item.product.price * item.quantity
                                    ).toFixed(2)}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-4 space-y-2 text-sm">
                        <div className="flex justify-between">
                            <span>Subtotal</span>
                            <span>${itemsPrice.toFixed(2)}</span>
                        </div>

                        <div className="flex justify-between">
                            <span>Shipping</span>
                            <span>
                                {shippingPrice === 0
                                    ? "Free"
                                    : `$${shippingPrice.toFixed(2)}`}
                            </span>
                        </div>

                        <div className="flex justify-between border-t border-gray-200 pt-2 text-base font-semibold">
                            <span>Total</span>
                            <span>${totalPrice.toFixed(2)}</span>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={orderLoading}
                        className="mt-6 w-full rounded-full bg-primary py-3 text-sm font-medium text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        {orderLoading ? "Placing Order..." : "Place Order"}
                    </button>
                </div>
            </form>
        </section>
    );
};

export default Checkout;
