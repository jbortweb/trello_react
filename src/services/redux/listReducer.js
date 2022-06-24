let listID = 2;
let cardID = 2;
const initialState = [
    {
        title: 'Añada un titulo',
        id: 0,
        cards: [
            {
                id: 0,
                text: 'Añada una tarea'
            },
            {
                id: 1,
                text: 'Añada una tarea id0'
            }
        ]
    },
    {
        title: 'Añada un nuevo titulo',
        id: 1,
        cards: [
            {
                id: 0,
                text: 'Añada una tarea'
            },
            {
                id: 1,
                text: 'Añada una tarea id1'
            }
        ]
    }
];

const reducer = (state = initialState, action) => {

    switch(action.type){

        case 'ADD_LIST' :
            const newList = {
                title: action.payload,
                cards: [],
                id: listID
            };
            listID += 1;
            return [
                ...state,
                    newList
            ];

        case 'ADD_CARD' :
            const newCard = {
                text: action.payload.text,
                id: cardID
            };
            cardID += 1;

            const newState = state.map(list => {
                if(list.id === action.payload.listID) {
                    return {
                        ...list,
                        cards: [
                            ...list.cards,
                            newCard
                        ]
                    };
                }else {
                    return list;
                }
            });
            return newState;

        default: 
            return state;
        
    }
}
export default reducer;