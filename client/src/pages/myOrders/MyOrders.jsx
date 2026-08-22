import { Link } from "react-router";
import { useOrders } from "../../hooks/useOrders";

const MyOrders = () => {
    const { orders, loading, handleCancelOrder } = useOrders();

    if (loading) {
        return <p className="text-center py-20">Loading orders...</p>;
    }

    if (orders.length === 0) {
        return (
            <div className="wrapper py-20 text-center">
                <p className="text-lg text-gray-500 mb-6">
                    You haven't placed any orders yet.
                </p>
                <Link
                    to="/products"
                    className="rounded-full bg-primary px-8 py-3 font-medium text-white transition hover:opacity-90"
                >
                    Start Shopping
                </Link>
            </div>
        );
    }

    return (
        <section className="wrapper py-12">
            <h1 className="text-2xl font-semibold mb-8">My Orders</h1>

            <div className="space-y-4">
                {orders.map((order) => (
                    <div
                        key={order._id}
                        className="rounded-xl border border-border p-6"
                    >
                        <div className="flex flex-wrap items-center justify-between gap-4">
                            <div>
                                <p className="font-medium">
                                    Order #{order.orderNumber}
                                </p>
                                <p className="text-sm text-gray-500 mt-1">
                                    {new Date(
                                        order.createdAt,
                                    ).toLocaleDateString("en-US", {
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

                        <div className="mt-4 flex flex-wrap items-center justify-between gap-4 border-t border-gray-200 pt-4">
                            <p className="text-sm text-gray-500">
                                {order.items.length}{" "}
                                {order.items.length === 1 ? "item" : "items"} —
                                Total: ${order.totalPrice.toFixed(2)}
                            </p>

                            <div className="flex items-center gap-3">
                                {order.orderStatus === "processing" && (
                                    <button
                                        onClick={() =>
                                            handleCancelOrder(order._id)
                                        }
                                        className="rounded-full border border-red-500 px-5 py-2 text-sm font-medium text-red-500 transition hover:bg-red-500 hover:text-white"
                                    >
                                        Cancel Order
                                    </button>
                                )}

                                <Link
                                    to={`/orders/${order._id}`}
                                    className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-white transition hover:opacity-90"
                                >
                                    View Details
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MyOrders;
