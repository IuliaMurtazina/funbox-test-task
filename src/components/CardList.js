import React from "react";
import Card from "./Card";

const CardList = () => {
  const feedData = [
    {
      taste: "с фуа-гра",
      numberOfServings: 10,
      numberOfGifts: 0,
      isCustomerHappy: false,
      weight: 0.5,
      id: "f1",
      description: "Печень утки разварная с артишоками",
      isAvailable: true,
    },
    {
      taste: "с рыбой",
      numberOfServings: 40,
      numberOfGifts: 2,
      isCustomerHappy: false,
      weight: 2,
      id: "f2",
      description: "Головы щучьи с чесноком да свежайшая семгушка",
      isAvailable: true,
    },
    {
      taste: "с курой",
      numberOfServings: 100,
      numberOfGifts: 5,
      isCustomerHappy: true,
      weight: 5,
      id: "f3",
      description: "Филе из цыплят с трюфелями в бульоне",
      isAvailable: false,
    },
  ];

  return (
    <div className="card-list">
      {feedData.map((feed) => (
        <Card data={feed} key={feed.id} />
      ))}
    </div>
  );
};

export default CardList;
