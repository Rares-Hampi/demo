import { useState,useEffect } from "react";
import axios from 'axios'

function Users(){

    let [usersObj, setUsers]=useState({users: []})

    useEffect(()=>{
        axios.get(`http://localhost:5000/allUsers`)
        .then((res)=>{
            console.log(res.data)
            setUsers(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    },[]);
    return(
        <div>
            All Users
            {
               usersObj.users.map((user,idx)=>
               <div key={user._id}>
                    Name: {user.username}
                    Mail: {user.mail}
                    Age: {user.age}
                </div>
               )
            }
           
        </div>
    )
    
}

export default Users;