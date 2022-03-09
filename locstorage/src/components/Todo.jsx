import React from "react";
import { useDispatch } from "react-redux";
import {deleteTodo} from "../Redux/todos/todos.actions"

export const Todo = ({todo}) => {
  const dispatch = useDispatch()
  return <div>
    <p>{todo.title}</p>
    <button onClick={() => dispatch(deleteTodo(todo.id))}>delete</button>
  </div>;
};
