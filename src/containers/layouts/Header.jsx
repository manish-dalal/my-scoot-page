import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
  // NavbarText
} from "reactstrap";
import { withRouter } from "react-router-dom";
import getImage from "utils/images";

const Header = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="Header center">
      <Navbar color="none" dark expand="md" className="Header_navbar">
        <NavbarBrand href="#/home">
          <img src={getImage("logo")} height={44} alt="" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem active>
              <NavLink href="#/home" className="Header_navLink">
                Start hosting
              </NavLink>
            </NavItem>
            <NavItem active>
              <NavLink href="#/home" className="Header_navLink">
                About
              </NavLink>
            </NavItem>
            <NavItem active>
              <NavLink href="#/home" className="Header_navLink">
                Sign up
              </NavLink>
            </NavItem>
            <NavItem active>
              <NavLink href="#/home" className="Header_navLink">
                Log in
              </NavLink>
            </NavItem>
          </Nav>
          {/* <NavbarText>Simple Text</NavbarText> */}
        </Collapse>
      </Navbar>
    </div>
  );
};

const HeaderWithRouter = withRouter(props => <Header {...props} />);
export default HeaderWithRouter;
