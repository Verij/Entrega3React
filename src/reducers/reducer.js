import { REMOVE_TAREAS, TODO_LIST } from "../types/types";


const initialState = {
  todos: []
};

const todosReducer = (state = initialState, action) => {
    switch (action.type) {
      case TODO_LIST:
        const nuevoTodo = {
          id: +new Date(),
          tarea: action.payload,
        };

        const addedTodos = [...state.todos, nuevoTodo];

        return {
          ...state,
          todos: addedTodos, 
        };

        case REMOVE_TAREAS:
          
          return initialState;

        default:
          return state;
    }
}

export default todosReducer;