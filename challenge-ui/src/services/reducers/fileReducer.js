import { types } from "../types/types";

const initialState = {
  data: null,
};

export const fileReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.saveFiles:
      return {
        ...state,
        data: action.payload
      }
    default:
      return state;
  }
};
