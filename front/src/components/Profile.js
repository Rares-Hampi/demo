import React, { useEffect, useState } from "react";
import Menu from "./Menu";
import { useLocation } from "react-router";
import axios from "axios";
import UserCard from "./UserCard";

export default function Profile() {
  const [user, setUser] = useState();
  const state = useLocation();
  const id = state.state;

  useEffect(() => {
    axios
      .get(`http://localhost:5000/user/${id}`, {
        params: { id: id },
      })
      .then((res) => {
        setUser({ name: res.data.username, email: res.data.mail });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  console.log(user);

  return (
    <>
      <Menu />
      {/* <div>Profile</div> */}
      {user === undefined ? "" : <UserCard user={user}/>}
    </>
  );
}
