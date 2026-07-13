import { PhoneCall } from "lucide-react";
import NavLinks from "./NavLinks";

const MenuBar = () => {
    return (
        <nav className="hidden lg:block bg-[#333333] py-3.5 text-gray-200 text-sm">
            <div className="flex justify-between items-center wrapper">
                <div className="flex gap-10">
                    <NavLinks />
                </div>
                <div className="flex items-center gap-4">
                    <PhoneCall size={18} />
                    (219) 555-0114
                </div>
            </div>
        </nav>
    );
};

export default MenuBar;
