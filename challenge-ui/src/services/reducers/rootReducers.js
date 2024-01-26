import { combineReducers } from "redux";
import { fileReducer } from "./fileReducer";
import { uiReducer } from "./uiReducer";

export const rootReducer = combineReducers({
  file: fileReducer,
  ui: uiReducer,
});
