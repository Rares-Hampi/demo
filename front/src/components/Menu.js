import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Menu(props) {
  const [hide, setHide] = useState(false);
  let jwt = localStorage.getItem("jwt");

  useEffect(() => {
    jwt !== undefined ? setHide(true) : setHide(false);
    // if (jwt) {
    //   setHide(true);
    // } else {
    //   setHide(fa);
    // }
  }, [jwt]);

  const logOut = () => {
    localStorage.removeItem("jwt");
    setHide(false);
  };

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
          {hide === true ? (
            <Nav className="d-flex justify-content-around">
              <Link className="text-light fs-4" to="/" onClick={logOut}>
                Log out
              </Link>
            </Nav>
          ) : (
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
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
