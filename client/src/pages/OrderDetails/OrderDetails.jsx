import { useParams } from "react-router";
import { useOrder } from "../../hooks/useOrder";

const OrderDetails = () => {
    const { id } = useParams();
    const { order, loading } = useOrder(id);

    if (loading) {
        return <p className="text-center py-20">Loading order...</p>;
    }

    if (!order) {
        return <p className="text-center py-20">Order not found.</p>;
    }

    return (
        <section className="wrapper py-12">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-200 pb-6">
                <div>
                    <h1 className="text-2xl font-semibold">
                        Order #{order.orderNumber}
                    </h1>
                    <p className="text-sm text-gray-500 mt-1">
                        Placed on{" "}
                        {new Date(order.createdAt).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}
                    </p>
                </div>

                {order.orderStatus === "processing" && (
                    <span className="rounded-full px-4 py-1.5 text-sm font-medium capitalize bg-yellow-100 text-yellow-700">
                        {order.orderStatus}
                    </span>
                )}

                {order.orderStatus === "shipped" && (
                    <span className="rounded-full px-4 py-1.5 text-sm font-medium capitalize bg-blue-100 text-blue-700">
                        {order.orderStatus}
                    </span>
                )}

                {order.orderStatus === "delivered" && (
                    <span className="rounded-full px-4 py-1.5 text-sm font-medium capitalize bg-green-100 text-green-700">
                        {order.orderStatus}
                    </span>
                )}

                {order.orderStatus === "cancelled" && (
                    <span className="rounded-full px-4 py-1.5 text-sm font-medium capitalize bg-red-100 text-red-700">
                        {order.orderStatus}
                    </span>
                )}
            </div>

            <div className="mt-8 grid gap-10 lg:grid-cols-3">
                <div className="lg:col-span-2 space-y-4">
                    <h2 className="text-lg font-medium">Items</h2>

                    <div className="rounded-xl border border-border divide-y divide-gray-200">
                        {order.items.map((item) => (
                            <div
                                key={item.product}
                                className="flex items-center gap-4 p-4"
                            >
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="h-16 w-16 rounded-md object-contain"
                                />

                                <div className="flex-1">
                                    <p className="font-medium">{item.name}</p>
                                    <p className="text-sm text-gray-500">
                                        Qty: {item.quantity} × $
                                        {item.price.toFixed(2)}
                                    </p>
                                </div>

                                <p className="font-semibold">
                                    ${(item.price * item.quantity).toFixed(2)}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="rounded-xl border border-border p-6">
                        <h2 className="text-lg font-medium mb-4">
                            Order Summary
                        </h2>

                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                                <span className="text-gray-500">Subtotal</span>
                                <span>${order.itemsPrice.toFixed(2)}</span>
                            </div>

                            <div className="flex justify-between">
                                <span className="text-gray-500">Shipping</span>
                                <span>
                                    {order.shippingPrice === 0
                                        ? "Free"
                                        : `$${order.shippingPrice.toFixed(2)}`}
                                </span>
                            </div>

                            <div className="flex justify-between border-t border-gray-200 pt-2 text-base font-semibold">
                                <span>Total</span>
                                <span>${order.totalPrice.toFixed(2)}</span>
                            </div>
                        </div>

                        <p className="mt-4 text-sm text-gray-500">
                            Payment:{" "}
                            <span className="font-medium capitalize text-text">
                                {order.paymentMethod === "cod"
                                    ? "Cash on Delivery"
                                    : order.paymentMethod}
                            </span>{" "}
                            (
                            <span className="capitalize">
                                {order.paymentStatus}
                            </span>
                            )
                        </p>
                    </div>

                    <div className="rounded-xl border border-border p-6">
                        <h2 className="text-lg font-medium mb-4">
                            Shipping Address
                        </h2>

                        <p className="text-sm text-gray-600 leading-6">
                            {order.shippingAddress.street}
                            <br />
                            {order.shippingAddress.city},{" "}
                            {order.shippingAddress.state}{" "}
                            {order.shippingAddress.postalCode}
                            <br />
                            {order.shippingAddress.country}
                            <br />
                            Phone: {order.shippingAddress.phone}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OrderDetails;
