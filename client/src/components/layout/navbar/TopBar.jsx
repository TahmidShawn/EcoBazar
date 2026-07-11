import { MapPin } from "lucide-react";
import Select from "../../ui/Select";
import { languageOptions, currencyOptions } from "../../../data/data";
const TopBar = () => {
    return (
        <div className="wrapper flex flex-col md:flex-row justify-between items-center text-gray-600 text-xs py-1.5">
            <p className="flex items-center gap-1">
                <MapPin />
                <span>
                    Store Location: Lincoln- 344, Illinois, Chicago, USA
                </span>
            </p>
            <div className="flex gap-1 md:gap-6 items-center">
                <Select options={languageOptions} />
                <Select options={currencyOptions} />
                <div className="h-4 w-px bg-gray-300"></div>
                <button className="">Sign In</button>
            </div>
        </div>
    );
};

export default TopBar;
