import { createStore,compose, applyMiddleware } from "redux";
import {  rootReducer } from "./reducer";
import thunk from "redux-thunk"


const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// const thunk = store => next => action => {
//   if(typeof action === 'function'){
//     return action(store.dispatch,store.getState)
//   } else{
//     return next(action)
//   }
// } 

export const store = createStore(
  rootReducer,
  //window.__REDUX_DEVTOOLS_EXTENSION_ || window.__REDUX_DEVTOOLS_EXTENSION__()
  createComposer(applyMiddleware(thunk))
);
