import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTodos } from '../Redux/todos/todos.api'
import { Todo } from './Todo'
import {TodoInput} from "./TodoInput"

export const Todos = () => {
  const {isLoading,data} = useSelector((state) => state.todos.data)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTodos())
  },[])

  if(isLoading) return <h3>Loading....</h3>
  return (
    <div>
      <h1>Todos</h1>
      <TodoInput/>
      <div>
        <h1>TodoList:</h1>
        {data.map((todo) => (
          <div key = {todo.id}>
            <Todo todo = {todo}/>
            </div>
        ))}
      </div>
    </div>
  )
}
