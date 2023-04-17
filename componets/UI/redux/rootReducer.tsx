import { combineReducers } from "redux";
import { reducer } from "./reducer";


//this is use for @add/combine multiple @reduce 
export default combineReducers([
    reducer
])