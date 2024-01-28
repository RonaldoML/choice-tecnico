import { render, screen } from "@testing-library/react";
import { CustomTable } from "../../components/CustomTable";

const columnsMock = ["File Name", "Text", "Number", "Hex"];

const rowsMock = [{
  name: "test1.csv",
  text: "RgTya",
  number: 64075909,
  hex: "70ad29aacf0b690b0467fe2b2767f765"
}]

describe("CustomTable", () => {
  render(<CustomTable rows={rowsMock} columns={columnsMock} />,);

  it("should work as expected", () => {
    expect(screen.getByText("Number")).toBeTruthy();

  });
});