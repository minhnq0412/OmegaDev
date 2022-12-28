import React from "react";
import EyeSvg from "../svg/EyeSvg";

const UserItem = ({ user }) => {
  return (
    <>
      <tr className="border-b">
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
          {user?.id}
        </td>
        <Field>{user?.userId}</Field>
        <Field>{user?.title}</Field>
        <Field>
          <EyeSvg />
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
