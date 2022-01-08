import { notification } from "antd";
import { createUser, deleteUser, editUser, getUser } from "../../apis/User.api";
import * as actions from "./User.action";

export const getUsers = () => {
  return (dispatch) => {
    return getUser()
      .then((res) => {
        dispatch(actions.getUserSuccess(res.data));
      })
      .catch((error) => {
        Promise.reject(error);
      });
  };
};

export const addUser = (user) => {
  return (dispatch) => {
    return createUser(user)
      .then((res) => {
        notification["success"]({
          message: "User Created Successfully",
          placement: "bottomLeft",
        });
        dispatch(actions.createUserSuccess(res.data));
      })
      .catch((error) => {
        notification["error"]({
          message: "User Created Failed",
          placement: "bottomLeft",
        });
        Promise.reject(error);
      });
  };
};

export const updateUser = (user, id) => {
  return (dispatch) => {
    return editUser(user, id)
      .then((res) => {
        notification["success"]({
          message: "User Edited Successfully",
          placement: "bottomLeft",
        });
        dispatch(actions.editUserSuccess(res.data));
      })
      .catch((error) => {
        notification["error"]({
          message: "User Edited Failed",
          placement: "bottomLeft",
        });
        Promise.reject(error);
      });
  };
};

export const removeUser = (id) => {
  return (dispatch) => {
    return deleteUser(id)
      .then((res) => {
        notification["success"]({
          message: "User Delete Successfully",
          placement: "bottomLeft",
        });
        dispatch(actions.deleteUser(res.data.id));
      })
      .catch((error) => {
        notification["error"]({
          message: "User Delete Failed",
          placement: "bottomLeft",
        });
        Promise.reject(error);
      });
  };
};
