import catPicture from "../assets/images/cat-picture.png";
import CardInformation from "./card-details/CardInformation";
import CardWeight from "./card-details/CardWeight";


const CardContent = ({data, cardState}) => {
  return (
    <div className="card">
      <CardInformation data={data} cardState={cardState} />
      <img src={catPicture} alt="Изображение кошки" className="card__img"></img>
      <CardWeight weight={data.weight} />
    </div>
  );
};

export default CardContent;
