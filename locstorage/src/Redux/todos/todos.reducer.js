import { ADD_TODO, DELETE_TODO } from "./todos.actionTypes";
import { initState } from "./todos.constants";



export const todosReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_TODO: {
      return {
        ...state,
        data: [...state.data, payload],
      };
    }
    case DELETE_TODO: {
      return {
        ...state,
        data: state.data.filter((todo) => todo.id !== payload.id),
      };
    }

    default: {
      return state;
    }
  }
};
