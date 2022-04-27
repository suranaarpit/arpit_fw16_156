import React from "react";
import AuthContextProvider from "./AuthContext/AuthContext";
import { NavBar } from "./AuthContext/NavBar";
// import { NavBar2 } from "./ThemeContext/NavBar2";
// import { ThemeContextProvider } from "./ThemeContext/ThemeContext";

export const Sprint3D2 = () => {
  return (
    <>
      <AuthContextProvider>
        <NavBar />
      </AuthContextProvider>
{/* 
      <ThemeContextProvider>
        <NavBar2 />
      </ThemeContextProvider> */}
    </>
  );
};
