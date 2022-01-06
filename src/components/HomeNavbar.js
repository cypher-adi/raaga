import React, { useState } from "react";
import {
  Navbar,
  NavbarToggler,
  Collapse,
  Nav,
  NavLink,
  NavItem,
  Button,
} from "reactstrap";
import fb from "../assets/img/fb.webp";
import ig from "../assets/img/ig.webp";

const HomeNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Navbar color="dark" expand="md" dark>
        <NavbarToggler
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
        <div className="container">
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/raaga/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/raaga/about/">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/raaga/learn/">Learn</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/raaga/contact/">Contact Us</NavLink>
              </NavItem>
              <NavItem>
                <button className="login-btn text-white">Login</button>
              </NavItem>
            </Nav>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <div className="d-flex">
                  <NavLink href="http://www.facebook.com/#">
                    <img src={fb} alt="fb" />
                  </NavLink>
                  <NavLink href="http://www.instagram.com/#">
                    <img src={ig} alt="ig" />
                  </NavLink>
                </div>
              </NavItem>
              <NavItem></NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default HomeNavbar;
