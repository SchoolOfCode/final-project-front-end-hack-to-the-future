import { render, screen, fireEvent } from "@testing-library/react";

import Button from "./";

const testProps = {
  onClick: jest.fn(),
  button: "Attend",
  type: "submit",
};

describe("testing button component", () => {
  test("testing that the button fires onClick function", () => {
    render(<Button {...testProps} />);
    const actual = screen.getByTestId("button");
    fireEvent.click(actual);
    expect(testProps.onClick).toHaveBeenCalled();
  });
  test("testing that the button render the button(text) prop passed" , () => {
    render(<Button {...testProps} />);
    const actual = screen.getByText(testProps.button);
    expect(actual).toBeInTheDocument();
  })
});
