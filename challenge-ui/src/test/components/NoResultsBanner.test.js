import { render, screen } from "@testing-library/react";
import { NoResultsBanner } from "../../components/NoResultsBanner";

describe("NoResultBanner", () => {
  render(<NoResultsBanner />);

  it("should work as expected", () => {
    expect(screen.getByText("No results found!")).toBeTruthy();
  });
});
