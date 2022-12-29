import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Content from "../components/Content";
import { ModalBase, DetailUser, Loading } from "../components/modal/index";
import UserItem from "../components/user/UserItem";
import useDebounce from "../hooks/useDebounce";
import userApi from "../services/api/userApi";
import { ManagementField } from "../utils/data/ManagementField";
const itemsPerPage = 5;

const PostsManagement = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [userView, setUserView] = useState();
  const [itemOffset, setItemOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [filter, setFilter] = useState();
  const [users, setUsers] = useState();
  const [usersDisplay, setUsersDisplay] = useState();
  const { debounceValue: filterDebounce, loading } = useDebounce(filter, 500);

  const handleClickView = (user) => {
    setIsShowModal(true);
    setUserView(user);
  };
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % usersDisplay?.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    setPageCount(Math.ceil(usersDisplay?.length / itemsPerPage));
    setItemOffset(0);
  }, [usersDisplay]);

  useEffect(() => {
    userApi
      .getAllUser()
      .then((res) => {
        setUsers(res);
        setUsersDisplay(res);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setUsersDisplay(
      users?.filter(
        (o) => o.userId === +filterDebounce || o?.title.includes(filterDebounce)
      )
    );
  }, [filterDebounce]);
  
  return (
    <Content content={`Posts Management`}>
      <div className="flex flex-col h-full">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 h-[80%]">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <input
              type="text"
              className="w-full p-4 rounded-lg bg-slate-800 outline-none text-white"
              placeholder="Type here to search..."
              onChange={(e) => setFilter(e.target.value)}
            />
            <div className="overflow-hidden">
              <table className="min-w-full">
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
                <tbody>
                  {usersDisplay
                    ?.filter((o, i) => i >= itemOffset)
                    ?.map(
                      (o, i) =>
                        i < itemsPerPage && (
                          <UserItem
                            user={o}
                            key={o.id}
                            handleClickView={handleClickView}
                          />
                        )
                    )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="mt-2">
          <ReactPaginate
            activeClassName={`text-xl font-extrabold text-white`}
            pageLinkClassName={``}
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={10}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
            className="pagination text-white flex justify-evenly rounded-full items-center"
          />
        </div>
      </div>
      <ModalBase visible={isShowModal} onClose={() => setIsShowModal(false)}>
        <DetailUser
          user={userView}
          handleClose={() => setIsShowModal(false)}
        ></DetailUser>
      </ModalBase>
      <ModalBase visible={loading}>
        <Loading />
      </ModalBase>
    </Content>
  );
};

export default PostsManagement;
