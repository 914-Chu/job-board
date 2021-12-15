import React, { useState } from "react";
import "./signup.css";
import logo from "../assests/uiuc logo.png"
import { Form, Button} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(name, email, password);
        /* Store name, email, and password to backend */
    };




    return (
        <div id="signup-bg">
            <div id="logo">
                <img src={logo} className="fit2" alt="" />
                <p className="imgtxt">ON-CAMPUS JOB BOARD</p>
            </div>
            <div className="containleft"></div>
            <div className="leftCard">
                <div className="welcome">
                    <p id="welcome">CREATE ACCOUNT</p>
                    <p>Please enter your credentials</p>
                </div>
                <Form className="signup-form" onSubmit={handleFormSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicName" onChange={(e) => setName((e.target as HTMLInputElement).value)}>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail" onChange={(e) => setEmail((e.target as HTMLInputElement).value)}>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassowrd" onChange={(e) => setPassword((e.target as HTMLInputElement).value)}>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                        <Button type="submit" id="signup-btn">
                        Create Account
                        </Button>       
                </Form>
                <div className="other-action">
                    <p>Already have an account? <Link to="/login">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
