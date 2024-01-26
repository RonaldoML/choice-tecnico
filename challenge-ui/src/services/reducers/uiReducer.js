import { types } from "../types/types";

const initialState = {
  isLoading: false,
  isError: false,
  error: null,
}

export const uiReducer = (state = initialState, action) => {

  switch (action.type) {
    case types.isLoading:
      return {
        ...state,
        isLoading: true
      }
    case types.noLoading:
      return {
        ...state,
        isLoading: false
      }
    case types.isError:
      return {
        ...state,
        isError: true,
        error: action.payload
      }
    case types.noError:
      return {
        ...state,
        isError: false,
        error: null
      }
    default:
      return state;
  }

};