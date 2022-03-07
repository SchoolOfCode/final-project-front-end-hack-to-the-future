import React, { useState, useEffect } from "react";
import Calendar from "../Calendar/index";
import { convertActivitiesToEvents } from "../../HelperFunctions";
import css from "./ActivityCalendar.module.css";
import { API_URL } from "../../config/index.js";

function ActivityCalendar({ user_id, setSuccess }) {
  const [interestedActivities, setInterestedActivities] = useState([]);
  console.log(interestedActivities);

  useEffect(() => {
    const getParticipants = async () => {
      const requestParticipants = {
        method: "GET",
        headers: { "Content-Type": "application/json", Authorization: user_id },
      };

      const response = await fetch(
        `${API_URL}/participants/attending`,
        requestParticipants
      );
      const data = await response.json();
      console.log(data);
      setInterestedActivities(
        data.payload.map((activity) => convertActivitiesToEvents(activity))
      );
    };
    if (user_id) {
      getParticipants();
    }
  }, [user_id]);

  return (
    <div className={css.activityCalendar}>
      <h2 className={css.activityCalendarTitle}>
        This Calendar shows your activities
      </h2>
      <Calendar
        activityEvents={interestedActivities}
        user_id={user_id}
        setSuccess={setSuccess}
        setInterestedActivities={setInterestedActivities}
      />
    </div>
  );
}

export default ActivityCalendar;

// id: 1,
// startAt: '2021-11-21T18:00:00.000Z',
// endAt: '2021-11-21T19:00:00.000Z',
// timezoneStartAt: 'Europe/Berlin', // optional
// summary: 'test',
// color: 'blue',
// calendarID: 'work'

// "activity_id": 1,
//  "organiser_id": "1",
//  "location_name": "Cannon Hill Park, Birmingham",
//  "max_attendees": 8,
//  "date_time": "2022-02-25T09:38:38.393Z",
//  "description": "All abilities welcome to a walk round Cannon Hill Park followed by coffee at the park cafe",
// "type": "walk",
// "user_id": "1",
// "user_name": "Paddington Bear",
// "email": "paddington@bear.com"
