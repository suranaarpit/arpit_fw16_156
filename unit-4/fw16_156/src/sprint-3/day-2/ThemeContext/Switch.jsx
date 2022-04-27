import * as React from "react";
import Switch from "@mui/material/Switch";
import { ThemeCon } from "./ThemeContext";

const label = { inputProps: { "aria-label": "Switch demo" } };

export default function BasicSwitches() {
  const { toggleTheme } = React.useContext(ThemeCon);
  return (
    <div>
      <Switch onClick={toggleTheme} {...label} />
    </div>
  );
}
