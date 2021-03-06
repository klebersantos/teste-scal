import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Collapse,
  NavLink,
} from "reactstrap";

import { Header, Logo } from "./styles";

const NavbarMenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Header>
        <div className="container">
          <div className="row">
            <div className="col-12 ">
              <Navbar
                light
                expand="md"
                className="d-flex justify-content-between"
              >
                <NavbarBrand href="/">
                  <Logo />
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                  <Nav className="mr-auto" navbar>
                    <NavItem>
                      <NavLink href="/politics/">POLITICS</NavLink>
                      {/* <Link className="nav-link" to="/politics">POLITICS</Link> */}
                    </NavItem>
                    <NavItem>
                      <NavLink href="/Business/">BUSINESS</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/Tech/">TECH</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/Science/">SCIENCE</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/Science/">SPORTS</NavLink>
                    </NavItem>

                    <NavItem>
                      <NavLink href="/userarea/" className="loginLink">
                        LOGIN
                      </NavLink>
                    </NavItem>
                  </Nav>
                </Collapse>
              </Navbar>
            </div>
          </div>
        </div>
      </Header>
    </div>
  );
};

export default NavbarMenu;
