import React from "react";
import Photo from'./homepage.png';
export default function Home(){
    return(
        <div>
        <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel='stylesheet'></link>
        <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous"></link>
        <div class="w3-top">
        <div class="w3-bar w3-white w3-wide w3-padding w3-card">
        <img src="https://bloodwarriors.in/wp-content/uploads/2023/02/cropped-BWI_Icon_Pink-1-90x90.png" width="40px" height="40px"></img>
            <a href="#home" class="w3-bar-item w3-button"><b>Blood</b>Warriors</a>
            
            <div class="w3-right w3-hide-small">
            <a href="#projects" class="w3-bar-item w3-button">About</a>
            <a href="#about" class="w3-bar-item w3-button">Blood Banks</a>
            <a href="#contact" class="w3-bar-item w3-button">Looking for Blood</a>
            <a href="#contact" class="w3-bar-item w3-button">Want to Donate</a>
            <a href="#contact" class="w3-bar-item w3-button">Contact us</a>
            </div>
        </div>
        </div>

       
        <header class="w3-display-container w3-content w3-wide" style={{maxWidth:'1500px'}} id="home">
        <img class="w3-image" src={Photo} alt="Architecture" width='1500' height='600'></img>
        
        </header>
        <div>
            
        </div>

        <div class="w3-content w3-padding" style={{maxWidth:'1564px'}}>
        <div class="w3-row-padding">
            <div class="w3-col l3 m6 w3-margin-bottom">
            <div class="w3-display-container">
                <div class="w3-display-topleft w3-black w3-padding">&nbsp;&nbsp;Lack of Awareness </div>
                <img src="https://media.gettyimages.com/photos/pakistani-thalassemia-affected-child-treated-by-blood-transfusion-at-picture-id472582302" alt="House" style={{width:'100%'}}></img>
                <p>Many people are unaware of the crucial role that blood donation plays in saving lives.
                Blood transfusions are needed for various medical procedures, including surgeries, treatments for cancer, organ transplants, and emergencies such as accidents or natural disasters.</p>
            </div>
            </div>
            <div class="w3-col l3 m6 w3-margin-bottom">
            <div class="w3-display-container">
                <div class="w3-display-topleft w3-black w3-padding">&nbsp;&nbsp;Blood Donation Activities</div>
                <img src="https://th.bing.com/th/id/R.92a0239228c3e6b9638845aeb8d0f8d6?rik=gTySexg5DfqkQg&riu=http%3a%2f%2findianredcrosswestbengal.org%2factivities%2fblood_donation_camps1.jpg&ehk=PDYIaOJp9fNbDHrjt%2bwtEon2L4CXx52l2tOq8quRpFo%3d&risl=&pid=ImgRaw&r=0" alt="House" style={{width:'100%'}}></img>
           <p>Blood drives are organized events where individuals can donate blood. 
            These events are usually set up at community centers, schools, workplaces, or mobile donation centers. 
            Donor recruitment programs involve actively seeking out potential blood donors through targeted outreach efforts</p>
            </div>
            </div>
            <div class="w3-col l3 m6 w3-margin-bottom">
            <div class="w3-display-container">
                <div class="w3-display-topleft w3-black w3-padding">&nbsp;&nbsp;Who all can Donate</div>
                <img src="https://pbs.twimg.com/media/CblTVk0UEAE16ba.jpg" alt="House" style={{width:'100%'}}></img>
                <p>To determine your eligibility to donate blood, it is best to contact your local blood bank or donation center, 
                as they can provide the most accurate and up-to-date information based on your specific circumstances.</p>
            </div>
            </div>
            <div class="w3-col l3 m6 w3-margin-bottom">
            <div class="w3-display-container">
                <div class="w3-display-topleft w3-black w3-padding">&nbsp;&nbsp;The Story Of Warriors</div>
                <img src="https://images.tv9hindi.com/wp-content/uploads/2022/06/Blood.jpg" alt="House" style={{width:'100%'}}></img>
                <p>the Blood Warrior displayed incredible skill and finesse, wielding their power with precision. They could manipulate blood as a weapon, forming deadly projectiles or protective shields. 
                Yet, they never took a life unless absolutely necessary, always striving to find a peaceful resolution.</p>
            </div>
            </div>
        </div>


        <div class="w3-container w3-padding-32" id="about">
            <h3 class="w3-border-bottom w3-border-light-grey w3-padding-16">About</h3>
            <p>We are Blood Warriors Foundation, a registered NGO with a visionary mission to empower the community and 
                break the stigmas surrounding blood donation for Thalassemia patients. We aspire to be the backbone of 
                support for those affected by this life-altering blood disorder. By fostering policy-level change and promoting prenatal diagnosis, we aim to identify 
                carriers of Thalassemia, and build a future where this debilitating disorder is a thing of the past.
            </p>
        </div>

        <div class="w3-container w3-padding-32" id="contact">
            <h3 class="w3-border-bottom w3-border-light-grey w3-padding-16">Contact</h3>
            <p>Lets get in touch</p>
        <form action="/action_page.php" target="_blank">
            <input class="w3-input w3-border" type="text" placeholder="Name" required name="Name"></input>
            <input class="w3-input w3-section w3-border" type="text" placeholder="Email" required name="Email"></input>
            <input class="w3-input w3-section w3-border" type="text" placeholder="Subject" required name="Subject"></input>
            <input class="w3-input w3-section w3-border" type="text" placeholder="Comment" required name="Comment"></input>
            <button class="w3-button w3-black w3-section" type="submit">
                <i class="fa fa-paper-plane"></i> SEND MESSAGE
            </button>
        </form>
        </div>

    </div>


       
<footer class="text-center text-lg-start bg-white text-muted">
 
  <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

    <div class="me-5 d-none d-lg-block">
      <span>Get connected with us on our social networks:</span>
      </div>
    
    
    
    
   
 

  <div class="text-center p-4" style={{backgroundColor:' rgba(0, 0, 0, 0.025)'}}></div>
    
  </section>
</footer>


</div>
	

    )
}

