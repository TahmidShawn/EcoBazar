import { ChevronDown } from "lucide-react";

const Select = ({ options }) => {
    return (
        <div className="relative inline-block">
            <select
                name={name}
                className="appearance-none pr-6 outline-none focus:outline-none focus:ring-0"
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>

            <ChevronDown
                size={16}
                className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2"
            />
        </div>
    );
};

export default Select;
