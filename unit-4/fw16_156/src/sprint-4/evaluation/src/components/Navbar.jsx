import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav style={{ backgroundColor: "#8000ff", padding: 20 }}>
      {/* 
                all the links in navbar,
      IMPORTANT: Link should match as mentioned in problem statement 
      */}
      <ul className="flex flex-1 gap-3 justify-center">
        <NavLink to={"/"} className="font-bold text-white active:text-black underline">Home</NavLink>
        <NavLink to={"/about"} className="font-bold text-white active:text-black underline">About</NavLink>
        <NavLink to={"/products"} className="font-bold text-white active:text-black underline">Products</NavLink>
        <NavLink to={"/products/men"} className="font-bold text-white active:text-black underline">Men</NavLink>
        <NavLink to={"/products/women"} className="font-bold text-white active:text-black underline">Women</NavLink>
        <NavLink to={"/products/kids"} className="font-bold text-white active:text-black underline">Kids</NavLink>
        <NavLink to={"/products/homedecor"} className="font-bold text-white active:text-black underline">Home Decor</NavLink>
      </ul>
    </nav>
  );
};
