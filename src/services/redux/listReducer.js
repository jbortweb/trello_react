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
                text: 'Añada una tarea id1'
            }
        ]
    },
    {
        title: 'Añada un nuevo titulo',
        id: 0,
        cards: [
            {
                id: 0,
                text: 'Añada una tarea'
            },
            {
                id: 1,
                text: 'Añada una tarea id2'
            }
        ]
    }
];

const reducer = (state = initialState, action) => {

    switch(action.type){
       
        default: 
            return state;
        
    }
}
export default reducer;