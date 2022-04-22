import React from "react";
import UpperCard from "./Upper";
import "./Card.css";
import MiddleCard from "./Middle";
import LowerCard from "./Lower";

const Card = ({ color, data }) => {
  return (
    <div className="card" style={{ backgroundColor: color }}>
      <UpperCard {...data} />
      <MiddleCard {...data} />
      <LowerCard {...data} />
    </div>
  );
};

export default Card;
