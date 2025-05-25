

import React, { useState } from 'react';
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  addMonths,
  subMonths,
  isSameMonth,
  isSameDay
} from 'date-fns';
import '../../dashboard/style/Calendar.css';

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDates, setSelectedDates] = useState([
    new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 11),
    new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 28),
  ]);

  const handlePrevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const handleDateClick = date => {
    alert(`Session Details for ${format(date, 'MMMM d, yyyy')}`);
  };

  const renderHeader = () => (
    <div className="calendar-header  flex font-poppins   items-center justify-between ">
      <span className='text-[#3E3E3ECC] font-poppins text-base xl:text-lg font-medium'>UPCOMING SESSIONS</span>
      <div className="month-nav text-xs sm:text-sm flex gap-sm:2 text-[#3E3E3ECC]">
        <button onClick={handlePrevMonth}>&lt;</button>
        <span className="month-label">{format(currentMonth, 'MMMM yyyy')}</span>
        <button onClick={handleNextMonth}>&gt;</button>
      </div>
    </div>
  );

  const renderDays = () => {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    return <div className="calendar-days">{days.map(day => <div key={day}>{day}</div>)}</div>;
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart, { weekStartsOn: 1 });
    const endDate = endOfWeek(monthEnd, { weekStartsOn: 1 });

    const rows = [];
    let days = [];
    let day = startDate;

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const formattedDate = format(day, 'd');
        const isSelected = selectedDates.some(date => isSameDay(day, date));

        days.push(
          <div
            key={day}
            className={`calendar-cell ${!isSameMonth(day, monthStart) ? 'disabled' : ''} ${isSelected ? 'selected' : ''}`}
            onClick={() => handleDateClick(day)}
          >
            {formattedDate}
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(<div className="calendar-row" key={day}>{days}</div>);
      days = [];
    }

    return <div className="calendar-body">{rows}</div>;
  };

  return (
    <div className="calendar-container ">
      {renderHeader()}
      {renderDays()}
      {renderCells()}
    </div>
  );
};

export default Calendar;














// import React, { useState } from 'react';
// import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isSameDay } from 'date-fns';
// import '../../dashboard/style/Calendar.css';

// const Calendar = () => {
//   const [currentMonth] = useState(new Date());
//   const [selectedDates, setSelectedDates] = useState([
//     new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 11),
//     new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 28),
//   ]);

//   const renderHeader = () => (
//     <div className="calendar-header">UPCOMING SESSIONS</div>
//   );

//   const renderDays = () => {
//     const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
//     return <div className="calendar-days">{days.map(day => <div key={day}>{day}</div>)}</div>;
//   };

//   const renderCells = () => {
//     const monthStart = startOfMonth(currentMonth);
//     const monthEnd = endOfMonth(monthStart);
//     const startDate = startOfWeek(monthStart, { weekStartsOn: 1 });
//     const endDate = endOfWeek(monthEnd, { weekStartsOn: 1 });

//     const rows = [];
//     let days = [];
//     let day = startDate;

//     while (day <= endDate) {
//       for (let i = 0; i < 7; i++) {
//         const formattedDate = format(day, 'd');
//         const isSelected = selectedDates.some(date => isSameDay(day, date));

//         days.push(
//           <div
//             key={day}
//             className={`calendar-cell ${!isSameMonth(day, monthStart) ? 'disabled' : ''} ${isSelected ? 'selected' : ''}`}
//             onClick={() => handleDateClick(day)}
//           >
//             {formattedDate}
//           </div>
//         );

//         day = addDays(day, 1);
//       }

//       rows.push(<div className="calendar-row" key={day}>{days}</div>);
//       days = [];
//     }

//     return <div className="calendar-body">{rows}</div>;
//   };

//   const handleDateClick = date => {
//     alert(`Session Details for ${format(date, 'MMMM d, yyyy')}`);
//   };

//   return (
//     <div className="calendar-container">
//       {renderHeader()}
//       {renderDays()}
//       {renderCells()}
//     </div>
//   );
// };

// export default Calendar;
