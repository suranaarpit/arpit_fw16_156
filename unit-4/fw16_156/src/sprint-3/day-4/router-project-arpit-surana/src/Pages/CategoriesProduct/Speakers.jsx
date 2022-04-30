import React from "react";
import AnnounceBar from "../../Components/AnnounceBar";
import NavBar from "../../Components/NavBar";
import Categories from "../../Components/Categories";
import DealOfTheDay from "../DealOfTheDay";
import Stats from "../Stats";
import Footer from "../../Components/Footer";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Speakers() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let res = await fetch("http://localhost:8080/speakers");
      let resData = await res.json();
      // console.log("resData:", resData);
      setData(resData);
    };
    getData();
  }, []);
  return (
    <>
      <div>
        <AnnounceBar />
        <NavBar />
        <hr />
        <Categories />
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="text-2xl font-bold title-font mb-4 text-indigo-600 underline">
            SPEAKERS
          </h1>
        </div>
        <section className="text-gray-600 body-font">
          <div className="container px-5 mx-auto">
            <div className="flex flex-wrap -m-4">
              {data.map((speakersItems) => {
                return (
                  <div
                    key={speakersItems.id}
                    className="lg:w-1/4 md:w-1/2 p-4 w-full"
                  >
                    <Link
                      to={`/Speakers_Detail/${speakersItems.id}`}
                      className="block relative h-48 rounded overflow-hidden"
                    >
                      <img
                        alt="ecommerce"
                        className="object-cover object-center w-full h-full block"
                        src={speakersItems.pImg}
                      />
                    </Link>
                    <div className="mt-4">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        {speakersItems.category}
                      </h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">
                        {speakersItems.pName}
                      </h2>
                      <p className="mt-1">{speakersItems.pAmount}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <br />
        <hr />
        <section>
          <DealOfTheDay />
        </section>
        <hr />
        <section>
          <Stats />
        </section>
        <hr />
        <Footer />
      </div>
    </>
  );
}

export default Speakers;
