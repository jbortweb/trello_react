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

export const editCardAction = (id, listID, newText) => {
  return {
    type: 'EDIT_CARD',
    payload : {id, listID, newText}
  }
}

export const deleteListAction = (listID) => {
  return {
      type: 'DELETE_LIST',
      payload: {listID}
  };
  }
  export const editListAction = (listID, newText) => {
    return {
      type: 'EDIT_LIST',
      payload : {listID, newText}
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
