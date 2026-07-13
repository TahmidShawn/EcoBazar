import { Outlet } from "react-router";
import Navbar from "../components/shared/navbar/Navbar";

const RootLayout = () => {
    return (
        <div>
            <Navbar />
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default RootLayout;
