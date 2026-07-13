import { ArrowRight } from "lucide-react";

const SecondaryButton = ({ text }) => {
    return (
        <button className="flex items-center gap-1 text-sm  font-semibold text-primary">
            <span>{text}</span>
            <ArrowRight />
        </button>
    );
};

export default SecondaryButton;
