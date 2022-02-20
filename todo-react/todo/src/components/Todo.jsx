import React from "react";
import styles from "./todo.module.css";
import { Todoinput } from "./Todoinput";

export const Todo = ({ todo, onDeleteItem, onUpdateTodos }) => {
  const [isStriked, setIsStriked] = React.useState(false);
  const [isEditModeOn, setIsEditModeOn] = React.useState(false);
  const onAdd = (newAdd) => {
    onUpdateTodos({
      ...newAdd,
      id: todo.id,
    });
    setIsEditModeOn(false);
  };
  return (
    <li className={styles.todoitem}>
      {isEditModeOn ? (
        //    <input type = "text"/>
        <Todoinput onAdd={onAdd} />
      ) : (
        <>
          <input
            type="checkbox"
            onChange={() => {
              setIsStriked(!isStriked);
            }}
          />
          <span className={isStriked ? styles.strike : styles.normal}>
            {todo.value}
          </span>
        </>
      )}

      <button onClick={() => onDeleteItem(todo)}>Delete</button>
      <button onClick={() => setIsEditModeOn(!isEditModeOn)}>
        {isEditModeOn ? "cancel edit" : "Edit"}
      </button>
    </li>
  );
};
