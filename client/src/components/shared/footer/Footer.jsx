import { Link } from "react-router";

import logo from "../../../assets/Vector.png";

const Footer = () => {
    return (
        <footer className=" bg-text text-sm text-gray-300">
            <div className="wrapper grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-5">
                <div className="lg:col-span-2">
                    <Link to="/" className="flex items-center gap-3">
                        <img src={logo} alt="EcoBazar" className="h-10 w-10" />

                        <h2 className="text-2xl font-semibold text-white">
                            EcoBazar
                        </h2>
                    </Link>

                    <p className="mt-4 max-w-md leading-6 text-gray-400">
                        Fresh groceries and organic products delivered to your
                        doorstep. Shop quality fruits, vegetables and daily
                        essentials at the best prices.
                    </p>
                </div>

                <div>
                    <h3 className="mb-4 text-base font-semibold text-white">
                        Quick Links
                    </h3>

                    <ul className="space-y-2.5">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/shop">Shop</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="mb-4 text-base font-semibold text-white">
                        Categories
                    </h3>

                    <ul className="space-y-2.5">
                        <li>Fresh Fruit</li>
                        <li>Fresh Vegetables</li>
                        <li>Meat & Fish</li>
                        <li>Snacks</li>
                        <li>Beverages</li>
                    </ul>
                </div>

                <div>
                    <h3 className="mb-4 text-base font-semibold text-white">
                        Contact
                    </h3>

                    <ul className="space-y-2.5">
                        <li>(219) 555-0114</li>
                        <li>support@ecobazar.com</li>
                        <li>Lincoln-344, Illinois</li>
                        <li>Mon - Sat : 8AM - 8PM</li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-gray-800">
                <div className="wrapper flex flex-col items-center justify-between gap-3 py-5 text-xs text-gray-400 md:flex-row">
                    <p>© 2026 EcoBazar. All Rights Reserved.</p>

                    <p>Made with love for fresh grocery shopping.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
