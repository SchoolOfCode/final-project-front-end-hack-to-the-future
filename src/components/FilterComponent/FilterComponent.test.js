
import { render, screen, fireEvent, userEvent } from "@testing-library/react";

import FilterComponent from "./";

const testProps = {
  handleFilterSearch: jest.fn(),
};


describe("testing FilterComponent component", () => {
  test("testing that the button fires onClick function", () => {
    render(<FilterComponent {...testProps} />);
    const actual = screen.getByTestId("filterButton");
    fireEvent.click(actual);
    expect(testProps.handleFilterSearch).toHaveBeenCalled();
  });
  // it("should allow user to change type", () => {
  //   render(<FilterComponent {...testProps} />);
  //   userEvent.selectOptions(
  //     screen.getByRole("cycle"),
  //     screen.getByRole("option", { value: "museum" })
  //   );
  //   expect(screen.getByRole("option", { value: "museum" }).selected).toBe(true);
  // });

});