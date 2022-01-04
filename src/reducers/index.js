import { combineReducers } from "redux";
import fetchEmployees from "./fetchEmployees";
import fakeLogin from "./fakeLogin";
import sendEmployee from "./sendEmployee";

export default combineReducers({
  fetchEmployees,
  fakeLogin,
  sendEmployee,
});
