import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logOut, setUser } = useAuth();
    let history = useHistory();
    let redirect_uri = '/';
    /* REDIRECT TO HOME PAGE BY LOG OUT */
    const handleLogOut = () => {
        logOut()
            .then(() => {
                history.push(redirect_uri);
                setUser({});
            })
    }
    return (
        <div>
            <Navbar bg="light" className="fw-bold" expand="lg">
                <Container>
                    <Navbar.Brand className="fs-4 text-danger" as={NavLink} to="/">Peak & Go</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto d-flex align-items-center text-center">
                            <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
                            <Nav.Link as={NavLink} to="/allPlans">All Plans</Nav.Link>
                            {!user.email ?
                                <span>
                                    <Nav.Link as={NavLink} to="/signin">SignIn</Nav.Link>
                                </span>
                                :
                                <div className="d-lg-flex d-block">
                                    <Nav.Link as={NavLink} to="/addPlans">Add Plans</Nav.Link>
                                    <Nav.Link as={NavLink} to="/myPlans">My Plans</Nav.Link>
                                    <Nav.Link as={NavLink} to="/manageAllPlans">Manage All Plans</Nav.Link>
                                    <button className=" py-2 btn btn-dark" onClick={handleLogOut}>Log Out</button>
                                </div>
                            }
                            {/* User Name */}
                            <div className="mt-2 ms-3">{user.email && <div>
                                <img width="45" className="rounded-pill mx-auto d-block" src={user.photoURL} alt="" />
                                <span className="d-block">{user.displayName}</span>
                            </div>}</div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;