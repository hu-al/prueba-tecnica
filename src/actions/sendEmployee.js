import axios from "axios";
import {
  SEND_EMPLOYEE_FAILED,
  SEND_EMPLOYEE_STARTED,
  SEND_EMPLOYEE_SUCCEEDED,
} from "./constants";
import fetchEmployees from "./fetchEmployees";

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

  let modifiedData = {
    name: data.name,
    last_name: data.lastName,
    birthday: data.date,
  };

  const url =
    "https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/aldo_solis";
  return axios
    .post(url, modifiedData)
    .then((response) => {
      dispatch(sendEmployeeSucceeded());
      console.log("envio de empleado correcto");
      dispatch(fetchEmployees());
    })
    .catch((err) => {
      dispatch(sendEmployeeFailed(err));
      console.log("error al enviar empleado", err);
    });
};

export default sendEmployee;
