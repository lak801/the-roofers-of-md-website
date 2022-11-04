import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import Call from "./Call.jsx";
import { useState } from "react";
function Navigation() {
  const [expanded, setExpanded] = useState(false);
  return (
    <Navbar className="navbar top-and-bottom" expanded={expanded} expand="lg">
      <Container className="move-nav">
        <NavLink to="/">
          <Image
            id="logo"
            fluid="true"
            src="https://i.postimg.cc/qMkPJSnd/The-roofers-of-MD-379.jpg"
            alt="logo"
          ></Image>
        </NavLink>
        <Navbar.Brand>
          <Nav.Link>
            <NavLink className="navbar-words" to="/">
              The Roofer's of MD
            </NavLink>
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle
          id="toggle"
          onClick={() => setExpanded(expanded ? false : "expanded")}
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="navlink" onClick={() => setExpanded(false)}>
              <NavLink className="navlink" to="/">
                Home
              </NavLink>
            </Nav.Link>
            <Nav.Link className="navlink" onClick={() => setExpanded(false)}>
              <NavLink className="navlink" to="/about">
                About
              </NavLink>
            </Nav.Link>
            <Nav.Link className="navlink" onClick={() => setExpanded(false)}>
              <NavLink className="navlink" to="/contact">
                Contact
              </NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Container id="call">
        <Call />
      </Container>
    </Navbar>
  );
}

export default Navigation;
