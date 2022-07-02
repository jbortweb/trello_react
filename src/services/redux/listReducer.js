let listID = 1;
let cardID = 1;
const initialState = {
  list: [
  {
    title: "Añada un titulo",
    id: `list-${0}`,
    cards: [
      {
        id: `card-${0}`,
        text: "Añada una tarea",
      },
      
    ],
  }
]
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_LIST":
      const newList = {
        title: action.payload,
        cards: [],
        id: `list-${listID}`,
      };
      listID += 1;
      return [...state, newList];

    case "ADD_CARD": {
      const newCard = {
        text: action.payload.text,
        id: `card-${cardID}`,
      };
      cardID += 1;

      const newState = state.map((list) => {
        if (list.id === action.payload.listID) {
          return {
            ...list,
            cards: [...list.cards, newCard],
          };
        } else {
          return list;
        }
      });
      return newState;
    }

    case 'DELETE_CARD': {

      const { id } = action.payload;

      const cards = state;
      const newCards = cards.id.filter(cardID => cardID !== id);

      return { ...state, cards: { ...state, cards: newCards } };
    }

    case "DRAGG_HAPPENED": {
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        type
      } = action.payload;

      const newState = [...state];

      //Arrastre entre listas

      if (type === 'list') {
        const list = newState.splice(droppableIndexStart, 1);
        newState.splice(droppableIndexEnd, 0, ...list); 
        return newState;
      }

      //Arrastre en la misma lista

      if (droppableIdStart === droppableIdEnd) {
        const list = state.find((list) => droppableIdStart === list.id);
        const card = list.cards.splice(droppableIndexStart, 1);
        list.cards.splice(droppableIndexEnd, 0, ...card);
      }

      //Arrastre en otra lista
      if (droppableIdStart !== droppableIdEnd) {
        const listStart = state.find((list) => droppableIdStart === list.id);
        const card = listStart.cards.splice(droppableIndexStart, 1);
        const listEnd = state.find((list) => droppableIdEnd === list.id);
        listEnd.cards.splice(droppableIndexEnd, 0, ...card);
      }
      return newState;   
    }
    
    default:
      return state;
  }
};
export default reducer;
