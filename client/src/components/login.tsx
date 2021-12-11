import React from "react";
import "./login.css";
import logo from "../assests/uiuc logo.png"
import { Link } from "react-router-dom";
import { Form, Button} from "react-bootstrap";

const Login = () => {
  document.body.style.overflow = "hidden";
  return (
    <div id="login-bg">
      <div id="logo">
        <img src={logo} className="fit2" alt="" />
        <p className="imgtxt">ON-CAMPUS JOB BOARD</p>
      </div>
      <div className="containleft"></div>
        <div className="leftCard">
          <div className="welcome">
            <p id="welcome">WELCOME BACK</p>
            <p>Please enter your email and password</p>
          </div>
          <Form className="login-form">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Link to="/main">
              <Button type="submit" id="loginbtn">
                Submit
              </Button>
            </Link>
          </Form>
          {/* <div className="formcont">
            <form>
              <p className="label">EMAIL:</p>
              <input type="text" className="inputbox" />
              <p className="label">PASSWORD:</p>
              <input type="text" className="inputbox" />
              <Link to="/main">
                <button type="submit" className="loginbtn">
                  Log In
                </button>
              </Link>
            </form>
          </div> */}
        </div>
    </div>
  );
};

export default Login;
