import { createAction, createReducer } from "@reduxjs/toolkit";

// Action
export const Place = createAction("Place");

// Defining initial state
const initialState = {};

// Reducer
export const location = createReducer(initialState, {
  Place: (state, action) => {
    Object.assign(state, action.payload);
  },
});
