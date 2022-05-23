import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Main.css";

type proData = {
  id: number;
  product_name: string;
  rating: number;
  price: number;
  category: string;
};
// d
function Card() {
  const [data, setData] = useState<proData[]>([]);
  useEffect(() => {
    const getData = async () => {
      let res = await fetch("http://localhost:8080/products");
      let resData = await res.json();
      // console.log('resData:', resData)
      setData(resData);
    };
    getData();
  }, []);

  return (
    <div
      className="item"
      style={{ marginTop: "50px", border: "1px solid black", display: "grid" }}
    >
      {data.map((proI) => {
        return (
          <div key={proI.id} className="appendDiv">
            <img
              src="https://media.istockphoto.com/photos/modern-computerlaptop-with-blank-screen-on-counter-barand-window-view-picture-id1157789866?k=20&m=1157789866&s=612x612&w=0&h=1txTQ36VQ8Wc4N2AwrLwMQ9Llb9mleL8FVzQj_apU3E="
              className="productImage"
              alt="productImg"
              height={250}
              width={250}
            />
            <span>
              <br />
              <Link className="productLink" to={`/${proI.id}`}>
                {/* Product Name */}
                {proI.product_name}
              </Link>
            </span>
            <br />
            <span className="productCategory"> {proI.category}</span>
            <br />

            <span className="productPrice">$ {proI.price}</span>
            <br />
            <span className="productRating">Ratings: {proI.rating}</span>
            <br />

            {/* <div className="itemInCart">Item Already in cart</div>  */}
            <button className="productAddtoCart">Add to cart</button>
          </div>
        );
      })}
    </div>
  );
}

export { Card };
