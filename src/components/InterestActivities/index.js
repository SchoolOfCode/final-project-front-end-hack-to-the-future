import React, { useState, useEffect } from "react";
import ActivityListItem from "../ActivityListItem/index";
import css from "./InterestActivities.module.css";
import { API_URL } from "../../config/index.js";

function InterestActivities({ user_id }) {
  const [interestedActivities, setInterestedActivities] = useState([]);
  console.log(interestedActivities);

  console.log(`this is user ID ${user_id}`);

  useEffect(() => {
    const getParticipants = async () => {
      const requestParticipants = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: user_id,
        },
      };

      const response = await fetch(
        `${API_URL}/participants/interested`,
        requestParticipants
      );
      const data = await response.json();
      setInterestedActivities(data.payload);
      console.log(data.payload);
    };

    if (user_id) {
      console.log("getParticipants");
      getParticipants();
    }
  }, [user_id]);

  return (
    <>
      <h2 classname="introText">
        {" "}
        <br></br>
        Here are the activities you swiped right on! <br></br>Expand the card to
        view more info and confirm your attendance 😊
      </h2>
      <ul className={`${css.itemsContainer} flex-vertical`}>
        {interestedActivities.map((activity, index) => {
          return (
            <ActivityListItem
              activity={activity}
              user_id={user_id}
              key={index}
            />
          );
        })}
      </ul>
    </>
  );
}
export default InterestActivities;
