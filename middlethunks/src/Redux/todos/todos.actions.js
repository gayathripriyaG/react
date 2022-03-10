import {  ADD_TODO_ERROR, ADD_TODO_REQUEST, ADD_TODO_SUCCESS, GET_TODO_ERROR, GET_TODO_REQUEST, GET_TODO_SUCCESS } from "./todos.actionTypes";

export const addTodoRequest = () => {
  return {
    type: ADD_TODO_REQUEST,
  };
};
export const addTodoSuccess = (payload) => {
  return {
    type: ADD_TODO_SUCCESS,
    payload
  };
};
export const addTodoError = (error) => {
  return {
    type: ADD_TODO_ERROR,
    payload:error,
  };
};
export const getTodoRequest = () => {
  return {
    type: GET_TODO_REQUEST,
  };
};
export const getTodoSuccess = (payload) => {
  return {
    type: GET_TODO_SUCCESS,
    payload
  };
};
export const getTodoError = (error) => {
  return {
    type: GET_TODO_ERROR,
    payload:error,
  };
};

