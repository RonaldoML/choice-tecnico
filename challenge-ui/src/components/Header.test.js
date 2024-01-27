import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

describe("Header", () => {
  it("should work as expected", () => {
    render(<Header />,);
    expect(screen.getByRole("heading")).toHaveTextContent(/React Test App/);
  });
});