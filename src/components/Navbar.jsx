import React from 'react'
import { CContainer, CForm, CNavbar, CNavbarBrand } from '@coreui/react'

export const Navbar = () => {
    return (
        <CNavbar className="bg-body-tertiary">
            <CContainer fluid>
                <CForm className="d-flex">
                    <CNavbarBrand href="#">
                        <img
                            src="https://www.cybaemtech.com/img/pvtlogo.webp"
                            alt="Cybaem Tech"
                            width="70"
                            height="40"
                        />
                    </CNavbarBrand>
                </CForm>
            </CContainer>
        </CNavbar>
    )
}