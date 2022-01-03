import {
  FETCH_EMPLOYEES_FAILED,
  FETCH_EMPLOYEES_STARTED,
  FETCH_EMPLOYEES_SUCCEEDED,
} from "../actions/constants";

const initialState = {
  inProgress: false,
  success: false,
  data: null,
  error: null,
};

const fetchEmployees = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EMPLOYEES_STARTED:
      return { ...state, inProgress: true, success: false, error: null };
    case FETCH_EMPLOYEES_SUCCEEDED:
      return {
        inProgress: false,
        success: true,
        data: action.payload,
        error: null,
      };
    case FETCH_EMPLOYEES_FAILED:
      return {
        ...state,
        inProgress: false,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default fetchEmployees;
