import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Redux/todos/todos.actions";
import {v4} from "uuid";

export const TodoInput = () => {
  const dispatch = useDispatch();
  const [title,setTitle] = useState("")

  const handleAdd = () => {
    const payload = {
      title,
      status:false,
      id:v4()
    }

    const addTodoAction = addTodo(payload)
    dispatch(addTodoAction)
    setTitle("")
  }
  return <div>
    <input type = "text"
           value={title}
           onChange={(e) => setTitle(e.currentTarget.value)} />
    <button onClick={handleAdd }>add</button>
  </div>;
};
