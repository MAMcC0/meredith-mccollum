import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

function Navbar(){
    return(
        <nav collapseOnSelect expand='lg' id='total-nav'>
            <Container>
                <Navbar.Brand href='#about'>
                    LogoHere
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#about">
                            About
                        </Nav.Link>
                        <Nav.Link href="#projects">
                            Projects
                        </Nav.Link>
                        <Nav.Link href="#resume">
                            Resume
                        </Nav.Link>
                        <Nav.Link href="#contact">
                            Contact
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </nav>
    );
}

export default Navbar;