import React from 'react';
import { Outlet, Link, NavLink} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';


const NavbarPage = () => {
    return (
        <div className='container'>
            <h1>Crud App with React</h1>
            <Navbar  expand="lg"  bg="primary" variant="dark">
              <Container>
                <Navbar.Brand href="#home">React-Crud App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/home">Home</Nav.Link>
                  <Nav.Link href="/about">About</Nav.Link>
                  <Nav.Link href="/contact">Contact</Nav.Link>
                  <Button href="/users/add">Add User</Button>
                </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
        </div>
    );
}

export default NavbarPage;