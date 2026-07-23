import { Route, Routes } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/home/Home";
import Products from "../pages/products/Products";
import ProductDetails from "../pages/productDetails/ProductDetails";
import WishList from "../pages/wishlist/WishList";
import Cart from "../pages/cart/Cart";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<RootLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<ProductDetails />} />
                <Route path="/wishlist" element={<WishList />} />
                <Route path="/shopping-cart" element={<Cart />} />
            </Route>
        </Routes>
    );
};

export default Router;
