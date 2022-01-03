import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';
import './Header.css';

const Header = () => {
    const { users, logOut} = useFirebase();
    return (
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Redux Event
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/services">
                Services
              </Nav.Link>
            </Nav>
            {users?.email && <Nav>
              <Nav.Link as={Link} to="/dashboard">
                Dashboard
              </Nav.Link>
            </Nav>}
            {!users?.email ? (
              <Nav>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              </Nav>
            ) : (
              <Nav>
                <Nav.Link onClick={logOut}>
                  Logout <i className="fas fa-sign-out-alt"></i>
                </Nav.Link>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;