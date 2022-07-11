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

export const deleteCardAction = (id,listID) => {
return {
    type: 'DELETE_CARD',
    payload: {id, listID}
};
}

export const editCardAction = (id, ListID, newText) => {
  return {
    type: 'EDIT_CARD',
    payload : {id, ListID, newText}
  }
}

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
