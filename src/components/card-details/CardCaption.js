import React from "react";

const CardCaption = ({ data, isSelected, onSelect }) => {
  return (
    <>
      {!isSelected && data.isAvailable && (
        <div className="card__caption">
          <p className="card__caption-text">Чего сидишь? Порадуй котэ,</p>
          <button className="card__order-link" href="#" onClick={onSelect}>
            купи
          </button>
        </div>
      )}
      {isSelected && <p className="card__caption-text">{data.description}</p>}
      {!data.isAvailable && (
        <p className="card__caption-ended">
          Печалька, {data.taste} закончился.
        </p>
      )}
    </>
  );
};

export default CardCaption;
