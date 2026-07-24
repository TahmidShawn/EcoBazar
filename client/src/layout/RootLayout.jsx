import { Outlet } from "react-router";
import Navbar from "../components/shared/navbar/Navbar";
import Footer from "../components/shared/footer/Footer";
import Newsletter from "../components/shared/newsletter/Newsletter";

const RootLayout = () => {
    return (
        <div>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Newsletter />
            <Footer />
        </div>
    );
};

export default RootLayout;
