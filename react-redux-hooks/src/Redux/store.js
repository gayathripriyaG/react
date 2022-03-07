import { createStore } from "redux";
import { initState, reducer } from "./reducer";

export const store = createStore(reducer, initState);
