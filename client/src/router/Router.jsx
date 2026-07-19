import { Route, Routes } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/home/layout/Home";
import Products from "../pages/products/layout/Products";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<RootLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
            </Route>
        </Routes>
    );
};

export default Router;
