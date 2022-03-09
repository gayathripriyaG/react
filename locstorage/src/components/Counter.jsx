import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DECREMENT_COUNTER,
  INCREMENT_COUNTER,
} from "../Redux/counter/counter.actionTypes";

export const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  return (
    <div>
      <div>{count}</div>
      <button onClick={() => dispatch({ type: INCREMENT_COUNTER })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: DECREMENT_COUNTER })}>
        Decrement
      </button>
    </div>
  );
};
