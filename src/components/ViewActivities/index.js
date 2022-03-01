import React from "react";
import ActivityCard from "../ActivityCard/index";
import TinderCard from "react-tinder-card";
import { useState, useEffect } from "react";
import "./styles.css";
import FilterComponent from "../FilterComponent";

export default function ViewActivities({ user_id }) {
  const [activities, setActivity] = useState([]);
  const [currentSwipedCard, setCurrentSwipedCard] = useState({
    direction: null,
    activityId: null,
  });

  useEffect(() => {
    const getActivities = async () => {
      const response = await fetch(
        "https://activity-app-backend.herokuapp.com/activities",
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
  }, [user_id]);

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
        headers: { "Content-Type": "application/json", Authorization: user_id },
        body: JSON.stringify({
          activity_id: currentSwipedCard.activityId,
          participant_role:
            currentSwipedCard.direction === "right"
              ? "interested"
              : "uninterested",
        }),
      };
      const response = await fetch(
        "https://activity-app-backend.herokuapp.com/participants",
        requestActivity
      );
      const data = await response.json();
      console.log(data);
    };

    if (currentSwipedCard.activityId) {
      updateFavActivities();
    }
  }, [currentSwipedCard, user_id]);

  return (
    <div>
      <FilterComponent />
      {activities.map((activity, index) => (
        <TinderCard
          className="swipe"
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
