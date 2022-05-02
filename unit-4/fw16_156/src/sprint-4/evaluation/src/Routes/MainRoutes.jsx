import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import { Navbar } from "../components/Navbar";
import { Products } from "../components/Products";
import PageNotFound from "../components/PageNotFound";

const MainRoutes = () => {
  return (
    <>
      {/* Navbar and all the routes */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};
export { MainRoutes };