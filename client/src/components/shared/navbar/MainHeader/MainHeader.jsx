import { useState } from "react";
import { Handbag, Heart, Menu, Search } from "lucide-react";
import vectorImg from "../../../../assets/Vector.png";
import MobileSidebar from "./MobileSidebar";
import { Link } from "react-router";

const MainHeader = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="wrapper py-3">
                <div className="flex flex-col gap-2 lg:gap-4 lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => setIsOpen(true)}
                                className="lg:hidden"
                            >
                                <Menu className="w-7 h-7" />
                            </button>

                            <div className="flex items-center gap-2">
                                <img
                                    src={vectorImg}
                                    alt="EcoBazar Logo"
                                    className="w-6 h-6"
                                />

                                <h2 className="text-2xl font-medium">
                                    EcoBazar
                                </h2>
                            </div>
                        </div>

                        {/* Mobile Icons */}
                        <div className="flex items-center gap-4 lg:hidden">
                            <Link to={"/wishlist"} className="cursor-pointer">
                                <Heart className="w-6 h-6" />
                            </Link>
                            <Link
                                to={"/shopping-cart"}
                                className="cursor-pointer"
                            >
                                <Handbag className="w-6 h-6" />
                            </Link>
                        </div>
                    </div>

                    <div className="flex w-full lg:max-w-lg">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />

                            <input
                                type="text"
                                placeholder="Search"
                                className="w-full border border-gray-200 py-1.5 pl-10 rounded-l-md focus:outline-gray-400"
                            />
                        </div>

                        <button className="bg-primary px-5 text-sm text-white rounded-r-md">
                            Search
                        </button>
                    </div>

                    {/* Desktop Icons */}
                    <div className="hidden lg:flex items-center gap-4 text-gray-900">
                        <Link to={"/wishlist"} className="cursor-pointer">
                            <Heart />
                        </Link>
                        <Link to={"/shopping-cart"} className="cursor-pointer">
                            <Handbag />
                        </Link>

                        <div className="h-5 w-px bg-gray-300" />

                        <div>
                            <p className="text-xs text-gray-500">
                                Shopping cart
                            </p>
                            <p className="font-medium">$57.00</p>
                        </div>
                    </div>
                </div>
            </div>

            <MobileSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        </>
    );
};

export default MainHeader;
