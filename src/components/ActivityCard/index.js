import React from 'react';
import activityImage from '../../images/Activities/tennis.jpg';
import './ActivityCard.css';
import Button from '../Button';

function ActivityCard({ activity, leftButton, rightButton }) {
    const [date, time] = activity.date_time.split('T');
    const hourstime = time.slice(0, 5);

    return (
        <div className='card'>
            <div className='imageFrame'>
                <img src={activityImage} alt='activity representation' />
            </div>
            <h3>{activity.type}</h3>
            <p>{activity.description}</p>
            <div className='spanned'>
                <span>
                    <b>Location: </b>
                    {activity.location}
                </span>
                <span>
                    {' '}
                    <b>Max attendees: </b>
                    {activity.max_attendees}
                </span>
            </div>
            <div className='spanned'>
                <span>
                    <b>Date: </b>
                    {date}
                </span>
                <span>
                    <b>Time: </b>
                    {hourstime} H
                </span>
            </div>

            {leftButton && (
                <Button button={leftButton.text} onClick={leftButton.onClick} />
            )}
            {rightButton && (
                <Button
                    button={rightButton.text}
                    onClick={rightButton.onClick}
                />
            )}
        </div>
    );
}

export default ActivityCard;
