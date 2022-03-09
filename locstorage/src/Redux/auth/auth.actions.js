import { USER_lOGIN, USER_lOGOUT } from "./auth.actionTypes";

export const login = () => {
  return {
    type: USER_lOGIN,
  };
};
export const logout = () => {
  return {
    type: USER_lOGOUT,
  };
};
