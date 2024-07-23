import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutAdmin from "./pages/admin/LayoutAdmin.tsx";
import Register from "./pages/user/Register.tsx";
import LayoutUser from "./pages/user/LayoutUser.tsx";
import Login from "./pages/user/Login.tsx";
import CategorysAdmin from "./pages/admin/CategorysAdmin.tsx";
import ProductsAdmin from "./pages/admin/ProductsAdmin.tsx";
import CategorysProvider from "./context/CategoryContext.tsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomePage from "./components/User/HomePage.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <CategorysProvider>
        <Routes>
          <Route path="" element={<App />}>
            {/* User */}
            <Route path="" element={<LayoutUser />}>
              <Route index element={<HomePage />} />

              <Route path="register" element={<Register />} />
              <Route path="login" element={<Login />} />
            </Route>
            {/* Admin */}
            <Route path="admin" element={<LayoutAdmin />}>
              <Route path="categorys" element={<CategorysAdmin />} />
              <Route path="products" element={<ProductsAdmin />} />
            </Route>
          </Route>
        </Routes>
      </CategorysProvider>
      <ToastContainer autoClose={3000} newestOnTop />
    </BrowserRouter>
  </React.StrictMode>
);
