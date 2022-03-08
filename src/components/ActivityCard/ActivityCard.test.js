import { render, screen } from "@testing-library/react";

import ActivityCard from "./";
import { buttonsTheme } from "../../HelperFunctions/index.js";
import { converDateTime } from "../../HelperFunctions";

const testProps = {
  activity: {
    activity_id: 1,
    organiser_id: "1",
    location_name: "Cannon Hill Park, Birmingham",
    max_attendees: 8,
    date_time: "2022-02-25T09:38:38.393Z",
    description:
      "All abilities welcome to a walk round Cannon Hill Park followed by coffee at the park cafe",
    type: "Walk",
    user_id: "1",
    user_name: "Paddington Bear",
    email: "paddington@bear.com",
  },
  leftButton: {
    text: "left",
    onClick: jest.fn(),
    theme: buttonsTheme.cancel,
  },
  rightButton: {
    text: "right",
    onClick: jest.fn(),
    theme: buttonsTheme.cancel,
  },
};

describe("ActivityCard", () => {
  test("renders the left button", () => {
    render(<ActivityCard {...testProps} />);
    const actual = screen.getByText(testProps.leftButton.text);
    expect(actual).toBeInTheDocument();
  });

  test("renders the right button", () => {
    render(<ActivityCard {...testProps} />);
    const actual = screen.getByText(testProps.rightButton.text);
    expect(actual).toBeInTheDocument();
  });

  test("renders the location", () => {
    render(<ActivityCard {...testProps} />);
    const actual = screen.getByText(testProps.activity.location_name);
    expect(actual).toBeInTheDocument();
  });

  test("renders the activity type", () => {
    render(<ActivityCard {...testProps} />);
    const actual = screen.getByText(testProps.activity.type);
    expect(actual).toBeInTheDocument();
  });

  test("renders the activity description", () => {
    render(<ActivityCard {...testProps} />);
    const actual = screen.getByText(testProps.activity.description);
    expect(actual).toBeInTheDocument();
  });

  test("renders the max attendees", () => {
    render(<ActivityCard {...testProps} />);
    const actual = screen.getByText(testProps.activity.max_attendees);
    expect(actual).toBeInTheDocument();
  });

  test("renders the image", () => {
    render(<ActivityCard {...testProps} />);
    const actual = screen.getByTestId("card-image");
    expect(actual).toBeInTheDocument();
  });

  test("renders the date", () => {
    render(<ActivityCard {...testProps} />);
    const actual = screen.getByText(
      converDateTime(testProps.activity.date_time)[0]
    );
    expect(actual).toBeInTheDocument();
  });

  test("renders the time", () => {
    render(<ActivityCard {...testProps} />);
    const actual = screen.getByText(
      converDateTime(testProps.activity.date_time)[1]
    );
    expect(actual).toBeInTheDocument();
  });
});
