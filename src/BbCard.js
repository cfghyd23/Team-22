import React from "react";  

export default function UserCard(props){
    const {admin, user} = props;
    const map = {
        Apos: "A+",
        Aneg: "A-",
        Bpos: "B+",
        Bneg: "B-",
        ABpos: "AB+",
        ABneg: "AB-",
        Opos: "O+",
        Oneg: "O-"
    }
    return (
        <div class="card-body">
    <blockquote class="blockquote mb-0 border p-3 mb-3">
    <div>
            <h4 className="mb-4">{user.name}</h4>
            <footer class="blockquote-footer"><cite title="Source Title">Email ID - {user.email}</cite></footer>
            <footer class="blockquote-footer"><cite title="Source Title">Contact - {user.mobile}</cite></footer>
        </div>
        <div>A+ {user.Apos}</div>
        <div>A- {user.Aneg}</div>
        <div>B+ {user.Bpos}</div>
        <div>A- {user.Bneg}</div>
        <div>O+ {user.Opos}</div>
        <div>O- {user.Oneg}</div>
        <div>AB+ {user.ABpos}</div>
        <div>AB- {user.ABneg}</div>
      {admin && <button className="btn btn-danger">Delete</button>}
    </blockquote>
  </div>
    )
}