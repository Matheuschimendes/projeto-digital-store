import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/page";
import ProductListingPage from "../pages/ProductListingPage/page";
import ProductViewPage from "../pages/ProductViewPage/page";
import CategoriesPage from "../pages/CategoriesPage/page";
import MyOrdersPage from "../pages/MyOrdersPage/page";
import LoginPage from "../pages/LoginPage/page";
import RegisterPage from "../pages/RegisterPage/page";


export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/product/:id" element={<ProductViewPage />} />
        <Route path="/categorias" element={<CategoriesPage />} />
        <Route path="/meus-pedidos" element={<MyOrdersPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cadastro" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}
