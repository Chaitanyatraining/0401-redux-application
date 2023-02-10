import { createStore } from "redux";
import { reducer } from "../ProductReducer/reducer";

export const Store = createStore(reducer,{})