import React, { useState } from "react";
import "./login.css";
import logo from "../assests/uiuc logo.png"
import { Form, Button} from "react-bootstrap";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { Link, useNavigate } from "react-router-dom";
import { app } from "../firebase-config";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const auth = getAuth(app);
    
    signInWithEmailAndPassword(auth, email, password)
    .then((response : any) => {
      navigate('/main')
      sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
      sessionStorage.setItem('email', email)
    })
    .catch((error : any) => {
      console.log(error)
      if (error.code === 'auth/wrong-password') {
        toast.error('Please check the Password');
      }
      else if (error.code === 'auth/user-not-found') {
        toast.error('Please check the Email');
      }
      else {
        toast.error('Something went wrong');
      }
    })

    
  };




  return (
    <div id="login-bg">
      <div id="logo">
        <img src={logo} className="fit2" alt="" />
        <p className="imgtxt">ON-CAMPUS JOB BOARD</p>
      </div>
      <ToastContainer />
      <div className="containleft"></div>
        <div className="leftCard">
          <div className="welcome">
            <p id="welcome">WELCOME BACK</p>
            <p>Please enter your email and password</p>
          </div>
          <Form className="login-form" onSubmit={handleFormSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail" onChange={(e) => setEmail((e.target as HTMLInputElement).value)}>
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassowrd" onChange={(e) => setPassword((e.target as HTMLInputElement).value)}>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
            <Button type="submit" id="loginbtn">
              Submit
            </Button>       
          </Form>
          <div className="other-action">
              <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
          </div>
        </div>
    </div>
  );
};

export default Login;
