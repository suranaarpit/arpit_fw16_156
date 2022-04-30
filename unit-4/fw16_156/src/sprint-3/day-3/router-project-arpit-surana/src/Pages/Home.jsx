import React from "react";
import AnnounceBar from "../Components/AnnounceBar";
// import Categories from "../Components/Categories";
import NavBar from "../Components/NavBar";
import SliderBanner from "../Components/SliderBanner";
import "../CSS/WebScroll.css";
import MainPageProducts from "../Components/MainPageProducts";
import DealOfTheDay from "./DealOfTheDay";
import Advert from "./Advert";
import Stats from "./Stats";
import Footer from "../Components/Footer";

function Home() {
  return (
    <div>
      <AnnounceBar></AnnounceBar>
      <NavBar></NavBar>
      <SliderBanner></SliderBanner>
      <br />
      <MainPageProducts/>
      <br />
      <hr />
      <section>
        <DealOfTheDay />
      </section>
      <br />
      <hr />
      <section>
        <Advert />
      </section>
      <hr />
      <section>
        <Stats />
      </section>
      <hr />
      <Footer />
    </div>
  );
}

export default Home;
