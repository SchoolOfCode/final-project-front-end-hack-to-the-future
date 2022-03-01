import React, { useState } from "react";
import ActivityCard from "../ActivityCard";
import Kalend, { CalendarView } from "kalend"; // import component
import "kalend/dist/styles/index.css"; // import styles
import Button from "../Button";
import "./Calendar.css";

function Calendar({ activityEvents }) {

  const [activityCard, setActivityCard] = useState();

  function onEventClick(data){

    function convertData(activity) {
     return {
       activity_id: activity.id,
       organiser_id: activity.organiser_idganiser_id,
       max_attendees: activity.max_attendees,
       date_time: activity.startAt,
       location_name: activity.location_name,
       type: activity.type,
       description: activity.summary,
       user_name: activity.user_name,
       email: activity.email,
       user_id: activity.user_id,
     };

    }

    setActivityCard(convertData(data));
  }

  return (
    <div className="calendar">
      This is where the My Activities Calendar component will be!
      <Kalend
        // kalendRef={props.kalendRef}
        // onNewEventClick={onNewEventClick}
        initialView={CalendarView.MONTH}
        //disabledViews={activityEvents}
        onEventClick={onEventClick}
        events={activityEvents}
        initialDate={new Date().toISOString()}
        hourHeight={20}
        timezone={"Europe/Berlin"}
        // onEventDragFinish={onEventDragFinish}
        // onStateChange={props.onStateChange}
        // selectedView={props.selectedView}
      />
      {activityCard && <ActivityCard activity={activityCard} />}
    </div>
  );
}

export default Calendar;
