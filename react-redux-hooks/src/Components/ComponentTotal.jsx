import React from "react";
import { useDispatch,useSelector } from "react-redux";

export const ComponentTotal = () => {
  const count = useSelector((state) => state.count);
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return <div>{`total components ${todos.length}`}</div>;
};
