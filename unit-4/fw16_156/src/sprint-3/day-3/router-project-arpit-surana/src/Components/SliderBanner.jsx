import React, { useState } from "react";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import "../CSS/Gradeints.css";
import { SliderApi } from "../API/SliderApi";
import { Link } from "react-router-dom";

function SliderBanner() {
  const [slides] = useState(SliderApi);
  const [activeSlides, setActiveSlides] = useState(0);

  const arrowStyle =
    "rounded-full flex justify-center items-center shadow-sm hover:cursor-pointer hover:bg-gray-400";

  const nextSlide = () => {
    if (activeSlides === slides.length - 1) {
      setActiveSlides(0);
    } else {
      setActiveSlides(activeSlides + 1);
    }
  };

  const prevSlide = () => {
    if (activeSlides === 0) {
      setActiveSlides(slides.length - 1);
    } else {
      setActiveSlides(activeSlides - 1);
    }
  };

  return (
    <div className="parentDiv h-[540px] bg-white flex items-center justify-between">
      {/* LeftArrowDiv */}
      <div className={arrowStyle}>
        <ArrowLeftIcon
          style={{ fontSize: "50px" }}
          onClick={prevSlide}
        ></ArrowLeftIcon>
      </div>
      {/* slideDiv */}
      {slides.map((slide, index) => {
        if (index === activeSlides) {
          return (
            <div
              key={slide.id}
              id={slide.id}
              className="wrapper flex w-[100%] h-[500px] justify-center items-center shadow-2xl rounded-lg border-[#c0c0c0] border-10px overflow-hidden relative"
            >
              <div className="slide flex items-center justify-center h-[100%]">
                <div className="forImage flex flex-1 justify-center items-center h-[100%]">
                  <img
                    className="h-[100%] object-cover"
                    src={slide.src}
                    alt="slider2"
                  />
                </div>
                <div className="desc flex flex-col flex-1 place-items-start justify-center ml-11">
                  <h2 className="text-[60px] text-white">{slide.content.h2}</h2>
                  <p className="text-[35px] text-white">{slide.content.p}</p>

                  <Link to={slide.link}>
                    {" "}
                    <button className="btn my-5 text-white bg-[#8a4af3] rounded-md shadow-md p-3 hover:scale-[1.1] ease-in duration-100 cursor-pointer hover:bg-blue-500">
                      Shop Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        }
      })}
      {/* rightArrowDiv */}
      <div className={arrowStyle}>
        <ArrowRightIcon
          style={{ fontSize: "50px" }}
          onClick={nextSlide}
        ></ArrowRightIcon>
      </div>
    </div>
  );
}

export default SliderBanner;
