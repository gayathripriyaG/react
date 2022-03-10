import { combineReducers } from "redux";
import { authReducer } from "./auth/auth.reducer";
import { counterReducer } from "./counter/counter.reducer";
import { todosReducer } from "./todos/todos.reducer";

export const rootReducer = combineReducers({
  todos: todosReducer,
  counter: counterReducer,
  auth: authReducer,
});
