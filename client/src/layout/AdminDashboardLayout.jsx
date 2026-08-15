import { Outlet } from "react-router";
import Sidebar from "../components/dashboard/sidebar/Sidebar";
import DashboardHeader from "../components/dashboard/header/DashboardHeader";

const AdminDashboardLayout = () => {
    return (
        <div className="min-h-screen bg-slate-100 text-slate-900">
            <div className="flex min-h-screen">
                <Sidebar />
                <main className="flex-1">
                    <DashboardHeader />
                    <div className="p-4 sm:p-6 lg:p-8">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default AdminDashboardLayout;
