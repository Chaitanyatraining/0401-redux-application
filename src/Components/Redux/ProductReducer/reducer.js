import { productReducer } from "./ProductReducer";
import {combineReducers, CombineReducers} from 'redux'

export const reducer = combineReducers({
    productData : productReducer,
})