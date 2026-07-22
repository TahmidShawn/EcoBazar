import { ChevronRight, House } from "lucide-react";
import { Link } from "react-router";

const Breadcrumb = ({ items = [] }) => {
    return (
        <div className="wrapper flex items-center gap-2 py-5 text-sm">
            <Link to="/">
                <House size={16} className="text-gray-300 hover:text-primary" />
            </Link>

            {items.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                    <ChevronRight size={14} className="text-gray-300" />

                    {item.href ? (
                        <Link
                            to={item.href}
                            className="text-gray-300 hover:text-primary"
                        >
                            {item.label}
                        </Link>
                    ) : (
                        <span className="font-medium text-primary">
                            {item.label}
                        </span>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Breadcrumb;
