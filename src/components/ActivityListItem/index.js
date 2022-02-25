import React, { useEffect, useState } from 'react';
import ActivityCard from '../ActivityCard/index';
import Button from '../Button/index';
import './ActivityListItem.css';

function ActivityListItem({ activity }) {
    const [ifExpanded, setIfExpanded] = useState(false);
    console.log(ifExpanded);
    const [attendBtnClicked, setAttendBtnClicked] = useState(false);

    function toggleIfExpanded() {
        setIfExpanded(!ifExpanded);
    }

    function toggleAttendBtnClicked() {
        setAttendBtnClicked(!attendBtnClicked);
    }

    useEffect(() => {
        const updateParticipants = async () => {
            const requestActivity = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    userId: '4',
                    activityId: activity.activity_id,
                    role: 'attending',
                }),
            };
            const response = await fetch(
                // link to be changed
                'https://activity-app-backend.herokuapp.com/participants',
                requestActivity
            );
            const data = await response.json();
            console.log(data.payload);
        };
        updateParticipants();
    }, [attendBtnClicked]);

    return (
        <li>
            <h2>{activity.type}</h2>
            <h3>{activity.date_time}</h3>
            <Button
                className={ifExpanded ? 'collapsed' : 'expanded'}
                button='Expand'
                onClick={toggleIfExpanded}
            />
            <div className={ifExpanded ? 'expanded' : 'collapsed'}>
                <ActivityCard activity={activity} />
                <Button
                    button='Collapse'
                    onClick={toggleIfExpanded}
                    className={ifExpanded ? 'expanded' : 'collapsed'}
                />
                <Button
                    button='Attend'
                    onClick={toggleAttendBtnClicked}
                    className={ifExpanded ? 'expanded' : 'collapsed'}
                />
            </div>
        </li>
    );
}

export default ActivityListItem;
