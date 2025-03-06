import React from 'react'
import {
    CNavTitle,
    CSidebarNav,
    CSidebar,
    CBadge,
    CSidebarBrand,
    CSidebarHeader,
    CSidebarToggler,
    CNavGroup,
    CNavItem,
    CListGroup, CListGroupItem
} from '@coreui/react'

import CIcon from '@coreui/icons-react'
// import * as icon from '@coreui/icons';
import {cilCloudDownload, cilLayers, cilPuzzle, cilSpeedometer} from '@coreui/icons'
import '../styles/Siderbar.css'
import {useCalendar} from "./Calendar";

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
}


