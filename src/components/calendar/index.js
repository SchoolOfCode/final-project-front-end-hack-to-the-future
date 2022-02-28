import React from "react";
import ActivityListItem from "../ActivityListItem/index";
import Kalend, { CalendarView } from "kalend"; // import component
import "kalend/dist/styles/index.css"; // import styles

function Calendar() {
  return (
    <div>
      This is where the My Activities Calendar component will be!
      <Kalend initialView={CalendarView.MONTH} />
    </div>
  );
}

export default Calendar;
