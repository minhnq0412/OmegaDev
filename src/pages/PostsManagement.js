import React from "react";
import Content from "../components/Content";
import { Loading, ModalBase, DetailUser } from "../components/modal/index";
import UserItem from "../components/user/UserItem";
import { ManagementField } from "../utils/data/ManagementField";
import { DataUser } from "../utils/data/UserData";

const PostsManagement = () => {
  return (
    <Content content={`Posts Management`}>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <TableHead />
                <TableBody />
              </table>
            </div>
          </div>
        </div>
      </div>
      <ModalBase visible={true}>
        <DetailUser></DetailUser>
      </ModalBase>
    </Content>
  );
};

const TableHead = () => {
  return (
    <thead className="border-b">
      <tr>
        {ManagementField?.map((o) => (
          <th
            key={o}
            scope="col"
            className="text-sm font-medium px-6 py-4 text-left text-white"
          >
            {o}
          </th>
        ))}
      </tr>
    </thead>
  );
};

const TableBody = () => {
  return (
    <tbody>
      {DataUser?.map((o) => (
        <UserItem user={o} key={o.id} />
      ))}
    </tbody>
  );
};

export default PostsManagement;
