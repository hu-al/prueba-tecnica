import { combineReducers } from "redux";
import fetchEmployees from "./fetchEmployees";
import fakeLogin from "./fakeLogin";

export default combineReducers({
  fetchEmployees,
  fakeLogin,
});
