import React, { useState, useEffect } from 'react'
import ActivityListItem from '../ActivityListItem/index'
import axios from "axios";

function InterestActivities() {
  
  const [interestedActivities , setInterestedActivities] = useState([]);
  console.log(interestedActivities);
   useEffect(() => {
     axios
       .get("https://activity-app-backend.herokuapp.com/activities")
       .then((res) => setInterestedActivities(res.data.payload));
   },[]);


  return (
    <ul>
     {interestedActivities.map((activity, index) => {
       return (
         <ActivityListItem activity={activity} key={index}/>
       )
     })}
    </ul>
    
  )
}
export default InterestActivities