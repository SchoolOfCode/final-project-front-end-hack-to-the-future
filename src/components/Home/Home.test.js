import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Home from "./";

describe("Home component", () => {
  test("renders the logo", () => {
    render(<Home />, { wrapper: MemoryRouter });
    const actual = screen.getByTestId("logo");
    expect(actual).toBeInTheDocument();
  });
});
