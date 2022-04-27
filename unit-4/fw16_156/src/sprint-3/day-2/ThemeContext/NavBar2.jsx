import React, { useContext } from "react";
// import { ThemeCon } from "./ThemeContext";
import BasicSwitches from "./Switch";
import { MainBack } from "./MainBack";
import "./NavBar.css";

export const NavBar2 = () => {
  //   const { toggleTheme } = useContext(ThemeCon);
  return (
    <>
      <div id="navbar">
        <BasicSwitches></BasicSwitches>
        <MainBack></MainBack>
      </div>
    </>
  );
};
