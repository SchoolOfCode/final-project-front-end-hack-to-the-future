import React from 'react';
import ActivityCard from '../ActivityCard/index';
import TinderCard from 'react-tinder-card';
import { useState, useEffect } from 'react';
import './styles.css';
import axios from 'axios';

export default function ViewActivities() {
    const [activities, setActivity] = useState([]);
    const [favActivities, setFavActivities] = useState([]);
    // const [activityId, setActivityId] = useState([]);

    // swipe cards direction
    useEffect(() => {
        axios
            .get('https://activity-app-backend.herokuapp.com/activities')
            .then((res) => setActivity(res.data.payload));
    }, []);

    const Swiped = (direction, activity) => {
        if (direction === 'right') {
            setFavActivities((favActivities) => {
                return [...favActivities, activity];
            });
            // console.log(activities);
        }
        console.log(activity);
    };

    console.log(favActivities);

    // update favActivities
    // useEffect(() => {
    //     // PUT request using fetch with async/await
    //     const updateFavActivities = async () => {
    //         const requestActivity = {
    //             method: 'PUT',
    //             headers: { 'Content-Type': 'application/json' },
    //             body: JSON.stringify({
    //                 title: 'React Hooks PUT Request Example',
    //             }),
    //         };
    //         const response = await fetch(
    //             // link to be changed
    //             'https://activity-app-backend.herokuapp.com/activities/',
    //             requestActivity
    //         );
    //         const data = await response.json();
    //         setActivityId(data.id);
    //     };

    //     updateFavActivities();
    // }, []);

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
