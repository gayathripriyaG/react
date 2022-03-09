import React from 'react'
import { useSelector } from 'react-redux'
import { Todo } from './Todo'
import {TodoInput} from "./TodoInput"

export const Todos = () => {
  const todos = useSelector((state) => state.todos.data)
  return (
    <div>
      <h1>Todos</h1>
      <TodoInput/>
      <div>
        <h1>TodoList:</h1>
        {todos.map((todo) => (
          <div key = {todo.id}>
            <Todo todo = {todo}/>
            </div>
        ))}
      </div>
    </div>
  )
}
