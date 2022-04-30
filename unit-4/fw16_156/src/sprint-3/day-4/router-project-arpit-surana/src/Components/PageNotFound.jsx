import React from "react";
import AnnounceBar from "./AnnounceBar";
import NavBar from "./NavBar"
import Error from "../Images/Error.gif"

function PageNotFound() {
  return (
    <>
      <AnnounceBar/>
      <NavBar/>
      <hr />
      <img src={Error} alt="404-Error"/>
    </>
  );
}

export default PageNotFound;
