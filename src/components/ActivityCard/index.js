import React from "react";
import activityImage from "../../images/tennis.jpg";
import "./ActivityCard.css";

function ActivityCard({ activity }) {


  const [date , time] = activity.date_time.split("T");
  const hourstime = time.slice(0,5);

  return (
    <div className="card">
      <div className="imageFrame">
        <img src={activityImage} alt="activity representation" />
      </div>
      <h3>{activity.type}</h3>
      <p>{activity.description}</p>
      <div className="spanned">
        <span>
          <b>Location: </b>
          {activity.location}
        </span>
        <span>
          {" "}
          <b>Max attendees: </b>
          {activity.max_attendees}
        </span>
      </div>
      <div className="spanned">
        <span>
          <b>Date: </b>
          {date}
        </span>
        <span>
          <b>Time: </b>
          {hourstime} H
        </span>
      </div>
    </div>
  );
}

export default ActivityCard;
