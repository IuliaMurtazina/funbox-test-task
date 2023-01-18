import React from "react";
import CardDescription from "./CardDescription";
import CardGifts from "./CardGifts";

const CardInformation = ({data, cardState}) => {
  return (
    <div className="card__information">
      <CardDescription deleteCard={cardState.deleteCard} />
      <span className="card__title">Нямушка</span>
      <span className="card__taste">{data.taste}</span>
      <div className="card__quantity">
        <span>
          <span>{data.numberOfServings}</span> порций
        </span>
        <CardGifts numberOfGifts={data.numberOfGifts} />
        {data.isCustomerHappy && <span>заказчик доволен</span>}
      </div>
    </div>
  );
};

export default CardInformation;
