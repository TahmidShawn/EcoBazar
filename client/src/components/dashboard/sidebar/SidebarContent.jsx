import { NavLink } from "react-router";
import {
    BarChart3,
    Boxes,
    CreditCard,
    LayoutDashboard,
    LogOut,
    Settings,
    ShoppingCart,
    Users,
} from "lucide-react";

const sidebarItems = [
    { label: "Overview", icon: LayoutDashboard, to: "/dashboard" },
    { label: "Orders", icon: ShoppingCart, to: "/dashboard/orders" },
    { label: "Products", icon: Boxes, to: "/dashboard/products" },
    { label: "Customers", icon: Users, to: "/dashboard/customers" },
    { label: "Reports", icon: BarChart3, to: "/dashboard/reports" },
    { label: "Payments", icon: CreditCard, to: "/dashboard/payments" },
    { label: "Settings", icon: Settings, to: "/dashboard/settings" },
];

const SidebarContent = ({ onNavigate }) => {
    return (
        <>
            <div className="flex items-center gap-3 border-b border-slate-200 px-6 py-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-lg font-bold text-white">
                    E
                </div>
                <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                        Admin
                    </p>
                    <h1 className="text-lg font-semibold">EcoBazaar</h1>
                </div>
            </div>

            <nav className="flex-1 space-y-2 px-4 py-6">
                {sidebarItems.map(({ label, icon: Icon, to }) => (
                    <NavLink
                        key={label}
                        to={to}
                        end={to === "/dashboard"}
                        onClick={onNavigate}
                        className={({ isActive }) =>
                            `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                                isActive
                                    ? "bg-primary/10 text-primary"
                                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                            }`
                        }
                    >
                        <Icon className="h-4 w-4" />
                        {label}
                    </NavLink>
                ))}
            </nav>

            <div className="border-t border-slate-200 p-4">
                <button className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900">
                    <LogOut className="h-4 w-4" />
                    Logout
                </button>
            </div>
        </>
    );
};

export default SidebarContent;
