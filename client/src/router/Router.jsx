import { Route, Routes } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/home/Home";
import Products from "../pages/products/Products";
import ProductDetails from "../pages/productDetails/ProductDetails";
import WishList from "../pages/wishlist/WishList";
import Cart from "../pages/cart/Cart";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import AdminDashboardLayout from "../layout/AdminDashboardLayout";
import AdminDashboard from "../pages/admin/minDashboard/AdminDashboard";
import Orders from "@/pages/admin/orders/Orders";

const Router = () => {
    return (
        <Routes>
            <Route element={<RootLayout />}>
                <Route index element={<Home />} />
                <Route path="products" element={<Products />} />
                <Route path="products/:id" element={<ProductDetails />} />
                <Route path="wishlist" element={<WishList />} />
                <Route path="shopping-cart" element={<Cart />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="register" element={<Register />} />
                <Route path="login" element={<Login />} />
            </Route>
            <Route path="dashboard" element={<AdminDashboardLayout />}>
                <Route index element={<AdminDashboard />} />
                <Route path="orders" element={<Orders />} />
            </Route>
        </Routes>
    );
};

export default Router;
