import { ChevronDown } from "lucide-react";

const FilterSelect = ({ value, onChange, options }) => {
    return (
        <div className="relative">
            <select
                value={value}
                onChange={onChange}
                className="w-full appearance-none rounded-md border border-border bg-white py-2 pl-4 pr-10 text-sm outline-none"
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>

            <ChevronDown
                size={16}
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted"
            />
        </div>
    );
};

export default FilterSelect;
