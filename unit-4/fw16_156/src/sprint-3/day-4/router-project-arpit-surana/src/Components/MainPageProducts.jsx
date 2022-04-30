import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function MainPageProducts() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let res = await fetch("http://localhost:8080/mainPage");
      let resData = await res.json();
      // console.log("resData:", resData);
      setData(resData);
    };
    getData();
  }, []);
  return (
    <>
      <div className="flex flex-col text-center w-full mb-20">
        <h1 className="text-2xl font-bold title-font text-indigo-600 underline">
          TOP SELLING PRODUCTS
        </h1>
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 mx-auto">
          <div className="flex flex-wrap -m-4">
            {data.map((mainProducts) => {
              return (
                <div
                  key={mainProducts.id}
                  className="lg:w-1/4 md:w-1/2 p-4 w-full"
                >
                  <Link
                    to={`/Detail/${mainProducts.id}`}
                    className="block relative h-48 rounded overflow-hidden"
                  >
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src={mainProducts.pImg}
                    />
                  </Link>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      {mainProducts.category}
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      {mainProducts.pName}
                    </h2>
                    <p className="mt-1">{mainProducts.pAmount}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default MainPageProducts;
