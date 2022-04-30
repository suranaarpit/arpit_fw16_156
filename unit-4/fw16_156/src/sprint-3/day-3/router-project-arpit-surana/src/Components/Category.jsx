import React from "react";
import { Link } from "react-router-dom";

const Category = ({ item }) => {
  return (
    <div className="flex-1 m-2 shadow-lg rounded-md overflow-hidden relative">
      <img src={item.src} className="w-[100%] h-[250px]" alt="category_img" />
      <div className="flex  w-[100%] h-[100%] left-0 top-0 items-center justify-center flex-col">
        <h2 className="text-black font-medium text-[30px]">{item.title}</h2>
        <Link to={item.link}>
          {" "}
          <button className="btn my-5 text-white bg-[#8a4af3] rounded-md shadow-md p-3 hover:scale-[1.1] ease-in duration-100 cursor-pointer hover:bg-blue-500">
            See More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Category;
