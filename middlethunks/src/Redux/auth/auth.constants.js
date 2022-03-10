import { getValue } from "../../utils/localStorage";

export const initState = {
   
      isUserLoggedIn: getValue("userToken") ? true : false,
      userToken: getValue("userToken"),
      isLoading:false,
      error:false
    
  };