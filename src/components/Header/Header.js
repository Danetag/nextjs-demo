import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Link from "~/components/ActiveLink/ActiveLink";

const Header = () => {
  return (
    <header className="masthead">
      <div className="inner">
        <Navbar collapseOnSelect expand="md" variant="light">
          <Navbar.Brand href="/" className="logo">
            Company Logo
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Link activeClassName="active" href="/"><a className="nav-link ">Home</a></Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </header>
  );
}
export default Header;
