import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useState } from "react";
function Navigation() {
  const [expanded, setExpanded] = useState(false);
  return (
    <Navbar className="navbar" expanded={expanded} expand="lg">
      <Container>
        <Navbar.Brand>
          <Nav.Link>
            <NavLink className="navbar-words" to="/">
              The Roofer's of MD
            </NavLink>
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle
          onClick={() => setExpanded(expanded ? false : "expanded")}
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => setExpanded(false)}>
              <NavLink className="navlink" to="/">
                Home
              </NavLink>
            </Nav.Link>
            <Nav.Link onClick={() => setExpanded(false)}>
              <NavLink className="navlink" to="/about">
                About
              </NavLink>
            </Nav.Link>
            <Nav.Link onClick={() => setExpanded(false)}>
              <NavLink className="navlink" to="/contact">
                Contact
              </NavLink>
            </Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
