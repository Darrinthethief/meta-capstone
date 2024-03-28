import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import navLogo from "../logo/lemonLogo.png";

const Nav = () => {
    return (
        <div id="nav-bar">
            <nav>
                <img src={navLogo}
                    alt="Little Lemon Logo"
                    width="350"
                />

                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Menu</a></li>
                    <li><a href="/">Contact Us</a></li>
                </ul>

                <FontAwesomeIcon fontSize={30} icon={faBars} />
            </nav>
        </div>
    );
};

export default Nav;