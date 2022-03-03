import React from 'react'
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavElements';

const Navbar = () => {
  return (
    <div>
        <Nav>
            <NavLink to="/">
                <img src="./assets/logo.png" alt="logo" />
            </NavLink>
            <Bars />
            <NavMenu>
                <NavLink to="/about" activeStyle>
                    Stammdaten
                </NavLink>
                <NavLink to="/dienstplaene" activeStyle>
                    Dienstpläne
                </NavLink>
                <NavLink to="/logout" activeStyle>
                    Logout
                </NavLink>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/login">Log In</NavBtnLink>
            </NavBtn>
        </Nav>
    </div>
  )
}

export default Navbar