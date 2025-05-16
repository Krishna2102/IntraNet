// Calendar.jsx
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function SimpleCalendar() {
  const [value, setValue] = useState(new Date());

  return (
    <div className="max-w-md mx-auto mt-6 bg-white p-4 rounded shadow">
      <h2 className="text-lg font-semibold mb-4 text-center">Calendar</h2>
      <Calendar
        onChange={setValue}
        value={value}
        className="w-full"
      />
      <p className="mt-4 text-center text-sm font-medium">
        Selected Date: <span className="text-violet-600">{value.toDateString()}</span>
      </p>
    </div>
  );
}
