import { types } from "../types/types";

export const getFiles = () => {
  return (dispatch) => {
    dispatch(saveData([]));
  };
};

export const getFile = () => {
  return "Some file data";
};

const saveData = (data) => ({
  type: types.login,
  payload: data,
});
