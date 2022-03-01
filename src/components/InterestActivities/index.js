import React, { useState, useEffect } from 'react';
import ActivityListItem from '../ActivityListItem/index';

function InterestActivities({ user_id }) {
    const [interestedActivities, setInterestedActivities] = useState([]);
    console.log(interestedActivities);

    useEffect(() => {
        const getParticipants = async () => {
            const requestParticipants = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: user_id,
                },
            };

            const response = await fetch(
                'https://activity-app-backend.herokuapp.com/participants/interested',
                requestParticipants
            );
            const data = await response.json();
            setInterestedActivities(data.payload);
        };

        if (user_id) {
            getParticipants();
        }
    }, [user_id]);

    return (
        <ul>
            {interestedActivities.map((activity, index) => {
                return <ActivityListItem activity={activity} key={index} />;
            })}
        </ul>
    );
}
export default InterestActivities;
