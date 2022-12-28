import React from "react";
import EyeSvg from "../svg/EyeSvg";

const UserItem = ({ user, handleClickView }) => {
  return (
    <>
      <tr className="border-b">
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
          {user?.id}
        </td>
        <Field>{user?.userId}</Field>
        <Field>{user?.title}</Field>
        <Field>
          <span onClick={() => handleClickView(user)}><EyeSvg /></span>
        </Field>
      </tr>
    </>
  );
};

const Field = ({ children }) => (
  <td className="text-sm font-light px-6 py-4 whitespace-nowrap text-white">
    {children}
  </td>
);

export default UserItem;
