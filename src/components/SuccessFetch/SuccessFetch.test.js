import { render, screen, fireEvent } from "@testing-library/react";

import SuccessFetch from "./";

const testProps = {
  success : {success: true, text: "textTest" },
  setSuccess: jest.fn(),
};


describe("testing successFetch component", () => {
  test("testing that the button fires onClick function", () => {
    render(<SuccessFetch {...testProps} />);
    const actual = screen.getByTestId("closeButton");
    fireEvent.click(actual);
    expect(testProps.setSuccess).toHaveBeenCalled();
  });
  test("testing that the p tag in the successFetch component render the text prop passed", () => {
    render(<SuccessFetch {...testProps} />);
    const actual = screen.getByText(testProps.success.text);
    expect(actual).toBeInTheDocument();
  });
  test("testing that if success.success is true, the last className of the component is display", () => {
    render(<SuccessFetch {...testProps} />);
    const actual = screen.getByTestId("className");
    expect(actual).toHaveClass("successContainer display");
  });
});
