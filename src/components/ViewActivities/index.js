import React from 'react';
import ActivityCard from '../ActivityCard/index';
import TinderCard from 'react-tinder-card';
import { useState } from 'react';
import './styles.css';

const arr = [0, 1, 2, 3, 4, 5];

function ViewActivities() {
    const [activities, setActivity] = useState(arr);
    const [favActivities, setFavActivities] = useState([]);

    console.log(favActivities);

    const Swiped = (direction, activity) => {
        if (direction === 'right') {
            setFavActivities([...favActivities, activity]);
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

export default ViewActivities;
