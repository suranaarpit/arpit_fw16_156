import React, { useContext } from "react";
// import { ThemeCon } from "./ThemeContext";
import BasicSwitches from "./Switch";
import { MainBack } from "./MainBack";

export const NavBar2 = () => {
//   const { toggleTheme } = useContext(ThemeCon);
  return (
    <>
      <div>
        <BasicSwitches></BasicSwitches>
        <MainBack></MainBack>
      </div>
    </>
  );
};
