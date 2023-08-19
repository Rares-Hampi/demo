import React, { useState } from "react";

import Menu from "./Menu";
import Form from "./Form";

export default function Main() {
  const [show, setShow] = useState(false);

  const [form, setForm] = useState("");

  const logIn = () => {
    setShow(true);
    setForm("logIn");
  };
  const singUp = () => {
    setShow(true);
    setForm("singUp");
  };
  const HideModal = () => {
    setShow(false);
  };

  return (
    <>
      <Menu logIn={logIn} singUp={singUp} />
      <h1 className="text-sm-center position-absolute top-50 start-50 translate-middle w-50 p-3">
        Salutari. Imi pare super bine ca ne-am cunoscut si ca doriti sa ma
        ajuati in realizarea acestui proiect. Acum gata cu introducerile si sa
        trecem la treaba. Exitsa o vorba: <br /> "La munca, nu la intins mana".
      </h1>
      <Form show={show} action={HideModal} form={form} />
    </>
  );
}
