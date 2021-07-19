import { createAction, createReducer } from "@reduxjs/toolkit";

// Action
export const Night = createAction("Night");

// Defining initial state
const initialState = {
  night: false,
};

// Reducer
export const NightTheme = createReducer(initialState, {
  Night: (state, action) => {
    state.night = !state.night;
  },
});
