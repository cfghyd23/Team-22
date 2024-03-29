import React from "react";  

export default function UserCard(props){
    const {admin, handleReject, handleAccept, user} = props;
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
            <footer class="blockquote-footer"><cite title="Source Title">Blood Group - {map[user.bloodGroup]}</cite></footer>
            <footer class="blockquote-footer"><cite title="Source Title">Sex - {user.sex}</cite></footer>
            <footer class="blockquote-footer"><cite title="Source Title">Age - {user.mobile}</cite></footer>

        </div>
      {admin && <button className="btn btn-danger mr-3 ml-2" onClick={() => handleReject(user.mobile)}>Reject</button>}
      &nbsp;&nbsp;&nbsp;
      {admin && <button className="btn btn-success mx-auto"  onClick={() => handleAccept(user._id)}>Approve</button>}
    </blockquote>
  </div>
    )
}