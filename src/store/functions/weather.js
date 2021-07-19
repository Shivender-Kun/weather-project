import { createAction, createReducer } from "@reduxjs/toolkit";

// Action
export const Weather = createAction("Weather");

// Defining initial state
const initialState = {};

// Reducer
export const weather = createReducer(initialState, {
  Weather: (state, action) => {
    Object.assign(state, action.payload);
  },
});
