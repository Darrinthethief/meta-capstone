import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import navLogo from "../logo/Logo.svg";
import "../assets/nav.css";
import { useState } from 'react';

const Nav = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleNav = () => {
        const status = isActive;
        setIsActive(!status);
    }

    const resetNav = () => {
        setIsActive(false);
    }

    return (
        <div id="nav-bar">
            <nav>
                <img src={navLogo}
                    id="nav-logo"
                    alt="Little Lemon Logo"
                />

                <ul className={`nav-list ${ isActive ? 'active' : ''}`}>
                    <li><a href="/" onClick={resetNav}>Home</a></li>
                    <li><a href="/" onClick={resetNav}>About</a></li>
                    <li><a href="/" onClick={resetNav}>Menu</a></li>
                    <li><a href="/" onClick={resetNav}>Reservations</a></li>
                    <li><a href="/" onClick={resetNav}>Contact Us</a></li>
                    <li><a href="/" onClick={resetNav}>Log In</a></li>
                </ul>

                <div id="nav-menu" onClick={toggleNav}>
                    {isActive ? <FontAwesomeIcon id="close-icon" icon={faTimes} /> : <FontAwesomeIcon id="hamburger" icon={faBars} />}
                </div>
            </nav>
        </div>
    );
};

export default Nav;