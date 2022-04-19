import React from "react";

const Style = {
  width: "120px",
  outline: "none",
  border: "none",
  padding: "10px",
  borderRadius: "20px",
  color: "white",
  textTransform: "uppercase",
  margin: "10px",
};

const BtnProps = ({ name, background_color }) => {
  return (
    <button style={{ ...Style, backgroundColor: background_color }}>{name}</button>
  );
};

export default BtnProps;