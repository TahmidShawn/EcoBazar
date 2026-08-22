import { createRoot } from "react-dom/client";
import "./index.css";

import { BrowserRouter } from "react-router";
import Router from "./router/Router";
import { AuthProvider } from "./context/AuthContext";
import { ToastContainer } from "react-toastify";
import { CartProvider } from "./context/CartContext";

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <AuthProvider>
            <CartProvider>
                <Router />
                <ToastContainer position="bottom-right" autoClose={2000} />
            </CartProvider>
        </AuthProvider>
    </BrowserRouter>,
);
