import React from 'react'

const CalendarEvent = ({event}) => {
    const { title, user } = event;
    console.log(user)
    return (
        <div>
            <strong>{title} - </strong>
            <span>{user.name}</span>
        </div>
    )
}

export default CalendarEvent