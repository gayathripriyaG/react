import {  USER_lOGIN_ERROR, USER_lOGIN_REQUEST, USER_lOGIN_SUCCESS, USER_lOGOUT } from "./auth.actionTypes";

import {  updateValue } from "../../utils/localStorage";
import { initState } from "./auth.constants";


export const authReducer = (state = initState, { type ,payload}) => {
  switch (type) {
    case USER_lOGIN_REQUEST: {
      return {
      ...state,
         isLoading:true,
         error:false
      };
    }
    case USER_lOGIN_SUCCESS: {
      
      updateValue("userToken", payload.token);
      return {
      ...state,
          isUserLoggedIn: true,
          ...payload,
          isLoading:false,
          error:false
       
      };
    }
    case USER_lOGIN_ERROR: {
      updateValue("userToken", payload.token);
      return {
      ...state,
          isUserLoggedIn: true,
          isLoading:false,
          error:true
       
      };
    }
    case USER_lOGOUT: {
      updateValue("userToken", "");
      return {
        ...state,
          isUserLoggedIn: false,
          userToken: " ",
        
      };
    }
    default: {
      return state;
    }
  }
};
