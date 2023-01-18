import CardCaption from "./card-details/CardCaption";
import CardBackground from "./CardBackground";
import CardContent from "./CardContent";
import CardOverlay from "./CardOverlay";
import useCard from "./hooks/use-card";
import CardItem from "./CardItem";

const Card = ({ data }) => {
  const {
    cardState,
    selectCardHandler,
    deselectCardhandler,
    deleteCardHandler,
  } = useCard(data.isAvailable);

  return (
    <CardItem
      data={data}
      cardState={cardState}
      onSelect={selectCardHandler}
      onHoverOff={deselectCardhandler}
      onHoverOn={deleteCardHandler}
    >
      {!data.isAvailable && <CardOverlay />}
      <CardBackground />
      <CardContent data={data} cardState={cardState} />
      <CardCaption
        data={data}
        isSelected={cardState.isSelected}
        onSelect={selectCardHandler}
      />
    </CardItem>
  );
};

export default Card;
