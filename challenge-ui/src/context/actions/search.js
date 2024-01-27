import { types } from "../types/types";

export const searchText = (text) => ({
  type: types.saveSearchText,
  payload: text,
});