import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function Form(props) {
  if (props.form === "logIn") {
    return (
      <Modal
        show={props.show}
        onHide={props.action}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>LogIn</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.action}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    );
  } else if (props.form === "singUp") {
    return (
      <Modal
        show={props.show}
        onHide={props.action}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>SingUp</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.action}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
