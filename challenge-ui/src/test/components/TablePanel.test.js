import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { TablePanel } from "../../components/TablePanel";
import { store } from "../../context/store/store";

describe("TablePanel", () => {
  render(
    <Provider store={store}>
      <TablePanel />
    </Provider>
  );

  it("should work as expected", () => {
    expect(screen.getByText("Loading...")).toBeTruthy();
  });
});
