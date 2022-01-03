import { findNonSerializableValue } from "@reduxjs/toolkit";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  let isLogged = useSelector((state) => state.fakeLogin.isLogged);

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Prueba</Navbar.Brand>
        <Nav>
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="employees">
            Employees
          </Nav.Link>
          <Nav.Link as={Link} to="upload">
            Upload
          </Nav.Link>
          {isLogged ? (
            <Nav.Link as={Link} to="logout">
              Logout
            </Nav.Link>
          ) : (
            <Nav.Link as={Link} to="login">
              Login
            </Nav.Link>
          )}
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
