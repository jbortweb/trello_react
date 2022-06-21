const initialState = {
    todos: [
        {
            text: 'tarea demo 1',
            id: 1,
            completed: true,
          },
          {
            text: 'tarea demo 2',
            id: 2,
            completed: false,
          },
          {
            text: 'tarea demo 3',
            id: 3,
            completed: true,
          },
    ],
};

function reducer(state = initialState, action) {
    console.log('reducer. action:',action);

    switch (action.type){
        case 'ADD_TODO':
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        text:action.payload,
                        completed: action.completed ||false,
                        id: action.id,
                    },
                ],
            };
        case 'DELETE_TODO':
            return {
                ...state,
                todos: state.todos.filter(
                    (todo) => 
                        todo.id !== action.payload,
                ),
            };
            
            default:
                return state;

    }
}
export default reducer;