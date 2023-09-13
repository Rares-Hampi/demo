import { useState,useEffect } from "react";
import axios from 'axios'
import Menu from "./Menu";

function Users(){

    let [usersObj, setUsers] = useState({users: []})

    useEffect(()=>{
        axios.get(`http://localhost:5000/user/allUsers`)
        .then((res)=>{
            console.log(res.data)
            if(res?.data){
                setUsers({users: res.data});
                console.log(usersObj);
            }
           
        })
        .catch((err) => {
            console.log(err);
        });
    },[]);
    return(
        <div>
            <Menu/>
            All Users
            <div>
                {
                usersObj.users.map((user,index)=>(
                    <div key={index}>
                        Username: {user.username} <br/>
                        Email: {user.mail} <br/>
                        Age: {user.age} <br/>
                        About: {user.about} <br/>
                        <br/>
                    </div>
                ))
                }
            </div>
           
        </div>
    )
    
}

export default Users;