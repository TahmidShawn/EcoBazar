import { createRoot } from "react-dom/client";
import "./index.css";

import { BrowserRouter } from "react-router";
import Router from "./router/Router";
import { AuthProvider } from "./context/AuthContext";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <AuthProvider>
            <Router />
            <ToastContainer position="top-right" autoClose={3000} />
        </AuthProvider>
    </BrowserRouter>,
);
