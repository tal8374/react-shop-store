import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
// import { Link } from "react-router-dom";

export default class NavbarComponent extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            open: false
        };
    }

    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">Shop</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link href="#Cart">Cart</Nav.Link>
                        <Nav.Link href="#Register">Register</Nav.Link>
                        <Nav.Link href="#Login">Login</Nav.Link>
                        <Nav.Link href="#Profile">Profile</Nav.Link>
                        <Nav.Link href="#Logout">Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}