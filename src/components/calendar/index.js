import React from "react";
import ActivityListItem from "../ActivityListItem/index";
import Kalend, { CalendarView } from "kalend"; // import component
import "kalend/dist/styles/index.css"; // import styles

function Calendar() {
  return (
    <div>
      This is where the My Activities Calendar component will be!
      <Kalend
        // initialView={CalendarView.MONTH}
        //   onEventClick={onEventClick}
        // onNewEventClick={onNewEventClick}
        events={[]}
        initialDate={new Date().toISOString()}
        hourHeight={60}
        initialView={CalendarView.MONTH}
        // disabledViews={[CalendarView.DAY]}
        // onSelectView={onSelectView}
        // selectedView={selectedView}
        // onPageChange={onPageChange}
        timeFormat={"24"}
        weekDayStart={"Monday"}
        calendarIDsHidden={["work"]}
        language={"en"}
      />
    </div>
  );
}

export default Calendar;
