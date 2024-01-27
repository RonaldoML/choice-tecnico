import configureStore from "redux-mock-store";

import * as uiActions from "./ui";
import { types } from "../types/types";

const mockStore = configureStore();
const store = mockStore();

describe("ui actions", () => {

  beforeEach(() => {
    store.clearActions();
  });

  test("Dispatches isLoading", () => {
    const expectedActions = [
      {
        type: types.isLoading,
      },
    ];

    store.dispatch(uiActions.isLoading());
    expect(store.getActions()).toEqual(expectedActions);
  });

  test("Dispatches noLoading", () => {
    const expectedActions = [
      {
        type: types.noLoading,
      },
    ];

    store.dispatch(uiActions.noLoading());
    expect(store.getActions()).toEqual(expectedActions);
  });

  test("Dispatches isError", () => {
    const expectedActions = [
      {
        payload: "Something went wrong",
        type: types.isError,
      },
    ];

    store.dispatch(uiActions.isError("Something went wrong"));
    expect(store.getActions()).toEqual(expectedActions);
  });

  test("Dispatches noError", () => {
    const expectedActions = [
      {
        type: types.noError,
      },
    ];

    store.dispatch(uiActions.noError());
    expect(store.getActions()).toEqual(expectedActions);
  });
});
