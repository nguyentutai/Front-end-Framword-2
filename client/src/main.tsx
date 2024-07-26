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
import "react-toastify/dist/ReactToastify.css";
import AuthForm from "./pages/user/AuthForm.tsx";
import { AuthProvider } from "./context/AuthContext.tsx";
import ProductProvider from "./context/ProductContext.tsx";
import HomePage from "./components/User/HomePage.tsx";
import BlogsAdmin from "./pages/admin/BlogsAdmin.tsx";
import BlogProvider from "./context/BlogContext.tsx";
import UpdateBlogAdmin from "./pages/admin/UpdateBlogAdmin.tsx";
import BlogPage from "./components/User/BlogPage.tsx";
import DetailProduct from "./components/User/DetailProduct.tsx";
import ProductList from "./components/User/ProductListPage.tsx";
import ScrollToTop from "./utils/ScrollTop.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ProductProvider>
          <CategorysProvider>
            <BlogProvider>
              <ScrollToTop />
              <Routes>
                <Route path="" element={<App />}>
                  {/* User */}
                  <Route element={<LayoutUser />}>
                    <Route index element={<HomePage />} />
                    <Route path="blogs" element={<BlogPage />} />
                    <Route path="detail/:slug" element={<DetailProduct />} />
                    <Route path="products" element={<ProductList />} />
                    <Route path="products/:slug" element={<ProductList />} />
                    <Route path="register" element={<AuthForm />} />
                    <Route path="login" element={<AuthForm isLogin />} />
                  </Route>
                  {/* Admin */}
                  <Route path="admin" element={<LayoutAdmin />}>
                    <Route path="categorys" element={<CategorysAdmin />} />
                    <Route path="products" element={<ProductsAdmin />} />
                    <Route path="blogs" element={<BlogsAdmin />} />
                    <Route path="blogs/:_id" element={<UpdateBlogAdmin />} />
                  </Route>
                </Route>
              </Routes>
            </BlogProvider>
          </CategorysProvider>
        </ProductProvider>
      </AuthProvider>
      <ToastContainer autoClose={3000} newestOnTop />
    </BrowserRouter>
  </React.StrictMode>
);
