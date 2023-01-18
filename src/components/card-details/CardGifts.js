const CardGifts = (props) => {
  const getGiftLocale = () => {
    switch (props.numberOfGifts) {
      case 0: {
        return "мышь";
      }
      case 2: {
        return "мыши";
      }
      case 5: {
        return "мышей";
      }
      default: {
        return "мышь";
      }
    }
  }

  return (
    <span>
      <span>{props.numberOfGifts ? props.numberOfGifts : ""}</span>{" "}
      {getGiftLocale()} в подарок
    </span>
  );
};
export default CardGifts;
