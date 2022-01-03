import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fakeLogin, saveAddress } from "../actions/fakeLogin";
import styles from "./Login.module.css";
import { Navigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.fakeLogin.isLogged);
  const intendedAddress = useSelector((state) => state.fakeLogin.address);
  const [localIntendedAddress] = useState(intendedAddress);

  const onSubmit = (event) => {
    event.preventDefault();
    let name = event.target[0].value;
    let password = event.target[1].value;
    console.log("login", name, password);
    dispatch(fakeLogin(name, password));
  };

  const preventDefault = (e) => {
    e.preventDefault();
  };

  if (isLogged) {
    dispatch(saveAddress(null));
    return <Navigate to={localIntendedAddress ?? "/"} />;
  }

  return (
    <div className={styles.loginForm}>
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="máx. 30 caracteres"
            onCopy={preventDefault}
            onPaste={preventDefault}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="contraseña"
            onCopy={preventDefault}
            onPaste={preventDefault}
          />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default Login;
