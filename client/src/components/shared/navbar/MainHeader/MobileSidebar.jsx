import { X } from "lucide-react";
import NavLinks from "../MenuBar.jsx/NavLinks";

const MobileSidebar = ({ isOpen, setIsOpen }) => {
    return (
        <>
            {/* overlay */}
            <div
                onClick={() => setIsOpen(false)}
                className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 lg:hidden ${
                    isOpen ? "visible opacity-100" : "invisible opacity-0"
                }`}
            />

            {/* sidebar menu */}
            <aside
                className={`fixed top-0 left-0 z-50 h-screen w-72 overflow-y-auto bg-white transition-transform duration-300 lg:hidden ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <div className="flex items-center justify-between border-b border-gray-300 p-5">
                    <h2 className="text-xl font-semibold">Menu</h2>

                    <button onClick={() => setIsOpen(false)}>
                        <X />
                    </button>
                </div>

                <div className="flex flex-col gap-6 p-5">
                    <NavLinks />
                </div>
            </aside>
        </>
    );
};

export default MobileSidebar;
