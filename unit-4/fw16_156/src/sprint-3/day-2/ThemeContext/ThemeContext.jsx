import React, { createContext, useState } from "react";

export const ThemeCon = createContext();
export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(false);

  const toggleTheme = () => {
    setTheme(!theme)
  };

  const value = { theme, toggleTheme };
  return <ThemeCon.Provider value={value}>{children}</ThemeCon.Provider>;
};
