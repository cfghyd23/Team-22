import './App.css';
import Form from './Form.js';
import Test from './Test.js';
import React from 'react';
import Login from './Login';
import Register from "./Form";
import DonorChecklist from './DonorChecklist';
import DonorList from './DonorList';
import PatientList from './PatientList';
import AdminPatientList from './AdminPatientList'
import AdminDonorList from './AdminDonorList'
import AdminUsersList from './AdminUsersList'
import AdminDonorRequest from './AdminDonorRequests'
import AdminPatientRequests from "./AdminPatientRequests"
import BbList from "./BbList"
import Home from './Home';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate
} from "react-router-dom";
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path = "/" ><Home />   </Route>
        <Route path = "/login" ><Login /> </Route>
        <Route path = "/register" ><Register /> </Route>
        <Route path = "/donor-list" ><DonorList /> </Route>
        <Route path = "/patient-list" ><PatientList /> </Route>
        <Route path = "/admin-donor-list" ><AdminDonorList /> </Route>
        <Route path = '/admin-patient-list' ><AdminPatientList /> </Route>
        <Route path = "/admin-donor-request" ><AdminDonorRequest /> </Route>
        <Route path = "/admin-patient-request" ><AdminPatientRequests /> </Route>
        <Route path = "/donor-checklist" ><DonorChecklist /> </Route>
        <Route path = "/admin-user-list" ><AdminUsersList /> </Route>
        <Route path = "/blood-banks"><BbList/></Route>
        </Switch>
    </Router>
  );
}

// const Test = () => {
//   return <p>Hello</p>
// }

export default App;
