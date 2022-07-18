
let listID = 0;
let cardID = 0;
const initialState = [
  // {
  //   title: 'lista demo 1',
  //   id: 1,
  //   cards: [
  //       {
  //           id: 1,
  //           text: 'Carta tarea1'
  //       },
  //       {
  //           id: 2,
  //           text: 'Carta tarea2'
  //       }
  //   ]
  // },
  
];

const listReducer = (state = initialState, action) => {
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

      const { listID, id } = action.payload;
      return state.map(({...list}) => {
        if(list.id === listID){
          list.cards = list.cards.filter(card => card.id !== id);
        }
        return list;
      })
    }
    case 'EDIT_CARD': {
      const { id, listID, newText} = action.payload;
      return state.map(({...list}) => {
         if(list.id === listID) {
             const newCards = list.cards.map(({...card}) =>{
                 if(card.id === id){
                    card.text = newText;
                 }
                 return card
             })
             list.cards = newCards;

         }
         return list;
     })
    }    
   
    case "DELETE_LIST": {
      
      const {listID} = action.payload;
      const listDelete = state.filter(list => list.id !== listID);       
      
      return listDelete

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
export default listReducer;
