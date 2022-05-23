// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// type proDetails = {
//   id: number;
//   product_name: string;
//   category: string;
//   desc: string;
// };

function CardDetails() {
  // const [data, setData] = useState<proDetails[]>([]);
  // const { id } = useParams();

  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       let res = await fetch(`http://localhost:8080/products/${id}`, {
  //         method: "GET",
  //       });
  //       let resData = await res.json();
  //       console.log("resData:", resData);
  //       setData(resData);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   getData();
  // }, [id]);

  return (
    <div className="product">
      {/* <span>
        <h4 className="detailsTitle">{data.product_name}</h4>
      </span>
      <img
        className="detailsImage"
        src="https://media.istockphoto.com/photos/modern-computerlaptop-with-blank-screen-on-counter-barand-window-view-picture-id1157789866?k=20&m=1157789866&s=612x612&w=0&h=1txTQ36VQ8Wc4N2AwrLwMQ9Llb9mleL8FVzQj_apU3E="
        alt="dummyImg"
      />
      {/* Notice the "Price: $". do not edit it. */}
      {/* // <br />
      // <span className="detailsPrice">Price: $ {data.price}</span>
      // <br />
      // <span className="detailsPrice">{data.desc}</span>
      // <div>
      //   <h5>Reviews:</h5> */}

{/*         
        <div className="review">
          <span className="reviewBy">UserName1234</span>
          <span className="reviewDesc">This product is really good etc....</span>
        </div> */}
        
    </div>
  );
}
export { CardDetails };
