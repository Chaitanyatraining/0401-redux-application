import { createStore,applyMiddleware } from "redux";
import { reducer } from "../ProductReducer/reducer";
import thunk from 'redux-thunk'

export const Store = createStore(reducer,applyMiddleware(thunk));