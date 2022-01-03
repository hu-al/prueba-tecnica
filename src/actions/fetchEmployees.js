import axios from "axios";
import {
  FETCH_EMPLOYEES_FAILED,
  FETCH_EMPLOYEES_STARTED,
  FETCH_EMPLOYEES_SUCCEEDED,
} from "./constants";

const fetchEmployeesStarted = () => ({
  type: FETCH_EMPLOYEES_STARTED,
});

const fetchEmployeesSucceeded = (data) => ({
  type: FETCH_EMPLOYEES_SUCCEEDED,
  payload: data,
});

const fetchEmployeesFailed = (err) => ({
  type: FETCH_EMPLOYEES_FAILED,
  payload: err,
});

const fetchEmployees = () => (dispatch) => {
  dispatch(fetchEmployeesStarted());
  const url =
    "https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/aldo_solis";

  return axios
    .get(url)
    .then((response) => {
      console.log(response.data.data.employees);
      dispatch(fetchEmployeesSucceeded(response.data.data.employees));
    })
    .catch((err) => {
      dispatch(fetchEmployeesFailed(err));
    });
};

export default fetchEmployees;
