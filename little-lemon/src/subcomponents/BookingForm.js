import "../assets/bookingform.css";
import { useState } from "react";

const BookingForm = ({availableTimes, dispatch, submitForm}) => {

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState("");
    const [times, setTimes] = useState("");
    const [guest, setGuest] = useState("");
    const [occasion, setOccasion] = useState("");
    const [comments, setComments] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        submitForm(e)
    }

    const handleChange = (e) => {
        setDate(e);
        dispatch(e);
    }

    return (

        <div className="booking-page">
            <section className="booking-form">
                <h2 className="booking-page-title">Little Lemon Booking</h2>

                <div className="form">
                    <form className="book-form" onSubmit={handleSubmit}>
                        <div className="form-input">
                            <label htmlFor="name">Name</label><br/>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-input">
                            <label htmlFor="phone">Phone</label><br/>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="Phone Number"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-input">
                            <label htmlFor="date">Date</label><br/>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                value={date}
                                onChange={(e) => handleChange(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-input">
                            <label htmlFor="res-time">Time</label>
                        </div>
                        <div>
                            <select id="res-time" value={times} onChange={(e) => setTimes(e.target.value)} required>
                                <option>Select Time</option>
                                {availableTimes && availableTimes.map(time => {
                                    return <option key={time} value={time}>{time}</option>
                                })}
                            </select>
                        </div>
                        <div className="form-input">
                            <label htmlFor="guests">Number of Guest</label><br/>
                        </div>
                        <div>
                            <input
                                type="number"
                                id="guests"
                                name="guest"
                                min="1"
                                max="10"
                                placeholder="1"
                                value={guest}
                                onChange={(e) => setGuest(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-input">
                            <label htmlFor="occassion">Occasion</label>
                        </div>
                        <div>
                            <select id="occassion" value={occasion} onChange={e => setOccasion(e.target.value)} required>
                                <option>Select Occasion</option>
                                <option value="anniversary">Anniversary</option>
                                <option value="birthday">Birthday</option>
                                <option value="wedding">Wedding</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className="form-input">
                            <label htmlFor="comments">Comments</label>
                        </div>
                        <div>
                            <textarea
                                id="comments"
                                name="comments"
                                rows="4"
                                cols="50"
                                placeholder="Additional Comments"
                                value={comments}
                                onChange={(e) => setComments(e.target.value)}
                                required
                            >
                            </textarea>
                        </div>
                        <button id="book" type="submit">Book Now</button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default BookingForm;