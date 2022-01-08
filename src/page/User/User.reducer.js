import { CREATE_USER, DELETE_USER, EDIT_USER, GET_USER } from "./User.constant";

const initialState = {
  userList: [],
};
export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        userList: action.payload,
      };
    case CREATE_USER:
      return {
        ...state,
        userList: [action.payload, ...state.userList],
      };
    case EDIT_USER:
      const newState = [...state.userList];
      const index = newState.findIndex((user) => {
        return user.id === action.payload.id;
      });
      newState[index] = action.payload;
      return {
        ...state,
        userList: newState,
      };
    case DELETE_USER:
      return {
        ...state,
        userList: state.userList.filter((user) => user.id !== action.payload),
      };
    default:
      return state;
  }
};
