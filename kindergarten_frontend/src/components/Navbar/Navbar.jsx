import React from 'react'
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavElements';

const imgStyle = {
    width: "60px",
    height: "60px"
}

const Navbar = () => {
  return (
    <div>
        <Nav>
            <NavLink to="/">
                <img src={require('../../assets/logo.png')} alt="logo" style={imgStyle} />
            </NavLink>
            <Bars />
            <NavMenu>
                <NavLink to="/stammdaten" activestyle>
                    Stammdaten
                </NavLink>
                <NavLink to="/dienstplaene" activestyle>
                    Dienstpläne
                </NavLink>
                <NavLink to="/logout" activestyle>
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