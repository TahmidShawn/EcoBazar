import { MapPin } from "lucide-react";
import Select from "../../ui/Select";
import { languageOptions, currencyOptions } from "../../../data/data";
import { useState } from "react";
const TopBar = () => {
    const [language, setLanguage] = useState("en");
    const [currency, setCurrency] = useState("usd");
    // console.log({ language, currency });

    // to do
    // update functionality

    return (
        <div className="border-b border-gray-200">
            <div className="wrapper flex flex-col md:flex-row justify-between items-center text-gray-600 text-xs py-1.5">
                <p className="flex items-center gap-1">
                    <MapPin />
                    <span>
                        Store Location: Lincoln- 344, Illinois, Chicago, USA
                    </span>
                </p>
                <div className="flex gap-1 md:gap-6 items-center">
                    <Select
                        options={languageOptions}
                        name="language"
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                    />
                    <Select
                        options={currencyOptions}
                        name="currency"
                        value={currency}
                        onChange={(e) => setCurrency(e.target.value)}
                    />
                    <div className="h-4 w-px bg-gray-300"></div>
                    <button className="">Sign In</button>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
