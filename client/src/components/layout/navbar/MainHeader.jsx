import { Handbag, Heart, Search } from "lucide-react";
import vectorImg from "../../../assets/Vector.png";

const MainHeader = () => {
    return (
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-1">
                <img src={vectorImg} alt="" className="w-5 h-5" />
                <h2 className="text-xl font-medium">Ecobazar</h2>
            </div>

            <div className="flex">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search"
                        className="border border-gray-200 py-1 pl-10 pr-10 rounded-l-md focus:outline-gray-400"
                    />

                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                </div>

                <button className="bg-primary text-white px-4 text-sm rounded-r-md">
                    Search
                </button>
            </div>
            <div className="flex items-center gap-4">
                <Heart />
                <Handbag />
            </div>
        </div>
    );
};

export default MainHeader;
