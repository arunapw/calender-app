import React, { useEffect, useRef } from "react";
import { createCalendar, createViewDay, createViewMonthAgenda, createViewMonthGrid, createViewWeek } from "@schedule-x/calendar";
import "@schedule-x/theme-default/dist/index.css"; // Import theme

import { createDragAndDropPlugin } from "@schedule-x/drag-and-drop";
import { createCalendarControlsPlugin } from "@schedule-x/calendar-controls";
import { createScrollControllerPlugin } from "@schedule-x/scroll-controller";
import { createEventsServicePlugin } from "@schedule-x/events-service";
import { createCurrentTimePlugin } from "@schedule-x/current-time";
import { createEventModalPlugin } from "@schedule-x/event-modal";
import { createResizePlugin } from "@schedule-x/resize";

const CalendarComp = () => {
  const initialized = useRef(false);

  const calendarRef = useRef(null);

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
            title: 'Coffee with John',
            start: '2025-03-10 10:05',
            end: '2025-03-10 10:35',
          },
          {
            id: 2,
            title: 'Ski trip',
            start: '2025-03-01',
            end: '2025-03-02',
          },
        ],
      },
      [
        createDragAndDropPlugin(),
        createCalendarControlsPlugin(),
        createScrollControllerPlugin(),
        createEventsServicePlugin(),
        createCurrentTimePlugin(),
        createEventModalPlugin(),
        createResizePlugin(),
      ])
      calendar.render(calendarRef.current);
    }
  }, []);

  return <div id="calender" ref={calendarRef} style={{ width: "100%", height: "100%" }} />;
};

export default CalendarComp;
