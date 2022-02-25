import React, { useState } from 'react'
import ActivityCard from '../ActivityCard/index'
import Button from '../Button/index'
import "./ActivityListItem.css";


function ActivityListItem({activity}) {

  const [ifExpanded , setIfExpanded] = useState(false);
  console.log(ifExpanded);

  function toggleIfExpanded() {
     setIfExpanded(!ifExpanded)
  }

  return (
    <li>
      <h2>{activity.type}</h2>
      <h3>{activity.date_time}</h3>
      <Button button="Expand" onClick={toggleIfExpanded} />
      <div className={ifExpanded ? "expanded" : "collapsed"}>
        <ActivityCard activity={activity} />
        <Button button="Collapse" onClick={toggleIfExpanded} />
        <Button button="Attend" />
      </div>
    </li>
  );
}

export default ActivityListItem