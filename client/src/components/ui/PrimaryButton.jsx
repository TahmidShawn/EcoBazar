import { ArrowRight } from "lucide-react";

const PrimaryButton = () => {
    return (
        <button className="flex justify-center items-center gap-2 bg-white text-primary px-7 py-2 font-semibold text-sm rounded-3xl">
            <span>Shop Now</span>
            <ArrowRight />
        </button>
    );
};

export default PrimaryButton;
