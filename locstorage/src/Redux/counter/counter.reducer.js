import { DECREMENT_COUNTER, INCREMENT_COUNTER } from "./counter.actionTypes";

import { initState } from "./counter.constants";



export const counterReducer = (state = initState, { type }) => {
  switch (type) {
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

    default: {
      return state;
    }
  }
};
