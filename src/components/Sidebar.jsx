import React from 'react'
import {
    CBadge,
    CSidebar,
    CSidebarBrand,
    CSidebarHeader,
    CSidebarNav,
    CSidebarToggler,
    CNavGroup,
    CNavItem,
    CNavTitle,
} from '@coreui/react'

import CIcon from '@coreui/icons-react'
import {cilCloudDownload, cilLayers, cilPuzzle, cilSpeedometer} from '@coreui/icons'
import '../styles/Siderbar.css'

export const Sidebar = () => {
    return (
        <CSidebar className="border-end " style={{'height': 'fit-content'}}>
            <CSidebarNav>
                <CNavTitle>Event Calender</CNavTitle>
                <CNavItem href="#">
                    <CIcon customClassName="nav-icon" icon={cilSpeedometer}/> Nav item
                </CNavItem>
                <CNavItem href="#">
                    <CIcon customClassName="nav-icon" icon={cilSpeedometer}/> With badge{' '}
                    <CBadge color="primary ms-auto">NEW</CBadge>
                </CNavItem>
                <CNavItem href="https://coreui.io">
                    <CIcon customClassName="nav-icon" icon={cilCloudDownload}/> Download CoreUI
                </CNavItem>
                <CNavItem href="https://coreui.io/pro/">
                    <CIcon customClassName="nav-icon" icon={cilLayers}/> Try CoreUI PRO
                </CNavItem>
            </CSidebarNav>
        </CSidebar>
    )
}
