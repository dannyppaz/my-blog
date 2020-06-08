import { counterReducer } from "./counterReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  counter: counterReducer,
});
