import React from "react";
import { Modal, Button, ModalBody } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";

import axios from "axios";

export default function Formular(props) {
  const SingUp = (mail, username, password) => {
    axios
      .post("http://localhost:5000/user/register", {
        username: username,
        mail: mail,
        password: password,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const LogIn = (username, password) => {
    axios
      .post("http://localhost:5000/user/login", {
        username: username,
        password: password,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((e) => {
        console.log("plm");
        console.log(e);
      });
  };

  if (props.form === "logIn") {
    return (
      <Modal
        show={props.show}
        onHide={props.action}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Log in</Modal.Title>
        </Modal.Header>

        <ModalBody className="d-flex justify-content-center align-items-center">
          <Formik
            initialValues={{ username: "", password: "" }}
            validate={(values) => {
              const errors = {};
              if (!values.username) {
                errors.username = "Required";
              }
              if (!values.password) {
                errors.password = "Required";
              }

              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              LogIn(values.username, values.password);
              setTimeout(() => {
                // alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({ isSubmitting }) => (
              <Form className="d-flex flex-column ">
                <label htmlFor="email">Name</label>
                <Field type="username" name="username" className="mb-3" />
                <ErrorMessage
                  name="username"
                  component="span"
                  className="mb-3 bg-danger align-self-center p-2 rounded"
                />
                <label htmlFor="password">Password</label>
                <Field type="password" name="password" className="mb-3" />
                <ErrorMessage
                  name="password"
                  component="span"
                  className="mb-3 bg-danger align-self-center p-2 rounded"
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-50 align-self-center"
                >
                  Log in
                </Button>
              </Form>
            )}
          </Formik>
        </ModalBody>
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
          <Modal.Title>Sing up</Modal.Title>
        </Modal.Header>

        <ModalBody className="d-flex justify-content-center align-items-center">
          <Formik
            initialValues={{ email: "", password: "", name: "" }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              if (!values.password) {
                errors.password = "Required";
              }
              if (!values.name) {
                errors.name = "Required";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              SingUp(values.email, values.name, values.password);
              setTimeout(() => {
                //   alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({ isSubmitting }) => (
              <Form className="d-flex flex-column ">
                <label htmlFor="name">Name</label>
                <Field type="name" name="name" className="mb-3" />
                <ErrorMessage
                  name="name"
                  component="span"
                  className="mb-3 bg-danger align-self-center p-2 rounded"
                />
                <label htmlFor="email">Email</label>
                <Field type="email" name="email" className="mb-3" />
                <ErrorMessage
                  name="email"
                  component="span"
                  className="mb-3 bg-danger align-self-center p-2 rounded"
                />
                <label htmlFor="password">Password</label>
                <Field type="password" name="password" className="mb-3" />
                <ErrorMessage
                  name="password"
                  component="span"
                  className="mb-3 bg-danger align-self-center p-2 rounded"
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-50 align-self-center"
                >
                  Sing up
                </Button>
              </Form>
            )}
          </Formik>
        </ModalBody>
      </Modal>
    );
  }
}
