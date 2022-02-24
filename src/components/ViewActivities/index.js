import React from "react";
import ActivityCard from "../ActivityCard/index";
import TinderCard from "react-tinder-card";
import { useState, useEffect } from "react";
import "./styles.css";
import axios from "axios";
import FilterComponent from "../FilterComponent";

export default function ViewActivities() {
  const [activities, setActivity] = useState([]);
  const [currentSwipedCard, setCurrentSwipedCard] = useState({
    direction: null,
    activityId: null,
  });

  useEffect(() => {
    axios
      .get("https://activity-app-backend.herokuapp.com/activities")
      .then((res) => setActivity(res.data.payload));
  }, []);

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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: "2",
          activityId: currentSwipedCard.activityId,
          role:
            currentSwipedCard.direction === "right"
              ? "interested"
              : "uninterested",
        }),
      };
      const response = await fetch(
        // link to be changed
        "https://activity-app-backend.herokuapp.com/participants",
        requestActivity
      );
      const data = await response.json();
      console.log(data);
    };

    if (currentSwipedCard.activityId) {
      updateFavActivities();
    }
  }, [currentSwipedCard]);

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
