import React, { useState, useEffect } from "react";
import Calendar from "../Calendar/index";
import "./ActivityCalendar.css";

function ActivityCalendar({ user_id }) {
  const [interestedActivities, setInterestedActivities] = useState([]);
  console.log(interestedActivities);

  useEffect(() => {
    const getParticipants = async () => {
      const requestParticipants = {
        method: "GET",
        headers: { "Content-Type": "application/json", Authorization: user_id },
      };

      const response = await fetch(
        "https://activity-app-backend.herokuapp.com/participants/attending",
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
    <div className="activityCalendar">
      <Calendar activityEvents={interestedActivities} />
    </div>
  );
}

export default ActivityCalendar;

function convertActivitiesToEvents(activity) {
  function Add2hours() {
    // first to get the hours character
    // convert those character to number
    // if are 22 or 23 ( return 00 or 01)
    // if not add 2 to the that number
    // replace it back into the string

    const timeString = activity.date_time;
    let newTime;
    const startTime = Number(timeString.slice(11, 13));

    switch (startTime) {
      case 22:
        newTime = "00";
        break;
      case 23:
        newTime = "01";
        break;
      default:
        newTime = startTime + 2;
    }

    return timeString.slice(0, 11) + newTime.toString() + timeString.slice(13);
  }

  return {
    id: activity.activity_id,
    startAt: activity.date_time,
    endAt: Add2hours(),
    timezoneStartAt: "Europe/Berlin", // optional
    summary: activity.description,
    color: "red",
    calendarID: "work",
    location_name: activity.location_name,
    organiser_id: activity.organiser_id,
    max_attendees: activity.max_attendees,
    type: activity.type,
    user_id: activity.user_id,
    user_name: activity.user_name,
    email: activity.email,
  };
}

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
