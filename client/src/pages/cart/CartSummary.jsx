const CartSummary = () => {
    return (
        <div className="h-fit rounded-xl border border-border p-6">
            <h3 className="mb-6 text-xl font-semibold">Cart Total</h3>

            <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-border pb-4">
                    <span className="text-muted">Subtotal</span>
                    <span className="font-semibold">$84.00</span>
                </div>

                <div className="flex items-center justify-between border-b border-border pb-4">
                    <span className="text-muted">Shipping</span>
                    <span className="font-semibold">Free</span>
                </div>

                <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold">Total</span>
                    <span className="text-xl font-bold">$84.00</span>
                </div>
            </div>

            <button className="mt-8 w-full rounded-full bg-primary py-3 font-medium text-white transition">
                Proceed to Checkout
            </button>
        </div>
    );
};

export default CartSummary;
