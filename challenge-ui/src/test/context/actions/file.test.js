import configureStore from "redux-mock-store";

import * as fileActions from "../../../context/actions/file";
import { types } from "../../../context/types/types";

const mockStore = configureStore();
const store = mockStore();

describe("file actions", () => {

  beforeEach(() => {
    store.clearActions();
  });

  test("Dispatches the correct action and payload", () => {
    const expectedActions = [
      {
        payload: 1,
        type: types.saveFiles,
      },
    ];

    store.dispatch(fileActions.saveFiles(1));
    expect(store.getActions()).toEqual(expectedActions);
  });
});