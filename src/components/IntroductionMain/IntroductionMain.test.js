import IntroductionMain from ".";
import { render, screen } from "@testing-library/react";

describe("testing IntroductionMain component", () => {
  // 1st test
  test("checkbox renders on page", () => {
    render(<IntroductionMain />);
    const actual = screen.getByTestId("checkbox");
    expect(actual).toBeInTheDocument();
  });
  // 2nd test
  // currently not working - can't use getByTestId on a component :(
  //   test("login button disabled on page load", () => {
  //     render(<IntroductionMain />);
  //     const actual = screen.getByTestId("loginDisabled");
  //     expect(actual).toBe(isDisabled);
  //   });

  // 2nd test
  //   test("testing that clicking the checkbox calls onClick", () => {
  //     render(<IntroductionMain />);
  //     const actual = screen.getByTestId("checkbox");
  //     fireEvent.click(actual);
  //     expect(checkbox.onClick).to();
  //   });
  // });
  // when the checkbox is clicked, onClick is called
  // when onClick is called, handleClick is used
  //       render(<input type="checkbox" {...testProps} />);
  //       const actual = screen.getByTestId("button");
  //       fireEvent.click(actual);
  //       expect(testProps.onClick).toHaveBeenCalled();
  //     });

  //     // 2nd test
  //     test("testing that the button render the button(text) prop passed" , () => {
  //       render(<Button {...testProps} />);
  //       const actual = screen.getByText(testProps.button);
  //       expect(actual).toBeInTheDocument();
  //     })
  //   })
});
