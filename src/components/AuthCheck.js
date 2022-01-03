import { useDispatch, useSelector } from "react-redux";
import { saveAddress } from "../actions/fakeLogin";
import { useLocation, Navigate } from "react-router-dom";

const AuthCheck = ({ children }) => {
  const dispatch = useDispatch();
  let location = useLocation();
  let isLogged = useSelector((state) => state.fakeLogin.isLogged);

  if (!isLogged) {
    dispatch(saveAddress(location.pathname));
    return <Navigate to="/login" />;
  }

  return children;
};

export default AuthCheck;
