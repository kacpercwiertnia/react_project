import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

const NavbarComponent = () => {
    const navigate = useNavigate();

    return (
        <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand onClick={ () => {navigate("/")}}>Projekt React</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link onClick={ () => {navigate("/")}}>Strona Główna</Nav.Link>
                <Nav.Link onClick={ () => {navigate("/login")}}>Zaloguj się</Nav.Link>
                <Nav.Link onClick={ () => {navigate("/register")}}>Zarejestruj się</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
      );
};

export default NavbarComponent;