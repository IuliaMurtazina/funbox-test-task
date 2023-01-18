const CardItem = (props) => {
  return (
    <div
      className={`card-item ${props.cardState.isSelected ? "selected" : ""} ${
        !props.data.isAvailable ? "enabled" : ""
      }`}
      onClick={props.onSelect}
      onMouseLeave={props.onHoverOff}
      onMouseEnter={props.onHoverOn}
    >{props.children}</div>
  );
};

export default CardItem;
