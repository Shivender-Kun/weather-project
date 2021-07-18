import { createAction, createReducer } from "@reduxjs/toolkit";

export const Place = createAction("Place");

const initialState = {
  place: "",
};

export const search = createReducer(initialState, {
  Place: (state, action) => {
    state.place = action.payload;
  },
});
