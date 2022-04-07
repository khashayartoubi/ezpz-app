
import React from 'react'
import {BrowserRouter as Router,Switch} from "react-router-dom";
import RegisterLayoutRoute from './Layout/RegisterLayoutRoute';
import Signin from './ComponentFunction/Login';
import Signup from './ComponentFunction/Signup';
import ForgetPassword from './ComponentFunction/ForgetPassword';
import VerifyOtp from './ComponentFunction/VerifyOtp';


function App() {

  
  return (
    <div className="App">
      <Router>
            <Switch>
            //*Register Layout
                  <RegisterLayoutRoute exact path='/' component={Signin} />
                  <RegisterLayoutRoute path='/login' component={Signin} />
                  <RegisterLayoutRoute path='/signup' component={Signup} />
                  <RegisterLayoutRoute path='/forget-password' component={ForgetPassword} />
                  <RegisterLayoutRoute path='/verify-otp' component={VerifyOtp} />

            </Switch>
        </Router>
    </div>
  );
}

export default App;
