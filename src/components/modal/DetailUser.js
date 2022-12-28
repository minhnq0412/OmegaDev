import React from "react";

const DetailUser = () => {
  return (
    <div className=" bg-white relative z-10 p-5 rounded-lg w-full flex flex-col">
      <InputDisabled label={`ID`}/>
      <InputDisabled label={`User ID`}/>
      <InputDisabled label={`Title`}/>

      <label htmlFor="" className="mb-2 ml-2 font-semibold">Body</label>
      <textarea
        value={`heheshdhfhdssdffffffffffffffffffffffffffffffffffffsdff`}
        type="text"
        className="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        disabled
      />
    </div>
  );
};
const InputDisabled = ({ label, value }) => (
  <>
    <label htmlFor="" className="mb-2 ml-2 font-semibold">{label}</label>
    <input
      value={value}
      type="text"
      className="px-20 mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
      disabled
    />
  </>
);

export default DetailUser;
