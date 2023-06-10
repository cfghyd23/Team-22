import React, {useState} from "react";
import axios from "axios";
// import {useNavigate, Link} from "react-router-dom"

export default function Form(){

  const URL = `http://localhost:${3001}`;

  const [formData, setFormData] = useState({
    email: '', 
    Password: '',
    confirmPass:'',
    name:'',
    mobile:'',
    bloodGroup:'',
    dob:'',
    weight:'',
    sex:'',
  })

  // const useNavigate = useNavigate();


  const submitRegister = async () => {


    if(formData.Password !== formData.confirmPass){
        alert("Passwords do not match!");
        return;
    }

    await axios.post(`${URL}/users/register`, formData);

    // history.push('/all-staff');

    console.log(formData);
}

  // function handleSubmit(event){
  //   event.prevenDefault();
  //   submitRegister();
  // }

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormData(oldData => ({
        ...oldData,
        [name]: value
    }))
  }

    return(
        <div>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
            <section className="vh-100" style={{backgroundColor: '#92a8d1'}}>
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" style={{borderRadius: '25px'}}>
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form className="mx-1 mx-md-4">

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                    <label className="form-label" for="form3Example1c">Your Name</label>
                      <input name="name" type="text" id="form3Example1c" className="form-control" value={formData.name} onChange={handleChange}/>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <label className="form-label" for="form3Example3c">Your Email</label>
                      <input name="email" type="email" id="form3Example3c" className="form-control" value={formData.email} onChange={handleChange}/>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <label className="form-label" for="form3Example3c">Mobile</label>
                      <input name="mobile" type="number" id="form3Example31c" className="form-control" value={formData.mobile} onChange={handleChange}/>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                    <label className="form-label" for="form3Example4c">Password</label>
                    <input name="Password" type="password" id="form3Example4c" className="form-control" value={formData.Password} onChange={handleChange}/>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                    <label className="form-label" for="form3Example4cd">Confirm password</label>
                      <input name="confirmPass" type="password" id="form3Example4cd" className="form-control" value={formData.confirmPass} onChange={handleChange}/>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                    <label className="form-label" for="form3Example4cd">Blood Group</label>
                      <select className="form-select" name="bloodGroup" onChange={handleChange} value={formData.bloodGroup} required>
                        <option value="Apos">A+</option>
                        <option value="Aneg">A-</option>
                        <option value="Bpos">B+</option>
                        <option value="Bneg">B-</option>
                        <option value="Opos">O+</option>
                        <option value="Oneg">O-</option>
                        <option value="ABpos">AB+</option>
                        <option value="ABneg">AB-</option>
                      </select>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                    <label className="form-label" for="form3Example4cd">Weight</label>
                      <input name="weight" type="number" id="form3Example4cf" className="form-control" value={formData.weight} onChange={handleChange}/>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                    <label className="form-label" for="form3Example4cd">DOB</label>
                      <input name="dob" type="date" id="form3Example4cg" className="form-control" value={formData.dob} onChange={handleChange}  />
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                    <label className="form-label" for="form3Example4cd">Sex</label>
                      <select name="sex" className="form-select" value={formData.sex} onChange={handleChange} required>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                    </div>
                  </div>


                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="button" className="btn btn-primary btn-lg" onClick={submitRegister}>Registers</button>
                  </div>

                </form>

              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://w7.pngwing.com/pngs/88/937/png-transparent-donate-blood-animated-illustration-blood-donation-blood-donation-of-medical-material-love-miscellaneous-text-thumbnail.png"
                  className="img-fluid" alt="Sample image"></img>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
    );
}