import React from 'react';
import TinderCard from 'react-tinder-card';

function ActivityCard({ activity }) {
    return (
        <div className='card'>
            <img src=''></img>
            <h3>{activity.description}</h3>
            <p>Max attendees {activity.max_attendees}</p>
            <p>{activity.location_name}</p>
            <p>{activity.date_time}</p>
        </div>
    );
}

export default ActivityCard;
