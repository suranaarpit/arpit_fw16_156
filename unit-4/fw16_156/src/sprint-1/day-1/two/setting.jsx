import React from "react";

const commonStyle = {
  backgroundColor: "#bdc3c7",
  width: "120px",
  outline: "none",
  border: "none",
  padding: "10px",
  borderRadius: "20px",
  color: "white",
  textTransform: "uppercase",
  margin: "10px",
  "margin-left": "10px",
};

const Setting = () => {
  return <button style={commonStyle}>Settings</button>;
};

export default Setting;
