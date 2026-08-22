import { Link } from "react-router";

const CartSummary = ({ cart }) => {
    const itemsPrice = cart.items.reduce(
        (sum, item) => sum + item.product.price * item.quantity,
        0,
    );
    const shippingPrice = itemsPrice > 1000 ? 0 : 60;
    const totalPrice = itemsPrice + shippingPrice;

    return (
        <div className="h-fit rounded-xl border border-border p-6">
            <h3 className="mb-6 text-xl font-semibold">Cart Total</h3>

            <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-border pb-4">
                    <span className="text-muted">Subtotal</span>
                    <span className="font-semibold">
                        ${itemsPrice.toFixed(2)}
                    </span>
                </div>

                <div className="flex items-center justify-between border-b border-border pb-4">
                    <span className="text-muted">Shipping</span>
                    <span className="font-semibold">
                        {shippingPrice === 0
                            ? "Free"
                            : `$${shippingPrice.toFixed(2)}`}
                    </span>
                </div>

                <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold">Total</span>
                    <span className="text-xl font-bold">
                        ${totalPrice.toFixed(2)}
                    </span>
                </div>
            </div>

            <Link
                to="/checkout"
                className="mt-8 block w-full rounded-full bg-primary py-3 text-center font-medium text-white transition hover:opacity-90"
            >
                Proceed to Checkout
            </Link>
        </div>
    );
};

export default CartSummary;
