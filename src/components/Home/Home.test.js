import { render } from "@testing-library/react";

import Home from "./";

describe("Home component", () => {
  test("renders the logo", () => {
    const { getByTestId } = render(<Home />);
    const actual = getByTestId("logo");
    expect(actual).toBeInTheDocument();
  });
});
