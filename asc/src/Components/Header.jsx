import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

function Header(props) {
  return (
      <div>
    <Navbar style={{backgroundColor: 'grey'}} id="navbar">
      <Navbar.Brand href="/home" id="navbarBrand">
        After School Club
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
          
        <Nav className="mr-auto">
          <Link to="/home" className="nav-link">
            Home
          </Link>
          <Link to="/users" className="nav-link">
            Users
          </Link>
          <Link to="/posts" className="nav-link">
            Posts
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
   
    </div>
  );
}

export default Header;
