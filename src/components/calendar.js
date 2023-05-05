import React, { useState } from "react";
import "./calendar.scss";

const Calendar = () => {
  const [selectedDates, setSelectedDates] = useState([]);

  const handleDateClick = (date) => {
    if (selectedDates.includes(date)) {
      setSelectedDates(selectedDates.filter((d) => d !== date));
    } else {
      setSelectedDates([...selectedDates, date]);
    }
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
              onClick={() => handleDateClick(2)}
            >
              4
            </button>
          </div>
          <div className="calendar__week">
            <button
              className={`calendar__date-highlight ${
                isDateSelected(1) ? "selected" : ""
              }`}
              onClick={() => handleDateClick(1)}
            >
              5
            </button>
            <button
              className={`calendar__date-highlight ${
                isDateSelected(2) ? "selected" : ""
              }`}
              onClick={() => handleDateClick(2)}
            >
              6
            </button>
            <button
              className={`calendar__date-dark ${
                isDateSelected(3) ? "selected" : ""
              }`}
              onClick={() => handleDateClick(3)}
            >
              7
            </button>
            <button
              className={`calendar__date ${
                isDateSelected(2) ? "selected" : ""
              }`}
              onClick={() => handleDateClick(2)}
            >
              8
            </button>
            <button
              className={`calendar__date ${
                isDateSelected(1) ? "selected" : ""
              }`}
              onClick={() => handleDateClick(1)}
            >
              9
            </button>
            <button
              className={`calendar__date ${
                isDateSelected(2) ? "selected" : ""
              }`}
              onClick={() => handleDateClick(2)}
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
            <p className="bottom__button">03/01/2023</p>
          </div>
          <div className="bottom__button">
            To
            <p>03/07/2023</p>
          </div>
          <div className="bottom__button-dates">Set Dates</div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
