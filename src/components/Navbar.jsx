import React from 'react'
import {CButton, CContainer, CForm, CFormInput, CNavbar, CNavbarBrand} from '@coreui/react'
import CIcon from "@coreui/icons-react";
import {cilCalendar, cilJustifyCenter, cilSpeedometer} from "@coreui/icons";
import '../styles/Navbar.css'

export const Navbar = () => {
    return (
        <CNavbar className="bg-body-tertiary">
            <CContainer fluid>
                <CNavbarBrand href="#" customClassName="navbar-brand">
                    <CIcon customClassName="nav-icon" height="30px" width="30px"
                           icon={cilCalendar}/> Calendar</CNavbarBrand>
                <CForm className="d-flex">
                    {/*<img src="https://www.cybaemtech.com/img/pvtlogo.webp" alt="Cybaem Tech Pvt. Ltd."*/}
                    {/*     aria-hidden="true" class="size-5" height="35px" width="80px"/>*/}
                </CForm>
            </CContainer>
        </CNavbar>
    )
}