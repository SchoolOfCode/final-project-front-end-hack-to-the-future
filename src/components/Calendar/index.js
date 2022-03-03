import React, { useState, useEffect } from "react";
import ActivityCard from "../ActivityCard";
import Kalend, { CalendarView } from "kalend"; // import component
import "kalend/dist/styles/index.css"; // import styles
import "./Calendar.css";
import { buttonsTheme } from "../../HelperFunctions";

function Calendar({ activityEvents, user_id, removeActivity }) {
  const [activityCard, setActivityCard] = useState(null);
  const [buttonClicked, setButtonClicked] = useState(false);
  console.log(activityCard);
  useEffect(() => {
    const updateParticipants = async () => {
      const requestActivity = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: user_id,
        },
        body: JSON.stringify({
          activity_id: activityCard.activity_id,
          participant_role: "cancelled",
        }),
      };
      const response = await fetch(
        // link to be changed
        "https://activity-app-backend.herokuapp.com/participants",
        requestActivity
      );
      const data = await response.json();
      console.log(data.payload);
      setActivityCard(null);
      removeActivity(activityCard.activity_id);
      setButtonClicked(false);
    };

    if (user_id && buttonClicked) {
      updateParticipants();
    }
  }, [buttonClicked, user_id]);

  function onEventClick(data) {
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
      {activityCard && (
        <ActivityCard
          activity={activityCard}
          leftButton={{
            text: "Collapse",
            onClick: () => setActivityCard(null),
            theme: buttonsTheme.cancel,
          }}
          rightButton={{
            text: "Not Attending",
            onClick: () => setButtonClicked(true),
            theme: buttonsTheme.create,
          }}
        />
      )}
    </div>
  );
}

export default Calendar;
