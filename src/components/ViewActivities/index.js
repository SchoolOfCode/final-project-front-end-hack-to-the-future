import React from 'react';
import ActivityCard from '../ActivityCard/index';
import TinderCard from 'react-tinder-card';
import { useState, useEffect } from 'react';
import './styles.css';
import axios from 'axios';

export default function ViewActivities() {
    const [activities, setActivity] = useState([]);
    const [favActivities, setFavActivities] = useState([]);
    const [activityId, setActivityId] = useState([]);
    let direction = '';
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
            direction = 'right';
            // console.log(activities);
        } else {
            direction = 'left';
        }

        console.log(activity);
    };

    console.log(favActivities);

    // update favActivities
    useEffect(() => {
        // PUT request using fetch with async/await
        const updateFavActivities = async () => {
            const requestActivity = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    userId: '2',
                    activityId: 1,
                    role: direction === 'right' ? 'interested' : 'uninterested',
                }),
            };
            const response = await fetch(
                // link to be changed
                'https://activity-app-backend.herokuapp.com/participants',
                requestActivity
            );
            const data = await response.json();
            setActivityId(data.id);
        };

        updateFavActivities();
    }, [direction]);

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
