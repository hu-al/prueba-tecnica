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
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    let name = event.target[0].value;
    let password = event.target[1].value;
    let newErrors = checkErrors(name, password);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      dispatch(fakeLogin(name, password));
    }
  };

  const checkErrors = (name, passwd) => {
    const newErrors = {};
    if (!name) newErrors.name = "El nombre es necesario.";
    if (!passwd) newErrors.passwd = "La contraseña es necesaria";

    return newErrors;
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
      <Form noValidate onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="máx. 30 caracteres"
            onCopy={preventDefault}
            onPaste={preventDefault}
            onChange={(e) => {
              if (errors.name) setErrors({ ...errors, name: undefined });
            }}
            isInvalid={!!errors.name}
          />
          <Form.Control.Feedback type="invalid">
            {errors.name}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="contraseña"
            onCopy={preventDefault}
            onPaste={preventDefault}
            onChange={(e) => {
              if (errors.passwd) setErrors({ ...errors, passwd: undefined });
            }}
            isInvalid={!!errors.passwd}
          />
          <Form.Control.Feedback type="invalid">
            {errors.passwd}
          </Form.Control.Feedback>
        </Form.Group>
        <Button type="submit" className={styles.submit}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
