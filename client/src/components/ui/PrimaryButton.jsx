import { MoveRight } from "lucide-react";

const PrimaryButton = () => {
    return (
        <button className="flex justify-center items-center gap-2 bg-white text-primary px-7 py-1.5 font-medium text-sm rounded-3xl">
            <span>Shop Now</span>
            <MoveRight />
        </button>
    );
};

export default PrimaryButton;
