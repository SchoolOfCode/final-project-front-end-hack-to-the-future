import React, { useEffect, useState } from "react";
import ActivityCard from "../ActivityCard/index";
import Button from "../Button/index";
import { converDateTime, buttonsTheme } from "../../HelperFunctions";
import css from "./ActivityListItem.module.css";

function ActivityListItem({ activity, user_id }) {
  const [ifExpanded, setIfExpanded] = useState(false);
  console.log(ifExpanded);
  const [attendBtnClicked, setAttendBtnClicked] = useState(false);

  const [date, time] = converDateTime(activity.date_time);

  function toggleIfExpanded() {
    setIfExpanded(!ifExpanded);
    console.log("clicked");
  }

  function handleAttendClick() {
    if (!attendBtnClicked) {
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
          participant_role: "attending",
        }),
      };
      const response = await fetch(
        // link to be changed
        "https://activity-app-backend.herokuapp.com/participants",
        requestActivity
      );
      const data = await response.json();
      console.log(data.payload);
    };

    if (user_id && attendBtnClicked) {
      updateParticipants();
    }
  }, [attendBtnClicked, user_id, activity.activity_id]);

  return (
    <li
      className={`${css.activityItemContainer} flex-vertical ${ ifExpanded ? `${css.shrinkContainer}` : ""}`}
      
    >
      <div className={!ifExpanded ? `${css.expanded}` : `${css.collapsed}`}>
        <h2>{activity.type}</h2>
        <h3>{`Date: ${date} | Time: ${time}`}</h3>
        <Button button="Expand" onClick={toggleIfExpanded} />
      </div>

      <div className={ifExpanded ? ` ${css.expanded}` : ` ${css.collapsed}`}>
        <ActivityCard
          activity={activity}
          leftButton={{ text: "Collapse", onClick: () => toggleIfExpanded(), theme: buttonsTheme.cancel  }}
          rightButton={{ text: "Attend", onClick: () => handleAttendClick(), theme: buttonsTheme.create }}
        />
      </div>
    </li>
  );
}

export default ActivityListItem;
