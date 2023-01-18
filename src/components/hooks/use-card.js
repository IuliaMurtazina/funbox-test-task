import { useReducer } from "react";

const initialCardState = {
  isSelected: false,
  firstSelect: false,
  deleteCard: false,
};

const cardStateReducer = (state, action) => {
  if (action.type === "SELECT") {
    return {
      isSelected: true,
      firstSelect: state.firstSelect,
      deleteCard: state.deleteCard,
    };
  }
  if (action.type === "DESELECT HOVER") {
    return {
      isSelected: state.isSelected,
      firstSelect: true,
      deleteCard: false,
    };
  }
  if (action.type === "DESELECT CLICK") {
    return {
      isSelected: false,
      firstSelect: state.firstSelect,
      deleteCard: false,
    };
  }
  if (action.type === "DELETE") {
    return {
      isSelected: state.isSelected,
      firstSelect: state.firstSelect,
      deleteCard: true,
    };
  }
  return initialCardState;
};

const useCard = (isAvailable) => {
  const [cardState, dispatch] = useReducer(cardStateReducer, initialCardState);

  const selectCardHandler = () => {
    if (!isAvailable) return;

    if (!cardState.isSelected) {
      dispatch({ type: "SELECT" });
    }
    if (cardState.isSelected) {
      dispatch({ type: "DESELECT CLICK" });
    }
  };

  const deselectCardhandler = () => {
    if (cardState.isSelected) {
      dispatch({ type: "DESELECT HOVER" });
    }
  };

  const deleteCardHandler = () => {
    if (cardState.isSelected && cardState.firstSelect) {
      dispatch({ type: "DELETE" });
    }
  };

  return {
    cardState,
    selectCardHandler,
    deselectCardhandler,
    deleteCardHandler
  }
}

export default useCard;