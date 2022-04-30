import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Blog from "../Pages/Blog";
import OurTeam from "../Pages/OurTeam";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import FAQ from "../Pages/FAQ";
import Cart from "../Pages/Cart";
import MainProductDetails from "../Pages/ProductDetails";
import Smartphone from "../Pages/CategoriesProduct/Smartphone";
import Laptops from "../Pages/CategoriesProduct/Laptops";
import Speakers from "../Pages/CategoriesProduct/Speakers";
import Accessories from "../Pages/CategoriesProduct/Accessories";
import SmartphoneRouter from "../Router/SmartphoneRouter";
import LaptopsRouter from "../Router/LaptopsRouter";
import SpeakersRouter from "../Router/SpeakersRouter";
import AccessoriesRouter from "../Router/AccessoriesRouter";
import PageNotFound from "./PageNotFound";

function TechWorld() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/OurTeam" element={<OurTeam />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Detail/:id" element={<MainProductDetails />} />
        <Route path="/Smartphone" element={<Smartphone />} />
        <Route path="/Laptops" element={<Laptops />} />
        <Route path="/Speakers" element={<Speakers />} />
        <Route path="/Accessories" element={<Accessories />} />
        <Route path="/Smartphone_Detail/:id" element={<SmartphoneRouter />} />
        <Route path="/Laptops_Detail/:id" element={<LaptopsRouter />} />
        <Route path="/Speakers_Detail/:id" element={<SpeakersRouter />} />
        <Route path="/Accessories_Detail/:id" element={<AccessoriesRouter />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default TechWorld;
