import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changecheck, deleteTodo } from "../Redux/action";

import { addTodo } from "../Redux/action";
import { v4 } from "uuid";
import { TodoInput } from "./TodoInput";
import { ComponentTotal } from "./ComponentTotal";

export const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const [isEditModeOn, setIsEditModeOn] = useState(false);
  const [value, setValue] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const dispatch = useDispatch();

  const handleAdd = () => {
    const payload = {
      value,
      status: false,

      id: v4(),
    };
    const addTodoAction = addTodo(payload);
    dispatch(addTodoAction);
    setValue("");
  };

  const handleDelete = (id) => {
    const payload = {
      id,
    };

    const deleteTodoAction = deleteTodo(payload);
    dispatch(deleteTodoAction);
  };

  const handleEditAdd = (id) => {
    handleDelete(id);
    setIsEditModeOn(true);
  };

  const handleChange = (id,status) => {
    setIsChecked(!isChecked);
    console.log(isChecked);
    const payload = {
      id,
      status:isChecked
    };

    const changeAction = changecheck(payload);
    dispatch(changeAction);
  };

  return (
    <div>
      <TodoInput handleAdd={handleAdd} value={value} setValue={setValue} />
      {todos.map((item) => (
        <div key={item.id}>
          <input type="checkbox" onChange={() => handleChange(item.id,item.status)} />
          {`todo : ${item.value}- status:${item.status}`}
          <button onClick={() => handleDelete(item.id)}>delete</button>
          <button onClick={() => handleEditAdd(item.id)}>edit</button>
        </div>
      ))}
      <ComponentTotal/>
    </div>
  );
};
