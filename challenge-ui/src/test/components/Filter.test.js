import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { Filter } from "../../components/Filter";
import { store } from "../../context/store/store";

describe("Filter", () => {
  render(
    <Provider store={store}>
      <Filter />
    </Provider>
  );

  it("should work as expected", () => {
    expect(screen.getByText("Search")).toBeTruthy();
  });
});
