import React, { useEffect, useState } from "react";
import ActivityCard from "../ActivityCard/index";
import Button from "../Button/index";
import { converDateTime, buttonsTheme } from "../../HelperFunctions";
import { ThemeProvider } from "@mui/material/styles";
import css from "./ActivityListItem.module.css";
import { API_URL } from "../../config/index.js";
import { removeActivity } from "../../HelperFunctions";

function ActivityListItem({
  activity,
  user_id,
  setSuccess,
  interestedActivities,
  setInterestedActivities,
  index,
}) {
  const [ifExpanded, setIfExpanded] = useState(false);
  const [role, setRole] = useState("");
  const [attendBtnClicked, setAttendBtnClicked] = useState(false);

  const [date, time] = converDateTime(activity.date_time);

  function handleClickWaste() {
    if (!attendBtnClicked) {
      setRole("uninterested");
      setAttendBtnClicked(true);
    }
  }

  function toggleIfExpanded() {
    setIfExpanded(!ifExpanded);
  }

  function handleAttendClick() {
    if (!attendBtnClicked) {
      setRole("attending");
      setAttendBtnClicked(true);
    }
  }

  useEffect(() => {
    const updateParticipants = async () => {
      const requestActivity = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: user_id,
        },
        body: JSON.stringify({
          activity_id: activity.activity_id,
          participant_role: `${role}`,
        }),
      };
      const response = await fetch(
        // link to be changed
        `${API_URL}/participants`,
        requestActivity
      );
      const data = await response.json();
      setSuccess({
        success: data.success,
        text:
          data.success && data.payload[0].participant_role === "uninterested"
            ? "This activity has been removed from your list"
            : data.success && data.payload[0].participant_role === "attending"
            ? "Thanks for confirming your attendance 😀"
            : "Something went wrong 😞 please try again",
      });
      // setInterestedActivities([...interestedActivities.slice(0, index), ...interestedActivities.slice(index + 1)]);
      removeActivity(
        interestedActivities,
        activity.activity_id,
        setInterestedActivities
      );
    };

    if (user_id && attendBtnClicked && role) {
      updateParticipants();
    }
  }, [
    attendBtnClicked,
    user_id,
    activity,
    setSuccess,
    interestedActivities,
    setInterestedActivities,
    role,
  ]);

  return (
    <li
      className={`${css.activityItemContainer} flex-vertical ${
        ifExpanded ? `${css.shrinkContainer}` : ""
      }`}
    >
      <div
        className={
          !ifExpanded
            ? `${css.expanded}`
            : `${css.textContainer} ${css.collapsed} `
        }
      >
        <button className={css.wasteButton} onClick={handleClickWaste}>
          🗑
          <span className={css.tooltiptext}>Remove from list</span>
        </button>
        <h2>{activity.type[0].toUpperCase() + activity.type.substring(1)}</h2>
        <h3>{`Date: ${date} | Time: ${time}`}</h3>
        <ThemeProvider theme={buttonsTheme.cancel}>
          <Button button="Expand" onClick={toggleIfExpanded} />
        </ThemeProvider>
      </div>

      <div className={ifExpanded ? ` ${css.expanded}` : ` ${css.collapsed}`}>
        <ActivityCard
          activity={activity}
          leftButton={{
            text: "Collapse",
            onClick: () => toggleIfExpanded(),
            theme: buttonsTheme.cancel,
          }}
          rightButton={{
            text: "Attend",
            onClick: () => handleAttendClick(),
            theme: buttonsTheme.create,
          }}
        />
      </div>
    </li>
  );
}

export default ActivityListItem;
