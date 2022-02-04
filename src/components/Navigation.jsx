import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";

function Navigation() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <Nav.Link>
            <NavLink className="navbar-brand" to="/">
              The Roofer's of MD
            </NavLink>
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <NavLink className="navlink" to="/">
                Home
              </NavLink>
            </Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
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
    // <div className="navigation">
    //   <nav className="navbar navbar-expand navbar-dark bg-dark">
    //     <div className="container">
    //       <NavLink className="navbar-brand" to="/">
    //         React Multi-Page Website
    //       </NavLink>
    //       <div>
    //         <ul className="navbar-nav ml-auto">
    //           <li className="nav-item">
    //             <NavLink className="nav-link" to="/">
    //               Home
    //               <span className="sr-only">(current)</span>
    //             </NavLink>
    //           </li>
    //           <li className="nav-item">
    //             <NavLink className="nav-link" to="/about">
    //               About
    //             </NavLink>
    //           </li>
    //           <li className="nav-item">
    //             <NavLink className="nav-link" to="/contact">
    //               Contact
    //             </NavLink>
    //           </li>
    //           <li className="nav-item">
    //             <NavLink className="nav-link" to="/blog">
    //               Blog
    //             </NavLink>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </nav>
    // </div>
  );
}

export default Navigation;
