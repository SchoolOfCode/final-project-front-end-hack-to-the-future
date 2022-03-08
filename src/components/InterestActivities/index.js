import React, { useState, useEffect } from "react";
import ActivityListItem from "../ActivityListItem/index";
import Loading from "../LoadingComponent";
import css from "./InterestActivities.module.css";
import { API_URL } from "../../config/index.js";
import { Link } from "react-router-dom";

function InterestActivities({ user_id, setSuccess }) {
  const [interestedActivities, setInterestedActivities] = useState([]);
  const [loadingState, setLoadingState] = useState(false);
  console.log(interestedActivities);

  console.log(`this is user ID ${user_id}`);

  useEffect(() => {
    const getParticipants = async () => {
      setLoadingState(true);
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
      setLoadingState(false);
    };

    if (user_id) {
      console.log("getParticipants");
      getParticipants();
    }
  }, [user_id]);

  return (
    <div className={css.itemsPage}>
      <h2 className={css.introText}>
        Here are the activities you swiped right on!<br></br> Expand the card to
        view more info and confirm your attendance 😊
      </h2>
      <ul className={`${css.itemsContainer} flex-vertical`}>
        {loadingState ? (
          <Loading />
        ) : interestedActivities.length === 0 ? (
          <p>
            Sorry you don't have any activities that you are interested in yet.
            How about you{" "}
            <Link to="/view-activities" className={css.link}>
              swipe right
            </Link>{" "}
            on some!{" "}
          </p>
        ) : (
          interestedActivities.map((activity, index) => {
            return (
              <ActivityListItem
                setInterestedActivities={setInterestedActivities}
                interestedActivities={interestedActivities}
                setSuccess={setSuccess}
                activity={activity}
                user_id={user_id}
                key={activity.activity_id}
                index={index}
              />
            );
          })
        )}
      </ul>
    </div>
  );
}
export default InterestActivities;
