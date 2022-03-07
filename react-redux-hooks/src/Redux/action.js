import { ADD_TODO, CHANGE_CHECK, DELETE_TODO, EDIT_TODO } from "./actionTypes";

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};
export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};
export const editTodo = (payload) => {
  return {
    type: EDIT_TODO,
    payload,
  };
};

export const changecheck = (payload) => {
  return {
    type: CHANGE_CHECK,
    payload,
  };
};
