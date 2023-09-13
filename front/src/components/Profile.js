import React, { useEffect, useState } from "react";
import Menu from "./Menu";
import { useLocation } from "react-router";
import axios from "axios";
import { Card , Button} from "react-bootstrap";
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
        setUser({ name: res.data.username, email: res.data.mail, age: res.data.age, id:res.data._id, about: res.data.about});
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  console.log(user);

  const setAge = (e,index) =>{
      user.age=parseFloat(e.target.value)
      setUser(user);
  }
  const setAbout = (e) =>{
      user.about=e.target.value
      setUser(user);
  }
  const saveProfile = () => {
    const userDataToUpdate = {
      age: user.age,
      about: user.about,
    };

    axios
      .post(`http://localhost:5000/user/updateUser/${id}`, userDataToUpdate)
      .then((res) => {
        console.log("User profile updated successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

    return (
      <>
        <Menu />
        <div>
          Profile
          { user&&(
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="user.png" />
            <Card.Body>
              <Card.Title>{user.name}</Card.Title>
              <Card.Text>
                {user.email}
              </Card.Text>
            </Card.Body>
          </Card> 
          
        )}
        Age: <input type = "number"  onChange={(e) => {setAge(e,user.id)}}/>
        <br/>
        About: <textarea  onChange={(e) => {setAbout(e,user.id)}}></textarea>
        </div>
        <button className='btn btn-success mr-5' onClick={()=>{saveProfile(user,user.id)}} >Save</button>
      </>
    );
}
