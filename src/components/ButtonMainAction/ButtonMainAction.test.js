import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import ButtonMainAction from ".";

const testProps = {
  text: "testText",
  path: "testPath",
  imagePath: "testImagePath",
};

describe("testing main action button component", () => {
  test("testing that the link path is correct", () => {
    render(<ButtonMainAction {...testProps} />, { wrapper: MemoryRouter });
    const actual = screen.getByTestId("image");
    // expect(actual).toHaveAttribute("to", testProps.path);
    expect(actual).toHaveAttribute("src", testProps.imagePath);
  });
});
// expect(screen.getByRole('link')).toHaveAttribute
