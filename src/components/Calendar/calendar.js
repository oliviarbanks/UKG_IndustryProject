import React, { useState } from "react";
import "./calendar.scss";
import { Link } from "react-router-dom";

const Calendar = () => {
  const [selectedDates, setSelectedDates] = useState([]);

  const handleDateClick = (e) => {
    let datesArray = selectedDates;
    datesArray.push(e);
    console.log(e);
    setSelectedDates(datesArray);
    console.log(selectedDates);
    console.log(isDateSelected(e));
  };

  const isDateSelected = (date) => {
    return selectedDates.includes(date);
  };

  return (
    <div className="calendar">
      <div className="calendar__header">March 2023</div>
      <div className="calendar__weekdays">
        <p>Sun</p>
        <p>Mon</p>
        <p>Tue</p>
        <p>Wed</p>
        <p>Thu</p>
        <p>Fri</p>
        <p>Sat</p>
      </div>
      <div className="calendar__days">
        <div className="calendar__row">
          <div className="calendar__week">
            <button
              onClick={(e) => handleDateClick(26)}
              className={`calendar__date ${
                isDateSelected(26) ? "selected" : ""
              }`}
            >
              26
            </button>
            <button
              className={`calendar__date ${
                isDateSelected(3) ? "selected" : ""
              }`}
              onClick={() => handleDateClick(27)}
            >
              27
            </button>
            <button
              className={`calendar__date ${
                isDateSelected(2) ? "selected" : ""
              }`}
              onClick={() => handleDateClick(28)}
            >
              28
            </button>
            <button
              className={`calendar__date-dark ${
                isDateSelected(1) ? "selected" : ""
              }`}
              onClick={() => handleDateClick(1)}
            >
              1
            </button>
            <button
              className={`calendar__date-highlight ${
                isDateSelected(2) ? "selected" : ""
              }`}
              onClick={() => handleDateClick(2)}
            >
              2
            </button>
            <button
              className={`calendar__date-highlight ${
                isDateSelected(3) ? "selected" : ""
              }`}
              onClick={() => handleDateClick(3)}
            >
              3
            </button>
            <button
              className={`calendar__date-highlight ${
                isDateSelected(2) ? "selected" : ""
              }`}
              onClick={() => handleDateClick(4)}
            >
              4
            </button>
          </div>
          <div className="calendar__week">
            <button
              className={`calendar__date-highlight ${
                isDateSelected(1) ? "selected" : ""
              }`}
              onClick={() => handleDateClick(5)}
            >
              5
            </button>
            <button
              className={`calendar__date-highlight ${
                isDateSelected(2) ? "selected" : ""
              }`}
              onClick={() => handleDateClick(6)}
            >
              6
            </button>
            <button
              className={`calendar__date-dark ${
                isDateSelected(3) ? "selected" : ""
              }`}
              onClick={() => handleDateClick(7)}
            >
              7
            </button>
            <button
              className={`calendar__date ${
                isDateSelected(2) ? "selected" : ""
              }`}
              onClick={() => handleDateClick(8)}
            >
              8
            </button>
            <button
              className={`calendar__date ${
                isDateSelected(1) ? "selected" : ""
              }`}
              onClick={() => handleDateClick(9)}
            >
              9
            </button>
            <button
              className={`calendar__date ${
                isDateSelected(2) ? "selected" : ""
              }`}
              onClick={() => handleDateClick(10)}
            >
              10
            </button>
            <button
              className={`calendar__date ${
                isDateSelected(3) ? "selected" : ""
              }`}
              onClick={() => handleDateClick(3)}
            >
              11
            </button>
          </div>
          <div className="calendar__week">
            <button
              className={`calendar__date ${
                isDateSelected(2) ? "selected" : ""
              }`}
              onClick={() => handleDateClick(2)}
            >
              12
            </button>
            <button
              className={`calendar__date ${
                isDateSelected(1) ? "selected" : ""
              }`}
              onClick={() => handleDateClick(1)}
            >
              13
            </button>
            <button
              className={`calendar__date ${
                isDateSelected(2) ? "selected" : ""
              }`}
              onClick={() => handleDateClick(2)}
            >
              14
            </button>
            <button
              className={`calendar__date unavailable ${
                isDateSelected(3) ? "selected" : ""
              }`}
              onClick={() => handleDateClick(3)}
            >
              15
            </button>
            <button
              className={`calendar__date unavailable ${
                isDateSelected(2) ? "selected" : ""
              }`}
              onClick={() => handleDateClick(2)}
            >
              16
            </button>
            <button
              className={`calendar__date  unavailable ${
                isDateSelected(1) ? "selected" : ""
              }`}
              onClick={() => handleDateClick(1)}
            >
              17
            </button>
            <button
              className={`calendar__date ${
                isDateSelected(2) ? "selected" : ""
              }`}
              onClick={() => handleDateClick(2)}
            >
              18
            </button>
          </div>
          <div className="calendar__week">
            <button
              className={`calendar__date unavailable ${
                isDateSelected(3) ? "selected" : ""
              }`}
              onClick={() => handleDateClick(3)}
            >
              19
            </button>
            <button
              className={`calendar__date unavailable ${
                isDateSelected(2) ? "selected" : ""
              }`}
              onClick={() => handleDateClick(2)}
            >
              20
            </button>
            <button
              className={`calendar__date unavailable ${
                isDateSelected(1) ? "selected" : ""
              }`}
              onClick={() => handleDateClick(1)}
            >
              21
            </button>
            <button
              className={`calendar__date unavailable ${
                isDateSelected(2) ? "selected" : ""
              }`}
              onClick={() => handleDateClick(2)}
            >
              22
            </button>
            <button
              className={`calendar__date unavailable ${
                isDateSelected(3) ? "selected" : ""
              }`}
              onClick={() => handleDateClick(3)}
            >
              23
            </button>
            <button
              className={`calendar__date ${
                isDateSelected(2) ? "selected" : ""
              }`}
              onClick={() => handleDateClick(2)}
            >
              24
            </button>
            <button
              className={`calendar__date ${
                isDateSelected(1) ? "selected" : ""
              }`}
              onClick={() => handleDateClick(1)}
            >
              25
            </button>
          </div>
          <div className="calendar__week">
            <button
              className={`calendar__date ${
                isDateSelected(2) ? "selected" : ""
              }`}
              onClick={() => handleDateClick(2)}
            >
              26
            </button>
            <button
              className={`calendar__date ${
                isDateSelected(3) ? "selected" : ""
              }`}
              onClick={() => handleDateClick(3)}
            >
              27
            </button>
            <button
              className={`calendar__date ${
                isDateSelected(2) ? "selected" : ""
              }`}
              onClick={() => handleDateClick(2)}
            >
              28
            </button>

            <button
              className={`calendar__date ${
                isDateSelected(1) ? "selected" : ""
              }`}
              onClick={() => handleDateClick(1)}
            >
              29
            </button>
            <button
              className={`calendar__date ${
                isDateSelected(2) ? "selected" : ""
              }`}
              onClick={() => handleDateClick(2)}
            >
              30
            </button>
            <button
              className={`calendar__date ${
                isDateSelected(3) ? "selected" : ""
              }`}
              onClick={() => handleDateClick(3)}
            >
              31
            </button>
            <button
              className={`calendar__date unavailable ${
                isDateSelected(1) ? "selected" : ""
              }`}
              onClick={() => handleDateClick(1)}
            >
              1
            </button>
          </div>
        </div>
        <div className="bottom">
          <div className="bottom__button">
            From
            <p className="bottom__button-date">03/01/2023</p>
          </div>
          <div className="bottom__button-date">
            To
            <p lassName="bottom__button-date">03/07/2023</p>
          </div>
          <Link className="link" to="/contact">
            <div className="bottom__button-dates">Set Dates</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
