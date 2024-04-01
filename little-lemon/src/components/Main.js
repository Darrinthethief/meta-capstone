import Homepage from "../subcomponents/Homepage";
import BookingForm from "../subcomponents/BookingForm";
import ConfirmBooking from "../subcomponents/ConfirmBooking";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useReducer } from "react";
import { fetchAPI, submitAPI } from "../api";

const Main = () => {

  const [date, setDate] = useState(new Date());

  function initializeTimes(date) {
    return fetchAPI(date);
  }

  function updateTimes(date) {
    const newDate = new Date(date);
    return fetchAPI(setDate(newDate));
  }

  const navigate = useNavigate();

  function submitForm(formData) {
    const confirmSubmit = submitAPI(formData);

    if (confirmSubmit) {
      navigate("/confirm");
    }
  }

  function reducer(state, action) {
    switch (action.type) {
      case "initialize":
        return initializeTimes(date);
      case "update":
        return updateTimes(date);
      default:
        return state;
    }
  }

  const [availableTimes, dispatch] = useReducer(reducer, initializeTimes(date));

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/reservation" element={<BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />} />
        <Route path="/confirm" element={<ConfirmBooking />} />
      </Routes>
    </>
  );
};

export default Main;