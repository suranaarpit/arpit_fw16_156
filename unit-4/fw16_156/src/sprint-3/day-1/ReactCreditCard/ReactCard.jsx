import React from "react";
import { CardDiv } from "./ReactCard.styled";

const Card = ({ name, number, month, year, cvv }) => {
  let num = "";
  if (number) {
    for (let i = 0; i < number.length; i++) {
      i === 3 || i === 7 || i === 11
        ? (num += number[i] + " ")
        : (num += number[i]);
    }
  }
  return (
    <>
      <CardDiv>
        <div style={{ display: "flex", justifyContent: "space-around", background: "crimson" }}>
          <img
            height="40px"
            src="https://flyclipart.com/thumb2/chip-logo-png-transparent-vector-624520.png"
            alt="chip"
          />
          <img
            height="50px"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0f/RuPay-Logo.png"
            alt="visa-img"
          />
        </div>
        <h2 style={{background: "crimson"}}>Number: </h2>
        <p style={{background: "black"}}>{num}</p>

        <div style={{background: "crimson"}}> 
          <h2 style={{background: "crimson"}} >Name: </h2>
          <h4 style={{background: "black"}}>{name}</h4>

          <h2 style={{background: "crimson"}}>EXPIRY: </h2>
          <h4 style={{background: "black"}}>
            {month}
          </h4>

          <h2 style={{background: "crimson"}}>CVV: </h2>
          <h4 style={{background: "black"}}>{cvv}</h4>
        </div>
      </CardDiv>
    </>
  );
};

export default Card;
