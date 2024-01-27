import { types } from "../types/types";
import { isError, isLoading, noError, noLoading } from "./ui";

const url = 'http://localhost:3000/files/data';

export const getFiles = () => {
  return async (dispatch) => {
    try {
      dispatch(isLoading());
      dispatch(noError());

      const response = await fetch(url, {
        headers: {
          accept: 'application/json'
        },
      });
      1
      if (!response.ok) {

        dispatch(noLoading());
        dispatch(isError(data.message));
        return;
      }

      const data = await response.json();

      dispatch(noLoading());
      dispatch(noError());
      dispatch(saveFiles(data.files));

    } catch (_) {
      dispatch(saveFiles([]));
      dispatch(noLoading());
      dispatch(isError('Something went wrong! :('));
    }
  };
};

export const getFile = () => {
  return "Some file data";
};

export const saveFiles = (data) => ({
  type: types.saveFiles,
  payload: data,
});
