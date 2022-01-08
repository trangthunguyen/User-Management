import { useEffect, useState } from "react";
import {
  BiEdit,
  FaSortAmountDownAlt,
  MdDelete,
  RiArrowUpDownFill,
} from "react-icons/all";
import InputModal from "../InputModal/InputModal";
import ConfirmModal from "../ConfirmModal/ConfirmModal";
import { Button, Pagination } from "antd";
import "./MainContent.scss";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../page/User/User.thunk";

const MainContent = () => {
  const users = useSelector((state) => state.userList.userList);
  const dispatch = useDispatch();
  const [idUserDelete, setIdUserDelete] = useState(null);
  const [createMode, setCreateMode] = useState(false);
  const [userEdit, setUserEdit] = useState(null);

  useEffect(() => {
    dispatch(actions.getUsers());
  }, []);

  const handleDeleteUser = (id) => dispatch(actions.removeUser(id));
  const handleCancelDelete = () => {
    setIdUserDelete(null);
  };

  const handleCreateUser = (user) => dispatch(actions.addUser(user));
  const handleEditUser = (user, id) => dispatch(actions.updateUser(user, id));
  const handleCancelModel = () => {
    setCreateMode(false);
    setUserEdit(null);
  };

  function itemRender(current, type, originalElement) {
    if (type === "prev") {
      return <Button className="prev-button">Previous</Button>;
    }
    if (type === "next") {
      return <Button className="next-button">Next</Button>;
    }
    return originalElement;
  }

  return (
    <div className="main-content">
      <div className="main-content-header">
        <span className="title">Hover Data Table</span>
        <Button
          type="primary"
          className="btn"
          onClick={() => {
            setCreateMode(true);
          }}
        >
          CREATE USER
        </Button>
      </div>

      <div className="wrap-table">
        <table className="table">
          <thead>
            <tr>
              <th>
                <span className="th-title">No.</span>
                <span className="th-sort">
                  <FaSortAmountDownAlt />
                </span>
              </th>

              <th>
                <span className="th-title">Name</span>
                <span className="th-sort">
                  <RiArrowUpDownFill />
                </span>
              </th>

              <th>
                <span className="th-title">City</span>
                <span className="th-sort">
                  <RiArrowUpDownFill />
                </span>
              </th>

              <th>
                <span className="th-title">Email</span>
                <span className="th-sort">
                  <RiArrowUpDownFill />
                </span>
              </th>

              <th>
                <span className="th-title">Option</span>
                <span className="th-sort">
                  <RiArrowUpDownFill />
                </span>
              </th>
            </tr>
          </thead>

          <tbody>
            {users.map((item, index) => (
              <tr className="row" key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.city}</td>
                <td>{item.email}</td>
                <td>
                  <span
                    className="option-icon"
                    onClick={() => {
                      setUserEdit(item);
                    }}
                  >
                    <BiEdit />
                  </span>
                  <span
                    className="delete option-icon"
                    onClick={() => {
                      setIdUserDelete(item.id);
                    }}
                  >
                    <MdDelete />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>

          <tfoot>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>City</th>
              <th>Email</th>
              <th>Option</th>
            </tr>
          </tfoot>
        </table>
      </div>

      <div className="table-foot">
        <span className="table-infor">
          Showing 1 to {users.length} of {users.length} users
        </span>

        <Pagination
          defaultCurrent={1}
          total={60}
          itemRender={itemRender}
          showSizeChanger={false}
        />
      </div>

      <InputModal
        createMode={createMode}
        handleCreateUser={handleCreateUser}
        handleCancelModel={handleCancelModel}
        userEdit={userEdit}
        handleEditUser={handleEditUser}
      />

      <ConfirmModal
        idUserDelete={idUserDelete}
        handleDeleteUser={handleDeleteUser}
        handleCancelDelete={handleCancelDelete}
      />
    </div>
  );
};

export default MainContent;
