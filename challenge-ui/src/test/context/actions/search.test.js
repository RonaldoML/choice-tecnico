import configureStore from "redux-mock-store";

import * as searchActions from "../../../context/actions/search";
import { types } from "../../../context/types/types";

const mockStore = configureStore();
const store = mockStore();

describe("search actions", () => {

  beforeEach(() => {
    store.clearActions();
  });

  test("Dispatches searchText", () => {

    const mockText = "test1.csv";

    const expectedActions = [
      {
        type: types.saveSearchText,
        payload: mockText
      },
    ];

    store.dispatch(searchActions.searchText(mockText));
    expect(store.getActions()).toEqual(expectedActions);

  });

});