import axios from "axios"

import { addTodoError, addTodoRequest, addTodoSuccess, getTodoError, getTodoRequest, getTodoSuccess } from "./todos.actions"

export const getTodos = () => (dispatch) => {
    dispatch(getTodoRequest())
    axios.get("http://localhost:3500/todos")
    .then((r) => {
      console.log(r.data)
      dispatch(getTodoSuccess(r.data))
    })
    .catch((error) => {
      dispatch(getTodoError(error))
      console.log(error)
    })
}


export const addTodo = (value) => (dispatch) => {
    dispatch(addTodoRequest())
    axios.post("http://localhost:3000/todos",{
        value:value,
    })
    .then((r) => {
      console.log(r.data)
      dispatch(addTodoSuccess(r.data))
    })
    .catch((error) => {
      dispatch(addTodoError(error))
      console.log(error)
    })
}