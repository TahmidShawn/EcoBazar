import { Route, Routes } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/home/Home";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<RootLayout />}>
                <Route path="/" element={<Home />} />
            </Route>
        </Routes>
    );
};

export default Router;
