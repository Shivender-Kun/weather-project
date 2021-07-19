import { createAction, createReducer } from "@reduxjs/toolkit";

// Action
export const Place = createAction("Place");

// Defining initial state
const initialState = {
  place: "",
};

// Reducer
export const search = createReducer(initialState, {
  Place: (state, action) => {
    state.place = action.payload;
  },
});
