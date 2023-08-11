import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

export default function Menu(props) {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-black">
      <Container>
        <Navbar.Brand href="#home" className="text-light fs-2">
          Demo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav className="d-flex justify-content-around">
            <Nav.Link className="text-light fs-4" onClick={props.logIn}>
              Log in
            </Nav.Link>
            <Nav.Link
              eventKey={2}
              className="text-light fs-4 ms-5"
              onClick={props.singUp}
            >
              Sing up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
