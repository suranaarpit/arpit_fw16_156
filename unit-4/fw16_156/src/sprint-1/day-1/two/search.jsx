import React from "react";

const commonStyle = {
  backgroundColor: "#80B23D",
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

const Search = () => {
  return <button style={commonStyle}>Search</button>;
};

export default Search;