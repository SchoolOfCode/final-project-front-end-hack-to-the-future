import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Form from "./";
test("testing the document renders the form heading", () => {
  render(<Form />, { wrapper: MemoryRouter });
  const actual = screen.getByTestId("heading");
  expect(actual).toBeInTheDocument();
});
test("make sure datetime input is required", () => {
  render(<Form />, { wrapper: MemoryRouter });
  const actual = screen.getByTestId("req");
  expect(actual).toBeRequired();
});
