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
      <Button className={ifExpanded ? "collapsed" : "expanded"} button="Expand" onClick={toggleIfExpanded} />
      <div className={ifExpanded ? "expanded" : "collapsed"}>
        <ActivityCard activity={activity} />
        <Button button="Collapse" onClick={toggleIfExpanded} className={ifExpanded ? "expanded" : "collapsed"}/>
        <Button button="Attend" className={ifExpanded ? "expanded" : "collapsed"} />
      </div>
    </li>
  );
}

export default ActivityListItem