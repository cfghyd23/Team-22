import React from "react";
import Photo from'./homepage.png';
export default function Check(){
    return(
        <div>
            <form action="/action_page.php" method="get">
            <input type="checkbox" name="vehicle1" value="Bike"></input>
            <label for="vehicle1"> I have a bike</label><br></br>
            <input type="checkbox" name="vehicle2" value="Car"></input>
            <label for="vehicle2"> I have a car</label>
            <input type="checkbox" name="vehicle3" value="Boat"></input>
            <label for="vehicle3"> I have a boat</label>
            <input type="submit" value="Submit"></input>
            </form>
        </div>
    )
}