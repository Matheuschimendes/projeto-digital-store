import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/page";
import ProductListingPage from "../pages/ProductListingPage/page";
import ProductViewPage from "../pages/ProductViewPage/page";


export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/product/:id" element={<ProductViewPage />} />
      </Routes>
    </BrowserRouter>
  );
}