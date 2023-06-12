import React from "react";
import axios from "axios"
import { useHistory } from "react-router-dom/cjs/react-router-dom";

export default function DonorChecklist(){
    const history = useHistory()
    const handleClick = async () => {
        await axios.post(`http://localhost:3001/users/donor-request`, {id: localStorage.getItem("userId")})
        history.push('/');
    }
    return(
        <div>
         <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link> 
         <center>  
    <div>
    <h2>Blood Donation Pre-Donation Checklist</h2>
    <form>
        <label for="age">Weight:</label>
    <input type="number" id="age" name="age" min="50" required></input><br></br>
    
    <label for="lastDonation">Last Donation (in months):</label>
    <input type="number" id="lastDonation" name="lastDonation" min="0" required></input><br></br>
        <input type="checkbox" id="checklist1" name="checklist" value="checklist1"></input>
        <label for="checklist1">No fever or illness in the last week</label><br></br>
        
        <input type="checkbox" id="checklist2" name="checklist" value="checklist2"></input>
        <label for="checklist2">Not taking antibiotics</label><br></br>
        
        <input type="checkbox" id="checklist3" name="checklist" value="checklist3"></input>
        <label for="checklist3">Not pregnant or recently given birth</label><br></br>
        
        <input type="checkbox" id="checklist4" name="checklist" value="checklist4"></input>
        <label for="checklist4">No recent travel to high-risk areas</label><br></br>
        
        <input type="checkbox" id="checklist5" name="checklist" value="checklist5"></input>
        <label for="checklist5">Not received a blood transfusion in the past 6 months</label><br></br>
        
        
        <input type="button" value="Submit Request" onClick={handleClick}></input>
    </form>
    </div>
    </center>
    
    
    </div>
)
}
