import { createAction, createReducer } from "@reduxjs/toolkit";

export const Night = createAction("Night");

const initialState = {
  night: false,
};

export const NightTheme = createReducer(initialState, {
  Night: (state, action) => {
    state.night = !state.night;
  },
});
