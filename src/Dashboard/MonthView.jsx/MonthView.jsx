import React, { useState, useEffect, useRef, useMemo } from "react";

const MonthView = ({ onMonthChange }) => {
  const [activeMonth, setActiveMonth] = useState(new Date());
  const [selectedMonth, setSelectedMonth] = useState(null);
  const calendarRef = useRef(null);

  // Memoized function to get visible months
  const visibleMonths = useMemo(() => {
    const today = new Date();
    const months = [];

    for (let i = -12; i <= 12; i++) {
      const month = new Date(today.getFullYear(), today.getMonth() + i, 1);
      months.push(month);
    }

    return months;
  }, []);

  // Auto-select the current month on initial render
  useEffect(() => {
    const thisMonth = new Date();
    setSelectedMonth(thisMonth);

    // Call onMonthChange if prop is provided
    if (onMonthChange) {
      onMonthChange(thisMonth);
    }
  }, []);

  const handleMonthClick = (month) => {
    setActiveMonth(month);
    setSelectedMonth(month);

    // Call the onMonthChange prop with the selected month
    if (onMonthChange) {
      onMonthChange(month);
    }
  };

  // Utility function to check if two months are the same
  const isSameMonth = (date1, date2) => {
    return (
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  };

  // Effect to center the current month when the component mounts
  useEffect(() => {
    const centerCurrentMonth = () => {
      if (calendarRef.current) {
        const currentMonthIndex = visibleMonths.findIndex((month) =>
          isSameMonth(month, new Date())
        );

        if (currentMonthIndex !== -1) {
          const calendarElement = calendarRef.current;
          const monthElements = calendarElement.querySelectorAll(
            "[data-month-index]"
          );

          if (monthElements[currentMonthIndex]) {
            const currentMonthElement = monthElements[currentMonthIndex];
            const elementCenter =
              currentMonthElement.offsetLeft +
              currentMonthElement.offsetWidth / 2;
            const calendarCenter = calendarElement.offsetWidth / 2;

            calendarElement.scrollLeft = elementCenter - calendarCenter;
          }
        }
      }
    };

    // Slight delay to ensure DOM is fully rendered
    const timeoutId = setTimeout(centerCurrentMonth, 100);

    return () => clearTimeout(timeoutId);
  }, [visibleMonths]);

  return (
    <div className="flex flex-col items-center w-full mb-4">
      <div
        className="flex bg-white rounded-xl py-1 px-1 space-x-1 overflow-x-auto w-full scroll-smooth"
        ref={calendarRef}
      >
        {visibleMonths.map((month, index) => {
          const isSelected =
            selectedMonth && isSameMonth(month, selectedMonth);

          return (
            <div
              key={index}
              data-month-index={index}
              className={`flex-shrink-0 w-[13%] py-2 px-4 flex items-center justify-center cursor-pointer font-extralight text-[9px] relative
                ${
                  isSelected
                    ? "bg-[#13AE85] text-white rounded-xl"
                    : "text-gray-500 hover:bg-gray-200 bg-white"
                }`}
              onClick={() => handleMonthClick(month)}
            >
              <span className="text-center">
                {month.toLocaleString("en-US", { month: "short" })}
                <br />
                {month.getFullYear()}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MonthView;
