import { increment, decrement } from "../actions/counterActions";
import { createReducer } from "@reduxjs/toolkit";

export const counterReducer = createReducer(0, {
  [increment.type]: (state) => state + 1,
  [decrement.type]: (state) => state - 1,
});
