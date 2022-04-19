
import React from "react";

const commonStyle = {
  backgroundColor: "#FFE000",
  width: "120px",
  outline: "none",
  border: "none",
  padding: "10px",
  borderRadius: "20px",
  color: "white",
  textTransform: "uppercase",
  margin: "10px",
  "margin-left": "500px",
};

const Login = () => {
  return <button style={commonStyle}>Login</button>;
};

export default Login;