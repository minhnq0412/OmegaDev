import React from "react";
import { useController } from "react-hook-form";

const InputForm = ({
  label,
  value = "",
  classLabel = "",
  control,
  error,
  ...props
}) => {
  const { field } = useController({
    control: control,
    name: props.name,
    defaultValue: "",
  });

  return (
    <div className={`flex flex-col gap-3`}>
      <div className="flex justify-between">
        <label htmlFor="" className={`ml-2 font-semibold ${classLabel}`}>
          {label}
        </label>
        {error?.message && (
          <label htmlFor="" className="text-red-600 mr-3">
            {error?.message}
          </label>
        )}
      </div>
      <input
        type="text"
        className="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        {...field}
        {...props}
      />
    </div>
  );
};

export default InputForm;
