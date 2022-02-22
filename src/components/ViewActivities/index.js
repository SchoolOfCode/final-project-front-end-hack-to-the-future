import React from "react";
import FilterComponent from "../FilterComponent/index";
import ActivityCard from "../ActivityCard/index";
import TinderCard from "react-tinder-card";
import { useState } from "react";
import "./styles.css";

function ViewActivities() {
  const api = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [activities, setActivities] = useState(api);

  // const api2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  return (
    <div className="Swipe">
      {activities?.length &&
        activities.map((activity, index) => (
          <TinderCard
            // className="swipe"
            key={index}
            // onSwipe={(dir) => swiped(dir, activity.name, index)}
            // onCardLeftScreen={() => outOfFrame(activity, index)}
          >
            <ActivityCard activity={activity} />;
          </TinderCard>
        ))}
    </div>
  );
}

export default ViewActivities;
