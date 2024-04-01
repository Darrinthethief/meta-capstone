import { Link } from "react-router-dom";
import navLogo from "../logo/Logo.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";
import "../assets/nav.css";

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
                <Link to="/">
                    <img src={navLogo}
                    id="nav-logo"
                    alt="Little Lemon Logo"
                    />
                </Link>

                <ul className={`nav-list ${ isActive ? 'active' : ''}`}>
                    <li><Link to="/" onClick={resetNav}>Home</Link></li>
                    <li><Link to="/" onClick={resetNav}>About</Link></li>
                    <li><Link to="/" onClick={resetNav}>Menu</Link></li>
                    <li><Link to="/reservation" onClick={resetNav}>Reservations</Link></li>
                    <li><Link to="/" onClick={resetNav}>Contact Us</Link></li>
                    <li><Link to="/" onClick={resetNav}>Log In</Link></li>
                </ul>

                <div id="nav-menu" onClick={toggleNav}>
                    {isActive ? <FontAwesomeIcon id="close-icon" icon={faTimes} /> : <FontAwesomeIcon id="hamburger" icon={faBars} />}
                </div>
            </nav>
        </div>
    );
};

export default Nav;