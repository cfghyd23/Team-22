import React, { useState } from "react";  
import axios from "axios";
import BbCard from "./BbCard";
import BbCardHolder from "./BbCardHolder";

export default function DonorList(){

    const [cards, setCards] = useState([]);

    const URL = `http://localhost:${3001}`;

    React.useEffect(() => {
        axios.get(`${URL}/bb`)
            .then(res => {
                setCards(() => {
                    return res.data.map(bb => (<BbCard user={bb} admin={false}/>))
                })
            })
    },[])

    React.useEffect(() => {
        console.log(cards.length);
    },[cards])

    return(
        <div>
            <div class="row text-center" style={{ marginTop: 50, marginBottom:0}}>
                    <div className="col-12"><h2 class="">Blood Banks</h2></div>
            </div>
            <BbCardHolder cardData={cards}/>
        </div>
    )
}