import React from "react";
import ActivityCard from "../ActivityCard/index";
import TinderCard from "react-tinder-card";
import { useState, useEffect } from "react";
import css from "./ViewActivities.module.css";
import FilterComponent from "../FilterComponent";
import { API_URL } from "../../config/index.js";

export default function ViewActivities({ user_id }) {
  const [activities, setActivity] = useState([]);
  const [currentSwipedCard, setCurrentSwipedCard] = useState({
    direction: null,
    activityId: null,
  });
  const [filterInput, setFilterInput] = useState({
    location: "",
    type: "",
  });

  function handleFilterSearch(inputs) {
    setFilterInput((filterInput) => {
      return { ...filterInput, ...inputs };
    });
  }

  useEffect(() => {
    const getActivities = async () => {
      console.log("api url in view activities", API_URL);
      const response = await fetch(
        `${API_URL}/activities?location=${filterInput.location}&type=${filterInput.type}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: user_id,
          },
        }
      );

      const data = await response.json();
      setActivity(data.payload);
    };

    if (user_id) {
      getActivities();
    }
  }, [user_id, filterInput]);

  const Swiped = (direction, activity) => {
    setCurrentSwipedCard({
      direction: direction,
      activityId: activity.activity_id,
    });
  };

  // update favActivities
  useEffect(() => {
    // PUT request using fetch with async/await
    const updateFavActivities = async () => {
      const requestActivity = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: user_id,
        },
        body: JSON.stringify({
          activity_id: currentSwipedCard.activityId,
          participant_role:
            currentSwipedCard.direction === "right"
              ? "interested"
              : "uninterested",
        }),
      };
      const response = await fetch(`${API_URL}/participants`, requestActivity);
      const data = await response.json();
      console.log(data);
    };

    if (currentSwipedCard.activityId) {
      updateFavActivities();
    }
  }, [currentSwipedCard, user_id]);

  return (
    <div className={css.viewActivitiesContainer}>
      <FilterComponent handleFilterSearch={handleFilterSearch} />
      <p>Swipe 👉 if interested</p>
      <p>Swipe 👈 if not interested</p>
      {activities.map((activity, index) => (
        <TinderCard
          className={css.swipe}
          key={index}
          preventSwipe={["up", "down"]}
          onSwipe={(dir) => Swiped(dir, activity)}
        >
          <ActivityCard activity={activity} />
        </TinderCard>
      ))}
    </div>
  );
}
