import React, { useEffect, useState } from "react";
import Menu from "./Menu";
import axios from "axios";

export default function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/user/allUsers`)
      .then((res) => {
        console.log(res);
        setUsers(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(users)
  return (
    <>
      <Menu />
      <div>
        {
            users.map((user) => {
                return(
                    <div>
                        {user.username} with email: {user.mail}
                    </div>
                )
            })
        }
      </div>
    </>
  );
}
