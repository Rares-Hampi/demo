import React, { useEffect, useState } from "react";
import Menu from "./Menu";
import { useLocation } from "react-router";
import axios from "axios";

export default function Profile() {
  const [user, setUser] = useState();

  const state = useLocation();
  const id = state.state;
  console.log(id);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/user/${id}`, {
        params: { id: id },
      })
      .then((res) => {
        console.log(res.data);
        setUser();
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <>
      <Menu />
      <div>Profile</div>
    </>
  );
}
