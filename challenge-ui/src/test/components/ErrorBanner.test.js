import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../context/store/store";
import { ErrorBanner } from "../../components/ErrorBanner";

describe("Header", () => {
  const errorMock = "Something went worng";

  render(
    <Provider store={store}>
      <ErrorBanner error={errorMock} />
    </Provider>
  );

  it("should work as expected", () => {
    expect(screen.getByText(errorMock)).toBeTruthy();
  });
});
