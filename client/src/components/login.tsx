import React from "react";
import "./login.css";
import bg from "../assests/quad.jpg";
import logo from "../assests/uiuc logo.png"

const Login = () => {
  return (
    <div id="background">
      <img src={bg} className="fit" alt=""/>
      <div id="logo">
        <img src={logo} className="fit2" alt=""/>
        <p className="imgtxt">ON-CAMPUS JOB BOARD</p>
      </div>
      <div className="leftCard">
        <div className="welcome">
          <p id="welcome">WELCOME BACK</p>
          <p>Please enter your email and password</p>
        </div>
        <div className="formcont">
          <form>
            <p className="label">EMAIL:</p>
              <input type="text" className="inputbox"/>
            <p className="label">PASSWORD:</p>
              <input type="text" className="inputbox"/>
            <button type="submit" className="loginbtn">
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
    
  
    );
};

export default Login;
