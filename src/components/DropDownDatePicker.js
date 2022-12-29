import React from "react";
import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

const DropDownDatePicker = ({ setValue = () => {}, name, error, label }) => {
  const [startDate, setStartDate] = useState();
  const handleChooseDate = (date) => {
    setStartDate(date);
    setValue(date);
  };
  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between">
        <label htmlFor="" className={`ml-2 font-semibold text-white`}>
          {label}
        </label>
        {error?.message && (
          <label htmlFor="" className="text-red-600 mr-3">
            {error?.message}
          </label>
        )}
      </div>
      <DatePicker
        className={`bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500`}
        dateFormat="dd-MM-yyyy"
        selected={startDate}
        onChange={(date) => handleChooseDate(date)}
      />
    </div>
  );
};

export default DropDownDatePicker;
