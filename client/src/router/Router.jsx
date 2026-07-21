import { Route, Routes } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/home/layout/Home";
import Products from "../pages/products/layout/Products";
import ProductDetails from "../pages/productDetails/ProductDetails";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<RootLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<ProductDetails />} />
            </Route>
        </Routes>
    );
};

export default Router;
