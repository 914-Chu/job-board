import React from "react";
import { Navbar, Container, Nav } from 'react-bootstrap';
import findJob from '../../assests/icons8-job-seeker-50.png';
import newJob from '../../assests/icons8-new-job-50.png'
import mainLogo from '../../assests/ilogo.png';
import "./navBar.css";

const NavBar = () => {
  return (
    <Navbar className="color-nav" variant="dark">
        <Container>
            <Navbar.Brand className="brand" href="/main">
                <img width="auto"
                    height="30"
                    className="d-inline-block align-top"
                    src={mainLogo} 
                    alt="ilogo"/>
                <div className="brand-text d-inline-block align-middle" >
                    On-Campus Job Board
                </div>
            </Navbar.Brand>
            <Nav className="ml-auto navbar-links">
                <Nav.Link className="navbar-link" href="/main" >
                    <img width="auto"
                        height="15"
                        className="d-inline-block align-top"
                        src={findJob} 
                        alt="ilogo"/>
                    <div className="align-middle">
                        Find A Job
                    </div>
                </Nav.Link>
                <Nav.Link className="navbar-link" href="/postJob">
                    <img width="auto"
                        height="15"
                        className="d-inline-block align-top"
                        src={newJob} 
                        alt="ilogo"/>
                    <div className="align-middle">
                        Post A Job
                    </div>
                </Nav.Link>
            </Nav>
        </Container>
    </Navbar>
  );
}

export default NavBar;