import {
  SEND_EMPLOYEE_FAILED,
  SEND_EMPLOYEE_STARTED,
  SEND_EMPLOYEE_SUCCEEDED,
} from "../actions/constants";

const initialState = {
  inProgress: false,
  success: false,

  error: null,
};

const sendEmployee = (state = initialState, action) => {
  switch (action.type) {
    case SEND_EMPLOYEE_STARTED:
      return {
        inProgress: true,
        success: false,
        error: null,
      };
    case SEND_EMPLOYEE_SUCCEEDED:
      return { inProgress: false, success: true, error: null };
    case SEND_EMPLOYEE_FAILED:
      return {
        inProgress: false,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default sendEmployee;
