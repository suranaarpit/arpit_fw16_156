import React from "react";
import Contact from "./contact";
import Download from "./download";
import Help from "./help";
import Home from "./home";
import Join from "./JoinUs";
import Login from "./login";
import Search from "./search";
import Setting from "./setting";

const Imp = () => {
  return (
    <>
      <Join />
      <Setting />
      <br />
      <Login />
      <Contact />
      <br />
      <Search />
      <Help />
      <br />
      <Home />
      <Download />
    </>
  );
};

export default Imp;
