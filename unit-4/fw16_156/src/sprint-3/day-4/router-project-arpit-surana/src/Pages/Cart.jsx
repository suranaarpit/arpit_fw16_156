import React from "react";
import AnnounceBar from "../Components/AnnounceBar";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Cart() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let res = await fetch("http://localhost:8080/cart");
      let resData = await res.json();
      // console.log("resData:", resData);
      setData(resData);
    };
    getData();
  }, []);

  const notify = () =>
    toast.info("Payment Successfull!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      newestOnTop: false,
      rtl: false,
    });

  const successMessage = () => {
    notify()
  }
  if(!data.length){
    return(
      <div>
         <AnnounceBar />
        <NavBar />
        <hr />
        <img src="https://cdn.dribbble.com/users/1010436/screenshots/11302442/empty_cart.jpg" alt="Empty Cart Image" className="h-[500px] m-auto" />
        <hr />
        <Footer />
      </div>
    )
  }
  else{
    return (
      <>
        <AnnounceBar />
        <NavBar />
        <hr />
        <div>
          <section className="py-4 container">
            <div className="row justify-center">
              <div>
                <div><h5 className="text-indigo-600 text-2xl font-bold text-center">Total Products in Cart: <span className="text-black">({data.length})</span></h5></div>
                {/* <div className="text-xl font-bold mr-5"><h1>Total Amount: ₹2499</h1></div> */}
              </div>
              <br />
              <hr />
              <br />
              {data.map((cartItems) => {
                return (
                  <div key={cartItems.id}>
                    <section className=" hover:bg-gray-100 cursor-pointer flex">
                      <div
                        className="h-24 mx-12"
                        style={{ width: "200px", height: "fit-content" }}
                      >
                        <img src={cartItems.pImg} />
                      </div>
                      <div className="h-24 w-[800px] mt-9">
                        <h1 className="text-xl py-5 text-center underline">{cartItems.pName}</h1>
                      </div>
                      <div className="h-24 mt-9 w-40">
                      <h3 className="text-xl py-5 text-center">{cartItems.pAmount}</h3>
                      </div>
                      <div className="h-24 mt-9 w-40">
                      <h2 className="text-xl py-5 text-center underline font-bold">Remove</h2>
                      </div>
                    </section>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
        <div>
          <button onClick={()=>successMessage()} className="btn mx-[700px] my-5 text-white bg-[#8a4af3] rounded-md shadow-md p-3 hover:scale-[1.1] ease-in duration-100 cursor-pointer hover:bg-blue-500">PAY</button>
        </div>
        <hr />
        <Footer />
        <ToastContainer/>
      </>
    );
  }

  
}

export default Cart;
