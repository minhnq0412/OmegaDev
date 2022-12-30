import React from "react";
import Input from "../../elements/input/Input";
import Textarea from "../../elements/input/Textarea";

const DetailUser = ({ user, handleClose = () => {} }) => {
  return (
    <div className=" bg-white relative z-10 p-5 rounded-lg w-full min-w-[30rem] flex flex-col">
      <span className="text-center font-semibold text-3xl">Detail</span>
      <span
        className="absolute top-3 right-5 cursor-pointer font-semibold"
        onClick={handleClose}
      >
        X
      </span>
      <Input value={user?.id} label={`ID`} disabled />
      <Input value={user?.userId} label={`User ID`} disabled />
      <Textarea value={user?.title} label={`Title`} disabled />
      <Textarea value={user?.body} label={`Body`} disabled />
    </div>
  );
};

export default DetailUser;
