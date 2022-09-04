import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CurrentUserContext } from '../App';
import { NavLink } from 'react-router-dom';

function Navigation() {
  const currentUser = useContext(CurrentUserContext);
  const loggedInIcons = <>{currentUser?.username}</>;
  const loggedOutIcons = <>
    <NavLink to="/login">Login</NavLink>
    <NavLink to="/register">Register</NavLink>
  </>;
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">QA</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="/questions">Home</NavLink>
            <NavLink to="/profiles">Profiles</NavLink>
            {currentUser ? loggedInIcons : loggedOutIcons}
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default Navigation;