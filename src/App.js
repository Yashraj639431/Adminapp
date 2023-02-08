import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import ForgotPassword from "./pages/ForgotPassword";
import MainLayout from "./components/MainLayout";
import Enquiries from "./pages/Enquiries";
import BlogList from "./pages/BlogList";
import BlogCatList from './pages/BlogCatList';
import Orders from './pages/Order';
import Customers from './pages/Customers';
import ColorList from './pages/ColorList';
import CategoryList from './pages/CategoryList';
import BrandList from './pages/BrandList';
import ProductList from './pages/ProductList';
import AddBlog from './pages/AddBlog';
import AddBlogCat from './pages/AddBlogCat';
import AddCat from './pages/AddCat';
import AddColor from './pages/AddColor';
import AddBrand from './pages/AddBrand';
import AddProduct from './pages/AddProduct';
import AddCoupon from './pages/AddCoupon';
import CouponList from './pages/CouponList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="admin" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="blog-list" element={<BlogList />} />
            <Route path="enquiries" element={<Enquiries />} />
            <Route path="blog" element={<AddBlog />} />
            <Route path="coupon" element={<AddCoupon />} />
            <Route path="coupon-list" element={<CouponList />} />
            <Route path="category" element={<AddCat />} />
            <Route path="category/:id" element={<AddCat />} />
            <Route path="blog-category" element={<AddBlogCat />} />
            <Route path="blog-category/:id" element={<AddBlogCat />} />
            <Route path="blog-category-list" element={<BlogCatList />} />
            <Route path="orders" element={<Orders />} />
            <Route path="customers" element={<Customers />} />
            <Route path="color" element={<AddColor />} />
            <Route path="color/:id" element={<AddColor />} />
            <Route path="color-list" element={<ColorList />} />
            <Route path="category-list" element={<CategoryList />} />
            <Route path="brand" element={<AddBrand />} />
            <Route path="brand/:id" element={<AddBrand />} />
            <Route path="brand-list" element={<BrandList />} />
            <Route path="product" element={<AddProduct />} />
            <Route path="product-list" element={<ProductList />} />
          </Route>
      </Routes>
    </Router>
  );
}

export default App;
