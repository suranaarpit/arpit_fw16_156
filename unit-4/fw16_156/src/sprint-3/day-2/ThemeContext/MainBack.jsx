import React, { useContext } from "react";
import { MainDiv } from "./Mainstyled";
import { ThemeCon } from "./ThemeContext";

export const MainBack = () => {
    const { theme  } = useContext(ThemeCon)
  return <MainDiv bgcolor = {theme ? "black":"white"}></MainDiv>;
};
