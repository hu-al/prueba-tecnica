import { FAKE_LOGIN, FAKE_LOGOUT, SAVE_ADDRESS } from "../actions/constants";

const initialState = {
  name: null,
  isLogged: false,
  address: null,
};

const fakeLogin = (state = initialState, action) => {
  switch (action.type) {
    case FAKE_LOGIN:
      return { ...state, name: action.payload, isLogged: true };
    case FAKE_LOGOUT:
      return { ...state, name: null, isLogged: false };
    case SAVE_ADDRESS:
      return { ...state, address: action.payload };
    default:
      return state;
  }
};

export default fakeLogin;
