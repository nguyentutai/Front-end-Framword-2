import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutAdmin from "./pages/admin/LayoutAdmin.tsx";
import LayoutUser from "./pages/user/LayoutUser.tsx";
import CategorysAdmin from "./pages/admin/CategorysAdmin.tsx";
import ProductsAdmin from "./pages/admin/ProductsAdmin.tsx";
import CategorysProvider from "./context/CategoryContext.tsx";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import AuthForm from "./pages/user/AuthForm.tsx";
import { AuthProvider } from "./context/AuthContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
    <CategorysProvider>
      <AuthProvider>
      <Routes>
        <Route path="" element={<App />}>
          {/* User */}
          <Route element={<LayoutUser />}>
            <Route path="/register" element={<AuthForm />} />
            <Route path="/login" element={<AuthForm isLogin />} />
          </Route>
          {/* Admin */}
          <Route path="admin" element={<LayoutAdmin />}>
            <Route path="categorys" element={<CategorysAdmin />} />
            <Route path="products" element={<ProductsAdmin />} />
          </Route>
        </Route>
      </Routes>
      </AuthProvider>
      </CategorysProvider>
      <ToastContainer autoClose={3000} newestOnTop />
    </BrowserRouter>
  </React.StrictMode>
);
