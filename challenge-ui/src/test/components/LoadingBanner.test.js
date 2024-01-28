import { render, screen } from "@testing-library/react";
import { LoadingBanner } from "../../components/LoadingBanner";

describe("LoadingBanner", () => {
  render(<LoadingBanner />);

  it("should work as expected", () => {
    expect(screen.getByText("Loading...")).toBeTruthy();
  });
});
