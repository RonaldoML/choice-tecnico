import { types } from "../types/types";

const initialState = {
  files: null,
};

export const fileReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.saveFiles:
      return {
        ...state,
        files: action.payload
      }
    default:
      return state;
  }
};
