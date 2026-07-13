import { X } from "lucide-react";
import NavLinks from "../MenuBar.jsx/NavLinks";

const MobileSidebar = ({ isOpen, setIsOpen }) => (
    <>
        {/* overlay  */}
        <div
            onClick={() => setIsOpen(false)}
            className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 lg:hidden ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        />

        {/* sidebar menu  */}
        <aside
            className={`fixed top-0 left-0 z-50 h-screen w-72 bg-white transition-transform duration-300 lg:hidden ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
            <div className="flex items-center justify-between p-5 border-b border-gray-300">
                <h2 className="text-xl font-semibold">Menu</h2>

                <button onClick={() => setIsOpen(false)}>
                    <X />
                </button>
            </div>

            <div className="p-5 flex flex-col gap-6">
                <NavLinks />
            </div>
        </aside>
    </>
);

export default MobileSidebar;
