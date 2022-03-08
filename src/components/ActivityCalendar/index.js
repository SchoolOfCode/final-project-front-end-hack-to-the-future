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
        data.payload.map((activity) => convertActivitiesToEvents(activity, user_id))
      );
    };
    if (user_id) {
      getParticipants();
    }
  }, [user_id]);

  return (
    <div className={css.activityCalendar}>
      <h3 className={css.activityCalendarTitle}>
        This calendar shows any activities that you are attending, or that you have created and will be hosting
      </h3>
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

