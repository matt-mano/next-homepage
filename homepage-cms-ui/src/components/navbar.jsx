import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import React from 'react';

const CMSNavbar = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand as={Link} to={"/"}>Homepage CMS</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to={"/"}>Articles</Nav.Link>
                        <NavDropdown title="Professional" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to={"/Skills"}>
                                Experience
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={"/Skills"}>
                                Skills
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={"/Skills"}>
                                Projects
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CMSNavbar;