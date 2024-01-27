import { combineReducers } from "redux";
import { fileReducer } from "./fileReducer";
import { uiReducer } from "./uiReducer";
import { searchReducer } from "./searchReducer";

export const rootReducer = combineReducers({
  file: fileReducer,
  ui: uiReducer,
  search: searchReducer,
});
