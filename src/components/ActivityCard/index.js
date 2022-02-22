import React from "react";
import TinderCard from "react-tinder-card";

function ActivityCard({ activity }) {
  return (
    <div className="card">
      <img src=""></img>
      <h3>{activity}</h3>
      <p>activity type</p>
      <p>location</p>
      <p>date</p>
      <p>time</p>
    </div>
  );
}

export default ActivityCard;
