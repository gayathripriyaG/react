import { USER_lOGIN, USER_lOGOUT } from "./auth.actionTypes";

import {  updateValue } from "../../utils/localStorage";
import { initState } from "./auth.constants";


export const authReducer = (state = initState, { type }) => {
  switch (type) {
    case USER_lOGIN: {
      let userToken = "ABCD";
      updateValue("userToken", userToken);
      return {
        ...state,
          isUserLoggedIn: true,
          userToken: userToken,
       
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
