import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import styles from "./Employees.module.css";

const Employees = () => {
  const [form, setForm] = useState({ name: "", lastName: "", date: "" });
  const [errors, setErrors] = useState({});

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });

    if (!!errors[field])
      setErrors({
        ...errors,
        [field]: null,
      });
  };

  const findFormErrors = () => {
    const { name, lastName, date } = form;
    const newErrors = {};

    if (!name || name === "") newErrors.name = "El nombre es necesario";
    if (name.length > 30)
      newErrors.name = "El nombre no puede tener más de 30 caracteres";
    if (!lastName || lastName === "")
      newErrors.lastName = "El apellido es necesario";
    if (lastName.length > 30)
      newErrors.lastName = "El apellido no puede tener más de 30 caracteres";
    if (!date || date === "") newErrors.date = "La fecha es necesaria";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = findFormErrors();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log("submit correcto", form);
      //sendEmployee(form);
    }
  };
  return (
    <div className={styles.formEmployee}>
      <Form noValidate onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            required
            type="text"
            maxLength={30}
            onChange={(e) => {
              setField("name", e.target.value);
            }}
            isInvalid={!!errors.name}
          />
          <Form.Control.Feedback type="invalid">
            {errors.name}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label>Apellidos</Form.Label>
          <Form.Control
            required
            type="text"
            maxLength={30}
            onChange={(e) => {
              setField("lastName", e.target.value);
            }}
            isInvalid={!!errors.lastName}
          />
          <Form.Control.Feedback type="invalid">
            {errors.lastName}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label>Fecha de nacimiento</Form.Label>
          <Form.Control
            required
            type="date"
            onChange={(e) => {
              setField("date", e.target.value);
            }}
            isInvalid={!!errors.date}
          />
          <Form.Control.Feedback type="invalid">
            {errors.date}
          </Form.Control.Feedback>
        </Form.Group>
        <Button type="submit" className={styles.submitButton}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Employees;
