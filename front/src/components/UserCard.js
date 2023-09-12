import React from "react";

export default function UserCard(props) {
    console.log(props)   
    return (
        <div className="container py-3">
            <div className="card bg-light">
                <div className="card-body text-center">
                    <img className="card-img-top w-25 h-25" src={require("../blank-profile-picture-973460_1280.png")} alt="User profile"/>
                </div>
                <div className="card-body text-center">
                    Hi, my name is: {props.user.name}
                </div>
                <div className="card-body text-center">
                    My email is: {props.user.email} 
                </div>
            </div>
        </div>
    )
}