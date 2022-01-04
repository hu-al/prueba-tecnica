import { findNonSerializableValue } from "@reduxjs/toolkit";
import { Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fakeLogout } from "../actions/fakeLogin";

const Header = () => {
  let isLogged = useSelector((state) => state.fakeLogin.isLogged);
  let name = useSelector((state) => state.fakeLogin.name);
  let dispatch = useDispatch();

  const handleClick = () => {
    dispatch(fakeLogout());
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Prueba</Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="employees">
              Employees
            </Nav.Link>
            <Nav.Link as={Link} to="upload">
              Upload
            </Nav.Link>
          </Nav>
          <Nav>
            {isLogged ? (
              <>
                <Navbar.Text>Bienvenido, {name}</Navbar.Text>
                <Nav.Link as={Link} onClick={handleClick} to="/">
                  Logout
                </Nav.Link>
              </>
            ) : (
              <Nav.Link as={Link} to="login">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
