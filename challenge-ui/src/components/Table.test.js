import { render, screen } from "@testing-library/react";
import { Table } from "./Table";

const columnsMock = ['File Name', 'Text', 'Number', 'Hex'];

const rowsMock = [{
  name: 'test1.csv',
  text: "RgTya",
  number: '64075909',
  hex: "70ad29aacf0b690b0467fe2b2767f765"
}]

describe("Table", () => {
  render(<Table rows={rowsMock} columns={columnsMock} />,);

  it("should work as expected", () => {
    expect(screen.findByDisplayValue("Number")).toBeTruthy();

  });

  it("should display data", () => {
    expect(screen.findByDisplayValue("64075909")).toBeTruthy();
  })
});