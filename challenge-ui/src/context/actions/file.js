import { types } from "../types/types";
import { isError, isLoading, noError, noLoading } from "./ui";

const url = "http://localhost:4000/files/data";

export const getFiles = () => {
  return async (dispatch, getState) => {
    const search = getState().search;

    try {
      dispatch(isLoading());
      dispatch(noError());

      const uri = new URL(url);

      if (search.search) {
        uri.searchParams.append("fileName", search.search);
      }

      const response = await fetch(uri, {
        headers: {
          accept: "application/json"
        },
      });

      if (response.status === 404) {
        dispatch(saveFiles([]));
        return
      }

      if (response.status === 500) {
        dispatch(isError("Internal Server error"));
        dispatch(saveFiles(null));
      }

      const data = await response.json();

      dispatch(noError());
      dispatch(saveFiles(data.files));

    } catch (_) {
      dispatch(isError("Something went wrong! :("));
      dispatch(saveFiles(null));
    } finally {
      dispatch(noLoading());

    }
  };
};

export const saveFiles = (data) => ({
  type: types.saveFiles,
  payload: data,
});
