import React, { useState } from "react";
import "./calendar.scss";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthDays = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth() + 1,
    0
  ).getDate();
  const monthStartDay = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth(),
    1
  ).getDay();

  const handlePreviousMonth = () => {
    setSelectedDate(
      new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setSelectedDate(
      new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1)
    );
  };

  return (
    <div className="calendar">
      <div className="calendar__toggle">
        <button onClick={handlePreviousMonth}>Previous</button>
        <span>
          {monthNames[selectedDate.getMonth()]} {selectedDate.getFullYear()}
        </span>
        <button onClick={handleNextMonth}>Next</button>
      </div>
      <section>
        <header>
          <div>
            {weekdays.map((weekday) => (
              <div key={weekday}>{weekday}</div>
            ))}
          </div>
        </header>
        <div>
          {[...Array(Math.ceil((monthDays + monthStartDay) / 7))].map(
            (row, rowIndex) => (
              <div key={rowIndex}>
                {[...Array(7)].map((_, columnIndex) => {
                  const day = rowIndex * 7 + columnIndex + 1 - monthStartDay;
                  return (
                    <div key={day}>
                      {day > 0 && day <= monthDays ? (
                        <button
                          onClick={() =>
                            setSelectedDate(
                              new Date(
                                selectedDate.getFullYear(),
                                selectedDate.getMonth(),
                                day
                              )
                            )
                          }
                        >
                          {day}
                        </button>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            )
          )}
        </div>
      </section>
    </div>
  );
};

export default Calendar;
