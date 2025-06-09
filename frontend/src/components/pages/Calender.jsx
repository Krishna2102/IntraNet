import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function SimpleCalendar() {
  const [value, setValue] = useState(new Date());

  const tileClassName = ({ date, view }) => {
    const isToday = date.toDateString() === new Date().toDateString();
    const isSelected = date.toDateString() === value.toDateString();

    if (isToday) return 'bg-blue-100 text-blue-800 font-semibold rounded-lg';
    if (isSelected) return 'bg-violet-600 text-white font-semibold rounded-lg';
    return 'hover:bg-gray-100 rounded-lg';
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-2xl shadow-xl">
      <h2 className="text-2xl font-bold mb-4 text-center text-violet-700">📅 Calendar</h2>

      <div className="[&_.react-calendar]:w-full [&_.react-calendar]:border-0 [&_.react-calendar]:text-sm">
        <Calendar
          onChange={setValue}
          value={value}
          tileClassName={tileClassName}
        />
      </div>

      <p className="mt-6 text-center text-gray-700 font-medium">
        Selected Date: <span className="text-violet-600">{value.toDateString()}</span>
      </p>
    </div>
  );
}
