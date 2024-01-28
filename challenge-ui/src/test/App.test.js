import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "../App";
import { store } from "../context/store/store";

describe("App", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  it("should work as expected", () => {
    expect(screen.getByText("React Test App")).toBeTruthy();
  });
});
