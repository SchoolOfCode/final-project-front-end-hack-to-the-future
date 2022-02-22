import React from 'react';
import ActivityCard from '../ActivityCard/index';
import TinderCard from 'react-tinder-card';
import { useState, useEffect } from 'react';
import './styles.css';
import axios from 'axios';

export default function ViewActivities() {
    const [activities, setActivity] = useState();
    const [favActivities, setFavActivities] = useState([]);

    useEffect(() => {
        axios
            .get('https://activity-app-backend.herokuapp.com/activities')
            .then((res) => setActivity(res.data));
    }, []);
    console.log(activities);

    const Swiped = (direction, activity) => {
        if (direction === 'right') {
            setFavActivities([...favActivities, activity]);
            // console.log(activities);
        }
    };

    return (
        <div>
            {activities.map((activity, index) => (
                <TinderCard
                    className='swipe'
                    key={index}
                    preventSwipe={['up', 'down']}
                    onSwipe={(dir) => Swiped(dir, activity)}
                >
                    <ActivityCard activity={activity} />
                </TinderCard>
            ))}
        </div>
    );
}
