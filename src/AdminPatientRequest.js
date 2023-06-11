import React, { useState } from "react";  
import axios from "axios";
import UserCard from "./UserCard";
import CardHolder from "./CardHolder";

export default function PatientList(){

    const [cards, setCards] = useState([]);

    const URL = `http://localhost:${3001}`;

    React.useEffect(() => {
        axios.get(`${URL}/users`)
            .then(res => {
                setCards(() => {
                    return res.data.filter(user => user.patient == 2)
                        .map(user => (<UserCard user={user} admin={true}/>))
                })
            })
    },[])

    React.useEffect(() => {
        console.log(cards.length);
    },[cards])

    return(
        <div>
            <div class="row text-center" style={{ marginTop: 50, marginBottom:0}}>
                    <div className="col-12"><h2 class="">Patients Request</h2></div>
            </div>
            <CardHolder cardData={cards} admin={true}/>
        </div>
    )
}