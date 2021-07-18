import { createAction, createReducer } from "@reduxjs/toolkit";

export const Coords = createAction("Coords");

const initialState = {};

export const coordinates = createReducer(initialState, {
  Coords: (state, action) => {
    Object.assign(state, action.payload);
  },
});
