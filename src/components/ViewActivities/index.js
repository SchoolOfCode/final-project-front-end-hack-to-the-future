import React from "react";
import ActivityCard from "../ActivityCard/index";
import TinderCard from "react-tinder-card";
import { useState, useEffect } from "react";
import "./styles.css";
import axios from "axios";

export default function ViewActivities() {
  const [activities, setActivity] = useState([]);
  const [favActivities, setFavActivities] = useState([]);
  const [activityId, setActivityId] = useState();
  console.log(activityId);
  const [swipeDirection, setSwipeDirection] = useState("");
  //let swipeDirection = '';
  // swipe cards direction
  useEffect(() => {
    axios
      .get("https://activity-app-backend.herokuapp.com/activities")
      .then((res) => setActivity(res.data.payload));
  }, []);

  const Swiped = (direction, activity) => {
      console.log(activity);
      setActivityId(activity.activity_id);

    if (direction === "right") {
      setFavActivities((favActivities) => {
        return [...favActivities, activity];
      });
      setSwipeDirection("right");
      // console.log(activities);
    } else {
      setSwipeDirection("left");
    }

    console.log(activity);
  };

  console.log(favActivities);

  // update favActivities
  useEffect(() => {
    // PUT request using fetch with async/await
    const updateFavActivities = async () => {
      const requestActivity = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: "2",
          activityId: activityId,
          role: swipeDirection === "right" ? "interested" : "uninterested",
        }),
      };
      const response = await fetch(
        // link to be changed
        "https://activity-app-backend.herokuapp.com/participants",
        requestActivity
      );
      const data = await response.json();
      setActivityId(data.id);
      setSwipeDirection("");
    };

    if (swipeDirection !== "") {
      updateFavActivities();
    }
    console.log(swipeDirection);
  }, [swipeDirection, activityId]);

  return (
    <div>
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
