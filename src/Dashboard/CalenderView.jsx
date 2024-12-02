import React, { useState, useEffect, useRef, useMemo } from 'react';

const CalendarView = ({ onDateChange }) => {
  const [activeDate, setActiveDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const calendarRef = useRef(null);

  // Memoized function to get visible dates
  const visibleDates = useMemo(() => {
    const today = new Date();
    const dates = [];

    for (let i = -30; i <= 30; i++) {
      const date = new Date(today.getFullYear(), today.getMonth(), today.getDate() + i);
      dates.push(date);
    }

    return dates;
  }, []);

  // Auto-select today's date on initial render
  useEffect(() => {
    const today = new Date();
    setSelectedDate(today);
    
    // Call onDateChange if prop is provided
    if (onDateChange) {
      onDateChange(today);
    }
  }, []); // Empty dependency array ensures this runs only once on mount

  const handleDateClick = (date) => {
    setActiveDate(date);
    setSelectedDate(date);
    
    // Call the onDateChange prop with the selected date
    if (onDateChange) {
      onDateChange(date);
    }
  };

  // Utility function to check if two dates are the same
  const isSameDate = (date1, date2) => {
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  };

  // Effect to center today's date when component mounts
  useEffect(() => {
    const centerToday = () => {
      if (calendarRef.current) {
        const todayIndex = visibleDates.findIndex(date => 
          isSameDate(date, new Date())
        );

        if (todayIndex !== -1) {
          const calendarElement = calendarRef.current;
          const dateElements = calendarElement.querySelectorAll('[data-date-index]');
          
          if (dateElements[todayIndex]) {
            const todayElement = dateElements[todayIndex];
            const elementCenter = todayElement.offsetLeft + (todayElement.offsetWidth / 2);
            const calendarCenter = calendarElement.offsetWidth / 2;
            
            calendarElement.scrollLeft = elementCenter - calendarCenter;
          }
        }
      }
    };

    // Slight delay to ensure DOM is fully rendered
    const timeoutId = setTimeout(centerToday, 100);

    return () => clearTimeout(timeoutId);
  }, [visibleDates]);

  return (
    <div className="flex flex-col items-center w-full mb-4">
      <div
        className="flex bg-white rounded-xl py-1 px-1 space-x-1 overflow-x-auto w-full scroll-smooth"
        ref={calendarRef}
      >
        {visibleDates.map((date, index) => {
          const isSelected = selectedDate && isSameDate(date, selectedDate);
          
          return (
            <div
              key={index}
              data-date-index={index}
              className={`flex-shrink-0 w-[13%] py-2 px-4 flex items-center justify-center cursor-pointer font-extralight text-[10px] relative
                ${isSelected ? 'bg-[#13AE85] text-white rounded-xl' : 'text-gray-500 hover:bg-gray-200 bg-white'}`}
              onClick={() => handleDateClick(date)}
            >
              <span className='text-center'>
                {date.getDate()}
                <br />
                {date.toLocaleDateString('en-US', { weekday: 'short' })}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CalendarView;