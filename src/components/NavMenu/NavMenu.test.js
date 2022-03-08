import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import NavMenu from "./";

describe("NavMenu", () => {
  test("renders the logo", () => {
    render(<NavMenu />, { wrapper: MemoryRouter });
    const actual = screen.getByTestId("nav-logo");
    expect(actual).toBeInTheDocument();
  });
});
