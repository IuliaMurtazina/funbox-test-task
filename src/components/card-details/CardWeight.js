import React from "react";
const CardWeight = ({ weight }) => {
  return (
    <div className="card__weight">
      <span>{weight}</span>
      <span>кг</span>
    </div>
  );
};

export default CardWeight;
