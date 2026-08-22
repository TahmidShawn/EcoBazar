import { Minus, Plus, X } from "lucide-react";
import { useCart } from "../../hooks/useCart";

const CartItem = ({ item }) => {
    const { handleUpdateCartItem, handleRemoveFromCart, loading } = useCart();
    const { product, quantity } = item;

    const onIncrease = () => {
        if (quantity < product.stock) {
            handleUpdateCartItem(product._id, quantity + 1);
        }
    };

    const onDecrease = () => {
        if (quantity > 1) {
            handleUpdateCartItem(product._id, quantity - 1);
        }
    };

    const onRemove = () => {
        handleRemoveFromCart(product._id);
    };

    return (
        <div className="border-b border-border p-5 last:border-none lg:grid lg:grid-cols-[2.5fr_1fr_1.2fr_1fr_50px] lg:items-center lg:px-6">
            <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <img
                        src={product.images?.[0]?.url}
                        alt={product.name}
                        className="h-20 w-20 object-contain"
                    />
                    <h3 className="font-medium">{product.name}</h3>
                </div>
                <button
                    onClick={onRemove}
                    disabled={loading}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition hover:border-red-500 hover:text-red-500 lg:hidden disabled:opacity-50"
                >
                    <X size={18} />
                </button>
            </div>

            <div className="mt-5 flex items-center justify-between lg:mt-0 lg:block">
                <span className="font-medium text-muted lg:hidden">Price</span>
                <span className="font-medium">${product.price.toFixed(2)}</span>
            </div>

            <div className="mt-5 flex items-center justify-between lg:mt-0 lg:block">
                <span className="font-medium text-muted lg:hidden">
                    Quantity
                </span>
                <div className="flex w-fit items-center rounded-full border border-border">
                    <button
                        onClick={onDecrease}
                        disabled={loading || quantity <= 1}
                        className="flex h-9 w-9 items-center justify-center rounded-full transition hover:bg-gray-100 disabled:opacity-50"
                    >
                        <Minus size={16} />
                    </button>
                    <span className="w-10 text-center font-medium">
                        {quantity}
                    </span>
                    <button
                        onClick={onIncrease}
                        disabled={loading || quantity >= product.stock}
                        className="flex h-9 w-9 items-center justify-center rounded-full transition hover:bg-primary hover:text-white disabled:opacity-50"
                    >
                        <Plus size={16} />
                    </button>
                </div>
            </div>

            <div className="mt-5 flex items-center justify-between lg:mt-0 lg:block">
                <span className="font-medium text-muted lg:hidden">
                    Subtotal
                </span>
                <span className="font-semibold">
                    ${(product.price * quantity).toFixed(2)}
                </span>
            </div>

            <button
                onClick={onRemove}
                disabled={loading}
                className="hidden h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition hover:border-red-500 hover:text-red-500 lg:flex disabled:opacity-50"
            >
                <X size={18} />
            </button>
        </div>
    );
};

export default CartItem;
