export const addList = (title) => {
  return {
    type: "ADD_LIST",
    payload: title,
  };
};

export const addCard = (listID, text) => {
  return {
    type: "ADD_CARD",
    payload: { text, listID },
  };
};

export const sort = (
  droppableIdStart,
  droppableIdEnd,
  droppableIndexStart,
  droppableIndexEnd,
  draggableId,
  type
) => {
  return {
    type: "DRAGG_HAPPENED",
    payload: {
      droppableIdStart,
      droppableIdEnd,
      droppableIndexStart,
      droppableIndexEnd,
      draggableId,
      type
    },
  };
};
