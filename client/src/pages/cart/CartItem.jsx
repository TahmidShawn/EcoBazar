import { Minus, Plus, X } from "lucide-react";

const CartItem = ({ item }) => {
    return (
        <div className="border-b border-border p-5 last:border-none lg:grid lg:grid-cols-[2.5fr_1fr_1.2fr_1fr_50px] lg:items-center lg:px-6">
            <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <img
                        src={item.image}
                        alt={item.name}
                        className="h-20 w-20 object-contain"
                    />
                    <h3 className="font-medium">{item.name}</h3>
                </div>
                <button className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition hover:border-red-500 hover:text-red-500 lg:hidden">
                    <X size={18} />
                </button>
            </div>

            <div className="mt-5 flex items-center justify-between lg:mt-0 lg:block">
                <span className="font-medium text-muted lg:hidden">Price</span>
                <span className="font-medium">${item.price.toFixed(2)}</span>
            </div>

            <div className="mt-5 flex items-center justify-between lg:mt-0 lg:block">
                <span className="font-medium text-muted lg:hidden">
                    Quantity
                </span>
                <div className="flex w-fit items-center rounded-full border border-border">
                    <button className="flex h-9 w-9 items-center justify-center rounded-full transition hover:bg-gray-100">
                        <Minus size={16} />
                    </button>
                    <span className="w-10 text-center font-medium">
                        {item.quantity}
                    </span>
                    <button className="flex h-9 w-9 items-center justify-center rounded-full transition hover:bg-primary hover:text-white">
                        <Plus size={16} />
                    </button>
                </div>
            </div>

            <div className="mt-5 flex items-center justify-between lg:mt-0 lg:block">
                <span className="font-medium text-muted lg:hidden">
                    Subtotal
                </span>
                <span className="font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                </span>
            </div>

            <button className="hidden h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition hover:border-red-500 hover:text-red-500 lg:flex">
                <X size={18} />
            </button>
        </div>
    );
};

export default CartItem;
