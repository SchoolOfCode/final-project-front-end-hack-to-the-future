import React, { useState, useEffect } from 'react';
import ActivityListItem from '../ActivityListItem/index';
import axios from 'axios';

function InterestActivities() {
    const [interestedActivities, setInterestedActivities] = useState([]);
    console.log(interestedActivities);


    useEffect(() => {
        const getParticipants = async () => {
            const requestParticipants = {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    user_id: '4',
                    participant_role: 'interested',
                }),
            };

            const response = await fetch(
                'https://activity-app-backend.herokuapp.com/participants',
                requestParticipants
            );
            const data = await response.json();
            setInterestedActivities(data.payload);
        };
        getParticipants();
    }, []);

    return (
        <ul>
            {interestedActivities.map((activity, index) => {
                return <ActivityListItem activity={activity} key={index} />;
            })}
        </ul>
    );
}
export default InterestActivities;
