import { combineReducers } from "redux";
import { UserReducer } from "../page/User/User.reducer";

export const rootReducer = combineReducers({
  userList: UserReducer,
});
