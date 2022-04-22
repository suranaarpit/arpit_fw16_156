import React from "react";
const RestaurentCard = ({
    category,
    total_votes,
    total_reviews,
    total_cost,
    payment_methods,
    img,
    rating,
    name,
  }) => {
    const { card, cash, upi } = payment_methods;
  
    return (
      <div className="res_card">
        <div className="upperCard">
          <img src={img} alt={img} />
          <div className="details">
            <h2>{name}</h2>
            <p className="muted_text">{category}</p>
            <p className="muted_text">{`Cost ₹${total_cost} for one`}</p>
            <p className="min">Min ₹50 Up to 30 min </p>
            <p className="accepts">
              Accepts
              {card && cash && upi
                ? " all payments"
                : cash && card
                ? " cash & card payments only"
                : cash
                ? " cash payments only"
                : card
                ? " card payments only"
                : " upi payments only"}
            </p>
          </div>
          <div className="right_card">
            <h3>{rating}</h3>
            <p className="t_vr">{total_votes} votes</p>
            <p className="t_vr">{total_reviews} reviews</p>
          </div>
        </div>
        <div className="lowerCard">
          <div className="divEmp"></div>
          <button className="orderOn">Order Online</button>
        </div>
      </div>
    );
  };
  
  export default RestaurentCard;