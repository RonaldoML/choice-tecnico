import { render, screen } from "@testing-library/react";
import { Header } from "../../components/Header";
import { Provider } from "react-redux";
import { store } from "../../context/store/store";

describe("Header", () => {
  render(
    <Provider store={store}>
      <Header />
    </Provider>
  );

  it("should work as expected", () => {
    expect(screen.getByText("React Test App")).toBeTruthy();
  });
});
