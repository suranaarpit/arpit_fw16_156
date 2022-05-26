import React from "react";
import "./btn.css";

const Button = ({ Varient, colorScheme, children, onClick }) => {
  return (
    <button data-testid="customBtn" onClick={onClick} className={`btn ${colorScheme || "red"} ${Varient || "ghost"}`}>
      {children}
    </button>
  );
};

export default Button;
