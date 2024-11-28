import React, { useState, useEffect, useRef } from 'react';

const CalendarView = () => {
  const [activeDate, setActiveDate] = useState(new Date());
  const [visibleDates, setVisibleDates] = useState([]);
  const calendarRef = useRef(null);

  // Function to get 61 visible dates (30 before and 30 after the current date)
  const getVisibleDates = () => {
    const today = new Date();
    const visibleDates = [];

    for (let i = -30; i <= 30; i++) {
      const date = new Date(today.getFullYear(), today.getMonth(), today.getDate() + i);
      visibleDates.push(date);
    }

    return visibleDates;
  };

  const handleDateClick = (date) => {
    setActiveDate(date);
    console.log('Date clicked:', date);
  };

  // Automatically set the active date to today's date and the visible dates when the component mounts
  useEffect(() => {
    setActiveDate(new Date());
    setVisibleDates(getVisibleDates());
  }, []);

  // Scroll the calendar to center the active date when the component mounts
  useEffect(() => {
    if (calendarRef.current) {
      const activeDateIndex = visibleDates.findIndex((date) =>
        isSameDate(date, activeDate)
      );
      const calendarWidth = calendarRef.current.offsetWidth;
      const dateTileWidth = 46.76; // Assuming each date tile is 40px wide
      const scrollLeft =
        (activeDateIndex * dateTileWidth) -
        (calendarWidth / 2) +
        (dateTileWidth / 2);
      calendarRef.current.scrollLeft = scrollLeft;
    }
  }, [visibleDates, activeDate]);

  const isSameDate = (date1, date2) => {
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  };

  return (
    <div className="flex flex-col items-center">
      <div
        className="flex bg-white rounded-xl py-1 px-1 space-x-1 overflow-x-auto w-full"
        ref={calendarRef}
      >
        {visibleDates.map((date, index) => (
          <div
            key={index}
            className={`w-[13%] py-2 px-4  flex items-center justify-center  cursor-pointer font-extralight text-[10px] ${
              isSameDate(date, activeDate)
                ? 'bg-[#13AE85] rounded-xl shadow-sm text-white'
                : 'text-gray-500 hover:bg-gray-200 bg-white'
            }`}
            onClick={() => handleDateClick(date)}
          >
            <span className='text-center'>
              {date.getDate()}
              <br />
              {date.toLocaleDateString('en-US', { weekday: 'short' })}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;