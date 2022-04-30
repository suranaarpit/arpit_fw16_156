import React from "react";
import AnnounceBar from "../Components/AnnounceBar";
import NavBar from "../Components/NavBar";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";

function OurTeam() {
  return (
    <div>
      <AnnounceBar />
      <NavBar />
      <hr />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-14 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-2xl font-medium title-font mb-4 text-gray-900">
              OUR TEAM
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat,
              nostrum. Fuga ad corporis iure, corrupti autem iusto tempore
              dignissimos porro sequi, sunt excepturi magni reprehenderit
              consequuntur sit cumque quo repellat.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src="https://www.jamesbondlifestyle.com/sites/default/files/ckeditor/images/news/150129-Pierce-Brosnan-for-Speake-Marin-1.jpg"
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    Mark Nicholus
                  </h2>
                  <h3 className="text-gray-500 mb-3">Founder & CEO</h3>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit,
                    Saepe explicabo.
                  </p>
                  <span className="inline-flex">
                    < Link to={"#"} className="text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </Link>
                    < Link to={"#"} className="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </Link>
                    < Link to={"#"} className="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </Link>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src="https://menshairstyle.funtouzy.com/wp-content/uploads/2019/12/40-Amazing-Professional-Hairstyles-for-Men-Mens-professional-haircuts-2020-Short-Tousled-Hairstyle-500x499.jpg"
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    Holden Caulfield
                  </h2>
                  <h3 className="text-gray-500 mb-3">Marketing Manager</h3>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit,
                    Saepe explicabo.
                  </p>
                  <span className="inline-flex">
                    < Link to={"#"} className="text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </Link>
                    < Link to={"#"} className="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </Link>
                    < Link to={"#"} className="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </Link>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src="https://img.freepik.com/free-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg?w=2000"
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    Atticus Finch
                  </h2>
                  <h3 className="text-gray-500 mb-3">Senior Software Developer</h3>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit,
                    Saepe explicabo.
                  </p>
                  <span className="inline-flex">
                    < Link to={"#"} className="text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </Link>
                    < Link to={"#"} className="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </Link>
                    < Link to={"#"} className="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </Link>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    Henry Letham
                  </h2>
                  <h3 className="text-gray-500 mb-3">Senior UI/UX Designer</h3>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit,
                    Saepe explicabo.
                  </p>
                  <span className="inline-flex">
                    < Link to={"#"} className="text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </Link>
                    < Link to={"#"} className="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </Link>
                    < Link to={"#"} className="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src="data:image/jpeg;base64,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"
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    Tom Jean
                  </h2>
                  <h3 className="text-gray-500 mb-3">CTO</h3>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit,
                    Saepe explicabo.
                  </p>
                  <span className="inline-flex">
                    < Link to={"#"} className="text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </Link>
                    < Link to={"#"} className="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </Link>
                    < Link to={"#"} className="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </Link>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src="https://aboutfaceskincare.com/wp-content/uploads/2019/11/About-Face-Skincare1172_pp-1-e1574785727292.jpg"
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    Kim Kardashian
                  </h2>
                  <h3 className="text-gray-500 mb-3">Vice President</h3>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit,
                    Saepe explicabo.
                  </p>
                  <span className="inline-flex">
                    < Link to={"#"} className="text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </Link>
                    < Link to={"#"} className="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </Link>
                    < Link to={"#"} className="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </Link>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src="https://wellgroomedgentleman.com/media/images/Cool_Short_Haircuts_for_Men.2e16d0ba.fill-200x200-c100.jpg"
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    Jony Kinch
                  </h2>
                  <h3 className="text-gray-500 mb-3">Software Developer</h3>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit,
                    Saepe explicabo.
                  </p>
                  <span className="inline-flex">
                    < Link to={"#"} className="text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </Link>
                    < Link to={"#"} className="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </Link>
                    < Link to={"#"} className="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </Link>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src="https://res.cloudinary.com/demo/image/upload/c_fill,w_100,h_100,g_face,dpr_2.0/smiling_man.jpg"
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    Macao Henry
                  </h2>
                  <h3 className="text-gray-500 mb-3">Software Developer</h3>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit,
                    Saepe explicabo.
                  </p>
                  <span className="inline-flex">
                    < Link to={"#"} className="text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </Link>
                    < Link to={"#"} className="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </Link>
                    < Link to={"#"} className="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src="https://www.byrdie.com/thmb/osJ_pwelu_BO04LbzM-NumhZY7Q=/200x200/filters:no_upscale():max_bytes(150000):strip_icc()/BarretWertz-5e1476ef95a94c479733c2336a6b6a0d.jpg"
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    Jhon Dowad
                  </h2>
                  <h3 className="text-gray-500 mb-3">Co-Founder</h3>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit,
                    Saepe explicabo.
                  </p>
                  <span className="inline-flex">
                    < Link to={"#"} className="text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </Link>
                    < Link to={"#"} className="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </Link>
                    < Link to={"#"} className="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </Link>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src="https://www.byrdie.com/thmb/KiLoKcONwjn2pNaVLZdE8sNtcLU=/200x200/filters:no_upscale():max_bytes(150000):strip_icc()/garrett-c2ef6b4a13334b789a6439cf724255b4.jpg"
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    William Reachards
                  </h2>
                  <h3 className="text-gray-500 mb-3">Marketing Head</h3>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit,
                    Saepe explicabo.
                  </p>
                  <span className="inline-flex">
                    < Link to={"#"} className="text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </Link>
                    < Link to={"#"} className="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </Link>
                    < Link to={"#"} className="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </Link>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src="https://aboutfaceskincare.com/wp-content/uploads/2015/06/BP-Mill-10-20-16.jpg"
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    Saria Finch
                  </h2>
                  <h3 className="text-gray-500 mb-3">UI/UX Designer</h3>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit,
                    Saepe explicabo.
                  </p>
                  <span className="inline-flex">
                    < Link to={"#"} className="text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </Link>
                    < Link to={"#"} className="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </Link>
                    < Link to={"#"} className="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </Link>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src="https://womenandchildcare.com/wp-content/uploads/2022/01/Professional-women-637233964_.jpg"
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    Jessica
                  </h2>
                  <h3 className="text-gray-500 mb-3">Software Developer</h3>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit,
                    Saepe explicabo.
                  </p>
                  <span className="inline-flex">
                    < Link to={"#"} className="text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </Link>
                    < Link to={"#"} className="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </Link>
                    < Link to={"#"} className="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr />
      <Footer />
    </div>
  );
}

export default OurTeam;
