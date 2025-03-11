import React, {Component, useState} from "react";
import {
    CButton,
    CCol,
    CForm,
    CFormCheck,
    CFormInput,
    CFormSelect,
    CModal, CModalBody, CModalFooter,
    CModalHeader,
    CModalTitle
} from '@coreui/react'

import 'react-clock/dist/Clock.css';
import axios from 'axios';
import './../styles/Siderbar.css'
import {
    CNavTitle,
    CSidebarNav,
    CSidebar,
    CListGroup, CListGroupItem
} from '@coreui/react'
import {useCalendar} from "./Calendar";

const formatDate = (timestamp) => {
    const date = new Date(timestamp);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is 0-based
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}`;
}
export const SidebarEvents = () => {
    return (
        <CSidebar className="border-end " style={{'height': 'fit-content'}}>
            <CSidebarNav>
                <CNavTitle>Today' Events</CNavTitle>
                <TodaysEvents></TodaysEvents>
            </CSidebarNav>
            <CSidebarNav>
                <CNavTitle>Upcoming Events</CNavTitle>
                <UpcomingEvents></UpcomingEvents>
            </CSidebarNav>
            <CSidebarNav><AddEvent/></CSidebarNav>
        </CSidebar>
    )
}

export const TodaysEvents = () => {
    const {calendarRef} = useCalendar(); // Access calendarRef

    const goToToday = () => {
        if (calendarRef.current) {
            calendarRef.current.querySelector(".sx__today-button")?.click();
        }
    };

    return (
        <CListGroup>
            <CListGroupItem onClick={goToToday}>Meeting with peers.</CListGroupItem>
            <CListGroupItem onClick={goToToday}>Snr. Java Dev Interview.</CListGroupItem>
            <CListGroupItem onClick={goToToday}>Evening Scrum</CListGroupItem>
        </CListGroup>
    );
};
export const UpcomingEvents = (eventList) => {
    return (
        <CListGroup>
            <CListGroupItem>Morning Scrum</CListGroupItem>
            <CListGroupItem>Developers meeting.</CListGroupItem>
            <CListGroupItem>Evening Scrum</CListGroupItem>
        </CListGroup>
    )
};

function AddEvent() {
    const [visible, setVisible] = useState(false)
    const {calendarRef} = useCalendar(); // Access calendarRef
    const {calendarInstance} = useCalendar(); // Get eventsService from CalendarProvider

    const [formData, setFormData] = useState({
        title: 'Meeting Schedule',
        description: 'Meeting with Peers',
        fromTimestamp: '2025-03-11T13:00:00+05:30',
        toTimestamp: '2025-03-11T14:15:00+05:30',
        userId: 1,
        isSnooze: true,
        color: '#3b1785',
        eventType: 'Meeting',
    });
    const closePopup = () => setVisible(false);

    function setEvents(data) {
        console.log(data);
    }

    function callAddEventAPI(requestBody) {
        axios.post('http://localhost:9090/api/events', requestBody,
            {
                headers: {'Content-Type': 'application/json'}
            })
            .then(response => {
                setEvents(response.data);
                addNewEventToCalendar(response.data); // Add event to calendar
            })
            .catch(error => {
                console.error(error);
            });
    }

    const addNewEventToCalendar = (newEvent) => {
        if (calendarInstance) {
            calendarInstance.eventsService.add({
                id: newEvent.id,
                title: newEvent.title,
                start: formatDate(newEvent.fromTimestamp),
                end: formatDate(newEvent.toTimestamp),
            });
        }

    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        console.log('Input Value:', formData);
        let data = Array.from(formData.entries()).reduce((memo, [key, value]) => ({
            ...memo,
            [key]: value,
        }), {});
        callAddEventAPI(data);
        closePopup();
    };

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    }


    return (
        <div class="add-event">
            <>
                <CSidebarNav>
                    <CButton color="primary" onClick={() => setVisible(!visible)}>Create Event</CButton>
                </CSidebarNav>

                <CModal visible={visible} onClose={() => setVisible(false)}
                        aria-labelledby="EventAddModal">
                    <CModalHeader>
                        <CModalTitle>Add Event</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                        <CForm className="row g-3" onSubmit={handleSubmit}>
                            <CCol md={6}>
                                <CFormInput name="title" value={formData.title} onChange={handleInputChange} id="title"
                                            label="Title"/>
                            </CCol>
                            <CCol md={6}>
                                <CFormInput name="description" value={formData.description} onChange={handleInputChange}
                                            id="description" label="Description"/>
                            </CCol>
                            <CCol xs={12}>
                                <CFormInput name="fromTimestamp" value={formData.fromTimestamp}
                                            onChange={handleInputChange}
                                            id="fromTimestamp" label="From Time" placeholder="12:30"/>
                            </CCol>
                            <CCol xs={12}>
                                <CFormInput name="toTimestamp" value={formData.toTimestamp} onChange={handleInputChange}
                                            id="toTimestamp" label="To Time" placeholder="14:45"/>
                            </CCol>
                            <CCol xs={12}>
                                <CFormInput name="eventType" value={formData.eventType} onChange={handleInputChange}
                                            id="eventType" label="Event Type" placeholder="Meeting"/>
                            </CCol>

                            <CCol md={12}>
                                <CFormSelect name="userId" value={formData.userId} onChange={handleInputChange}
                                             id="userId" label="User">
                                    <option value={1}>User 1</option>
                                    <option value={2}>User 2</option>
                                    <option value={3}>User 3</option>
                                </CFormSelect>
                            </CCol>
                            <CCol xs={12}>
                                <CFormCheck name="color" value={formData.color} type="color"
                                            onChange={handleInputChange} id="color" label="color"/>
                            </CCol>
                            <CCol xs={12}>
                                <CFormCheck name="isSnooze" value={formData.isSnooze} type="checkbox"
                                            onChange={handleInputChange} id="gridCheck" label="Snooze"/>
                            </CCol>
                            <CModalFooter>
                                <CButton color="secondary" onClick={() => setVisible(false)}>Close</CButton>
                                <CButton color="primary" type={"submit"}>Save changes</CButton>
                            </CModalFooter>
                        </CForm>
                    </CModalBody>
                </CModal>
            </>
        </div>
    );

}
