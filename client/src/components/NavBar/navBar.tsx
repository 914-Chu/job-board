import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import findJob from "../../assests/icons8-job-seeker-50.png";
import newJob from "../../assests/icons8-new-job-50.png";
import mainLogo from "../../assests/ilogo.png";
import "./navBar.css";

const NavBar = () => {

    let navigate = useNavigate();

    const handleLogOut = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        sessionStorage.removeItem('Auth Token');
        navigate('/login')
    }

    return (
        <Navbar className="app-navbar color-nav" variant="dark" fixed="top">
            <Container>
                <Nav.Link as={Link} to="/main">
                    <Navbar.Brand className="brand">
                        <img
                            width="auto"
                            height="30"
                            className="d-inline-block align-top"
                            src={mainLogo}
                            alt="ilogo"
                        />
                        <div className="brand-text d-inline-block align-middle">
                            On-Campus Job Board
                        </div>
                    </Navbar.Brand>
                </Nav.Link>
                <Nav className="ml-auto navbar-links">
                <Nav.Link as={Link} className="navbar-link" to="/main">
                    <img
                    width="auto"
                    height="15"
                    className="d-inline-block align-top"
                    src={findJob}
                    alt="ilogo"
                    />
                    <div className="align-middle">Find A Job</div>
                </Nav.Link>
                <Nav.Link as={Link} className="navbar-link" to="/postJob">
                    <img
                    width="auto"
                    height="15"
                    className="d-inline-block align-top"
                    src={newJob}
                    alt="ilogo"
                    />
                    <div className="align-middle">Post A Job</div>
                </Nav.Link>
                
                <Nav.Link as={Link} className="navbar-link" to="/login">
                    <Button className="align-middle" onClick={handleLogOut}>
                        Log Out
                    </Button>
                </Nav.Link>
                    
                
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavBar;
