import React from "react";
import { Todoinput } from "./Todoinput";
import { Todo } from "./Todo";

export const Todos = () => {
  const [todos, setTodos] = React.useState([]);
  const onDeleteItem = (itemToDelete) => {
    const newTodoList = todos.filter((todo) => todo.id !== itemToDelete.id);
    setTodos(newTodoList);
  };
  const onAdd = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const onUpdateTodos = (updatedTodo) => {
    const newTodoList = todos.map((todo) => {
      if (todo.id === updatedTodo.id) {
        return updatedTodo;
      } else {
        return todo;
      }
    });
    setTodos(newTodoList);
  };

  return (
    <div>
      {/* <Todoinput todos={todos} setTodos={setTodos} /> */}
      <Todoinput onAdd={onAdd} />
      <div>
        <ul>
          {todos.map((todo) => {
            return (
              <Todo
                key={todo.id}
                todo={todo}
                onDeleteItem={onDeleteItem}
                onUpdateTodos={onUpdateTodos}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};
