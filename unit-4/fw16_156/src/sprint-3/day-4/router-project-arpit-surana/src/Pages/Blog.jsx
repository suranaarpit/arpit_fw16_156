import React from "react";
import AnnounceBar from "../Components/AnnounceBar";
import NavBar from "../Components/NavBar";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";

function Blog() {
  return (
    <div>
      <AnnounceBar />
      <NavBar />
      <hr />
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-14 mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-100">
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700">
                  Smartphone
                </span>
                <img
                  className="h-30 w-20 my-2"
                  src="https://i.gadgets360cdn.com/products/large/motorola-edge-30-pro-657x800-1645713862.jpg?downsize=240:*&output-quality=80&output-format=webp"
                  alt=""
                ></img>
                <span className="mt-1 text-gray-500 text-sm">
                  26 April 2022
                </span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                  Motorola Edge 30 Pro
                </h2>
                <p className="leading-relaxed">
                  The Motorola Edge 30 Pro is the first smartphone in the new
                  Edge 30 series. It sports a massive 6.7-inch full-HD+ AMOLED
                  display with a maximum refresh rate of 144Hz. Motorola has
                  added stereo speakers into the mix, which will improve the
                  overall content watching experience.
                </p>
                <Link
                  to={"/"}
                  className="text-indigo-500 inline-flex items-center mt-4"
                >
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700">
                  Smartphone
                </span>
                <img
                  className="h-30 w-20 my-2"
                  src="https://i.gadgets360cdn.com/products/large/iqoo-9-se-792x800-1645602551.jpg?downsize=240:*&output-quality=80&output-format=webp"
                  alt=""
                ></img>
                <span className="mt-1 text-gray-500 text-sm">
                  24 March 2022
                </span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                  iQOO 9 SE
                </h2>
                <p className="leading-relaxed">
                  The iQoo 9 SE has a polycarbonate back panel and mid-frame but
                  feels and looks quite premium. There's no official IP rating,
                  but you get two high-quality stereo speakers that sound great
                  while streaming video and playing games.
                </p>
                <Link
                  to={"/"}
                  className="text-indigo-500 inline-flex items-center mt-4"
                >
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700">
                  Smartphone
                </span>
                <img
                  className="h-30 w-20 my-2"
                  src="https://m.media-amazon.com/images/I/71MmJNwZcML._SX679_.jpg"
                  alt=""
                ></img>
                <span className="text-sm text-gray-500">3 September 2021</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                  Samsung Galaxy Z Fold 3 Review: A Refined Novelty
                </h2>
                <p className="leading-relaxed">
                  The Samsung Galaxy Z Fold 3 is the company's most ambitious,
                  productivity-centric smartphone yet. This third-generation
                  model feels more refined thanks to improvements such as an
                  IPX8 rating and S Pen support. It has all the makings of a
                  proper flagship on paper but can it be an option for everyday
                  use or is it still a novelty item? For a lot of people with
                  deep pockets (both figuratively and literally), the big
                  question still remains – does it make sense buying the Galaxy
                  Z Fold 3 over something like the Samsung Galaxy S21 Ultra or
                  an iPhone 12 Pro Max?
                </p>
                <Link
                  to={"/"}
                  className="text-indigo-500 inline-flex items-center mt-4"
                >
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <Footer/>

    </div>
  );
}

export default Blog;
