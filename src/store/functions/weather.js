import { createAction, createReducer } from "@reduxjs/toolkit";

export const Weather = createAction("Weather");

const initialState = {};

export const weather = createReducer(initialState, {
  Weather: (state, action) => {
    Object.assign(state, action.payload);
  },
});
