import React, {createContext, useContext, useEffect, useRef, useState} from "react";

import {
    createCalendar,
    createViewDay,
    createViewMonthAgenda,
    createViewMonthGrid,
    createViewWeek
} from "@schedule-x/calendar";
import "@schedule-x/theme-default/dist/index.css"; // Import theme

import {createDragAndDropPlugin} from "@schedule-x/drag-and-drop";
import {createCalendarControlsPlugin} from "@schedule-x/calendar-controls";
import {createScrollControllerPlugin} from "@schedule-x/scroll-controller";
import {createEventsServicePlugin} from "@schedule-x/events-service";
import {createCurrentTimePlugin} from "@schedule-x/current-time";
import {createEventModalPlugin} from "@schedule-x/event-modal";
import {createResizePlugin} from "@schedule-x/resize";
import '../styles/Calendar.css'

const CalendarContext = createContext(null);

// Custom Hook to use CalendarContext
export const useCalendar = () => useContext(CalendarContext);

export const CalendarProvider = ({children}) => {
    const initialized = useRef(false);

    const calendarRef = useRef(null);
    const [calendarInstance, setCalendarInstance] = useState(null);

    useEffect(() => {
        if (!initialized.current && calendarRef.current) {
            initialized.current = true;
            const calendar = createCalendar({
                    selectedDate: new Date().toISOString().split("T")[0],
                    isDark: false,
                    views: [createViewDay(), createViewMonthAgenda(), createViewMonthGrid(), createViewWeek()],

                    weekOptions: {
                        gridHeight: 1000,
                    },
                    calendars: {
                        personal: {
                            colorName: 'personal',
                            lightColors: {
                                main: '#f9d71c',
                                container: '#fff5aa',
                                onContainer: '#594800',
                            },
                            darkColors: {
                                main: '#fff5c0',
                                onContainer: '#fff5de',
                                container: '#a29742',
                            },
                        }
                    },
                    events: [
                        {
                            id: 1,
                            title: 'Meeting with peers.',
                            start: '2025-03-12 09:00',
                            end: '2025-03-12 10:30'
                        },
                        {
                            id: 2,
                            title: 'Snr. Java Dev Interview.',
                            start: '2025-03-12 15:00',
                            end: '2025-03-12 16:15'
                        },
                        {
                            id: 3,
                            title: 'Evening Scrum',
                            start: '2025-03-12 17:00',
                            end: '2025-03-12 17:30'
                        },

                        {
                            id: 4,
                            title: 'Morning Scrum',
                            start: '2025-03-13 09:00',
                            end: '2025-03-13 10:30'
                        },
                        {
                            id: 5,
                            title: 'Developers meeting.',
                            start: '2025-03-13 14:00',
                            end: '2025-03-13 15:15'
                        },
                        {
                            id: 6,
                            title: 'Evening Scrum',
                            start: '2025-03-13 17:00',
                            end: '2025-03-13 17:30'
                        },
                        {
                            id: 7,
                            title: 'Holi Holiday',
                            start: '2025-03-14',
                            end: '2025-03-14',
                            color: 'red'
                        },

                    ],
                },
                [
                    createDragAndDropPlugin(),
                    createCalendarControlsPlugin(),
                    createScrollControllerPlugin(),
                    createEventsServicePlugin(),
                    createCurrentTimePlugin(),
                    createEventModalPlugin({}),
                    createResizePlugin(),
                ])
            calendar.render(calendarRef.current);
            setCalendarInstance(calendar); // Store the instance in state
        }
    }, []);

    return (
        <CalendarContext.Provider value={{calendarRef, calendarInstance}}>
            {children}
            <div id="calendar" ref={calendarRef} style={{width: "100%", height: "100%"}}/>
        </CalendarContext.Provider>
    );
};

export default CalendarProvider;
