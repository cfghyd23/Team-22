import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

export default function Login(){

    const URL = `http://localhost:${3001}`;

    const [formData, setFormData] = useState({email:'', Password:''});
    const history = useHistory();
    const submitLogin = async () => {
      await axios.post(`${URL}/users/login`, formData)
    .then((res) => {
      if (res.data.success) {
          console.log(res.data);
          localStorage.setItem('userId', res.data.userID);
          // props.handleLogin(res.data.userID);
          // navigate('/');
      } else {
        alert('Invalid Credentials');
      }
    })
    .catch((err) => console.log(err.message));
    history.push("/");
  }

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormData(prev => ({
        ...prev,
        [name]: value
    }));

    console.log(formData);
}

React.useEffect(() => {
  console.log(formData);
}, [formData])

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

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</p>

                <form className="mx-1 mx-md-4">

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                    <label className="form-label" for="form3Example1c">Email</label>
                      <input type="text" id="form3Example1c" className="form-control" onChange={handleChange} name="email" value={formData.email}/>
                    </div>
                  </div>



                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                    <label className="form-label" for="form3Example4c">Password</label>
                    <input type="password" id="form3Example4c" className="form-control" onChange={handleChange} value={formData.Password} name="Password"/>
                    </div>
                  </div>


                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="button" className="btn btn-primary btn-lg" onClick={submitLogin}>Login</button>
                  </div>
                  <div>Don't have an account? Register <a href="http://localhost:3000/register">here</a></div>
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