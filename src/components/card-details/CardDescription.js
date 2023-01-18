import React from "react";
const CardDescription = (props) => {
  return (
    <>
      {props.deleteCard && (
        <span className="card__description-selected">Котэ не одобряет?</span>
      )}
      {!props.deleteCard && (
        <span className="card__description">Сказочное заморское яство</span>
      )}
    </>
  );
};

export default CardDescription;
