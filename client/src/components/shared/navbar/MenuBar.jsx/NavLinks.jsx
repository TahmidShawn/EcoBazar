import { House, Store, Newspaper, Info, Phone } from "lucide-react";
import { Link } from "react-router";

const NavLinks = () => {
    const links = [
        { label: "Home", to: "/", icon: House },
        { label: "Shop", to: "/products", icon: Store },
        { label: "Blog", to: "/blog", icon: Newspaper },
        { label: "About Us", to: "/about", icon: Info },
        { label: "Contact Us", to: "/contact", icon: Phone },
        { label: "Register", to: "/register", icon: Phone },
    ];

    return (
        <>
            {links.map(({ label, to, icon: Icon }) => (
                <Link key={to} to={to} className="flex items-center gap-2">
                    <Icon size={14} />
                    <span>{label}</span>
                </Link>
            ))}
        </>
    );
};

export default NavLinks;
