import axios from "axios";
import {
  SEND_EMPLOYEE_FAILED,
  SEND_EMPLOYEE_STARTED,
  SEND_EMPLOYEE_SUCCEEDED,
} from "./constants";

const sendEmployeeStarted = () => ({
  type: SEND_EMPLOYEE_STARTED,
});

const sendEmployeeSucceeded = () => ({
  type: SEND_EMPLOYEE_SUCCEEDED,
});

const sendEmployeeFailed = (err) => ({
  type: SEND_EMPLOYEE_FAILED,
  payload: err,
});

const sendEmployee = (data) => (dispatch) => {
  dispatch(sendEmployeeStarted());
  const url =
    "https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/aldo_solis";
  return axios
    .post(url, data)
    .then((response) => {
      dispatch(sendEmployeeSucceeded());
    })
    .catch((err) => {
      dispatch(sendEmployeeFailed(err));
    });
};

export default sendEmployee;
