import { createAction, createReducer } from "@reduxjs/toolkit";

// Action
export const Coords = createAction("Coords");

// Defining initial state
const initialState = {};

// Reducer
export const coordinates = createReducer(initialState, {
  Coords: (state, action) => {
    Object.assign(state, action.payload);
  },
});
