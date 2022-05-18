import React, { useState } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/es';
import Navbar from '../ui/Navbar'
// import 'react-big-calendar/lib/sass/styles';
import "react-big-calendar/lib/css/react-big-calendar.css";
import { messages } from '../../helpers/calendar-messages-es';
import CalendarEvent from './CalendarEvent';

//moment a español
moment.locale('es');
const localizer = momentLocalizer(moment);

const events = [{
    title: 'All Day Event very long title',
    allDay: true,
    start: moment().toDate(), // newDate en moment
    end: moment().add(2, 'hour').toDate(),
    bgcolor: '#fafa',
    user: {
        _id: '123',
        name: 'Matías'
    }
}]

const CalendarScreen = () => {

    const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month');

    const onDobleClick = (e) => {
        console.log(e);
    }

    const onSelect = (e) => {
        console.log(e);
    }

    const onViewChange = (e) => {
        setLastView(e);
        localStorage.setItem('lastView', e);
    }

    const eventStyleGetter = (event, start, end, isSelected) => {
        // console.log(event, start, end, isSelected);
        const style = {
            backgroundColor: '#367CF7',
            borderRadius: '0px',
            opacity: 0.8,
            display: 'block',
            color: 'white'
        }
        return {
            style
        }
    }

    return (
        <div className="calendar-screen">
            <Navbar />
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                messages={messages}
                eventPropGetter={eventStyleGetter}
                onDoubleClickEvent={onDobleClick}
                onSelectEvent={onSelect}
                onView={onViewChange}
                view={lastView}
                components={{
                    // se manda como referencia
                    event: CalendarEvent
                }}
            />
        </div>
    )
}

export default CalendarScreen;