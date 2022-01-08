import * as types from "./User.constant";

export const getUserSuccess = (payload) => ({
  type: types.GET_USER,
  payload,
});

export const createUserSuccess = (payload) => ({
  type: types.CREATE_USER,
  payload,
});

export const deleteUser = (payload) => ({
  type: types.DELETE_USER,
  payload,
});

export const editUserSuccess = (payload) => ({
  type: types.EDIT_USER,
  payload,
});
