import {  USER_lOGIN_ERROR, USER_lOGIN_REQUEST, USER_lOGIN_SUCCESS, USER_lOGOUT } from "./auth.actionTypes";

export const loginRequest = () => {
  return {
    type: USER_lOGIN_REQUEST,
  };
};
export const loginSuccess = (payload) => {
  return {
    type: USER_lOGIN_SUCCESS,
    payload
  };
};
export const loginError = (error) => {
  return {
    type: USER_lOGIN_ERROR,
    payload:error,
  };
};
export const logout = () => {
  return {
    type: USER_lOGOUT,
  };
};
