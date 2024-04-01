import "../assets/confirmbooking.css";
import React from "react";
import { Link } from "react-router-dom";

const ConfirmBooking = () => {

    return (
        <div className="confirm-section">
            <section className="confirmed">
                <h2 className="confirm-title">Little Lemon</h2>

                <h3 className="sub-confirm">Your Booking has Been Confirmed</h3>

                <button id="home-button"><Link to="/">Home</Link></button>
            </section>
        </div>
    );
}

export default ConfirmBooking;