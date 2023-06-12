import React, { useState } from "react";  
import axios from "axios";
import UserCard from "./UserCardDonor";
import CardHolder from "./CardHolder";

export default function DonorList(){

    const [cards, setCards] = useState([]);

    const URL = `http://localhost:${3001}`;

    const handleAccept = async (id) => {
        console.log("Accepted");
        await axios.post(`${URL}/users/approve-donor`, {id});
    }

    const handleReject = async (id) => {
        await axios.post(`${URL}/users/remove-donor`, {id});
    }

    React.useEffect(() => {
        axios.get(`${URL}/users`)
            .then(res => {
                setCards(() => {
                    return res.data.filter(user => user.donor == 1)
                        .map(user => (<UserCard user={user} admin={true} handleAccept={handleAccept} handleReject={handleReject}/>))
                })
            })
    },[])

    React.useEffect(() => {
        console.log(cards.length);
    },[cards])

    return(
        <div>
            <div class="row text-center" style={{ marginTop: 50, marginBottom:0}}>
                    <div className="col-12"><h2 class="">Admin Donors Requests</h2></div>
            </div>
            <CardHolder cardData={cards}/>
        </div>
    )
}