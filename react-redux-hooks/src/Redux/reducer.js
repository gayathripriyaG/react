import {
  CHANGE_CHECK,
  DECREMENT_COUNTER,
  EDIT_TODO,
  INCREMENT_COUNTER,
} from "./actionTypes";
import { ADD_TODO, DELETE_TODO } from "./actionTypes";

export const initState = {
  //   todos: [{ value: "REACT", status: false, id: v4() }],
  todos: [],
  count: 0,
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_TODO: {
      console.log(state.todos);
      return {
        ...state,
        todos: [...state.todos, payload],
      };
    }
    case DELETE_TODO: {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== payload.id),
      };
    }
    case EDIT_TODO: {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== payload.id),
      };
    }
    case INCREMENT_COUNTER: {
      return {
        ...state,
        count: state.count + 1,
      };
    }
    case DECREMENT_COUNTER: {
      return {
        ...state,
        count: state.count - 1,
      };
    }
    case CHANGE_CHECK: {
      console.log("hcek checking");
      console.log(payload.id);
      console.log(payload.status);

      return {
        ...state,
        todos:
          state.todos.id === payload.id
            ? { ...state.todos, status: !state.todos.status }
            : state.todos

          // state.todos.map((item) => item.id === payload.id ? item.status = !payload.status : item)
      };
    }
    default: {
      return state;
    }
  }
};
