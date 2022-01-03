import { FAKE_LOGIN, FAKE_LOGOUT, SAVE_ADDRESS } from "./constants";

export const fakeLogin = (name, passwd) => (dispatch) => {
  if (name === "aldo" && passwd === "1234") {
    dispatch({
      type: FAKE_LOGIN,
      payload: name,
    });
  } else {
    alert("Usuario no válido");
  }
};

export const fakeLogout = () => ({
  type: FAKE_LOGOUT,
});

export const saveAddress = (address) => ({
  type: SAVE_ADDRESS,
  payload: address,
});
