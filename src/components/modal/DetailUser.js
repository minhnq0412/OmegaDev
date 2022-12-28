import React from "react";

const DetailUser = ({ user, handleClose = () => { } }) => {
  return (
    <div className=" bg-white relative z-10 p-5 rounded-lg w-full min-w-[30rem] flex flex-col">
      <span className="text-center font-semibold text-3xl">Detail</span>
      <span
        className="absolute top-3 right-5 cursor-pointer font-semibold"
        onClick={handleClose}
      >X
      </span>
      <InputDisabled value={user?.id} label={`ID`} />
      <InputDisabled value={user?.userId} label={`User ID`} />
      <TextAreaDisabled value={user?.title} label={`Title`} />
      <TextAreaDisabled value={user?.body} label={`Body`} />
    </div>
  );
};
const InputDisabled = ({ label, value }) => (
  <>
    <label htmlFor="" className="mb-2 ml-2 font-semibold">{label}</label>
    <input
      defaultValue={value}
      type="text"
      className="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
      disabled
    />
  </>
);
const TextAreaDisabled = ({ label, value }) => (
  <>
    <label htmlFor="" className="mb-2 ml-2 font-semibold">{label}</label>
    <textarea
      value={value}
      type="text"
      className="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
      disabled
    />
  </>
);

export default DetailUser;
