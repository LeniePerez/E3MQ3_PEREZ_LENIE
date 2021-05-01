import React from 'react'
import {Nav, NavMenu, NavLink, NavBtn} from './NavbarElements.js';

const Navbar = () => {
    return (
        <>
            <Nav>
            <NavMenu>
                <NavLink to="/home" activeStyle>
                    Home
                </NavLink>
                <NavLink to="/about" activeStyle>
                    About
                </NavLink>
                <NavBtn to="/user" activeStyle>
                    lenie_perez
                </NavBtn>
            </NavMenu>
            </Nav>
        </>
    )
}

export default Navbar

